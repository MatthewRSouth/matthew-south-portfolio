"use client";

import { useLang } from "../i18n/LanguageContext";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

// Language-independent skill data; tier names come from translations by index.
const skillData = [
  { on: 3, skills: ["HTML", "CSS", "JavaScript"] },
  { on: 2, skills: ["React", "Tailwind", "Supabase"] },
  { on: 1, skills: ["TypeScript", "Next.js"] },
];

function Dots({ on }: { on: number }) {
  return (
    <span className="flex items-center gap-[5px]" aria-hidden="true">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className={`h-2 w-2 rounded-full ${i < on ? "bg-accent" : "bg-line"}`}
        />
      ))}
    </span>
  );
}

export default function About() {
  const { content } = useLang();
  const { about, labels } = content;

  return (
    <section
      id="about"
      className="scroll-mt-24 pb-[clamp(56px,9vw,88px)] pt-[clamp(32px,5vw,52px)]"
    >
      <SectionLabel number="01" label={labels.about} />

      <div className="mt-[clamp(24px,4vw,40px)] grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] items-start gap-[clamp(32px,5vw,64px)]">
        {/* Left column */}
        <Reveal>
          <h2 className="font-display text-[clamp(1.9rem,4vw,2.8rem)] font-bold leading-[1.08] tracking-[-0.025em] text-ink">
            {about.h2Before}
            <span className="text-accent">{about.h2Accent}</span>
            {about.h2After}
          </h2>

          <p className="mt-[22px] mb-[16px] max-w-[56ch] text-[1.05rem] leading-[1.72] text-ink2">
            {about.bio1}
          </p>
          <p className="mb-[16px] max-w-[56ch] text-[1.05rem] leading-[1.72] text-ink2">
            {about.bio2}
          </p>

          <div className="mt-[28px] flex flex-wrap gap-[14px]">
            {about.values.map((v) => (
              <div
                key={v.title}
                className="min-w-[150px] flex-1 rounded-[18px] border border-line bg-surface px-[18px] py-[16px]"
              >
                <p className="font-display text-[15px] font-bold lowercase text-accent-strong">
                  {v.title}
                </p>
                <p className="mt-[5px] text-[13px] leading-[1.5] text-ink2">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Right column — skills */}
        <Reveal className="flex flex-col gap-[16px]">
          {skillData.map((tier, i) => (
            <div
              key={i}
              className="rounded-[22px] border border-line bg-surface px-[22px] pb-[24px] pt-[22px] shadow-[var(--shadow-card)]"
            >
              <div className="mb-[16px] flex items-center justify-between">
                <span className="font-display text-[16px] font-bold text-ink">
                  {about.tiers[i]}
                </span>
                <Dots on={tier.on} />
              </div>
              <div className="flex flex-wrap gap-[9px]">
                {tier.skills.map((skill) => (
                  <span
                    key={skill}
                    className="cursor-default rounded-full bg-raise px-[14px] py-[7px] text-[13.5px] font-medium text-ink transition-colors duration-200 hover:bg-accent hover:text-on-accent"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
