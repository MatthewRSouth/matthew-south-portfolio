"use client";

import { useLang } from "../i18n/LanguageContext";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

// Org names are proper nouns, kept identical across languages.
const orgs = ["Hoshida Dispatch", "Hoshida International"];

export default function Path() {
  const { content } = useLang();
  const { path, labels } = content;

  return (
    <section
      id="path"
      className="scroll-mt-24 pb-[clamp(56px,9vw,88px)] pt-[clamp(28px,4vw,44px)]"
    >
      <SectionLabel number="03" label={labels.path} />

      <div className="mt-[clamp(24px,4vw,40px)] flex flex-col gap-[16px]">
        {path.entries.map((e, i) => (
          <Reveal
            key={i}
            className="grid grid-cols-[repeat(auto-fit,minmax(min(220px,100%),1fr))] items-start gap-x-[32px] gap-y-[8px] rounded-[22px] border border-line bg-surface px-[clamp(22px,3vw,32px)] py-[24px]"
          >
            {/* Left cell */}
            <div>
              <div className="inline-flex items-center gap-[9px] text-[13px] font-semibold text-accent-strong">
                <span
                  className="h-[9px] w-[9px] rounded-full bg-accent"
                  aria-hidden="true"
                />
                {e.date}
              </div>
              <h3 className="mb-[2px] mt-[10px] font-display text-[clamp(1.15rem,2.4vw,1.45rem)] font-bold text-ink">
                {e.role}
              </h3>
              <p className="text-[14px] font-medium text-ink2">{orgs[i]}</p>
            </div>

            {/* Right cell */}
            <p className="text-[0.98rem] leading-[1.68] text-ink2">
              {e.summary}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
