"use client";

import { useLang } from "../i18n/LanguageContext";
import Reveal from "./Reveal";
import StatusCard from "./StatusCard";

export default function Hero() {
  const { content } = useLang();
  const { hero } = content;

  return (
    <section className="grid grid-cols-[repeat(auto-fit,minmax(min(330px,100%),1fr))] items-center gap-[clamp(36px,6vw,72px)] pb-[clamp(56px,9vw,104px)] pt-[clamp(60px,11vw,120px)]">
      {/* Left column */}
      <div>
        {/* Eyebrow chip */}
        <div className="mb-[28px] inline-flex items-center gap-[9px] rounded-full bg-accent-soft px-[15px] py-[8px] text-[13.5px] font-medium text-accent-strong">
          <span
            className="h-[7px] w-[7px] rounded-full bg-accent"
            aria-hidden="true"
          />
          {hero.eyebrow}
        </div>

        <h1 className="font-display text-[clamp(2.7rem,7vw,5rem)] font-bold leading-[1.02] tracking-[-0.035em] text-ink">
          {hero.h1Before}
          <span className="text-accent">{hero.h1Accent}</span>
          {hero.h1After}
        </h1>

        <p className="mt-[26px] max-w-[46ch] text-[clamp(1.02rem,1.6vw,1.2rem)] leading-[1.65] text-ink2">
          {hero.sub}
        </p>

        <div className="mt-[38px] flex flex-wrap gap-[14px]">
          <a
            href="#contact"
            className="rounded-full bg-accent px-[28px] py-[15px] text-[15px] font-semibold text-on-accent shadow-[var(--shadow-btn)] transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-[2px] hover:shadow-[var(--shadow-btn-hover)]"
          >
            {hero.primaryCta}
          </a>
          <a
            href="#work"
            className="rounded-full border-[1.5px] border-line-strong px-[28px] py-[15px] text-[15px] font-semibold text-ink transition-[border-color,background-color] duration-200 ease-out hover:border-accent-line hover:bg-surface"
          >
            {hero.secondaryCta}
          </a>
        </div>
      </div>

      {/* Right column — status card */}
      <Reveal>
        <StatusCard />
      </Reveal>
    </section>
  );
}
