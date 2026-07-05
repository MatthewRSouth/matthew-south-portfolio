"use client";

import { useLang } from "../i18n/LanguageContext";

export default function LangToggle() {
  const { content, toggle } = useLang();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={content.toggle.aria}
      className="inline-flex items-center gap-[6px] rounded-full border-[1.5px] border-line-strong px-[14px] py-[8px] text-[13.5px] font-semibold text-ink2 transition-colors duration-200 hover:border-accent-line hover:text-accent-strong"
    >
      <span aria-hidden="true">🌐</span>
      {content.toggle.label}
    </button>
  );
}
