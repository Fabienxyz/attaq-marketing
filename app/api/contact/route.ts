import { NextResponse } from "next/server";
import { Resend } from "resend";
import { buildBriefingEmail } from "@/lib/briefing-email";
import {
  BRIEFING_RECIPIENT,
  validateBriefingForm,
  type BriefingFormData,
} from "@/lib/submit-briefing-request";

const FROM_EMAIL = "Attaq.ai <fabien@attaq.ai>";
const EMAIL_SUBJECT = "New Technical Briefing Request";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const data = body as BriefingFormData;
  const validationErrors = validateBriefingForm(data);

  if (Object.keys(validationErrors).length > 0) {
    return NextResponse.json(
      { error: "Validation failed.", details: validationErrors },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured.");
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 },
    );
  }

  const submittedAtUtc = new Date().toISOString();
  const { html, text } = buildBriefingEmail(data, submittedAtUtc);
  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: BRIEFING_RECIPIENT,
      subject: EMAIL_SUBJECT,
      html,
      text,
      replyTo: data.workEmail.trim(),
    });

    if (error) {
      console.error("Resend email send failed:", error);
      return NextResponse.json(
        { error: "Email delivery failed." },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact route unexpected error:", error);
    return NextResponse.json(
      { error: "Email delivery failed." },
      { status: 500 },
    );
  }
}
