export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-x-4 gap-y-2 px-[clamp(20px,5vw,72px)] py-[26px]">
        <span className="text-[13px] text-faint">
          © {year} Matthew South — built in Osaka.
        </span>
        <span className="text-[13px] text-faint">
          React · TypeScript · Next.js
        </span>
      </div>
    </footer>
  );
}
