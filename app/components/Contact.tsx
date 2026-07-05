import ContactForm from "./ContactForm";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

const socials = [
  {
    label: "GITHUB",
    handle: "@MatthewRSouth",
    href: "https://github.com/MatthewRSouth",
  },
  {
    label: "LINKEDIN",
    handle: "in/mrsalt",
    href: "https://www.linkedin.com/in/mrsalt/",
  },
  {
    label: "EMAIL",
    handle: "matthewsouthjobs@gmail.com",
    href: "mailto:matthewsouthjobs@gmail.com",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 pb-[clamp(64px,10vw,96px)] pt-[clamp(32px,5vw,52px)]"
    >
      <SectionLabel number="04" label="Contact" />

      <div className="mt-[clamp(24px,4vw,40px)] grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] items-start gap-[clamp(32px,5vw,64px)]">
        {/* Left column */}
        <Reveal>
          <h2 className="font-display text-[clamp(2.2rem,5vw,3.4rem)] font-bold leading-[1.02] tracking-[-0.03em] text-ink">
            Let&apos;s build something <span className="text-accent">good.</span>
          </h2>

          <p className="mb-[30px] mt-[22px] max-w-[42ch] text-[1.08rem] leading-[1.65] text-ink2">
            Open to junior frontend roles and freelance builds. Drop a line — I
            reply fast.
          </p>

          <div className="flex flex-col gap-[12px]">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener"
                className="flex items-center justify-between gap-[14px] rounded-[16px] border border-line bg-surface px-[20px] py-[16px] transition-[transform,border-color] duration-200 hover:translate-x-[4px] hover:border-accent-line"
              >
                <span className="flex items-center gap-[14px]">
                  <span className="w-[70px] text-[12.5px] font-semibold uppercase tracking-[0.06em] text-accent-strong">
                    {s.label}
                  </span>
                  <span className="text-[14.5px] text-ink2">{s.handle}</span>
                </span>
                <span className="text-faint" aria-hidden="true">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </Reveal>

        {/* Right column — form */}
        <Reveal>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
