import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

const values = [
  { title: "ship it", desc: "Real products over pixel-perfect demos" },
  { title: "clarity", desc: "Simple UI beats clever UI" },
  { title: "keep learning", desc: "Always leveling up the stack" },
];

const skillTiers = [
  { tier: "Expert", on: 3, skills: ["HTML", "CSS", "JavaScript"] },
  { tier: "Comfortable", on: 2, skills: ["React", "Tailwind", "Supabase"] },
  { tier: "Learning", on: 1, skills: ["TypeScript", "Next.js"] },
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
  return (
    <section
      id="about"
      className="scroll-mt-24 pb-[clamp(56px,9vw,88px)] pt-[clamp(32px,5vw,52px)]"
    >
      <SectionLabel number="01" label="About" />

      <div className="mt-[clamp(24px,4vw,40px)] grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] items-start gap-[clamp(32px,5vw,64px)]">
        {/* Left column */}
        <Reveal>
          <h2 className="font-display text-[clamp(1.9rem,4vw,2.8rem)] font-bold leading-[1.08] tracking-[-0.025em] text-ink">
            A developer who <span className="text-accent">ships</span> real
            products.
          </h2>

          <p className="mt-[22px] mb-[16px] max-w-[56ch] text-[1.05rem] leading-[1.72] text-ink2">
            I started by solving problems in front of me at work — an
            international school that needed better software — and turned that
            into a craft I care about deeply.
          </p>
          <p className="mb-[16px] max-w-[56ch] text-[1.05rem] leading-[1.72] text-ink2">
            I like interfaces that are quick, obvious, and genuinely useful.
            Give me a real problem and I&apos;ll ship a clean, well-built
            solution for it.
          </p>

          <div className="mt-[28px] flex flex-wrap gap-[14px]">
            {values.map((v) => (
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
          {skillTiers.map((tier) => (
            <div
              key={tier.tier}
              className="rounded-[22px] border border-line bg-surface px-[22px] pb-[24px] pt-[22px] shadow-[var(--shadow-card)]"
            >
              <div className="mb-[16px] flex items-center justify-between">
                <span className="font-display text-[16px] font-bold text-ink">
                  {tier.tier}
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
