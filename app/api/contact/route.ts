import nodemailer, { Transporter } from "nodemailer";
import { NextResponse } from "next/server";
import { generateContactUsEmailTemplate } from "./contact-us-email-template";

type ContactFormPayload = {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
};

export async function POST(req: Request) {
  try {
    const body: ContactFormPayload = await req.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    console.log('hots', process.env.SMTP_HOST)

    const transporter: Transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER as string,
        pass: process.env.SMTP_PASS as string,
      },
    });

    const htmlTemplate = generateContactUsEmailTemplate({
      name,
      email,
      phone,
      subject,
      message,
    });

    await transporter.sendMail({
      from: `"Standard Insurance Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER as string,
      replyTo: email,
      subject: `[Contact] ${subject}`,
      html: htmlTemplate,
    });

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    console.error("Email error:", error);

    return NextResponse.json(
      { error: "Email failed to send" },
      { status: 500 }
    );
  }
}

export async function GET(req: Request){
   return NextResponse.json({ success: true, message: "working" });
}