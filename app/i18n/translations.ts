export type Lang = "en" | "ja";

interface NavLink {
  label: string;
  href: string;
}
interface ValueItem {
  title: string;
  desc: string;
}
interface PathEntry {
  date: string;
  role: string;
  summary: string;
}

export interface Content {
  nav: { links: NavLink[]; resume: string };
  hero: {
    eyebrow: string;
    h1Before: string;
    h1Accent: string;
    h1After: string;
    sub: string;
    primaryCta: string;
    secondaryCta: string;
  };
  status: {
    title: string;
    localTime: string;
    currently: string;
    phrases: string[];
    open: string;
  };
  labels: { about: string; work: string; path: string; contact: string };
  about: {
    h2Before: string;
    h2Accent: string;
    h2After: string;
    bio1: string;
    bio2: string;
    values: ValueItem[];
    /** Tier names in order: Expert, Comfortable, Learning. */
    tiers: string[];
  };
  work: {
    /** Kind labels per project, in order. */
    kinds: string[];
    inProgress: string;
    /** Problem paragraphs per project, in order. */
    problems: string[];
    liveDemo: string;
    github: string;
  };
  path: { entries: PathEntry[] };
  contact: {
    h2Before: string;
    h2Accent: string;
    h2After: string;
    paragraph: string;
    emailLabel: string;
    form: {
      name: string;
      email: string;
      message: string;
      namePh: string;
      emailPh: string;
      messagePh: string;
      send: string;
      sent: string;
      confirm: string;
    };
  };
  footer: { built: string; stack: string };
  /** Label + aria for the language toggle (shows the *other* language). */
  toggle: { label: string; aria: string };
}

const en: Content = {
  nav: {
    links: [
      { label: "About", href: "#about" },
      { label: "Work", href: "#work" },
      { label: "Path", href: "#path" },
      { label: "Contact", href: "#contact" },
    ],
    resume: "Resume",
  },
  hero: {
    eyebrow: "Junior Frontend Engineer · Osaka, Japan",
    h1Before: "I build software that feels ",
    h1Accent: "warm",
    h1After: " and works fast.",
    sub: "I'm a frontend engineer in Osaka shipping fast, accessible web apps for real people — currently building tools that help an international school run smoother.",
    primaryCta: "Hire me →",
    secondaryCta: "See my work",
  },
  status: {
    title: "Junior Frontend Engineer",
    localTime: "Local time · Osaka",
    currently: "Currently",
    phrases: [
      "React + TypeScript",
      "accessible UIs",
      "learning Next.js",
      "shipping real products",
    ],
    open: "Open to junior frontend roles",
  },
  labels: {
    about: "About",
    work: "Selected work",
    path: "Path",
    contact: "Contact",
  },
  about: {
    h2Before: "A developer who ",
    h2Accent: "ships",
    h2After: " real products.",
    bio1: "I started by solving problems in front of me at work — an international school that needed better software — and turned that into a craft I care about deeply.",
    bio2: "I like interfaces that are quick, obvious, and genuinely useful. Give me a real problem and I'll ship a clean, well-built solution for it.",
    values: [
      { title: "ship it", desc: "Real products over pixel-perfect demos" },
      { title: "clarity", desc: "Simple UI beats clever UI" },
      { title: "keep learning", desc: "Always leveling up the stack" },
    ],
    tiers: ["Expert", "Comfortable", "Learning"],
  },
  work: {
    kinds: ["Product · React", "Personal · React", "Product · React + Supabase"],
    inProgress: "in progress",
    problems: [
      "The school needed parents to submit enrollment applications electronically — safely, since it handles children's information. I built a secure React application that lets parents apply online and pipes submissions and photos straight into Google Docs for staff to review.",
      "As an anime fan I wanted to see what other people thought of different series. So I built an app where users can search and browse anime and share their opinions — a small, opinionated community catalog.",
      "Teachers needed a way to track each child's progress — both for their own teaching and for parent interviews. I'm building a clean dashboard that gives them a fast, structured way to log and review student progress.",
    ],
    liveDemo: "Live demo ↗",
    github: "GitHub ↗",
  },
  path: {
    entries: [
      {
        date: "Apr 2026 — Present",
        role: "Technical Lead & Developer",
        summary:
          "Leading the build of the school's secure parent-application platform end to end — architecture, React frontend, and Google Services integration.",
      },
      {
        date: "Feb 2025 — Present",
        role: "Developer",
        summary:
          "Building internal web tools that help the school run — from enrollment to student-progress tracking — with React, TypeScript, Tailwind and Supabase.",
      },
    ],
  },
  contact: {
    h2Before: "Let's build something ",
    h2Accent: "good.",
    h2After: "",
    paragraph:
      "Open to junior frontend roles and freelance builds. Drop a line — I reply fast.",
    emailLabel: "EMAIL",
    form: {
      name: "Name",
      email: "Email",
      message: "Message",
      namePh: "Your name",
      emailPh: "you@company.com",
      messagePh: "What are you building?",
      send: "Send message →",
      sent: "Message ready ✓",
      confirm:
        "✓ Ready to send — hook this up to your inbox when you add a backend.",
    },
  },
  footer: { built: "built in Osaka.", stack: "React · TypeScript · Next.js" },
  toggle: { label: "日本語", aria: "Switch to Japanese" },
};

const ja: Content = {
  nav: {
    links: [
      { label: "概要", href: "#about" },
      { label: "制作実績", href: "#work" },
      { label: "経歴", href: "#path" },
      { label: "お問い合わせ", href: "#contact" },
    ],
    resume: "履歴書",
  },
  hero: {
    eyebrow: "ジュニアフロントエンドエンジニア · 大阪、日本",
    h1Before: "",
    h1Accent: "温かみのある",
    h1After: "、速く動くソフトウェアを作っています。",
    sub: "大阪を拠点とするフロントエンドエンジニアです。実際に使う人のために、速くてアクセシブルなWebアプリをリリースしています。今はインターナショナルスクールの運営をスムーズにするツールを作っています。",
    primaryCta: "採用のご相談 →",
    secondaryCta: "制作実績を見る",
  },
  status: {
    title: "ジュニアフロントエンドエンジニア",
    localTime: "現地時間 · 大阪",
    currently: "現在",
    phrases: [
      "React + TypeScript",
      "アクセシブルなUI",
      "Next.js を学習中",
      "実際のプロダクトを公開",
    ],
    open: "ジュニアフロントエンドの職を募集中",
  },
  labels: {
    about: "概要",
    work: "制作実績",
    path: "経歴",
    contact: "お問い合わせ",
  },
  about: {
    h2Before: "",
    h2Accent: "プロダクトを届ける",
    h2After: "開発者です。",
    bio1: "職場で目の前にあった課題 — より良いソフトウェアを必要としていたインターナショナルスクール — を解決することから始め、それを深く大切にする仕事へと育ててきました。",
    bio2: "速くて、分かりやすく、本当に役立つインターフェースが好きです。実際の課題をいただければ、しっかり作り込んだクリーンな解決策を形にします。",
    values: [
      { title: "作って届ける", desc: "完璧なデモより実際のプロダクトを" },
      { title: "分かりやすさ", desc: "凝ったUIよりシンプルなUIを" },
      { title: "学び続ける", desc: "常に技術スタックを磨き続ける" },
    ],
    tiers: ["得意", "慣れている", "学習中"],
  },
  work: {
    kinds: [
      "プロダクト · React",
      "個人開発 · React",
      "プロダクト · React + Supabase",
    ],
    inProgress: "進行中",
    problems: [
      "学校では、保護者が入学願書をオンラインで提出できる仕組みが必要でした。子どもの情報を扱うため、安全性が欠かせません。保護者がオンラインで申請でき、提出内容や写真をそのまま Google ドキュメントに送信して職員が確認できる、セキュアな React アプリケーションを構築しました。",
      "アニメ好きとして、他の人が各作品をどう思っているのか知りたいと思いました。そこで、ユーザーがアニメを検索・閲覧し、感想を共有できるアプリを作りました。小さくても、意見の詰まったコミュニティカタログです。",
      "先生方には、日々の指導や保護者面談のために、一人ひとりの子どもの成長を記録する方法が必要でした。生徒の進捗を素早く整理して記録・確認できる、すっきりしたダッシュボードを開発しています。",
    ],
    liveDemo: "デモを見る ↗",
    github: "GitHub ↗",
  },
  path: {
    entries: [
      {
        date: "2026年4月 — 現在",
        role: "テクニカルリード 兼 開発者",
        summary:
          "学校の保護者向け申請プラットフォームを、設計から React フロントエンド、Google サービス連携まで一貫してリードしています。",
      },
      {
        date: "2025年2月 — 現在",
        role: "開発者",
        summary:
          "入学手続きから生徒の進捗管理まで、学校運営を支える社内 Web ツールを、React・TypeScript・Tailwind・Supabase で開発しています。",
      },
    ],
  },
  contact: {
    h2Before: "",
    h2Accent: "良いもの",
    h2After: "を一緒に作りましょう。",
    paragraph:
      "ジュニアフロントエンドの職や、フリーランスでの開発を募集中です。お気軽にご連絡ください。すぐに返信します。",
    emailLabel: "メール",
    form: {
      name: "お名前",
      email: "メールアドレス",
      message: "メッセージ",
      namePh: "お名前",
      emailPh: "you@company.com",
      messagePh: "何を作っていますか？",
      send: "メッセージを送信 →",
      sent: "送信準備完了 ✓",
      confirm:
        "✓ 送信の準備ができました。バックエンドを追加したら受信箱に連携してください。",
    },
  },
  footer: { built: "大阪で制作。", stack: "React · TypeScript · Next.js" },
  toggle: { label: "English", aria: "英語に切り替える" },
};

export const translations: Record<Lang, Content> = { en, ja };
