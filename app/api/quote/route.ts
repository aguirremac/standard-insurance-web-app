import nodemailer, { Transporter } from "nodemailer";
import { NextResponse } from "next/server";
import { generateQuoteEmailTemplate } from "./quote-email-template";
import { rateLimit } from "@/lib/rate-limit";

type QuoteFormPayload = {
  service?: string;
  insuranceType?: string;
  businessName?: string;
  fullName: string;
  email: string;
  phone?: string;
  address?: string;
  startDate?: string;
  additionalInfo?: string;
  company?: string
  _timestamp?: string;
};

export async function POST(req: Request) {
  try {
    const body: QuoteFormPayload = await req.json();
    const { fullName, email, phone, service, insuranceType, businessName, address, startDate, additionalInfo } = body;

    if (!fullName || !email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

        const ip =
        req.headers.get('x-forwarded-for')?.split(',')[0] ??
        'unknown'
    
        const { success } = rateLimit(ip)
    
        if (!success) {
          return NextResponse.json(
            { error: 'Too many requests' },
            { status: 429 }
          )
        }
    

    if (body.company) {
    return Response.json({ success: true }); // silently drop
  }

   const now = Date.now();
    if (!body._timestamp || now - Number(body._timestamp) < 2000) {
      return Response.json({ success: true });
    }

    const transporter: Transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER as string,
        pass: process.env.SMTP_PASS as string,
      },
    });

    const htmlTemplate = generateQuoteEmailTemplate({
      fullName,
      email,
      phone,
      service,
      insuranceType,
      businessName,
      address,
      startDate,
      additionalInfo,
    });
    
    const formattedService = () => {
      const text = service?.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
      return text || "General Inquiry";
    }

    await transporter.sendMail({
      from: `"Standard Insurance Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER as string,
      replyTo: email,
      subject: `[${formattedService()}] New Quote Request from ${fullName}`,
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