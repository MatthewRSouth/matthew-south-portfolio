"use client";

import { useState } from "react";

const fields = [
  {
    name: "name",
    label: "Name",
    type: "text",
    placeholder: "Your name",
    autoComplete: "name",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "you@company.com",
    autoComplete: "email",
  },
] as const;

const inputClass =
  "w-full rounded-[14px] border border-line bg-bg px-[16px] py-[13px] text-[15px] text-ink outline-none transition-colors focus:border-accent placeholder:text-faint";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Visual-only for now — wire this up to a real send (Formspree, an API
    // route, or a mailto fallback) when a backend is added.
    setSent(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-[16px] rounded-[28px] border border-line bg-surface p-[clamp(24px,3vw,34px)] shadow-[var(--shadow-form)]"
    >
      {fields.map((field) => (
        <div key={field.name} className="flex flex-col gap-[7px]">
          <label
            htmlFor={field.name}
            className="text-[13px] font-semibold text-ink2"
          >
            {field.label}
          </label>
          <input
            id={field.name}
            name={field.name}
            type={field.type}
            required
            autoComplete={field.autoComplete}
            placeholder={field.placeholder}
            className={inputClass}
          />
        </div>
      ))}

      <div className="flex flex-col gap-[7px]">
        <label htmlFor="message" className="text-[13px] font-semibold text-ink2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="What are you building?"
          className={`${inputClass} resize-y`}
        />
      </div>

      <button
        type="submit"
        className="rounded-full bg-accent px-[15px] py-[15px] text-[15px] font-semibold text-on-accent shadow-[var(--shadow-btn)] transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-[2px] hover:shadow-[var(--shadow-btn-hover)]"
      >
        {sent ? "Message ready ✓" : "Send message →"}
      </button>

      {sent && (
        <p className="text-center text-[13px] font-medium text-success">
          ✓ Ready to send — hook this up to your inbox when you add a backend.
        </p>
      )}
    </form>
  );
}
