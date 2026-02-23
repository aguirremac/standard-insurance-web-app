type ContactEmailTemplateProps = {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
};

export function generateContactUsEmailTemplate({
  name,
  email,
  phone,
  subject,
  message,
}: ContactEmailTemplateProps): string {
  return `
    <div style="font-family:Arial,sans-serif;background:#f4f6f8;padding:24px">
      <div style="max-width:600px;margin:auto;background:#ffffff;border-radius:12px;padding:24px;border:1px solid #e5e7eb">
        
        <!-- Logo -->
        <div style="text-align:center;margin-bottom:24px">
          <img src="/brandlogo-light.png" alt="Standard Insurance" width="160" />
        </div>

        <h2 style="margin-bottom:16px;color:#111827">New Inquiry</h2>

        <table style="width:100%;border-collapse:collapse;font-size:14px">
          <tr>
            <td style="padding:8px 0;color:#6b7280">Name</td>
            <td style="padding:8px 0;font-weight:600;color:#111827">${name}</td>
          </tr>
          <tr>
            <td style="padding:8px 0;color:#6b7280">Email</td>
            <td style="padding:8px 0;font-weight:600;color:#111827">${email}</td>
          </tr>
          ${
            phone
              ? `
          <tr>
            <td style="padding:8px 0;color:#6b7280">Phone</td>
            <td style="padding:8px 0;font-weight:600;color:#111827">${phone}</td>
          </tr>`
              : ""
          }
          <tr>
            <td style="padding:8px 0;color:#6b7280">Subject</td>
            <td style="padding:8px 0;font-weight:600;color:#111827">${subject}</td>
          </tr>
        </table>

        <div style="margin-top:20px">
          <p style="color:#6b7280;font-size:13px;margin-bottom:6px">Message</p>
          <div style="background:#f9fafb;border-radius:8px;padding:16px;color:#111827;font-size:14px;line-height:1.6">
            ${message}
          </div>
        </div>

        <hr style="margin:24px 0;border:none;border-top:1px solid #e5e7eb" />

        <p style="font-size:12px;color:#9ca3af;text-align:center">
          Sent from Standard Insurance website contact form
        </p>
      </div>
    </div>
  `;
}