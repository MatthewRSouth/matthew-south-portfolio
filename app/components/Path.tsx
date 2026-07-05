import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

const entries = [
  {
    date: "Apr 2026 — Present",
    role: "Technical Lead & Developer",
    org: "Hoshida Dispatch",
    summary:
      "Leading the build of the school's secure parent-application platform end to end — architecture, React frontend, and Google Services integration.",
  },
  {
    date: "Feb 2025 — Present",
    role: "Developer",
    org: "Hoshida International",
    summary:
      "Building internal web tools that help the school run — from enrollment to student-progress tracking — with React, TypeScript, Tailwind and Supabase.",
  },
];

export default function Path() {
  return (
    <section
      id="path"
      className="scroll-mt-24 pb-[clamp(56px,9vw,88px)] pt-[clamp(28px,4vw,44px)]"
    >
      <SectionLabel number="03" label="Path" />

      <div className="mt-[clamp(24px,4vw,40px)] flex flex-col gap-[16px]">
        {entries.map((e) => (
          <Reveal
            key={e.role}
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
              <p className="text-[14px] font-medium text-ink2">{e.org}</p>
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
