"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { useBriefingModal } from "@/components/briefing/briefing-modal-context";
import {
  DEFAULT_BRIEFING_MESSAGE,
  submitBriefingRequest,
  validateBriefingForm,
  type BriefingFormData,
  type BriefingFormErrors,
} from "@/lib/submit-briefing-request";
import { cn } from "@/lib/utils";

const initialFormData: BriefingFormData = {
  fullName: "",
  company: "",
  workEmail: "",
  jobTitle: "",
  message: DEFAULT_BRIEFING_MESSAGE,
};

export function BriefingModal() {
  const { isOpen, closeBriefingModal } = useBriefingModal();
  const titleId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState<BriefingFormData>(initialFormData);
  const [errors, setErrors] = useState<BriefingFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.focus();
    }
  }, [isOpen, isSuccess]);

  const handleClose = useCallback(() => {
    closeBriefingModal();
    window.setTimeout(() => {
      setFormData(initialFormData);
      setErrors({});
      setIsSubmitting(false);
      setIsSuccess(false);
    }, 200);
  }, [closeBriefingModal]);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, handleClose]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const validationErrors = validateBriefingForm(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setIsSubmitting(true);
    try {
      await submitBriefingRequest(formData);
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateField = (field: keyof BriefingFormData, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4">
      <button
        type="button"
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        aria-label="Close dialog"
        onClick={handleClose}
      />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        className="relative z-[101] flex max-h-[calc(100dvh-1.5rem)] w-full max-w-lg flex-col overflow-hidden rounded-sm border border-border bg-background-elevated shadow-2xl outline-none"
      >
        {isSuccess ? (
          <div className="px-5 py-6 sm:px-6">
            <h2
              id={titleId}
              className="font-display text-2xl text-foreground"
            >
              Thank you.
            </h2>
            <p className="mt-3 text-body-sm text-foreground-muted">
              Your request has been received.
              <br />
              We&apos;ll get back to you shortly.
            </p>
            <div className="mt-6">
              <button
                type="button"
                onClick={handleClose}
                className="inline-flex items-center justify-center rounded-sm bg-foreground px-6 py-3 text-body-sm font-semibold text-background transition-opacity hover:opacity-90"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="shrink-0 border-b border-border-subtle px-6 py-4 sm:px-8">
              <h2
                id={titleId}
                className="font-display text-2xl text-foreground"
              >
                Request a Technical Briefing
              </h2>
              <p className="mt-2 text-body-sm leading-relaxed text-foreground-muted">
                Tell us a little about your environment or what you&apos;d like
                to discuss. We&apos;ll get back to you shortly to arrange a
                technical session.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex min-h-0 flex-1 flex-col"
            >
              <div className="space-y-3 overflow-y-auto px-6 py-4 sm:px-8">
                <div className="grid gap-3 sm:grid-cols-2">
                  <FormField
                    id="briefing-full-name"
                    label="Full Name"
                    required
                    value={formData.fullName}
                    error={errors.fullName}
                    onChange={(value) => updateField("fullName", value)}
                  />
                  <FormField
                    id="briefing-company"
                    label="Company"
                    required
                    value={formData.company}
                    error={errors.company}
                    onChange={(value) => updateField("company", value)}
                  />
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <FormField
                    id="briefing-work-email"
                    label="Work Email"
                    type="email"
                    required
                    value={formData.workEmail}
                    error={errors.workEmail}
                    onChange={(value) => updateField("workEmail", value)}
                  />
                  <FormField
                    id="briefing-job-title"
                    label="Job Title"
                    value={formData.jobTitle}
                    onChange={(value) => updateField("jobTitle", value)}
                  />
                </div>
                <FormTextarea
                  id="briefing-message"
                  label="How can we help?"
                  required
                  value={formData.message}
                  error={errors.message}
                  placeholder="Tell us about your environment, current challenges, or what you'd like to discuss."
                  onChange={(value) => updateField("message", value)}
                />
              </div>

              <div className="flex shrink-0 flex-col-reverse gap-3 border-t border-border-subtle px-6 py-4 sm:flex-row sm:justify-end sm:px-8">
                <button
                  type="button"
                  onClick={handleClose}
                  className="inline-flex items-center justify-center rounded-sm border border-border bg-background-subtle px-6 py-3 text-body-sm font-medium text-foreground transition-colors hover:border-foreground-subtle hover:bg-background-elevated"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center rounded-sm bg-foreground px-6 py-3 text-body-sm font-semibold text-background transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? "Submitting..." : "Request Technical Briefing"}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

function FormField({
  id,
  label,
  value,
  onChange,
  error,
  required = false,
  type = "text",
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  type?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-body-sm font-medium text-foreground">
        {label}
        {required ? " *" : " (optional)"}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={cn(
          "mt-1.5 w-full rounded-sm border bg-background px-3 py-2 text-body-sm text-foreground outline-none transition-colors placeholder:text-foreground-subtle focus:border-accent",
          error ? "border-red-500/70" : "border-border",
        )}
      />
      {error && <p className="mt-1.5 text-body-sm text-red-400">{error}</p>}
    </div>
  );
}

function FormTextarea({
  id,
  label,
  value,
  onChange,
  error,
  placeholder,
  required = false,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-body-sm font-medium text-foreground">
        {label}
        {required ? " *" : ""}
      </label>
      <textarea
        id={id}
        rows={2}
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        className={cn(
          "mt-1.5 w-full resize-y rounded-sm border bg-background px-3 py-2 text-body-sm text-foreground outline-none transition-colors placeholder:text-foreground-subtle focus:border-accent",
          error ? "border-red-500/70" : "border-border",
        )}
      />
      {error && <p className="mt-1.5 text-body-sm text-red-400">{error}</p>}
    </div>
  );
}
