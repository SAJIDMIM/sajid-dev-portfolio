import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Download,
  ExternalLink,
  Globe,
  Laptop,
  Mail,
  MapPin,
  Smartphone,
  Sparkles,
  Wrench,
} from "lucide-react";

import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

/**
 * Environment variables
 *
 * Keep your Google Drive URLs in .env.local.
 * Do not hardcode those URLs in this file.
 *
 * NEXT_PUBLIC variables are visible to website visitors.
 */

const profileImageUrl =
  process.env.NEXT_PUBLIC_PROFILE_IMAGE_URL || "";

const cvUrl = process.env.NEXT_PUBLIC_CV_URL || "";

function GithubIcon({
  size = 24,
  className,
  "aria-hidden": ariaHidden,
}: {
  size?: number;
  className?: string;
  "aria-hidden"?: boolean | "true" | "false";
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden={ariaHidden}
      role={ariaHidden ? undefined : "img"}
    >
      <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.26c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.09 1.84 1.23 1.84 1.23 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.47 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon({
  size = 24,
  className,
  "aria-hidden": ariaHidden,
}: {
  size?: number;
  className?: string;
  "aria-hidden"?: boolean | "true" | "false";
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden={ariaHidden}
      role={ariaHidden ? undefined : "img"}
    >
      <path d="M5.16 3.5a2.16 2.16 0 1 1-4.32 0 2.16 2.16 0 0 1 4.32 0ZM1.13 8h4.06v13H1.13V8Zm6.62 0h3.89v1.78h.06c.54-1.02 1.86-2.09 3.83-2.09 4.1 0 4.86 2.7 4.86 6.21V21h-4.06v-6.3c0-1.5-.03-3.43-2.09-3.43-2.09 0-2.41 1.63-2.41 3.32V21H7.75V8Z" />
    </svg>
  );
}

const specialties = [
  "Full-Stack Development",
  "Mobile Applications",
  "API Development",
  "Software Engineering",
];

const quickStats = [
  {
    value: "MERN",
    label: "Full-stack development",
  },
  {
    value: "Android",
    label: "Mobile applications",
  },
  {
    value: "AI/ML",
    label: "Emerging technologies",
  },
];

const expertise = [
  {
    number: "01",
    title: "Full-Stack Web Development",
    description:
      "Responsive interfaces, reusable components, backend logic, API integration, and database-connected applications.",
    tags: ["React", "Next.js", "Node.js", "MongoDB"],
    icon: Globe,
  },
  {
    number: "02",
    title: "Mobile Application Development",
    description:
      "Mobile application development focused on usability, practical functionality, and integration with backend services.",
    tags: ["Android", "Kotlin", "Firebase"],
    icon: Smartphone,
  },
  {
    number: "03",
    title: "Backend & API Development",
    description:
      "Backend features, REST API integration, application logic, data handling, and real-time application functionality.",
    tags: ["Express.js", "REST APIs", "Socket.IO"],
    icon: Code2,
  },
  {
    number: "04",
    title: "Emerging Technologies",
    description:
      "Exploring intelligent applications, data-driven solutions, automation, and modern software engineering practices.",
    tags: ["AI/ML", "Data", "Automation"],
    icon: Laptop,
  },
];

const services = [
  {
    number: "01",
    title: "Full-Stack Web Development",
    description:
      "Responsive websites and web applications built with modern frontend and backend technologies.",
    icon: Globe,
    features: [
      "Responsive website development",
      "Frontend and backend implementation",
      "REST API integration",
      "Database integration",
    ],
  },
  {
    number: "02",
    title: "Frontend Development",
    description:
      "Modern user interfaces designed to be accessible, responsive, and straightforward to use.",
    icon: Code2,
    features: [
      "React interfaces",
      "Next.js development",
      "Responsive UI implementation",
      "Interface improvements",
    ],
  },
  {
    number: "03",
    title: "Android Development",
    description:
      "Android application features with attention to usability, application logic, and service integration.",
    icon: Smartphone,
    features: [
      "Android application features",
      "Mobile interface development",
      "Firebase integration",
      "API integration",
    ],
  },
  {
    number: "04",
    title: "Maintenance & Bug Fixing",
    description:
      "Practical assistance with existing applications, debugging, feature enhancements, and responsive design.",
    icon: Wrench,
    features: [
      "Application debugging",
      "Bug fixing",
      "Responsive design fixes",
      "Feature enhancements",
    ],
  },
];

const blogTopics = [
  {
    category: "Full-Stack Development",
    title: "Building Maintainable Web Applications",
    description:
      "Notes on component design, application structure, API integration, and maintainable code.",
    status: "Coming soon",
  },
  {
    category: "Mobile Development",
    title: "Lessons from Android Development",
    description:
      "Practical learning notes about Android applications, mobile interfaces, and integration.",
    status: "Coming soon",
  },
  {
    category: "Developer Journey",
    title: "Learning Through Real Projects",
    description:
      "Experiences, technical challenges, debugging approaches, and lessons from software projects.",
    status: "Coming soon",
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-10">
      <p className="text-sm font-medium uppercase tracking-[0.22em] text-sky-300">
        {eyebrow}
      </p>

      <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

/**
 * Shared CV button.
 *
 * Uses NEXT_PUBLIC_CV_URL instead of a local PDF file.
 * Configure this environment variable with your working
 * Google Drive direct-download URL.
 */

function CvDownloadButton({
  children = "Download my CV",
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  if (!cvUrl) {
    return (
      <span
        className={`inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-sm text-slate-500 ${className}`}
        title="Configure NEXT_PUBLIC_CV_URL in your environment"
      >
        <Download size={17} aria-hidden="true" />
        CV temporarily unavailable
      </span>
    );
  }

  return (
    <a
      href={cvUrl}
      download="Mohomed-Iqbal-Mohomed-Sajid-CV.pdf"
      className={className}
    >
      <Download size={17} aria-hidden="true" />
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#070b14] text-white">
      {/* ================================================== */}
      {/* AMBIENT BACKGROUND                                 */}
      {/* ================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -left-48 top-0 h-[500px] w-[500px] rounded-full bg-sky-500/[0.09] blur-[130px]" />

        <div className="absolute -right-48 top-48 h-[450px] w-[450px] rounded-full bg-indigo-500/[0.10] blur-[130px]" />

        <div className="absolute left-1/2 top-[1100px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/[0.04] blur-[140px]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.035)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
      </div>

      {/* ================================================== */}
      {/* NAVIGATION                                         */}
      {/* ================================================== */}

      <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-sky-300/15 bg-[#0b1220]/85 px-4 py-3 shadow-[0_0_30px_rgba(56,189,248,0.04)] backdrop-blur-2xl transition-colors duration-300 hover:border-sky-300/30 sm:px-6 sm:py-4"
        >
          <Link
            href="#home"
            aria-label="Sajid.dev home"
            className="group flex shrink-0 items-center gap-2"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-sky-300/20 bg-sky-400/10 text-sm font-bold text-sky-300 transition group-hover:border-sky-300/50 group-hover:bg-sky-400/20">
              S.
            </span>

            <span className="text-lg font-semibold tracking-tight">
              Sajid
              <span className="bg-gradient-to-r from-sky-300 to-blue-400 bg-clip-text text-transparent">
                .dev
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-5 text-sm text-slate-400 lg:flex xl:gap-7">
            <Link
              className="transition hover:text-sky-300"
              href="#home"
            >
              Home
            </Link>

            <Link
              className="transition hover:text-sky-300"
              href="#about"
            >
              About
            </Link>

            <Link
              className="transition hover:text-sky-300"
              href="#expertise"
            >
              Expertise
            </Link>

            <Link
              className="transition hover:text-sky-300"
              href="#projects"
            >
              Projects
            </Link>

            <Link
              className="transition hover:text-sky-300"
              href="#services"
            >
              Services
            </Link>

            <Link
              className="transition hover:text-sky-300"
              href="#blog"
            >
              Blog
            </Link>

            <Link
              className="transition hover:text-sky-300"
              href="#contact"
            >
              Contact
            </Link>
          </div>

          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl border border-sky-400/30 bg-sky-400/[0.09] px-3 py-2.5 text-xs font-medium text-sky-200 transition hover:border-sky-300/60 hover:bg-sky-400/[0.16] sm:px-4 sm:text-sm"
          >
            Hire Me
            <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </nav>
      </header>

      {/* ================================================== */}
      {/* HERO                                               */}
      {/* ================================================== */}

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
            applications, mobile experiences, and practical software
            solutions that turn ideas into useful products.
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

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
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

            <CvDownloadButton className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-medium text-white transition hover:border-white/20 hover:bg-white/[0.07]" />

            <a
              href={SITE_CONFIG.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-medium text-white transition hover:border-white/20 hover:bg-white/[0.07]"
            >
              <GithubIcon size={17} aria-hidden="true" />
              GitHub
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
              <LinkedinIcon size={15} aria-hidden="true" />
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
              <div className="relative mx-auto flex h-40 w-40 items-center justify-center overflow-hidden rounded-[2rem] border border-sky-300/20 bg-gradient-to-br from-sky-400/20 via-blue-500/10 to-indigo-500/20 shadow-2xl shadow-sky-500/[0.08] sm:h-48 sm:w-48">
                {profileImageUrl ? (
                  <img
                    src={profileImageUrl}
                    alt="Sajid's professional profile photograph"
                    className="h-full w-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <span className="bg-gradient-to-br from-white via-sky-200 to-blue-400 bg-clip-text text-6xl font-semibold tracking-tighter text-transparent">
                    S.
                  </span>
                )}

                <span className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#101a2b]/90 text-sky-300 shadow-xl backdrop-blur">
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

      {/* ================================================== */}
      {/* ABOUT                                              */}
      {/* ================================================== */}

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
              <span className="block text-slate-500">
                working software.
              </span>
            </h2>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={SITE_CONFIG.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-200 transition hover:border-sky-300/30 hover:text-sky-300"
              >
                <LinkedinIcon size={16} aria-hidden="true" />
                LinkedIn
                <ExternalLink size={13} aria-hidden="true" />
              </a>

              <CvDownloadButton className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-200 transition hover:border-sky-300/30 hover:text-sky-300" />
            </div>
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
              I&apos;m continuously developing my skills by exploring new
              tools and building practical projects.
            </p>

            <p>
              I also value collaboration, maintainable code, practical
              problem-solving, and creating applications that address
              genuine user needs.
            </p>

            <p>
              My goal is to continue growing as a software engineer while
              contributing to useful products, working with technology
              teams, and helping clients turn their ideas into working
              software.
            </p>

            {/* Optional personal introduction video */}

            <div className="mt-8 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-400/10 text-sky-300">
                  <BookOpen size={20} aria-hidden="true" />
                </span>

                <div>
                  <h3 className="font-medium text-white">
                    My developer journey
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    A personal introduction video can be added here when
                    it is ready. No placeholder video is presented as
                    actual personal footage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* EXPERTISE                                          */}
      {/* ================================================== */}

      <section
        id="expertise"
        className="scroll-mt-28 px-5 py-20 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="What I work with"
            title="Areas of expertise"
            description="A growing toolkit for designing, building, and improving digital products."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {expertise.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className="group rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-300/25 hover:bg-sky-300/[0.035]"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium tracking-[0.2em] text-sky-300/70">
                      {item.number}
                    </span>

                    <Icon
                      size={20}
                      className="text-sky-300 transition-transform duration-300 group-hover:scale-110"
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="mt-6 text-lg font-semibold leading-7">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
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
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* PROJECTS                                           */}
      {/* ================================================== */}

      <section
        id="projects"
        className="scroll-mt-28 px-5 py-20 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Selected work"
            title="Projects that bring ideas to life."
            description="Explore academic, personal, and professional work as project details, screenshots, demonstrations, and source-code links are added."
          />

          <div className="grid gap-5 md:grid-cols-3">
            {/* Academic projects */}

            <article className="group rounded-[1.75rem] border border-white/[0.08] bg-gradient-to-br from-sky-400/[0.07] to-transparent p-7 transition duration-300 hover:-translate-y-1 hover:border-sky-300/25 sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-300/20 bg-sky-400/10 text-sky-300">
                <BookOpen size={22} aria-hidden="true" />
              </div>

              <p className="mt-6 text-xs font-medium uppercase tracking-[0.2em] text-sky-300">
                Category 01
              </p>

              <h3 className="mt-3 text-xl font-semibold">
                Academic Projects
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                University projects demonstrating software development,
                technical implementation, teamwork, and problem-solving.
              </p>

              <div className="mt-6 flex items-center gap-2 text-sm text-slate-500">
                <span>Project details to be added</span>
                <ArrowRight
                  size={15}
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1"
                />
              </div>
            </article>

            {/* Personal projects */}

            <article className="group rounded-[1.75rem] border border-white/[0.08] bg-gradient-to-br from-indigo-400/[0.07] to-transparent p-7 transition duration-300 hover:-translate-y-1 hover:border-indigo-300/25 sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-indigo-300/20 bg-indigo-400/10 text-indigo-300">
                <Code2 size={22} aria-hidden="true" />
              </div>

              <p className="mt-6 text-xs font-medium uppercase tracking-[0.2em] text-indigo-300">
                Category 02
              </p>

              <h3 className="mt-3 text-xl font-semibold">
                Personal Projects
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Independent applications, technical experiments, and
                practical projects developed to strengthen engineering
                skills.
              </p>

              <div className="mt-6 flex items-center gap-2 text-sm text-slate-500">
                <span>Project details to be added</span>
                <ArrowRight
                  size={15}
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1"
                />
              </div>
            </article>

            {/* Professional projects */}

            <article className="group rounded-[1.75rem] border border-white/[0.08] bg-gradient-to-br from-emerald-400/[0.06] to-transparent p-7 transition duration-300 hover:-translate-y-1 hover:border-emerald-300/25 sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-300/20 bg-emerald-400/10 text-emerald-300">
                <BriefcaseBusiness size={22} aria-hidden="true" />
              </div>

              <p className="mt-6 text-xs font-medium uppercase tracking-[0.2em] text-emerald-300">
                Category 03
              </p>

              <h3 className="mt-3 text-xl font-semibold">
                Professional Work
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Selected professional work described only where disclosure
                is permitted, without revealing confidential employer or
                client information.
              </p>

              <div className="mt-6 flex items-center gap-2 text-sm text-slate-500">
                <span>Approved details to be added</span>
                <ArrowRight
                  size={15}
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1"
                />
              </div>
            </article>
          </div>

          <div className="mt-8 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 sm:p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-medium text-white">
                  Explore my source code
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Visit my GitHub profile to explore available repositories.
                </p>
              </div>

              <a
                href={SITE_CONFIG.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-medium transition hover:border-sky-300/30 hover:text-sky-300"
              >
                <GithubIcon size={17} aria-hidden="true" />
                GitHub repositories
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* SERVICES                                           */}
      {/* ================================================== */}

      <section
        id="services"
        className="scroll-mt-28 px-5 py-20 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="How I can help"
            title="Software development services"
            description="Practical development assistance for individuals, students, startups, and businesses looking to build or improve software."
          />

          <div className="grid gap-5 md:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.number}
                  className="rounded-[1.75rem] border border-white/[0.08] bg-white/[0.025] p-6 transition duration-300 hover:border-sky-300/25 hover:bg-white/[0.04] sm:p-8"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-sky-300/20 bg-sky-400/10 text-sky-300">
                      <Icon size={22} aria-hidden="true" />
                    </div>

                    <div>
                      <p className="text-xs font-medium tracking-[0.2em] text-sky-300/70">
                        SERVICE {service.number}
                      </p>

                      <h3 className="mt-2 text-xl font-semibold">
                        {service.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-slate-400">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <ul className="mt-6 space-y-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm text-slate-400"
                      >
                        <CheckCircle2
                          size={17}
                          className="mt-0.5 shrink-0 text-sky-300"
                          aria-hidden="true"
                        />

                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="#contact"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-sky-300 transition hover:text-sky-200"
                  >
                    Discuss a project
                    <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                </article>
              );
            })}
          </div>

          <div className="mt-8 rounded-[1.75rem] border border-sky-300/15 bg-gradient-to-br from-sky-400/[0.07] to-indigo-400/[0.04] p-7 sm:p-10">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-300">
                  Let&apos;s collaborate
                </p>

                <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">
                  Have a project in mind?
                </h3>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
                  Tell me about your requirements, goals, and timeline.
                  We can discuss an appropriate approach for your project.
                </p>
              </div>

              <Link
                href="#contact"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
              >
                Start a conversation
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* BLOG                                               */}
      {/* ================================================== */}

      <section
        id="blog"
        className="scroll-mt-28 px-5 py-20 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Ideas and learning"
            title="Notes from my developer journey."
            description="A future home for technical articles, project lessons, tutorials, and experiences from building software."
          />

          <div className="grid gap-5 md:grid-cols-3">
            {blogTopics.map((article, index) => (
              <article
                key={article.title}
                className="rounded-[1.75rem] border border-white/[0.08] bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-300/25 sm:p-7"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full border border-sky-300/15 bg-sky-300/[0.06] px-3 py-1.5 text-xs text-sky-300">
                    {article.category}
                  </span>

                  <BookOpen
                    size={18}
                    className="shrink-0 text-slate-500"
                    aria-hidden="true"
                  />
                </div>

                <p className="mt-7 text-xs uppercase tracking-[0.2em] text-slate-500">
                  ARTICLE 0{index + 1}
                </p>

                <h3 className="mt-3 text-xl font-semibold leading-7">
                  {article.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {article.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-xs text-slate-500">
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-300" />
                  {article.status}
                </div>
              </article>
            ))}
          </div>

          <p className="mt-7 text-center text-sm text-slate-500">
            These are planned article topics, not published articles.
          </p>
        </div>
      </section>

      {/* ================================================== */}
      {/* CONTACT                                            */}
      {/* ================================================== */}

      <section
        id="contact"
        className="scroll-mt-28 px-5 py-20 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-sky-300/15 bg-gradient-to-br from-sky-400/[0.08] via-transparent to-indigo-400/[0.06] p-7 sm:p-12 lg:p-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-sky-300">
              Let&apos;s connect
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
              Let&apos;s build something meaningful.
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
              I&apos;m interested in software engineering opportunities,
              freelance projects, collaboration, and conversations about
              technology.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-3">
            <a
              href={SITE_CONFIG.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 transition hover:border-sky-300/25 hover:bg-white/[0.05]"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-400/10 text-sky-300">
                <LinkedinIcon size={20} aria-hidden="true" />
              </span>

              <span>
                <span className="block text-sm font-medium text-white">
                  LinkedIn
                </span>

                <span className="mt-1 block text-xs text-slate-500">
                  Professional network
                </span>
              </span>

              <ArrowUpRight
                size={15}
                className="ml-auto text-slate-500 transition group-hover:text-sky-300"
                aria-hidden="true"
              />
            </a>

            <a
              href={SITE_CONFIG.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 transition hover:border-sky-300/25 hover:bg-white/[0.05]"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-400/10 text-sky-300">
                <GithubIcon size={20} aria-hidden="true" />
              </span>

              <span>
                <span className="block text-sm font-medium text-white">
                  GitHub
                </span>

                <span className="mt-1 block text-xs text-slate-500">
                  Code and repositories
                </span>
              </span>

              <ArrowUpRight
                size={15}
                className="ml-auto text-slate-500 transition group-hover:text-sky-300"
                aria-hidden="true"
              />
            </a>

            <a
              href={cvUrl || undefined}
              target={cvUrl ? "_blank" : undefined}
              rel={cvUrl ? "noopener noreferrer" : undefined}
              className={`group flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 transition ${
                cvUrl
                  ? "hover:border-sky-300/25 hover:bg-white/[0.05]"
                  : "cursor-not-allowed opacity-50"
              }`}
              aria-label={
                cvUrl ? "Open CV download" : "CV link is not configured"
              }
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-400/10 text-sky-300">
                <Download size={20} aria-hidden="true" />
              </span>

              <span>
                <span className="block text-sm font-medium text-white">
                  My CV
                </span>

                <span className="mt-1 block text-xs text-slate-500">
                  {cvUrl ? "View or download" : "Not configured"}
                </span>
              </span>

              {cvUrl && (
                <ArrowUpRight
                  size={15}
                  className="ml-auto text-slate-500 transition group-hover:text-sky-300"
                  aria-hidden="true"
                />
              )}
            </a>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-slate-500">
              Prefer to start with a conversation?
            </p>

            <p className="mt-2 text-sm leading-7 text-slate-400">
              Connect through LinkedIn to discuss opportunities, software
              projects, or collaboration.
            </p>

            <a
              href={SITE_CONFIG.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
            >
              Let&apos;s talk
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* FOOTER                                             */}
      {/* ================================================== */}

      <footer className="mt-auto border-t border-white/[0.07] px-5 py-7 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center text-xs text-slate-500 sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} {SITE_CONFIG.name}. Built with care.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5">
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

            <Link
              href="#home"
              className="transition hover:text-sky-300"
            >
              Back to top
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}