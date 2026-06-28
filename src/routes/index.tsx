import CatLoader from "@/components/CatLoader";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import  LocationBadge from  "@/components/LocationBadge";
import {
  Github, Linkedin, Twitter, Mail, FileText, Heart, MapPin,
  ExternalLink, ArrowUpRight, Command, Sun, Eye, MessageCircle,
  Music, Code2, GitBranch,
} from "lucide-react";
import cinematicVideo from "@/assets/cinematic.mp4";
import eyeComfortVideo from "@/assets/eyecomfort.mp4";
import normalVideo from "@/assets/video.mp4";
import profile from "@/assets/profile.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nitansh Singh — Full Stack Developer" },
      { name: "description", content: " SOON! " },
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
  "Node.js","Git","Vercel"];

const EXPERIENCE = [
  {
   // title: "PENDING",
   // role: " Open Source Contributor ",
  //  period: "June 2026 – Present",
 //   location: "Remote",
 //   initials: "GS",
  //  tint: "from-amber-500/30 to-rose-500/20",
  },
  {
  //  title: "Open Source",
 //   role: "Contributor",
 //   period: "2026 – Present",
//    location: "Remote",
//    initials: "OS",
//    tint: "from-sky-500/30 to-indigo-500/20",
  },
];

const PROJECTS = [
 // { name: "DaemonDoc", desc: "Your README, on Autopilot.", tags: ["Next.js","TypeScript","AI","GitHub API"], live: "https://daemondoc.online/", repo: "https://github.com/xevrion/daemondoc" },
 //  { name: "Contributing to Kdenlive", desc: "Contributing to Kdenlive, an open-source video editor.", tags: ["C++","Qt","Open Source"], live: "https://kdenlive.org/", repo: "https://kdenlive.org/" },
 //  { name: "Cookmarked", desc: "A recipe manager that helps you save, organize, and discover recipes from around the web, all in one place.", tags: ["Next.js","TypeScript","Postgres"], live: "https://cookmarked.xevrion.dev/", repo: "https://github.com/xevrion/cookmarked" },
 //  { name: "Claude Lag Fixer", desc: "A Chrome extension that fixes the typing lag and slowness you get in long Claude.ai conversations.", tags: ["Chrome Extension","JavaScript"], repo: "https://github.com/xevrion/claude-lag-fixer" },
 // { name: "Peek-a-Repo", desc: "A Chrome extension that lets you peek into your GitHub repositories without clicking.", tags: ["Chrome Extension","JavaScript","GitHub API"], live: "https://chromewebstore.google.com/detail/aanpngikpldepannbdkglfohenbkhomp", repo: "https://github.com/xevrion/peek-a-repo" },
 // { name: "Stale Branches", desc: "Interactive CLI to list and delete stale git branches.", tags: ["Node.js","CLI","npm"], live: "https://xevrion.github.io/stale-branches/", repo: "https://npmjs.com/package/stale-branches" },
];

const POSTS = [
 // { title: "How I Got Selected in GSoC 2026", date: "Jun 23, 2026" },
 // { title: "I Rewrote My Entire Portfolio in Next.js (And Almost Lost My Mind Over One Date)", date: "Jun 11, 2026" },
 // { title: "Browsers Stopped Opening After a New Router", date: "May 9, 2026" },
];

const GUESTBOOK = [
  { name: "Rohit Dahiya", msg: "hello" },
  { name: "Avi", msg: "I like the minimalistic touch of your portfolio" },
  { name: "Arman", msg: "One of the cleanest portfolios I've come across. I love the minimalism it carries. Keep up the great work!" },
  { name: "Chinmay Shet", msg: "Great work brother!" },
  { name: "Parthil Kukadiya", msg: "Wow, crazy idea bro" },
  { name: "Arti", msg: "heloo! the web is so clean and crisp i love it <3 great work, nitansh!" },
  { name: "Chintan Vaghamshi", msg: "Yo" },
  { name: "SreeCharan Desu", msg: "minimalistic" },
  { name: "Haruki", msg: "Waooo!!! I really really like this website, so clean!!! Really liking this cursor glow." },
  { name: "Pushkal Keshri", msg: "Clean and precise web, on a genuine note loving it!" },
  { name: "Bhumi Sharma", msg: "this website is too good and well managed well done nitansh!" },
  { name: "Simran Bali", msg: "Yooo, this website is too prettyyy ✨" },
];

const LANGS_WEEK = [
  { name: "C++", time: "00h", pct: 42 },
  { name: "TypeScript", time: "00h", pct: 30 },
  //{ name: "Markdown", time: "00h", pct: 14 },
  //{ name: "CMake", time: "00h", pct: 5 },
  { name: "JavaScript", time: "00h", pct: 3 },
  //{ name: "Assembly", time: "00h", pct: 3 },
  { name: "JSON", time: "00h", pct: 2 },
 // { name: "TeX", time: "00h", pct: 1 },
];

type ThemeMode = "default" | "bright" | "eye";

const THEME_VIDEO_SOURCES: Record<ThemeMode, string> = {
  default: cinematicVideo,
  bright: normalVideo,
  eye: eyeComfortVideo,
};

function Index() {
  const [loading, setLoading] = useState(false);
  useEffect(() => { setLoading(true); }, []);
  const [time, setTime] = useState("");
  const [theme, setTheme] = useState<ThemeMode>("default");
  const [transitionTheme, setTransitionTheme] = useState<ThemeMode>("default");
  const [transitionOrigin, setTransitionOrigin] = useState<{ x: number; y: number } | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [loading, setLoading] = useState(false);

useEffect(() => {
  setLoading(true);
  const timer = setTimeout(() => setLoading(false), 12000);
  return () => clearTimeout(timer);
}, []);
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

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    if (!isTransitioning) return;
    const id = window.setTimeout(() => {
      setIsTransitioning(false);
      setTransitionOrigin(null);
    }, 850);
    return () => window.clearTimeout(id);
  }, [isTransitioning]);

  const handleThemeChange = (nextTheme: ThemeMode, origin: { x: number; y: number }) => {
    if (nextTheme === theme) 
    if (loading) return <CatLoader onDone={() => setLoading(false)} />;
    return;
    setTheme(nextTheme);
    setTransitionTheme(nextTheme);
    setTransitionOrigin(origin);
    setIsTransitioning(true);
  };

  const transitionBackground = transitionTheme === "bright"
    ? "linear-gradient(135deg, #f8fbff 0%, #dbeafe 100%)"
    : transitionTheme === "eye"
      ? "linear-gradient(135deg, #fff8ef 0%, #ffe4b3 100%)"
      : "linear-gradient(135deg, #030712 0%, #0f172a 100%)";

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#030712]">
        <div className="font-mono text-3xl font-bold text-primary tracking-widest animate-pulse">
          nitansh
        </div>
        <div className="mt-6 h-[2px] w-48 overflow-hidden rounded-full" style={{background: "rgba(255,255,255,0.1)"}}>
          <div className="h-full bg-primary rounded-full" style={{animation: "loading 12s ease-in-out forwards"}} />
        </div>
        <p className="mt-4 text-xs tracking-widest uppercase" style={{color: "rgba(255,255,255,0.4)"}}>Loading</p>
      </div>
    );
  }
  
  return (
    <div className="relative min-h-screen text-foreground">
      <div
        aria-hidden="true"
        className={`theme-transition-layer ${isTransitioning ? "active" : ""}`}
        style={{
          background: transitionBackground,
          ['--theme-origin-x' as string]: transitionOrigin ? `${transitionOrigin.x}px` : "50vw",
          ['--theme-origin-y' as string]: transitionOrigin ? `${transitionOrigin.y}px` : "50vh",
        }}
      />
      <Header theme={theme} onThemeChange={handleThemeChange} />

      <main className="mx-auto max-w-5xl px-5 sm:px-8">
        {/* Hero video */}
        <section className="relative -mt-2 overflow-hidden border-x-2 border-b-2 border-border hero-video rounded-[2rem]">
          <div className="relative h-[260px] w-full overflow-hidden rounded-[2rem] sm:h-[360px] md:h-[420px]">
            <video
              key={theme}
              autoPlay
              muted
              loop
              playsInline
              disablePictureInPicture
              controlsList="nodownload noplaybackrate"
              preload="auto"
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source src={THEME_VIDEO_SOURCES[theme]} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>


        <Divider />


        {/* Profile */}
        <section className="grid grid-cols-1 gap-8 py-10 md:grid-cols-1">
          <div className="space-y-6">
            <div className="relative inline-flex items-center gap-4">
              <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_20px_45px_rgba(0,0,0,0.22)]">
                <img
                  src={profile}
                  alt="Nitansh Singh"
                  width={64}
                  height={64}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h1 className="font-display text-2xl leading-tight tracking-tight pixel-text-shadow sm:text-3xl">
                  Nitansh Singh
                </h1>
                <p className="text-sm text-muted-foreground">Full Stack Developer</p>
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-surface/75 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
              <LocationBadge />
            </div>

            <p className="text-[15px] leading-relaxed text-foreground/85">
              CS student at <span className="rounded-md bg-primary/15 px-1.5 text-primary">SOON!</span>.
              I build things for the web, tinker with systems, and occasionally touch grass.
            </p>

            <div className="flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90 glow-ring">
                <Mail className="h-4 w-4" /> Get in touch
              </a>
              <a href="#" className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-foreground transition hover:bg-surface-2">
                <FileText className="h-4 w-4" /> Resume
              </a>
            </div>

            <div className="flex flex-wrap gap-2">
              <SocialChip icon={<Github className="h-4 w-4" />} label="GitHub" href="https://github.com/nitanshsingh" />
              <SocialChip icon={<Linkedin className="h-4 w-4" />} label="LinkedIn" href="https://linkedin.com/in/nitansh-singh-chauhan" />
              <SocialChip icon={<Twitter className="h-4 w-4" />} label="Twitter" href="https://x.com/nitanshsingh" />
              <SocialChip icon={<Heart className="h-4 w-4" />} label="Sponsor" href="https://github.com/sponsors/nitansh" />
            </div>
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
            {TECH.map(t => <span key={t} className="chip interactive-card hover-glow font-mono text-[12px] transition">{t}</span>)}
          </div>
        </section>

        <Divider />

        {/* Experience */}
        <section id="experience" className="py-10">
          <span className="section-label">Experience</span>
          <div className="mt-5 space-y-4">
            {EXPERIENCE.map((e, i) => (
              <article key={i} className="interactive-card group flex gap-4 rounded-2xl border border-border bg-surface/60 p-4 transition hover:bg-surface hover-glow">
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
            <a href="#" className="interactive-card hover-glow text-xs text-muted-foreground inline-flex items-center gap-1 transition hover:text-foreground">All projects <ArrowUpRight className="h-3 w-3" /></a>
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {PROJECTS.map(p => (
              <article key={p.name} className="interactive-card group flex flex-col rounded-2xl border border-border bg-surface/60 p-5 transition hover:-translate-y-0.5 hover:bg-surface">
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
                  {p.tags.map(t => <span key={t} className="interactive-card hover-glow rounded-md border border-border bg-background/50 px-2 py-0.5 font-mono text-[11px] text-muted-foreground transition">{t}</span>)}
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
            <a href="#" className="interactive-card hover-glow text-xs text-muted-foreground inline-flex items-center gap-1 transition hover:text-foreground">All posts <ArrowUpRight className="h-3 w-3" /></a>
          </div>
          <ul className="mt-5 divide-y divide-border rounded-2xl border border-border bg-surface/40">
            {POSTS.map(p => (
              <li key={p.title}>
                <a href="#" className="writing-card interactive-card flex items-start justify-between gap-4 p-4 transition hover:bg-surface hover:-translate-y-[0.5px] hover-glow">
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
                <div key={i} className="interactive-card w-72 shrink-0 rounded-xl border border-border bg-surface/60 p-4 transition hover:-translate-y-[0.5px] hover:bg-surface hover-glow">
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
            <blockquote className="font-pixel text-2xl leading-snug text-foreground/90 sm:text-3xl">
              "I fear not the man who has practiced 10,000 kicks once, but the man who has practiced one kick 10,000 times."
            </blockquote>
            <figcaption className="mt-2 text-xs text-muted-foreground">— Bruce Lee</figcaption>
          </figure>
        </section>

        <Divider />

        {/* Contact */}
        <section id="contact" className="py-10">
          <span className="section-label">Contact</span>
          <h2 className="mt-3 font-display text-xl leading-tight tracking-tight pixel-text-shadow sm:text-2xl">
            Got something worth building?
          </h2>

          <p className="mt-3 max-w-xl text-muted-foreground">
            Always open for collaborations, new ideas, or just a friendly chat.
          </p>
          <div className="mt-6 grid gap-2 sm:grid-cols-2">
            <ContactRow icon={<Mail className="h-4 w-4" />} label="me@nitansh.dev" href="mailto:nitanshsinghchauhan@gmail.com" />
            <ContactRow icon={<Github className="h-4 w-4" />} label="github.com/nitansh" href="https://github.com/nitanshsingh" />
            <ContactRow icon={<Linkedin className="h-4 w-4" />} label="linkedin.com/in/nitansh-singh" href="https://linkedin.com/in/nitansh-singh-chauhan" />
            <ContactRow icon={<Twitter className="h-4 w-4" />} label="twitter.com/nitansh" href="https://x.com/nitanshsingh" />
          </div>
        </section>

        <Divider />

        {/* Fun stuff */}
        <section id="fun" className="py-10">
          <span className="section-label">The fun stuff</span>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {/* Spotify */}
            <div className="interactive-card rounded-2xl border border-border bg-surface/60 p-5 hover-glow">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Music className="h-3.5 w-3.5" /> Now playing
              </div>
              <div className="mt-4 flex items-center gap-4">
                <div className="grid h-16 w-16 place-items-center rounded-lg bg-gradient-to-br from-emerald-500/40 via-cyan-500/30 to-indigo-500/40 text-xs font-semibold backdrop-blur-sm">
                  K
                </div>
                <div className="min-w-0">
                  <div className="truncate font-medium">KALYANI</div>
                  <div className="truncate text-sm text-muted-foreground">ARJN, KDS, FIFTY4, RONN</div>
                </div>
              </div>
              <div className="mt-4 music-wave">
                {Array.from({ length: 8 }).map((_, i) => (
                  <span key={i} className="music-bar" style={{ animationDelay: `${i * 80}ms` }} />
                ))}
              </div>
            </div>

            {/* Today coding */}
            <div className="interactive-card rounded-2xl border border-border bg-surface/60 p-5 hover-glow">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Code2 className="h-3.5 w-3.5" /> Today's Coding
              </div>
              <div className="mt-4 flex items-center gap-2">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl border border-primary/30 bg-primary/10 text-3xl font-semibold text-primary">
                  33
                </div>
                <div>
                  <div className="text-sm uppercase tracking-[0.22em] text-muted-foreground">Coding streak</div>
                  <div className="font-display text-3xl tracking-tight">33<span className="ml-2 text-base font-normal text-muted-foreground">mins</span></div>
                </div>
              </div>
              <div className="mt-6 text-xs text-muted-foreground">Languages this week</div>
              <ul className="mt-3 space-y-3">
                {LANGS_WEEK.map(l => (
                  <li key={l.name} className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span>{l.name}</span>
                      <span className="font-mono text-muted-foreground">{l.time}</span>
                    </div>
                    <div className="h-2.5 overflow-hidden rounded-full bg-background/60">
                      <div className="h-full rounded-full bg-gradient-to-r from-primary to-primary/40 animate-progress" style={{ width: `${l.pct}%` }} />
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

function Header({ theme, onThemeChange }: { theme: ThemeMode;onThemeChange: (nextTheme: ThemeMode, origin: { x: number; y: number }) => void }) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-lg">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#" className="font-mono text-sm font-semibold text-primary">WELCOME🔀</a>
        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map(n => (
            <a key={n.label} href={n.href} className="interactive-card rounded-md px-3 py-1.5 text-sm text-muted-foreground transition hover:bg-surface hover:text-foreground hover-glow">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button className="hidden items-center gap-1 rounded-md border border-border bg-surface px-2 py-1 font-mono text-[11px] text-muted-foreground sm:inline-flex">
            <Command className="h-3 w-3" /> K
          </button>
          <ThemeToggle theme={theme} onThemeChange={onThemeChange} />
        </div>
      </div>
    </header>
  );
}

function ThemeToggle({ theme, onThemeChange }: { theme: ThemeMode; onThemeChange: (nextTheme: ThemeMode, origin: { x: number; y: number }) => void }) {
  const nextTheme = theme === "default" ? "bright" : theme === "bright" ? "eye" : "default";
  const title = theme === "default" ? "Cinematic mode" : theme === "bright" ? "Bright mode" : "Eye protection mode";
  const icon = theme === "default"
    ? <Sun className="h-4 w-4" />
    : theme === "bright"
      ? <Sun className="h-4 w-4" />
      : <Eye className="h-4 w-4" />;

  return (
    <button
      onClick={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        onThemeChange(nextTheme, { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
      }}
      aria-label={title}
      title={title}
      className="theme-toggle group grid h-8 w-8 place-items-center rounded-md border border-border bg-surface text-muted-foreground transition hover:text-foreground hover-glow"
    >
      {icon}
      <span className="sr-only">{title}</span>
    </button>
  );
}

function SocialChip({ icon, label, href }: { icon: React.ReactNode; label: string; href: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="chip interactive-card hover-glow">
      {icon}<span>{label}</span>
    </a>
  );
}

function ContactRow({ icon, label, href }: { icon: React.ReactNode; label: string; href: string }) {
  return (
    <a href={href} className="interactive-card hover-glow flex items-center justify-between gap-3 rounded-xl border border-border bg-surface/60 px-4 py-3 transition hover:bg-surface">
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
        {["Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun"].map((m, idx) => <span key={`${m}-${idx}`}>{m}</span>)}
      </div>
    </div>
  );
}
