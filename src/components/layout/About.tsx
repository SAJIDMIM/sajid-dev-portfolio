import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  GraduationCap,
  Code2,
  Smartphone,
  Server,
  Palette,
  Lightbulb,
  Target,
  Users,
  TrendingUp,
  Sparkles,
  CheckCircle2,
  Globe,
  Layers3,
} from "lucide-react";

const expertise = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "Building modern, responsive, and scalable web applications with clean architecture and user-focused interfaces.",
    technologies: ["React", "Next.js", "Node.js", "MongoDB"],
    color: "blue",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Developing practical mobile experiences with modern Android technologies and seamless backend integration.",
    technologies: ["Kotlin", "Android", "Firebase"],
    color: "violet",
  },
  {
    icon: Server,
    title: "Backend & API Development",
    description:
      "Designing reliable backend services, REST APIs, and data-driven solutions for modern applications.",
    technologies: ["Express.js", "Spring Boot", "REST APIs"],
    color: "cyan",
  },
  {
    icon: Palette,
    title: "UI/UX Implementation",
    description:
      "Transforming ideas and designs into polished, accessible, and responsive digital experiences.",
    technologies: ["Figma", "Tailwind CSS", "Responsive Design"],
    color: "indigo",
  },
];

const technologies = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "Spring Boot", "REST APIs"],
  },
  {
    category: "Mobile",
    items: ["Kotlin", "Android", "Firebase"],
  },
  {
    category: "Database & Tools",
    items: ["MongoDB", "MySQL", "GitHub", "Postman", "Figma"],
  },
];

const journey = [
  {
    icon: BriefcaseBusiness,
    period: "2025 – 2026",
    title: "Software Engineer Intern",
    organization: "Gamage Recruiters (Pvt) Ltd",
    description:
      "Contributed to full-stack web development projects, working across frontend interfaces, backend functionality, API integration, and responsive application development.",
    color: "blue",
  },
  {
    icon: BriefcaseBusiness,
    period: "Professional Experience",
    title: "IT Operations",
    organization: "Ratna Pearl The Grand",
    description:
      "Gained practical experience in IT operations, technical support, hardware and software troubleshooting, network administration, and Microsoft 365 support.",
    color: "violet",
  },
  {
    icon: GraduationCap,
    period: "Academic Background",
    title: "BSc (Hons) Computing",
    organization: "National Institute of Business Management (NIBM)",
    description:
      "Developing a strong academic foundation in software engineering, computing principles, application development, and emerging technologies.",
    color: "cyan",
  },
];

const approach = [
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description:
      "Breaking complex challenges into practical and effective solutions.",
  },
  {
    icon: Target,
    title: "Quality Focus",
    description:
      "Prioritising clean code, performance, usability, and maintainability.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Communicating effectively and contributing to team success.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Growth",
    description:
      "Learning new technologies and improving through practical experience.",
  },
];

const exploring = [
  "Artificial Intelligence",
  "Machine Learning",
  "Cloud Computing",
  "DevOps & CI/CD",
  "Software Architecture",
  "Emerging Technologies",
];

export default function About() {
  return (
    <section
      id="about"
      className="
        relative isolate w-full overflow-hidden
        bg-[var(--background)]
        px-8 py-28
        text-[var(--foreground)]
        max-[900px]:px-6
        max-[900px]:py-24
        max-[600px]:px-5
        max-[600px]:py-20
      "
    >
      {/* =====================================
          BACKGROUND EFFECTS
      ====================================== */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">

        <div
          className="
            absolute -left-48 top-[10%]
            h-[450px] w-[450px]
            rounded-full
            bg-blue-500/[0.08]
            blur-[120px]
          "
        />

        <div
          className="
            absolute -right-48 top-[35%]
            h-[500px] w-[500px]
            rounded-full
            bg-indigo-500/[0.08]
            blur-[130px]
          "
        />

        <div
          className="
            absolute bottom-0 left-[30%]
            h-[400px] w-[400px]
            rounded-full
            bg-cyan-500/[0.06]
            blur-[120px]
          "
        />

        <div
          className="
            absolute inset-0
            bg-[linear-gradient(to_right,rgba(100,116,139,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(100,116,139,0.035)_1px,transparent_1px)]
            bg-[size:65px_65px]
            [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]
          "
        />

      </div>

      {/* =====================================
          MAIN CONTAINER
      ====================================== */}

      <div className="relative z-10 mx-auto w-full max-w-[1240px]">

        {/* =====================================
            SECTION HEADING
        ====================================== */}

        <div className="mb-20 text-center max-[600px]:mb-14">

          <div
            className="
              mb-5 inline-flex items-center gap-2
              rounded-full
              border border-blue-500/25
              bg-blue-500/[0.06]
              px-4 py-2
              text-xs font-bold
              tracking-wide
              text-blue-600
              dark:text-blue-400
            "
          >
            <Sparkles size={14} />

            GET TO KNOW ME

          </div>

          <h2
            className="
              mb-5 text-[clamp(36px,5vw,58px)]
              font-black tracking-[-2px]
            "
          >
            About{" "}
            <span
              className="
                bg-gradient-to-r
                from-blue-600 via-cyan-500 to-indigo-500
                bg-clip-text text-transparent
              "
            >
              Me
            </span>
          </h2>

          <p
            className="
              mx-auto max-w-[680px]
              text-[15px] leading-[1.9]
              text-[var(--muted)]
              max-[600px]:text-sm
            "
          >
            A little about my journey, technical interests, professional
            experience, and passion for creating meaningful digital solutions.
          </p>

        </div>

        {/* =====================================
            INTRODUCTION
        ====================================== */}

        <div
          className="
            mb-28 grid
            grid-cols-[0.85fr_1.15fr]
            items-center gap-16
            max-[1000px]:grid-cols-1
            max-[1000px]:gap-12
            max-[1000px]:justify-items-center
            max-[600px]:mb-20
          "
        >

          {/* PROFILE IMAGE */}

          <div
            className="
              relative mx-auto w-full max-w-[380px]
            "
          >

            {/* Decorative Glow */}

            <div
              className="
                absolute -inset-5
                rounded-[40px]
                bg-gradient-to-br
                from-blue-500/20 via-cyan-400/10 to-violet-500/20
                blur-2xl
              "
            />

            {/* Image Frame */}

            <div
              className="
                relative isolate
                aspect-[0.88/1]
                overflow-hidden
                rounded-[30px]
                border border-[var(--border)]
                bg-[var(--surface)]
                p-[3px]
                shadow-[0_25px_80px_rgba(37,99,235,0.12)]
              "
            >

              <Image
                src="/images/profile/sajid.webp"
                alt="Mohomed Sajid - Software Engineer"
                fill
                sizes="(max-width: 600px) 85vw, 380px"
                className="
                  rounded-[27px]
                  object-cover object-top
                  transition-transform duration-700
                  hover:scale-[1.04]
                "
              />

            </div>

            {/* Floating Experience Card */}

            <div
              className="
                absolute -bottom-6 -right-8
                flex items-center gap-3
                rounded-2xl
                border border-[var(--border)]
                bg-[var(--surface)]
                px-5 py-4
                shadow-xl
                backdrop-blur-xl
                max-[600px]:-right-2
              "
            >

              <div
                className="
                  flex h-11 w-11 items-center justify-center
                  rounded-xl
                  bg-blue-500/10
                  text-blue-500
                "
              >
                <Code2 size={23} />
              </div>

              <div>
                <p className="text-sm font-extrabold">
                  Software Engineer
                </p>

                <p className="mt-1 text-[11px] text-[var(--muted)]">
                  Web & Mobile Development
                </p>
              </div>

            </div>

          </div>

          {/* INTRODUCTION TEXT */}

          <div className="w-full max-w-[680px]">

            <span
              className="
                mb-4 block
                text-xs font-extrabold
                tracking-[2.5px]
                text-blue-500
              "
            >
              WHO I AM
            </span>

            <h3
              className="
                mb-6 text-[clamp(27px,3.5vw,40px)]
                leading-[1.2]
                font-extrabold
                tracking-tight
              "
            >
              Building Digital Experiences
              <span className="block text-indigo-500">
                Through Technology.
              </span>
            </h3>

            <div
              className="
                space-y-5
                text-[15px]
                leading-[1.95]
                text-[var(--muted)]
                max-[600px]:text-sm
              "
            >

              <p>
                Hello! I'm <strong className="text-[var(--foreground)]">
                  Mohomed Sajid
                </strong>, a Software Engineer passionate about
                designing and developing modern digital solutions.
              </p>

              <p>
                My interests span full-stack web development, mobile
                application development, backend engineering, and
                creating intuitive user experiences. I enjoy transforming
                ideas into practical applications that solve real-world
                problems.
              </p>

              <p>
                Through academic projects and professional experience,
                I have developed practical skills in building responsive
                applications, integrating APIs, working with databases,
                and collaborating on software development projects.
              </p>

              <p>
                I'm continuously exploring new technologies, improving
                my engineering skills, and looking for opportunities to
                contribute to meaningful software projects.
              </p>

            </div>

            {/* HIGHLIGHTS */}

            <div
              className="
                mt-8 grid grid-cols-2 gap-4
                max-[600px]:grid-cols-1
              "
            >

              <div
                className="
                  flex items-center gap-3
                  rounded-xl
                  border border-[var(--border)]
                  bg-[var(--surface)]
                  p-4
                "
              >
                <GraduationCap
                  size={23}
                  className="shrink-0 text-blue-500"
                />

                <div>
                  <p className="text-sm font-bold">
                    BSc (Hons) Computing
                  </p>

                  <p className="text-xs text-[var(--muted)]">
                    NIBM
                  </p>
                </div>

              </div>

              <div
                className="
                  flex items-center gap-3
                  rounded-xl
                  border border-[var(--border)]
                  bg-[var(--surface)]
                  p-4
                "
              >
                <Globe
                  size={23}
                  className="shrink-0 text-indigo-500"
                />

                <div>
                  <p className="text-sm font-bold">
                    Web & Mobile
                  </p>

                  <p className="text-xs text-[var(--muted)]">
                    Application Development
                  </p>
                </div>

              </div>

            </div>

            {/* CONTACT BUTTON */}

            <Link
              href="#contact"
              className="
                group mt-8 inline-flex
                items-center gap-3
                rounded-xl
                bg-gradient-to-r
                from-blue-600 to-indigo-600
                px-6 py-4
                text-sm font-bold text-white
                shadow-[0_8px_25px_rgba(37,99,235,0.20)]
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-[0_12px_35px_rgba(37,99,235,0.35)]
              "
            >

              Let's Connect

              <ArrowUpRight
                size={18}
                className="
                  transition-transform duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />

            </Link>

          </div>

        </div>

        {/* =====================================
            PROFESSIONAL JOURNEY
        ====================================== */}

        <div className="mb-28 max-[600px]:mb-20">

          <div className="mb-12 text-center">

            <span
              className="
                mb-4 block
                text-xs font-extrabold
                tracking-[2.5px]
                text-blue-500
              "
            >
              MY BACKGROUND
            </span>

            <h3 className="text-3xl font-black tracking-tight">
              Professional Journey
            </h3>

            <p className="mx-auto mt-4 max-w-[600px] text-sm leading-relaxed text-[var(--muted)]">
              My academic background and practical experience
              have shaped my approach to technology and software engineering.
            </p>

          </div>

          <div className="relative mx-auto max-w-[850px]">

            {/* Timeline Line */}

            <div
              className="
                absolute bottom-8 left-[27px] top-8
                w-px
                bg-gradient-to-b
                from-blue-500/60 via-indigo-500/40 to-cyan-500/10
                max-[600px]:left-[19px]
              "
            />

            <div className="space-y-7">

              {journey.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="
                      relative grid
                      grid-cols-[56px_1fr]
                      gap-6
                      max-[600px]:grid-cols-[40px_1fr]
                      max-[600px]:gap-4
                    "
                  >

                    {/* Timeline Icon */}

                    <div
                      className="
                        relative z-10
                        flex h-14 w-14
                        items-center justify-center
                        rounded-2xl
                        border border-blue-500/25
                        bg-[var(--surface)]
                        text-blue-500
                        shadow-lg
                        max-[600px]:h-10
                        max-[600px]:w-10
                        max-[600px]:rounded-xl
                      "
                    >
                      <Icon size={21} />
                    </div>

                    {/* Timeline Card */}

                    <div
                      className="
                        rounded-2xl
                        border border-[var(--border)]
                        bg-[var(--surface)]
                        p-6
                        shadow-[0_10px_35px_rgba(15,23,42,0.04)]
                        transition-all duration-300
                        hover:-translate-y-1
                        hover:border-blue-500/30
                        hover:shadow-[0_15px_40px_rgba(37,99,235,0.08)]
                        max-[600px]:p-5
                      "
                    >

                      <span
                        className="
                          mb-3 inline-block
                          rounded-full
                          bg-blue-500/10
                          px-3 py-1
                          text-[10px] font-extrabold
                          tracking-wide
                          text-blue-500
                        "
                      >
                        {item.period}
                      </span>

                      <h4 className="text-lg font-extrabold">
                        {item.title}
                      </h4>

                      <p className="mt-1 text-sm font-semibold text-indigo-500">
                        {item.organization}
                      </p>

                      <p
                        className="
                          mt-4 text-sm
                          leading-[1.85]
                          text-[var(--muted)]
                        "
                      >
                        {item.description}
                      </p>

                    </div>

                  </div>
                );
              })}

            </div>

          </div>

        </div>

        {/* =====================================
            TECHNICAL EXPERTISE
        ====================================== */}

        <div className="mb-28 max-[600px]:mb-20">

          <div className="mb-12 text-center">

            <span
              className="
                mb-4 block
                text-xs font-extrabold
                tracking-[2.5px]
                text-blue-500
              "
            >
              WHAT I DO
            </span>

            <h3 className="text-3xl font-black tracking-tight">
              Technical Expertise
            </h3>

            <p className="mx-auto mt-4 max-w-[600px] text-sm leading-relaxed text-[var(--muted)]">
              Combining technical knowledge and practical development
              experience to build modern digital solutions.
            </p>

          </div>

          <div
            className="
              grid grid-cols-2 gap-6
              max-[750px]:grid-cols-1
            "
          >

            {expertise.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="
                    group relative overflow-hidden
                    rounded-2xl
                    border border-[var(--border)]
                    bg-[var(--surface)]
                    p-7
                    transition-all duration-300
                    hover:-translate-y-2
                    hover:border-blue-500/30
                    hover:shadow-[0_20px_50px_rgba(37,99,235,0.08)]
                    max-[600px]:p-6
                  "
                >

                  {/* Decorative Glow */}

                  <div
                    className="
                      pointer-events-none absolute
                      -right-20 -top-20
                      h-48 w-48
                      rounded-full
                      bg-blue-500/[0.06]
                      blur-[65px]
                      transition-all duration-500
                      group-hover:bg-blue-500/[0.12]
                    "
                  />

                  <div className="relative z-10">

                    <div
                      className="
                        mb-6 flex h-14 w-14
                        items-center justify-center
                        rounded-2xl
                        border border-blue-500/20
                        bg-blue-500/[0.08]
                        text-blue-500
                        transition-transform duration-300
                        group-hover:scale-110
                      "
                    >
                      <Icon size={26} />
                    </div>

                    <h4 className="mb-3 text-xl font-extrabold">
                      {item.title}
                    </h4>

                    <p className="mb-6 text-sm leading-[1.9] text-[var(--muted)]">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2">

                      {item.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="
                            rounded-lg
                            border border-[var(--border)]
                            bg-[var(--surface-secondary)]
                            px-3 py-2
                            text-[11px] font-semibold
                            text-[var(--muted)]
                          "
                        >
                          {technology}
                        </span>
                      ))}

                    </div>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

        {/* =====================================
            TECHNOLOGY STACK
        ====================================== */}

        <div className="mb-28 max-[600px]:mb-20">

          <div className="mb-12 text-center">

            <span
              className="
                mb-4 block
                text-xs font-extrabold
                tracking-[2.5px]
                text-blue-500
              "
            >
              MY TOOLKIT
            </span>

            <h3 className="text-3xl font-black tracking-tight">
              Technologies I Work With
            </h3>

            <p className="mx-auto mt-4 max-w-[600px] text-sm leading-relaxed text-[var(--muted)]">
              Tools and technologies I use to develop, integrate,
              and maintain software solutions.
            </p>

          </div>

          <div className="grid grid-cols-2 gap-5 max-[750px]:grid-cols-1">

            {technologies.map((group) => (
              <div
                key={group.category}
                className="
                  rounded-2xl
                  border border-[var(--border)]
                  bg-[var(--surface)]
                  p-6
                  transition-all duration-300
                  hover:border-indigo-500/30
                "
              >

                <div className="mb-5 flex items-center gap-3">

                  <Layers3
                    size={21}
                    className="text-indigo-500"
                  />

                  <h4 className="font-extrabold">
                    {group.category}
                  </h4>

                </div>

                <div className="flex flex-wrap gap-2.5">

                  {group.items.map((technology) => (
                    <span
                      key={technology}
                      className="
                        inline-flex items-center gap-2
                        rounded-lg
                        border border-[var(--border)]
                        bg-[var(--surface-secondary)]
                        px-3 py-2.5
                        text-xs font-semibold
                        text-[var(--foreground)]
                        transition-all duration-200
                        hover:border-blue-500/40
                        hover:bg-blue-500/[0.06]
                      "
                    >
                      <CheckCircle2
                        size={13}
                        className="text-emerald-500"
                      />

                      {technology}

                    </span>
                  ))}

                </div>

              </div>
            ))}

          </div>

        </div>

        {/* =====================================
            PROFESSIONAL APPROACH
        ====================================== */}

        <div className="mb-28 max-[600px]:mb-20">

          <div className="mb-12 text-center">

            <span
              className="
                mb-4 block
                text-xs font-extrabold
                tracking-[2.5px]
                text-blue-500
              "
            >
              HOW I WORK
            </span>

            <h3 className="text-3xl font-black tracking-tight">
              My Professional Approach
            </h3>

          </div>

          <div className="grid grid-cols-4 gap-5 max-[900px]:grid-cols-2 max-[500px]:grid-cols-1">

            {approach.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="
                    rounded-2xl
                    border border-[var(--border)]
                    bg-[var(--surface)]
                    p-6
                    text-center
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-blue-500/30
                  "
                >

                  <div
                    className="
                      mx-auto mb-5
                      flex h-14 w-14
                      items-center justify-center
                      rounded-2xl
                      bg-indigo-500/[0.08]
                      text-indigo-500
                    "
                  >
                    <Icon size={25} />
                  </div>

                  <h4 className="mb-3 font-extrabold">
                    {item.title}
                  </h4>

                  <p className="text-xs leading-[1.8] text-[var(--muted)]">
                    {item.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

        {/* =====================================
            CURRENTLY EXPLORING
        ====================================== */}

        <div
          className="
            relative overflow-hidden
            rounded-[28px]
            border border-blue-500/20
            bg-gradient-to-br
            from-blue-500/[0.08]
            via-indigo-500/[0.05]
            to-cyan-500/[0.08]
            p-10
            max-[600px]:rounded-2xl
            max-[600px]:p-6
          "
        >

          <div className="relative z-10">

            <div className="mb-7 flex items-center gap-3">

              <div
                className="
                  flex h-12 w-12
                  items-center justify-center
                  rounded-xl
                  bg-blue-500/10
                  text-blue-500
                "
              >
                <Sparkles size={24} />
              </div>

              <div>

                <span
                  className="
                    text-[10px] font-extrabold
                    tracking-[2px]
                    text-blue-500
                  "
                >
                  ALWAYS LEARNING
                </span>

                <h3 className="mt-1 text-2xl font-black">
                  Currently Exploring
                </h3>

              </div>

            </div>

            <p className="mb-8 max-w-[650px] text-sm leading-[1.9] text-[var(--muted)]">
              Technology never stands still. I'm continuously expanding
              my knowledge and exploring new areas of software engineering
              to build better, more scalable, and innovative solutions.
            </p>

            <div className="flex flex-wrap gap-3">

              {exploring.map((item) => (
                <span
                  key={item}
                  className="
                    rounded-xl
                    border border-blue-500/20
                    bg-[var(--surface)]
                    px-4 py-3
                    text-xs font-bold
                    text-[var(--foreground)]
                    shadow-sm
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-blue-500/50
                  "
                >
                  {item}
                </span>
              ))}

            </div>

          </div>

        </div>

        {/* =====================================
            FINAL CALL TO ACTION
        ====================================== */}

        <div className="mt-24 text-center max-[600px]:mt-16">

          <div
            className="
              mb-5 inline-flex items-center gap-2
              text-xs font-bold
              tracking-[2px]
              text-indigo-500
            "
          >
            <Sparkles size={15} />

            LET'S WORK TOGETHER

          </div>

          <h3
            className="
              mx-auto mb-5 max-w-[750px]
              text-[clamp(30px,4vw,46px)]
              leading-tight
              font-black
              tracking-tight
            "
          >
            Let's Build Something{" "}
            <span
              className="
                bg-gradient-to-r
                from-blue-600 via-cyan-500 to-indigo-500
                bg-clip-text text-transparent
              "
            >
              Meaningful.
            </span>
          </h3>

          <p
            className="
              mx-auto mb-8 max-w-[580px]
              text-sm leading-[1.9]
              text-[var(--muted)]
            "
          >
            Have an idea, a project, or an opportunity?
            I'd love to connect, exchange ideas, and explore
            how we can create something valuable together.
          </p>

          <Link
            href="#contact"
            className="
              group inline-flex
              items-center gap-3
              rounded-xl
              bg-gradient-to-r
              from-blue-600 to-indigo-600
              px-8 py-4
              text-sm font-bold text-white
              shadow-[0_8px_30px_rgba(37,99,235,0.25)]
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-[0_12px_40px_rgba(37,99,235,0.4)]
            "
          >

            Get In Touch

            <ArrowRight
              size={18}
              className="
                transition-transform duration-300
                group-hover:translate-x-1
              "
            />

          </Link>

        </div>

      </div>

    </section>
  );
}