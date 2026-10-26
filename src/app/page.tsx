import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  GitBranch as GithubIcon,
  MapPin,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

const specialties = [
  "Full-Stack Development",
  "Mobile Applications",
  "API Development",
  "Software Engineering",
];

const quickStats = [
  { value: "MERN", label: "Full-stack development" },
  { value: "Android", label: "Mobile applications" },
  { value: "AI/ML", label: "Emerging technologies" },
];

const expertiseAreas = [
  {
    number: "01",
    title: "Full-Stack Web",
    description:
      "Responsive interfaces, reusable components, server-side logic, and database integration.",
    tags: ["React", "Next.js", "Node.js"],
  },
  {
    number: "02",
    title: "Mobile Development",
    description:
      "Mobile application experiences focused on usability, functionality, and integration.",
    tags: ["Android", "Kotlin", "Firebase"],
  },
  {
    number: "03",
    title: "Backend & APIs",
    description:
      "API integration, application logic, authentication patterns, and real-time features.",
    tags: ["REST APIs", "Express", "Socket.IO"],
  },
  {
    number: "04",
    title: "Emerging Technology",
    description:
      "Exploring intelligent applications, data-driven features, and new engineering tools.",
    tags: ["AI/ML", "Data", "Automation"],
  },
];

export default function Home() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden">
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -left-48 top-0 h-[500px] w-[500px] rounded-full bg-sky-500/[0.09] blur-[130px]" />
        <div className="absolute -right-48 top-48 h-[450px] w-[450px] rounded-full bg-indigo-500/[0.10] blur-[130px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.035)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/[0.09] bg-[#0b1220]/80 px-5 py-4 shadow-2xl shadow-black/10 backdrop-blur-2xl sm:px-7"
        >
          <Link
            href="#home"
            aria-label="Sajid.dev home"
            className="group flex items-center gap-2"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-sky-300/20 bg-sky-400/10 text-sm font-bold text-sky-300 transition group-hover:bg-sky-400/20">
              S.
            </span>

            <span className="text-lg font-semibold tracking-tight">
              Sajid<span className="text-sky-400">.dev</span>
            </span>
          </Link>

          <div className="hidden items-center gap-7 text-sm text-slate-400 md:flex">
            <Link className="transition hover:text-white" href="#about">
              About
            </Link>

            <Link className="transition hover:text-white" href="#expertise">
              Expertise
            </Link>

            <Link className="transition hover:text-white" href="#projects">
              Projects
            </Link>

            <Link className="transition hover:text-white" href="#contact">
              Contact
            </Link>
          </div>

          <a
            href={SITE_CONFIG.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-sky-400/30 bg-sky-400/[0.09] px-4 py-2.5 text-sm font-medium text-sky-200 transition hover:border-sky-300/60 hover:bg-sky-400/[0.16]"
          >
            Let&apos;s connect
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="mx-auto grid min-h-[calc(100svh-100px)] max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:px-12 lg:py-28"
      >
        <div className="relative">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-4 py-2 text-xs font-medium tracking-wide text-emerald-300 sm:text-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            SOFTWARE ENGINEER PORTFOLIO
          </div>

          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-sky-300">
            Hello, I&apos;m Sajid
          </p>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
            Building digital
            <span className="block bg-gradient-to-r from-sky-300 via-blue-400 to-indigo-400 bg-clip-text pb-2 text-transparent">
              experiences
            </span>
            that matter.
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg sm:leading-9">
            I&apos;m a software engineer focused on building modern web
            applications, mobile experiences, and practical software solutions
            that turn ideas into useful products.
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {specialties.map((specialty) => (
              <span
                key={specialty}
                className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-2 text-xs text-slate-300 sm:text-sm"
              >
                {specialty}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#projects"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/10 transition hover:bg-sky-300"
            >
              Explore my work
              <ArrowRight
                size={17}
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <a
              href={SITE_CONFIG.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-medium text-white transition hover:border-white/20 hover:bg-white/[0.07]"
            >
              <GithubIcon size={17} aria-hidden="true" />
              GitHub profile
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-500">
            <span className="inline-flex items-center gap-2">
              <MapPin size={15} aria-hidden="true" />
              Sri Lanka
            </span>

            <a
              href={SITE_CONFIG.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition hover:text-sky-300"
            >
              <BriefcaseBusiness size={15} aria-hidden="true" />
              Connect on LinkedIn
              <ArrowUpRight size={13} aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Developer profile card */}
        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute inset-8 rounded-[3rem] bg-gradient-to-br from-sky-500/20 via-blue-500/10 to-indigo-500/20 blur-3xl"
          />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.12] bg-gradient-to-br from-white/[0.09] to-white/[0.025] p-5 shadow-2xl shadow-black/20 backdrop-blur-2xl sm:p-7">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-5">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                  Developer profile
                </p>

                <p className="mt-1.5 text-sm font-medium text-slate-200">
                  Portfolio / 2026
                </p>
              </div>

              <div className="flex items-center gap-1.5 rounded-full border border-sky-300/15 bg-sky-300/[0.06] px-3 py-1.5 text-xs text-sky-200">
                <Sparkles size={13} aria-hidden="true" />
                Building
              </div>
            </div>

            <div className="py-9 sm:py-12">
              <div className="relative mx-auto flex h-32 w-32 items-center justify-center rounded-[2rem] border border-sky-300/20 bg-gradient-to-br from-sky-400/20 via-blue-500/10 to-indigo-500/20 shadow-2xl shadow-sky-500/[0.08] sm:h-36 sm:w-36">
                <div className="absolute inset-2 rounded-[1.5rem] border border-white/[0.08]" />

                <span className="bg-gradient-to-br from-white via-sky-200 to-blue-400 bg-clip-text text-5xl font-semibold tracking-tighter text-transparent sm:text-6xl">
                  S.
                </span>

                <span className="absolute -right-3 -top-3 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#101a2b] text-sky-300 shadow-xl">
                  <Code2 size={19} aria-hidden="true" />
                </span>
              </div>

              <div className="mt-7 text-center">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  Software Engineer
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Full-Stack &amp; Mobile Application Developer
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {quickStats.map((stat) => (
                <div
                  key={stat.value}
                  className="rounded-2xl border border-white/[0.07] bg-[#070d18]/70 p-3 text-center sm:p-4"
                >
                  <p className="text-sm font-semibold text-sky-300 sm:text-base">
                    {stat.value}
                  </p>

                  <p className="mt-2 text-[10px] leading-4 text-slate-500 sm:text-xs">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/[0.07] bg-white/[0.025] px-4 py-3.5">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-400/10 text-indigo-300">
                  <BriefcaseBusiness size={18} aria-hidden="true" />
                </span>

                <div>
                  <p className="text-sm font-medium text-slate-200">
                    Always learning
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Engineering · Innovation · Growth
                  </p>
                </div>
              </div>

              <ArrowDownRight
                size={18}
                className="text-slate-500"
                aria-hidden="true"
              />
            </div>
          </div>

          <div className="mt-5 flex items-center justify-center gap-2 text-xs text-slate-500">
            <ArrowDown size={13} aria-hidden="true" />
            Scroll to explore
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="scroll-mt-28 px-5 py-20 sm:px-8 lg:px-12"
      >
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-6 sm:p-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16 lg:p-14">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-sky-300">
              A little about me
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Turning ideas into
              <span className="block text-slate-500">working software.</span>
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-400">
            <p>
              I enjoy working across the software development lifecycle,
              from understanding a problem and designing an interface to
              implementing features and integrating APIs.
            </p>

            <p>
              My interests include full-stack web development, Android
              applications, backend services, and emerging technologies.
              I&apos;m continuously developing my skills by exploring new tools
              and building practical projects.
            </p>

            <p>
              My goal is to create reliable, maintainable, and user-focused
              applications while continuing to grow as a software engineer.
            </p>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section
        id="expertise"
        className="scroll-mt-28 px-5 py-16 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-sky-300">
            What I work with
          </p>

          <div className="mt-4 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Areas of expertise
            </h2>

            <p className="max-w-md text-sm leading-7 text-slate-500">
              A growing toolkit for designing, building, and improving
              digital products.
            </p>
          </div>

          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {expertiseAreas.map((item) => (
              <article
                key={item.number}
                className="group rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-300/25 hover:bg-sky-300/[0.035]"
              >
                <span className="text-xs font-medium tracking-[0.2em] text-sky-300/70">
                  {item.number}
                </span>

                <h3 className="mt-6 text-lg font-semibold">{item.title}</h3>

                <p className="mt-3 min-h-24 text-sm leading-7 text-slate-400">
                  {item.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-white/[0.07] bg-black/10 px-2.5 py-1.5 text-xs text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="scroll-mt-28 px-5 py-20 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/[0.08] bg-gradient-to-br from-sky-400/[0.06] via-transparent to-indigo-400/[0.05] p-7 sm:p-12 lg:p-16">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-sky-300">
            Selected work
          </p>

          <div className="mt-5 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Projects that bring ideas to life.
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                Academic, personal, and professional projects will be presented
                here with descriptions, technology stacks, screenshots, and
                source-code links.
              </p>
            </div>

            <span className="inline-flex shrink-0 items-center gap-2 text-sm text-slate-400">
              More coming soon
              <ArrowRight size={16} aria-hidden="true" />
            </span>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="scroll-mt-28 px-5 py-16 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-sky-300/15 bg-gradient-to-br from-sky-400/[0.08] to-indigo-400/[0.06] p-7 text-center sm:p-12 lg:p-16">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-sky-300">
            Have a project in mind?
          </p>

          <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">
            Let&apos;s build something meaningful.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
            I&apos;m interested in software engineering opportunities,
            collaborative projects, and conversations about technology.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={SITE_CONFIG.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
            >
              Connect on LinkedIn
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>

            <a
              href={SITE_CONFIG.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-medium text-white transition hover:bg-white/[0.08]"
            >
              <GithubIcon size={17} aria-hidden="true" />
              View GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-white/[0.07] px-5 py-7 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center text-xs text-slate-500 sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} {SITE_CONFIG.name}. Built with care.
          </p>

          <div className="flex items-center gap-5">
            <a
              href={SITE_CONFIG.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-sky-300"
            >
              GitHub
            </a>

            <a
              href={SITE_CONFIG.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-sky-300"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}