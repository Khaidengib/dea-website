"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, AlertCircle } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

export default function JoinForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/join", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-md border border-emerald-200 bg-emerald-50 px-6 py-14 text-center">
        <CheckCircle2 className="text-emerald-600" size={32} />
        <p className="font-display text-lg font-semibold text-navy-950">Application received.</p>
        <p className="max-w-sm text-sm text-navy-700/80">
          Thanks for applying to DEA — a member of our leadership team will follow up by email.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" name="name" required autoComplete="name" />
        <Field label="Email" name="email" type="email" required autoComplete="email" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="School" name="school" required />
        <Field label="Graduation Year" name="gradYear" required />
      </div>
      <div>
        <label htmlFor="interest" className="mb-1.5 block text-sm font-medium text-navy-900">
          Primary Area of Interest
        </label>
        <select
          id="interest"
          name="interest"
          required
          className="w-full rounded-sm border border-silver-400/70 bg-white px-3.5 py-2.5 text-sm text-navy-950 focus:border-navy-700"
        >
          {["Economics", "Entrepreneurship", "Leadership", "Innovation", "Financial Literacy", "Community"].map(
            (i) => (
              <option key={i} value={i}>
                {i}
              </option>
            )
          )}
        </select>
      </div>
      <div>
        <label htmlFor="why" className="mb-1.5 block text-sm font-medium text-navy-900">
          Why do you want to join DEA?
        </label>
        <textarea
          id="why"
          name="why"
          required
          rows={5}
          className="w-full rounded-sm border border-silver-400/70 bg-white px-3.5 py-2.5 text-sm text-navy-950 focus:border-navy-700"
        />
      </div>

      {status === "error" && (
        <p className="flex items-center gap-2 text-sm text-red-600">
          <AlertCircle size={16} /> Something went wrong. Please try again or email us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-sm bg-navy-950 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-navy-800 disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Submitting…" : "Submit Application"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-navy-900">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="w-full rounded-sm border border-silver-400/70 bg-white px-3.5 py-2.5 text-sm text-navy-950 focus:border-navy-700"
      />
    </div>
  );
}
