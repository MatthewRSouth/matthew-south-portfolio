const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Path", href: "#path" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-[rgba(246,239,227,0.78)] backdrop-blur-[14px]">
      <nav className="flex flex-wrap items-center justify-between gap-x-5 gap-y-3 px-[clamp(20px,5vw,72px)] py-[18px]">
        {/* Brand */}
        <a href="#" className="flex items-center gap-[10px]">
          <span
            className="h-3 w-3 rounded-full bg-accent shadow-[0_0_0_4px_rgba(207,122,31,0.12)]"
            aria-hidden="true"
          />
          <span className="font-display text-[16px] font-bold tracking-[-0.01em] text-ink">
            Matthew South
          </span>
        </a>

        {/* Links + resume */}
        <div className="flex flex-wrap items-center gap-x-[clamp(14px,2.6vw,32px)] gap-y-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[14.5px] font-medium text-ink2 transition-colors duration-200 hover:text-accent-strong"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/Matthew-South-Resume.pdf"
            download
            className="rounded-full border-[1.5px] border-accent-line px-[18px] py-[9px] text-[14px] font-semibold text-accent-strong transition-colors duration-200 hover:border-accent hover:bg-accent hover:text-on-accent"
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}
