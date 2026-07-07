import type { BriefingFormData } from "@/lib/submit-briefing-request";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function buildBriefingEmail(
  data: BriefingFormData,
  submittedAtUtc: string,
) {
  const jobTitle = data.jobTitle.trim() || "—";
  const submissionDate = new Date(submittedAtUtc).toUTCString();

  const text = `New Technical Briefing Request

Name: ${data.fullName.trim()}
Company: ${data.company.trim()}
Work Email: ${data.workEmail.trim()}
Job Title: ${jobTitle}
Message:
${data.message.trim()}

Submission Date (UTC): ${submissionDate}`;

  const html = `<!DOCTYPE html>
<html lang="en">
  <body style="margin:0;padding:24px;background:#f5f7fa;color:#111827;font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #e5e7eb;">
      <tr>
        <td style="padding:24px 28px;border-bottom:1px solid #e5e7eb;">
          <h1 style="margin:0;font-size:24px;line-height:1.3;color:#111827;">New Technical Briefing Request</h1>
        </td>
      </tr>
      <tr>
        <td style="padding:24px 28px;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="font-size:15px;line-height:1.6;">
            <tr>
              <td style="padding:8px 0;font-weight:600;width:140px;vertical-align:top;">Name</td>
              <td style="padding:8px 0;">${escapeHtml(data.fullName.trim())}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;font-weight:600;vertical-align:top;">Company</td>
              <td style="padding:8px 0;">${escapeHtml(data.company.trim())}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;font-weight:600;vertical-align:top;">Work Email</td>
              <td style="padding:8px 0;">${escapeHtml(data.workEmail.trim())}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;font-weight:600;vertical-align:top;">Job Title</td>
              <td style="padding:8px 0;">${escapeHtml(jobTitle)}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;font-weight:600;vertical-align:top;">Message</td>
              <td style="padding:8px 0;white-space:pre-wrap;">${escapeHtml(data.message.trim())}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;font-weight:600;vertical-align:top;">Submission Date (UTC)</td>
              <td style="padding:8px 0;">${escapeHtml(submissionDate)}</td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

  return { html, text };
}
