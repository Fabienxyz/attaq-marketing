export const BRIEFING_RECIPIENT = "fabien@attaq.ai";

export const SUBMIT_ERROR_MESSAGE =
  "We couldn't send your request at the moment. Please try again in a few minutes or contact us directly at fabien@attaq.ai.";

export type BriefingFormData = {
  fullName: string;
  company: string;
  workEmail: string;
  jobTitle: string;
  message: string;
};

export type BriefingFormErrors = Partial<Record<keyof BriefingFormData, string>>;

export const DEFAULT_BRIEFING_MESSAGE =
  "I'm interested in learning more about Attaq.ai and would like to schedule a technical briefing.";

export function validateBriefingForm(
  data: BriefingFormData,
): BriefingFormErrors {
  const errors: BriefingFormErrors = {};

  if (!data.fullName.trim()) {
    errors.fullName = "Full name is required.";
  }

  if (!data.company.trim()) {
    errors.company = "Company is required.";
  }

  if (!data.workEmail.trim()) {
    errors.workEmail = "Work email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.workEmail.trim())) {
    errors.workEmail = "Please enter a valid email address.";
  }

  if (!data.message.trim()) {
    errors.message = "Please tell us how we can help.";
  }

  return errors;
}

export async function submitBriefingRequest(
  data: BriefingFormData,
): Promise<{ success: true }> {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(SUBMIT_ERROR_MESSAGE);
  }

  return { success: true };
}
