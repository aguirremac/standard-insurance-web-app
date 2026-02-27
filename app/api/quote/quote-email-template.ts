type QuoteEmailTemplateProps = {
  service?: string;
  insuranceType?: string;
  businessName?: string;
  fullName: string;
  email: string;
  phone?: string;
  address?: string;
  startDate?: string;
  additionalInfo?: string;  
};

export function generateQuoteEmailTemplate({
  service,
  insuranceType,
  businessName,
  fullName,
  email,
  phone,
  address,
  startDate,
  additionalInfo,
}: QuoteEmailTemplateProps): string {
  return `
    <div style="font-family:Arial,sans-serif;background:#f4f6f8;padding:24px">
      <div style="max-width:600px;margin:auto;background:#ffffff;border-radius:12px;padding:24px;border:1px solid #e5e7eb">
        
        <!-- Logo -->
        <div style="text-align:center;margin-bottom:24px">
          <img src="https://www.standardinsurance.com.au/brandlogo-light.png" alt="Standard Insurance" width="160" />
        </div>

        <h2 style="margin-bottom:16px;color:#111827">New Inquiry</h2>

        <table style="width:100%;border-collapse:collapse;font-size:14px">
          <tr>
            <td style="padding:8px 0;color:#6b7280">Name</td>
            <td style="padding:8px 0;font-weight:600;color:#111827">${fullName}</td>
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
            <td style="padding:8px 0;color:#6b7280">Service</td>
            <td style="padding:8px 0;font-weight:600;color:#111827">${service}</td>
          </tr>
          <tr>
            <td style="padding:8px 0;color:#6b7280">Insurance Type</td>
            <td style="padding:8px 0;font-weight:600;color:#111827">${insuranceType}</td>
          </tr>
          <tr>
            <td style="padding:8px 0;color:#6b7280">Business Name</td>
            <td style="padding:8px 0;font-weight:600;color:#111827">${businessName}</td>
          </tr>
          <tr>
            <td style="padding:8px 0;color:#6b7280">Address</td>
            <td style="padding:8px 0;font-weight:600;color:#111827">${address}</td>
          </tr>
          <tr>
            <td style="padding:8px 0;color:#6b7280">Start Date</td>
            <td style="padding:8px 0;font-weight:600;color:#111827">${startDate}</td>
          </tr>
          <tr>
            <td style="padding:8px 0;color:#6b7280">Additional Info</td>
            <td style="padding:8px 0;font-weight:600;color:#111827">${additionalInfo}</td>
          </tr>
        </table>


        <hr style="margin:24px 0;border:none;border-top:1px solid #e5e7eb" />

        <p style="font-size:12px;color:#9ca3af;text-align:center">
          Sent from Standard Insurance website quote form
        </p>
      </div>
    </div>
  `;
}