"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useLang } from "../i18n/LanguageContext";

const osakaFormatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Asia/Tokyo",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
});

export default function StatusCard() {
  const { content } = useLang();
  const { status } = content;
  const [osakaTime, setOsakaTime] = useState("");
  const [focusIndex, setFocusIndex] = useState(0);

  useEffect(() => {
    const tick = () => setOsakaTime(osakaFormatter.format(new Date()));
    tick();
    const clock = setInterval(tick, 1000);
    return () => clearInterval(clock);
  }, []);

  useEffect(() => {
    const rotate = setInterval(
      () => setFocusIndex((i) => (i + 1) % status.phrases.length),
      2400,
    );
    return () => clearInterval(rotate);
  }, [status.phrases.length]);

  return (
    <div className="relative mx-auto w-full max-w-[390px] justify-self-center">
      {/* Floating organic blobs */}
      <span className="blob blob--tr" aria-hidden="true" />
      <span className="blob blob--bl" aria-hidden="true" />

      {/* Card */}
      <div className="relative rounded-[30px] border border-line bg-surface p-[26px] shadow-[var(--shadow-hero)]">
        {/* Header row */}
        <div className="flex items-center gap-[15px]">
          <Image
            src="/avatar.svg"
            alt="Matthew South"
            width={66}
            height={66}
            className="h-[66px] w-[66px] rounded-[20px] object-cover"
          />
          <div>
            <p className="font-display text-[1.15rem] font-bold leading-tight text-ink">
              Matthew South
            </p>
            <p className="text-[13px] text-ink2">{status.title}</p>
          </div>
        </div>

        <div className="my-[22px] h-px bg-line" />

        {/* Live clock */}
        <div className="mb-[16px] flex items-center justify-between">
          <span className="text-[13px] text-faint">{status.localTime}</span>
          <span
            className="font-display text-[1.05rem] font-semibold text-ink [font-variant-numeric:tabular-nums]"
            suppressHydrationWarning
          >
            {osakaTime || "--:--:--"}
          </span>
        </div>

        {/* Rotating "Currently" word */}
        <div className="mb-[20px] flex items-center justify-between">
          <span className="text-[13px] text-faint">{status.currently}</span>
          <span
            key={`${focusIndex}-${status.phrases[focusIndex]}`}
            className="fade-up text-[14.5px] font-semibold text-accent-strong"
          >
            {status.phrases[focusIndex]}
          </span>
        </div>

        {/* Status pill */}
        <div className="flex items-center gap-[10px] rounded-[16px] bg-raise px-[15px] py-[12px]">
          <span
            className="pulse-dot h-[9px] w-[9px] rounded-full bg-success"
            aria-hidden="true"
          />
          <span className="text-[13.5px] font-medium text-ink">
            {status.open}
          </span>
        </div>
      </div>
    </div>
  );
}
