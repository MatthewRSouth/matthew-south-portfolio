"use client";

import { useState } from "react";
import { useLang } from "../i18n/LanguageContext";

const inputClass =
  "w-full rounded-[14px] border border-line bg-bg px-[16px] py-[13px] text-[15px] text-ink outline-none transition-colors focus:border-accent placeholder:text-faint";

export default function ContactForm() {
  const { content } = useLang();
  const t = content.contact.form;
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
      <div className="flex flex-col gap-[7px]">
        <label htmlFor="name" className="text-[13px] font-semibold text-ink2">
          {t.name}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder={t.namePh}
          className={inputClass}
        />
      </div>

      <div className="flex flex-col gap-[7px]">
        <label htmlFor="email" className="text-[13px] font-semibold text-ink2">
          {t.email}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder={t.emailPh}
          className={inputClass}
        />
      </div>

      <div className="flex flex-col gap-[7px]">
        <label htmlFor="message" className="text-[13px] font-semibold text-ink2">
          {t.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder={t.messagePh}
          className={`${inputClass} resize-y`}
        />
      </div>

      <button
        type="submit"
        className="rounded-full bg-accent px-[15px] py-[15px] text-[15px] font-semibold text-on-accent shadow-[var(--shadow-btn)] transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-[2px] hover:shadow-[var(--shadow-btn-hover)]"
      >
        {sent ? t.sent : t.send}
      </button>

      {sent && (
        <p className="text-center text-[13px] font-medium text-success">
          {t.confirm}
        </p>
      )}
    </form>
  );
}
