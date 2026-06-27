import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Github, Linkedin, Twitter, Mail, FileText, Heart, MapPin,
  ExternalLink, ArrowUpRight, Command, Sun, Moon, MessageCircle,
  Music, Code2, GitBranch,
} from "lucide-react";
import banner from "@/assets/banner.jpg";
import { ForestCursor } from "@/components/ForestCursor";
import profile from "@/assets/profile.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nitansh Singh — Full Stack Developer" },
      { name: "description", content: "CS student at SOON!. I build things for the web, tinker with systems, and occasionally touch grass." },
    ],
  }),
  component: Index,
});

const NAV = [
  { label: "Projects", href: "#projects" },
  { label: "Shenanigans", href: "#fun" },
  { label: "Blogs", href: "#writing" },
  { label: "Weekly", href: "#writing" },
  { label: "Guestbook", href: "#guestbook" },
  { label: "Resume", href: "#contact" },
];

const TECH = [
  "C","C++","Python","JavaScript","TypeScript","HTML","CSS","React","Next.js",
  "Tailwind","Node.js","Docker","TensorFlow","PyTorch","NumPy","Pandas","Git",
  "Neovim","Arch Linux","Vercel",
];

const EXPERIENCE = [
  {
    title: "Google Summer of Code 2026 — KDE Kdenlive",
    role: "Open Source Contributor (C++ / Qt)",
    period: "May 2026 – Present",
    location: "Remote",
    initials: "GS",
    tint: "from-amber-500/30 to-rose-500/20",
  },
  {
    title: "Open Source",
    role: "Contributor",
    period: "2025 – Present",
    location: "Remote",
    initials: "OS",
    tint: "from-sky-500/30 to-indigo-500/20",
  },
];

const PROJECTS = [
  { name: "DaemonDoc", desc: "Your README, on Autopilot.", tags: ["Next.js","TypeScript","AI","GitHub API"], live: "https://daemondoc.online/", repo: "https://github.com/xevrion/daemondoc" },
  { name: "Contributing to Kdenlive", desc: "Contributing to Kdenlive, an open-source video editor.", tags: ["C++","Qt","Open Source"], live: "https://kdenlive.org/", repo: "https://kdenlive.org/" },
  { name: "Cookmarked", desc: "A recipe manager that helps you save, organize, and discover recipes from around the web, all in one place.", tags: ["Next.js","TypeScript","Postgres"], live: "https://cookmarked.xevrion.dev/", repo: "https://github.com/xevrion/cookmarked" },
  { name: "Claude Lag Fixer", desc: "A Chrome extension that fixes the typing lag and slowness you get in long Claude.ai conversations.", tags: ["Chrome Extension","JavaScript"], repo: "https://github.com/xevrion/claude-lag-fixer" },
  { name: "Peek-a-Repo", desc: "A Chrome extension that lets you peek into your GitHub repositories without clicking.", tags: ["Chrome Extension","JavaScript","GitHub API"], live: "https://chromewebstore.google.com/detail/aanpngikpldepannbdkglfohenbkhomp", repo: "https://github.com/xevrion/peek-a-repo" },
  { name: "Stale Branches", desc: "Interactive CLI to list and delete stale git branches.", tags: ["Node.js","CLI","npm"], live: "https://xevrion.github.io/stale-branches/", repo: "https://npmjs.com/package/stale-branches" },
];

const POSTS = [
  { title: "How I Got Selected in GSoC 2026", date: "Jun 23, 2026" },
  { title: "I Rewrote My Entire Portfolio in Next.js (And Almost Lost My Mind Over One Date)", date: "Jun 11, 2026" },
  { title: "Browsers Stopped Opening After a New Router", date: "May 9, 2026" },
];

const GUESTBOOK = [
  { name: "Rohit Dahiya", msg: "hello" },
  { name: "Avi", msg: "I like the minimalistic touch of your portfolio" },
  { name: "Arman", msg: "One of the cleanest portfolios I've come across. I love the minimalism it carries. Keep up the great work!" },
  { name: "Chinmay Shet", msg: "Great work brother!" },
  { name: "Parthil Kukadiya", msg: "Wow, crazy idea bro" },
  { name: "Arti", msg: "heloo! the web is so clean and crisp i love it <3 great work, yash!" },
  { name: "Chintan Vaghamshi", msg: "Yo" },
  { name: "SreeCharan Desu", msg: "minimalistic" },
  { name: "Haruki", msg: "Waooo!!! I really really like this website, so clean!!! Really liking this cursor glow." },
  { name: "Pushkal Keshri", msg: "Clean and precise web, on a genuine note loving it!" },
  { name: "Bhumi Sharma", msg: "this website is too good and well managed well done yash!" },
  { name: "Simran Bali", msg: "Yooo, this website is too prettyyy ✨" },
];

const LANGS_WEEK = [
  { name: "C++", time: "13h 25m", pct: 42 },
  { name: "TypeScript", time: "9h 36m", pct: 30 },
  { name: "Markdown", time: "4h 38m", pct: 14 },
  { name: "CMake", time: "1h 43m", pct: 5 },
  { name: "JavaScript", time: "1h 1m", pct: 3 },
  { name: "Assembly", time: "1h 1m", pct: 3 },
  { name: "JSON", time: "57m", pct: 2 },
  { name: "TeX", time: "35m", pct: 1 },
];

function Index() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const update = () => {
      const fmt = new Intl.DateTimeFormat("en-US", {
        hour: "numeric", minute: "2-digit", hour12: true, timeZone: "Asia/Kolkata",
      });
      setTime(fmt.format(new Date()));
    };
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative min-h-screen text-foreground">
      <Header />

      <main className="mx-auto max-w-5xl px-5 sm:px-8">
        {/* Hero banner */}
        <section className="relative -mt-2 overflow-hidden rounded-b-3xl border-x border-b border-border">
          <img
            src={banner}
            alt=""
            width={1920}
            height={640}
            className="h-[260px] w-full object-cover sm:h-[360px] md:h-[420px]"
          />
          <ForestCursor />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-background" />
        </section>


        <Divider />

        {/* Profile */}
        <section className="grid grid-cols-1 gap-8 py-10 md:grid-cols-[1fr_auto] md:items-start">
          <div>
            <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              Nitansh Singh
            </h1>
            <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <span>Full Stack Developer</span>
              <span className="chip">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--online)] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--online)]" />
                </span>
                <MapPin className="h-3 w-3" /> Lucknow, India
              </span>
              <span className="text-xs">{time} · +10h from you</span>
            </div>

            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-foreground/85">
              CS student at <span className="rounded-md bg-primary/15 px-1.5 text-primary">SOON!</span>.
              I build things for the web, tinker with systems, and occasionally touch grass.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90 glow-ring">
                <Mail className="h-4 w-4" /> Get in touch
              </a>
              <a href="#" className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-foreground transition hover:bg-surface-2">
                <FileText className="h-4 w-4" /> Resume
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <SocialChip icon={<Github className="h-4 w-4" />} label="GitHub" href="https://github.com/nitansh" />
              <SocialChip icon={<Linkedin className="h-4 w-4" />} label="LinkedIn" href="https://linkedin.com/in/nitansh-singh" />
              <SocialChip icon={<Twitter className="h-4 w-4" />} label="Twitter" href="https://x.com/nitansh" />
              <SocialChip icon={<MessageCircle className="h-4 w-4" />} label="Discord" href="#" />
              <SocialChip icon={<Heart className="h-4 w-4" />} label="Sponsor" href="https://github.com/sponsors/nitansh" />
            </div>
          </div>

          <div className="relative justify-self-start md:justify-self-end">
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-transparent blur-2xl" />
            <img
              src={profile}
              alt="Nitansh Singh"
              width={220}
              height={220}
              loading="lazy"
              className="relative h-44 w-44 rounded-2xl object-cover ring-1 ring-border sm:h-52 sm:w-52"
            />
          </div>
        </section>

        <Divider />

        {/* About */}
        <section id="about" className="py-10">
          <span className="section-label">About</span>
          <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-foreground/85">
            Hi! I'm
          </p>
        </section>

        <Divider />

        {/* Tech */}
        <section id="tech" className="py-10">
          <span className="section-label">Tech Stack</span>
          <div className="mt-4 flex flex-wrap gap-2">
            {TECH.map(t => <span key={t} className="chip font-mono text-[12px]">{t}</span>)}
          </div>
        </section>

        <Divider />

        {/* Experience */}
        <section id="experience" className="py-10">
          <span className="section-label">Experience</span>
          <div className="mt-5 space-y-4">
            {EXPERIENCE.map(e => (
              <article key={e.title} className="group flex gap-4 rounded-2xl border border-border bg-surface/60 p-4 transition hover:bg-surface">
                <div className={`grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${e.tint} text-sm font-semibold ring-1 ring-border`}>
                  {e.initials}
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-medium">{e.title}</h3>
                    <span className="text-xs text-muted-foreground">{e.period}</span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{e.role}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{e.location}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <Divider />

        {/* Projects */}
        <section id="projects" className="py-10">
          <div className="flex items-end justify-between">
            <span className="section-label">Projects</span>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground inline-flex items-center gap-1">All projects <ArrowUpRight className="h-3 w-3" /></a>
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {PROJECTS.map(p => (
              <article key={p.name} className="group flex flex-col rounded-2xl border border-border bg-surface/60 p-5 transition hover:-translate-y-0.5 hover:bg-surface">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-medium tracking-tight">{p.name}</h3>
                  <div className="flex gap-1.5 text-muted-foreground">
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noreferrer" aria-label={`${p.name} live`} className="rounded-md p-1 hover:bg-surface-2 hover:text-foreground">
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}
                    {p.repo && (
                      <a href={p.repo} target="_blank" rel="noreferrer" aria-label={`${p.name} repo`} className="rounded-md p-1 hover:bg-surface-2 hover:text-foreground">
                        <Github className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.map(t => <span key={t} className="rounded-md border border-border bg-background/50 px-2 py-0.5 font-mono text-[11px] text-muted-foreground">{t}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <Divider />

        {/* Writing */}
        <section id="writing" className="py-10">
          <div className="flex items-end justify-between">
            <span className="section-label">Writing</span>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground inline-flex items-center gap-1">All posts <ArrowUpRight className="h-3 w-3" /></a>
          </div>
          <ul className="mt-5 divide-y divide-border rounded-2xl border border-border bg-surface/40">
            {POSTS.map(p => (
              <li key={p.title}>
                <a href="#" className="flex items-start justify-between gap-4 p-4 transition hover:bg-surface">
                  <span className="text-sm">{p.title}</span>
                  <span className="shrink-0 font-mono text-xs text-muted-foreground">{p.date}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <Divider />

        {/* Guestbook */}
        <section id="guestbook" className="py-10">
          <div className="flex items-end justify-between">
            <span className="section-label">Guestbook</span>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground inline-flex items-center gap-1">Sign the guestbook <ArrowUpRight className="h-3 w-3" /></a>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">Thoughts, jokes, and small internet breadcrumbs from visitors.</p>

          <div className="relative mt-6 overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />
            <div className="flex gap-3 marquee">
              {[...GUESTBOOK, ...GUESTBOOK].map((g, i) => (
                <div key={i} className="w-72 shrink-0 rounded-xl border border-border bg-surface/60 p-4">
                  <div className="flex items-center gap-2">
                    <div className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-primary/40 to-accent text-[10px] font-semibold">
                      {g.name.split(" ").map(s => s[0]).slice(0,2).join("")}
                    </div>
                    <span className="text-xs font-medium">{g.name}</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{g.msg}</p>
                </div>
              ))}
            </div>
          </div>

          <figure className="mt-10 rounded-2xl border border-border bg-surface/40 p-6 text-center">
            <blockquote className="font-display text-lg italic text-foreground/90 sm:text-xl">
              "I fear not the man who has practiced 10,000 kicks once, but the man who has practiced one kick 10,000 times."
            </blockquote>
            <figcaption className="mt-2 text-xs text-muted-foreground">— Bruce Lee</figcaption>
          </figure>
        </section>

        <Divider />

        {/* Contact */}
        <section id="contact" className="py-10">
          <span className="section-label">Contact</span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Got something worth building?
          </h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Always open for collaborations, new ideas, or just a friendly chat.
          </p>
          <div className="mt-6 grid gap-2 sm:grid-cols-2">
            <ContactRow icon={<Mail className="h-4 w-4" />} label="me@nitansh.dev" href="mailto:me@nitansh.dev" />
            <ContactRow icon={<Github className="h-4 w-4" />} label="github.com/nitansh" href="https://github.com/nitansh" />
            <ContactRow icon={<Linkedin className="h-4 w-4" />} label="linkedin.com/in/nitansh-singh" href="https://linkedin.com/in/nitansh-singh" />
            <ContactRow icon={<Twitter className="h-4 w-4" />} label="twitter.com/nitansh" href="https://x.com/nitansh" />
          </div>
        </section>

        <Divider />

        {/* Fun stuff */}
        <section id="fun" className="py-10">
          <span className="section-label">The fun stuff</span>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {/* Spotify */}
            <div className="rounded-2xl border border-border bg-surface/60 p-5">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Music className="h-3.5 w-3.5" /> Last Played
              </div>
              <div className="mt-4 flex items-center gap-4">
                <div className="grid h-16 w-16 place-items-center rounded-lg bg-gradient-to-br from-emerald-500/40 via-cyan-500/30 to-indigo-500/40 text-xs font-semibold">
                  K
                </div>
                <div className="min-w-0">
                  <div className="truncate font-medium">KALYANI</div>
                  <div className="truncate text-sm text-muted-foreground">ARJN, KDS, FIFTY4, RONN</div>
                </div>
              </div>
              <div className="mt-4 flex h-6 items-end gap-0.5">
                {Array.from({ length: 40 }).map((_, i) => (
                  <span
                    key={i}
                    className="w-1 rounded-sm bg-primary/70"
                    style={{ height: `${20 + ((i * 37) % 80)}%`, animation: `eq 1.2s ${i * 60}ms ease-in-out infinite alternate` }}
                  />
                ))}
              </div>
            </div>

            {/* Today coding */}
            <div className="rounded-2xl border border-border bg-surface/60 p-5">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Code2 className="h-3.5 w-3.5" /> Today's Coding
              </div>
              <div className="mt-4 font-display text-4xl font-semibold tracking-tight">33<span className="ml-1 text-base font-normal text-muted-foreground">mins</span></div>
              <div className="mt-6 text-xs text-muted-foreground">Languages this week</div>
              <ul className="mt-3 space-y-2">
                {LANGS_WEEK.map(l => (
                  <li key={l.name}>
                    <div className="flex justify-between text-xs">
                      <span>{l.name}</span>
                      <span className="font-mono text-muted-foreground">{l.time}</span>
                    </div>
                    <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-background/60">
                      <div className="h-full rounded-full bg-gradient-to-r from-primary to-primary/40" style={{ width: `${l.pct}%` }} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* GitHub contributions */}
          <div className="mt-4 rounded-2xl border border-border bg-surface/60 p-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <GitBranch className="h-3.5 w-3.5" /> GitHub Contributions
              </div>
              <div className="text-xs text-muted-foreground"><span className="font-medium text-foreground">2,830</span> this year</div>
            </div>
            <ContribGrid />
            <div className="mt-2 flex items-center justify-end gap-1 text-[10px] text-muted-foreground">
              Less
              {[0.1, 0.25, 0.45, 0.7, 1].map(o => (
                <span key={o} className="h-2.5 w-2.5 rounded-[3px]" style={{ background: `color-mix(in oklab, var(--primary) ${o*100}%, var(--surface-2))` }} />
              ))}
              More
            </div>
          </div>
        </section>

        <footer className="border-t border-border py-10 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Nitansh Singh. Built with care.
        </footer>
      </main>

      <style>{`
        @keyframes eq { from { transform: scaleY(0.3); } to { transform: scaleY(1); } }
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .marquee { width: max-content; animation: marquee 60s linear infinite; }
      `}</style>
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-lg">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#" className="font-mono text-sm font-semibold text-primary">nitansh</a>
        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map(n => (
            <a key={n.label} href={n.href} className="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition hover:bg-surface hover:text-foreground">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button className="hidden items-center gap-1 rounded-md border border-border bg-surface px-2 py-1 font-mono text-[11px] text-muted-foreground sm:inline-flex">
            <Command className="h-3 w-3" /> K
          </button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

function ThemeToggle() {
  const [dark, setDark] = useState(true);
  return (
    <button
      onClick={() => setDark(d => !d)}
      aria-label="Toggle theme"
      className="grid h-8 w-8 place-items-center rounded-md border border-border bg-surface text-muted-foreground transition hover:text-foreground"
    >
      {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}

function SocialChip({ icon, label, href }: { icon: React.ReactNode; label: string; href: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="chip transition hover:bg-surface-2">
      {icon}<span>{label}</span>
    </a>
  );
}

function ContactRow({ icon, label, href }: { icon: React.ReactNode; label: string; href: string }) {
  return (
    <a href={href} className="flex items-center justify-between gap-3 rounded-xl border border-border bg-surface/60 px-4 py-3 transition hover:bg-surface">
      <span className="flex items-center gap-3 text-sm">{icon}{label}</span>
      <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
    </a>
  );
}

function Divider() {
  return <div className="dotted-divider" />;
}

function ContribGrid() {
  // 53 weeks x 7 days, deterministic pseudo-random intensities
  const weeks = 53;
  return (
    <div className="mt-3 overflow-x-auto">
      <div className="flex gap-[3px]">
        {Array.from({ length: weeks }).map((_, w) => (
          <div key={w} className="flex flex-col gap-[3px]">
            {Array.from({ length: 7 }).map((_, d) => {
              const seed = (w * 7 + d) * 9301 + 49297;
              const v = (seed % 233280) / 233280;
              const level = v < 0.45 ? 0 : v < 0.65 ? 1 : v < 0.82 ? 2 : v < 0.94 ? 3 : 4;
              const opacities = [0.06, 0.25, 0.45, 0.7, 1];
              return (
                <span
                  key={d}
                  className="h-2.5 w-2.5 rounded-[3px]"
                  style={{ background: `color-mix(in oklab, var(--primary) ${opacities[level]*100}%, var(--surface-2))` }}
                />
              );
            })}
          </div>
        ))}
      </div>
      <div className="mt-2 flex justify-between font-mono text-[10px] text-muted-foreground">
        {["Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun"].map(m => <span key={m}>{m}</span>)}
      </div>
    </div>
  );
}
