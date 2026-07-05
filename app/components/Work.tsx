import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

type Project = {
  number: string;
  kind: string;
  title: string;
  inProgress?: boolean;
  problem: string;
  stack: string[];
  live: string;
  repo: string;
};

const projects: Project[] = [
  {
    number: "01",
    kind: "Product · React",
    title: "Hoshida Dispatch",
    problem:
      "The school needed parents to submit enrollment applications electronically — safely, since it handles children's information. I built a secure React application that lets parents apply online and pipes submissions and photos straight into Google Docs for staff to review.",
    stack: ["React", "Google APIs", "Vercel"],
    live: "https://dispatch-app-phi.vercel.app/",
    repo: "https://github.com/MatthewRSouth/dispatch-app",
  },
  {
    number: "02",
    kind: "Personal · React",
    title: "Anichive",
    problem:
      "As an anime fan I wanted to see what other people thought of different series. So I built an app where users can search and browse anime and share their opinions — a small, opinionated community catalog.",
    stack: ["React", "REST API", "Vercel"],
    live: "https://anichive.vercel.app/",
    repo: "https://github.com/MatthewRSouth/anichive",
  },
  {
    number: "03",
    kind: "Product · React + Supabase",
    title: "Hoshida Student Progress",
    inProgress: true,
    problem:
      "Teachers needed a way to track each child's progress — both for their own teaching and for parent interviews. I'm building a clean dashboard that gives them a fast, structured way to log and review student progress.",
    stack: ["React", "TypeScript", "Tailwind", "Supabase"],
    live: "https://student-progress-app-eight.vercel.app/",
    repo: "https://github.com/MatthewRSouth/student-progress-app",
  },
];

export default function Work() {
  return (
    <section
      id="work"
      className="scroll-mt-24 pb-[clamp(56px,9vw,88px)] pt-[clamp(28px,4vw,44px)]"
    >
      <SectionLabel number="02" label="Selected work" />

      <div className="mt-[clamp(24px,4vw,40px)] flex flex-col gap-[clamp(20px,3vw,28px)]">
        {projects.map((p) => (
          <Reveal
            key={p.number}
            as="article"
            className="group rounded-[28px] border border-line bg-surface p-[clamp(26px,3.5vw,40px)] shadow-[var(--shadow-card2)] transition-[transform,box-shadow,border-color] duration-[250ms] ease-out hover:-translate-y-[4px] hover:border-accent-line hover:shadow-[var(--shadow-card-hover)]"
          >
            {/* Top row */}
            <div className="mb-[22px] flex flex-wrap items-center gap-[16px]">
              <span className="grid h-[52px] w-[52px] place-items-center rounded-full border-[1.5px] border-accent-line font-display text-[1.1rem] font-bold text-accent">
                {p.number}
              </span>
              <span className="text-[12.5px] font-semibold uppercase tracking-[0.06em] text-faint">
                {p.kind}
              </span>
              {p.inProgress && (
                <span className="rounded-full bg-accent-soft px-[11px] py-[4px] text-[12px] font-semibold text-accent-strong">
                  in progress
                </span>
              )}
            </div>

            <h3 className="mb-[14px] font-display text-[clamp(1.5rem,3.2vw,2.2rem)] font-bold leading-[1.1] tracking-[-0.02em] text-ink">
              {p.title}
            </h3>

            <p className="mb-[22px] max-w-[66ch] text-[1.02rem] leading-[1.72] text-ink2">
              {p.problem}
            </p>

            {/* Footer row */}
            <div className="flex flex-wrap items-center justify-between gap-x-[28px] gap-y-[20px]">
              <div className="flex flex-wrap gap-[8px]">
                {p.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-line px-[12px] py-[5px] text-[12.5px] font-medium text-ink2"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-[20px]">
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener"
                  className="border-b-[1.5px] border-accent-line pb-[2px] text-[14px] font-semibold text-accent-strong transition-colors duration-200 hover:border-accent"
                >
                  Live demo ↗
                </a>
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noopener"
                  className="border-b-[1.5px] border-transparent pb-[2px] text-[14px] font-semibold text-ink2 transition-colors duration-200 hover:border-accent-line hover:text-accent-strong"
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
