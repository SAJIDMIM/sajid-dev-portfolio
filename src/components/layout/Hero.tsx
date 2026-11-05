import Image from "next/image";
import Link from "next/link";

import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Sparkles,
  Code2,
  BriefcaseBusiness,
} from "lucide-react";

export default function Hero() {
  const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL;
  const linkedinUrl = process.env.NEXT_PUBLIC_LINKEDIN_URL;
  const cvUrl = process.env.NEXT_PUBLIC_CV_URL;
  const profileImage = process.env.NEXT_PUBLIC_PROFILE_IMAGE_URL;

  return (
    <section
      id="home"
      className="
        relative isolate flex min-h-screen min-h-[100svh] w-full
        items-center justify-center overflow-hidden
        bg-[var(--background)] text-[var(--foreground)]
        px-8 pb-24 pt-32
        max-[1200px]:px-8
        max-[900px]:px-6
        max-[900px]:pb-20
        max-[900px]:pt-32
        max-[600px]:px-5
        max-[600px]:pt-28
      "
    >
      {/* =====================================
          BACKGROUND - PREMIUM GLASSMORPHISM
      ====================================== */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">

        {/* Base Background Gradient */}

        <div
          className="
            absolute inset-0
            bg-[radial-gradient(ellipse_at_15%_15%,rgba(96,165,250,0.16),transparent_42%),radial-gradient(ellipse_at_85%_20%,rgba(129,140,248,0.14),transparent_40%),radial-gradient(ellipse_at_55%_95%,rgba(56,189,248,0.12),transparent_45%)]
          "
        />

        {/* Background Grid */}

        <div
          className="
            absolute inset-0
            bg-[linear-gradient(to_right,rgba(100,116,139,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(100,116,139,0.045)_1px,transparent_1px)]
            bg-[size:65px_65px]
            bg-center
            [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]
            max-[600px]:bg-[size:45px_45px]
          "
        />

        {/* Top Left Blue Glass Glow */}

        <div
          className="
            absolute -left-48 -top-48
            h-[650px] w-[650px]
            animate-pulse
            rounded-full
            bg-blue-400/[0.13]
            blur-[110px]
            [animation-duration:9s]
          "
        />

        {/* Top Right Violet Glass Glow */}

        <div
          className="
            absolute -right-48 -top-40
            h-[600px] w-[600px]
            animate-pulse
            rounded-full
            bg-indigo-400/[0.12]
            blur-[110px]
            [animation-duration:12s]
          "
        />

        {/* Bottom Cyan Glass Glow */}

        <div
          className="
            absolute -bottom-64 left-[25%]
            h-[600px] w-[600px]
            animate-pulse
            rounded-full
            bg-cyan-400/[0.12]
            blur-[120px]
            [animation-duration:11s]
          "
        />

        {/* Large Top Glass Panel */}

        <div
          className="
            absolute -right-[12%] -top-[35%]
            h-[750px] w-[750px]
            rotate-[-28deg]
            rounded-[100px]
            border border-white/60
            bg-gradient-to-br
            from-white/45 via-blue-200/[0.12] to-indigo-300/[0.10]
            shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_20px_80px_rgba(59,130,246,0.05)]
            backdrop-blur-[3px]
          "
        />

        {/* Left Glass Panel */}

        <div
          className="
            absolute -left-[20%] top-[25%]
            h-[480px] w-[850px]
            rotate-[-32deg]
            rounded-[100px]
            border border-white/55
            bg-gradient-to-r
            from-white/35 via-blue-200/[0.13] to-white/10
            shadow-[inset_0_1px_2px_rgba(255,255,255,0.8)]
            backdrop-blur-[5px]
          "
        />

        {/* Bottom Right Glass Panel */}

        <div
          className="
            absolute -bottom-[45%] -right-[10%]
            h-[700px] w-[900px]
            rotate-[-28deg]
            rounded-[120px]
            border border-white/60
            bg-gradient-to-br
            from-cyan-200/[0.15] via-white/25 to-indigo-200/[0.15]
            shadow-[inset_0_1px_2px_rgba(255,255,255,0.7)]
            backdrop-blur-[4px]
          "
        />

        {/* Diagonal Reflection 1 */}

        <div
          className="
            absolute left-[35%] -top-[35%]
            h-[1200px] w-[2px]
            rotate-[35deg]
            bg-gradient-to-b
            from-transparent via-white/80 to-transparent
            opacity-70 blur-[1px]
          "
        />

        {/* Diagonal Reflection 2 */}

        <div
          className="
            absolute right-[25%] -top-[40%]
            h-[1300px] w-[2px]
            rotate-[35deg]
            bg-gradient-to-b
            from-transparent via-white/70 to-transparent
            opacity-60 blur-[1px]
          "
        />

        {/* Horizontal Glass Reflection */}

        <div
          className="
            absolute left-0 top-[42%]
            h-px w-full
            bg-gradient-to-r
            from-transparent via-white/70 to-transparent
            opacity-80
          "
        />

        {/* Blue Glass Orb */}

        <div
          className="
            absolute left-[8%] top-[18%]
            h-32 w-32
            rounded-full
            border border-white/60
            bg-gradient-to-br
            from-white/50 to-blue-300/[0.10]
            shadow-[inset_0_2px_12px_rgba(255,255,255,0.7),0_15px_50px_rgba(59,130,246,0.08)]
            opacity-70 backdrop-blur-xl
          "
        />

        {/* Violet Glass Orb */}

        <div
          className="
            absolute bottom-[16%] right-[8%]
            h-40 w-40
            rounded-full
            border border-white/60
            bg-gradient-to-br
            from-white/45 to-indigo-300/[0.12]
            shadow-[inset_0_2px_12px_rgba(255,255,255,0.7),0_15px_50px_rgba(99,102,241,0.08)]
            opacity-60 backdrop-blur-xl
          "
        />

        {/* Cyan Glass Orb */}

        <div
          className="
            absolute left-[48%] top-[12%]
            h-16 w-16
            rounded-full
            border border-white/70
            bg-gradient-to-br
            from-white/60 to-cyan-300/[0.15]
            shadow-[inset_0_2px_8px_rgba(255,255,255,0.8)]
            opacity-70 backdrop-blur-xl
          "
        />

        {/* Top Gradient Line */}

        <div
          className="
            absolute left-0 top-0
            h-px w-full
            bg-gradient-to-r
            from-transparent via-blue-500/30 to-transparent
          "
        />

      </div>

      {/* =====================================
          MAIN CONTAINER
      ====================================== */}

      <div
        className="
          relative z-10 mx-auto
          grid w-full max-w-[1240px]
          grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]
          items-center
          gap-16
          max-[1200px]:gap-12
          max-[1000px]:grid-cols-[minmax(0,1fr)_minmax(280px,0.85fr)]
          max-[1000px]:gap-9
          max-[900px]:max-w-[700px]
          max-[900px]:grid-cols-1
          max-[900px]:gap-16
        "
      >

        {/* =====================================
            LEFT CONTENT
        ====================================== */}

        <div
          className="
            flex w-full max-w-[650px]
            flex-col items-start justify-center
            max-[900px]:mx-auto
            max-[900px]:items-center
            max-[900px]:text-center
          "
        >

          {/* AVAILABILITY & FREELANCE BADGES */}

          <div
            className="
              mb-7 flex flex-wrap
              items-center gap-3
              max-[900px]:justify-center
              max-[600px]:mb-6
            "
          >

            {/* Availability Badge */}

            <div
              className="
                inline-flex items-center gap-2.5
                rounded-full
                border border-emerald-500/25
                bg-emerald-500/[0.06]
                px-4 py-2.5
                text-xs font-semibold
                text-emerald-700
                transition-all duration-300
                hover:border-emerald-500/50
                hover:bg-emerald-500/[0.10]
              "
            >
              <span className="relative flex h-2 w-2 shrink-0">

                <span
                  className="
                    absolute inline-flex h-full w-full
                    animate-ping rounded-full
                    bg-emerald-500 opacity-50
                  "
                />

                <span
                  className="
                    relative inline-flex h-2 w-2
                    rounded-full bg-emerald-500
                    shadow-[0_0_9px_rgba(16,185,129,0.65)]
                  "
                />

              </span>

              <span>Available for Opportunities</span>

              <Sparkles size={14} className="shrink-0" />

            </div>

            {/* Freelance Badge */}

            <div
              className="
                group inline-flex items-center gap-2
                rounded-full
                border border-blue-500/25
                bg-blue-500/[0.06]
                px-4 py-2.5
                text-xs font-semibold
                text-blue-700
                transition-all duration-300
                hover:-translate-y-0.5
                hover:border-blue-500/50
                hover:bg-blue-500/[0.10]
                hover:shadow-[0_4px_20px_rgba(59,130,246,0.12)]
                dark:text-blue-400
              "
            >

              <BriefcaseBusiness
                size={14}
                className="
                  shrink-0
                  transition-transform duration-300
                  group-hover:rotate-[-8deg]
                "
              />

              <span>Open to Freelance Projects</span>

            </div>

          </div>

          {/* INTRODUCTION */}

          <div
            className="
              flex w-full flex-col items-start
              max-[900px]:items-center
            "
          >

            {/* Greeting */}

            <p
              className="
                mb-3 text-lg font-medium
                text-[var(--muted)]
                max-[600px]:text-base
              "
            >
              Hello, I'm
            </p>

            {/* Animated Name - LETTER BY LETTER */}

            <h1
              aria-label="Mohomed Sajid."
              className="
                mb-5 flex flex-wrap
                text-[clamp(44px,5.1vw,72px)]
                leading-[1.08]
                font-black
                tracking-[-3px]
                text-left
                max-[1200px]:text-[clamp(42px,5vw,64px)]
                max-[900px]:justify-center
                max-[900px]:text-center
                max-[900px]:text-[clamp(46px,8vw,68px)]
                max-[600px]:mb-5
                max-[600px]:text-[clamp(36px,9vw,49px)]
                max-[600px]:tracking-[-1.8px]
                max-[380px]:text-[34px]
              "
            >
              {"Mohomed Sajid".split("").map((letter, index) => (
                <span
                  key={index}
                  aria-hidden="true"
                  className="
                    inline-block
                    bg-gradient-to-r
                    from-blue-600 via-cyan-500 to-indigo-500
                    bg-clip-text
                    text-transparent
                    animate-[nameLetterReveal_0.55s_ease-out_both]
                    motion-reduce:animate-none
                  "
                  style={{
                    animationDelay: `${index * 0.09}s`,
                  }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </span>
              ))}
            </h1>

            {/* Professional Role */}

            <h2
              className="
                mb-5 flex flex-wrap
                items-center gap-x-2 gap-y-1
                text-[clamp(17px,1.7vw,22px)]
                leading-relaxed
                font-bold
                max-[900px]:justify-center
                max-[600px]:mb-5
                max-[600px]:text-base
              "
            >
              <span>Software Engineer</span>

              <span className="font-normal text-[var(--muted)]">
                |
              </span>

              <span className="text-indigo-500">
                Full-Stack & Mobile Developer
              </span>
            </h2>

            {/* Description */}

            <p
              className="
                max-w-[590px]
                text-[15px]
                leading-[1.9]
                text-[var(--muted)]
                max-[1200px]:text-sm
                max-[900px]:max-w-[620px]
                max-[600px]:text-[13px]
                max-[600px]:leading-[1.85]
              "
            >
              I design and develop modern, scalable, and user-focused
              digital experiences. Passionate about building impactful
              web and mobile applications by combining creative thinking
              with modern technologies.
            </p>

          </div>

          {/* =====================================
              ACTION BUTTONS
          ====================================== */}

          <div
            className="
              mt-9 flex w-full
              flex-wrap items-center
              gap-4
              max-[900px]:justify-center
              max-[600px]:mt-8
              max-[600px]:flex-col
            "
          >

            {/* 1. EXPLORE MY WORK - ROTATING BLUE NEON */}

            <Link
              href="#projects"
              className="
                group relative isolate
                flex h-[56px] w-[190px]
                shrink-0 items-center justify-center
                overflow-hidden rounded-xl p-[1.5px]
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-[0_8px_30px_rgba(37,99,235,0.35)]
                max-[600px]:w-full
              "
            >

              <span
                className="
                  absolute inset-[-150%]
                  animate-spin
                  bg-[conic-gradient(from_0deg,#2563eb,#06b6d4,#818cf8,#6366f1,#2563eb)]
                  [animation-duration:5s]
                "
              />

              <span
                className="
                  relative z-10
                  flex h-full w-full
                  items-center justify-center
                  gap-3 rounded-[10px]
                  bg-gradient-to-r
                  from-blue-600 via-blue-500 to-indigo-600
                  px-5
                  text-sm font-bold text-white
                  transition-all duration-300
                  group-hover:from-blue-500
                  group-hover:via-cyan-500
                  group-hover:to-indigo-500
                "
              >
                <span className="whitespace-nowrap">
                  Explore My Work
                </span>

                <ArrowUpRight
                  size={18}
                  className="
                    shrink-0
                    transition-transform duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />
              </span>

            </Link>

            {/* 2. DOWNLOAD CV - PULSATING PURPLE NEON */}

            {cvUrl && (
              <a
                href={cvUrl}
                download="Mohomed-Iqbal-Mohomed-Sajid-CV.pdf"
                aria-label="Download CV"
                className="
                  group relative isolate
                  flex h-[56px] w-[180px]
                  shrink-0 items-center justify-center
                  overflow-hidden rounded-xl
                  border border-violet-400/60
                  bg-[var(--surface)]
                  shadow-[0_0_10px_rgba(139,92,246,0.20)]
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-violet-400
                  hover:shadow-[0_0_14px_rgba(139,92,246,0.65),0_0_35px_rgba(139,92,246,0.25)]
                  max-[600px]:w-full
                "
              >

                <span
                  className="
                    pointer-events-none absolute inset-0
                    rounded-xl
                    bg-gradient-to-r
                    from-violet-500/10 via-purple-400/25 to-indigo-500/10
                    animate-pulse
                    [animation-duration:2.5s]
                  "
                />

                <span
                  className="
                    relative z-10
                    flex h-full w-full
                    items-center justify-center
                    gap-3 rounded-xl
                    bg-[var(--surface)]
                    px-5
                    text-sm font-bold
                    text-[var(--foreground)]
                    transition-all duration-300
                    group-hover:bg-violet-500/[0.08]
                  "
                >
                  <Download
                    size={18}
                    className="
                      shrink-0
                      transition-transform duration-300
                      group-hover:translate-y-0.5
                    "
                  />

                  <span className="whitespace-nowrap">
                    Download CV
                  </span>
                </span>

              </a>
            )}

          </div>

          {/* =====================================
              SOCIAL LINKS
          ====================================== */}

          <div
            className="
              mt-9 flex w-full
              flex-col items-start gap-4
              max-[900px]:items-center
              max-[600px]:mt-8
            "
          >

            <span
              className="
                text-[10px] font-extrabold
                tracking-[2.5px]
                text-[var(--muted)]
              "
            >
              CONNECT WITH ME
            </span>

            <div
              className="
                flex flex-wrap items-center gap-22
                max-[600px]:grid
                max-[600px]:w-full
                max-[600px]:grid-cols-2
              "
            >

              {/* 3. GITHUB - GREEN BREATHING NEON */}

              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit GitHub Profile"
                  className="
                    group relative isolate
                    inline-flex h-[46px] w-[145px]
                    items-center justify-center
                    gap-2.5 rounded-xl
                    border border-emerald-400/50
                    bg-[var(--surface)]
                    px-4
                    text-[13px] font-bold
                    text-[var(--foreground)]
                    shadow-[0_0_8px_rgba(16,185,129,0.15)]
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-emerald-400
                    hover:shadow-[0_0_12px_rgba(16,185,129,0.65),0_0_30px_rgba(16,185,129,0.25)]
                    max-[600px]:w-full
                  "
                >

                  <span
                    className="
                      pointer-events-none absolute inset-0
                      rounded-xl
                      bg-emerald-400/[0.04]
                      animate-pulse
                      [animation-duration:3s]
                    "
                  />

                  <Code2
                    size={18}
                    className="relative z-10 shrink-0 text-emerald-500"
                  />

                  <span className="relative z-10">
                    GitHub
                  </span>

                  <ArrowUpRight
                    size={15}
                    className="
                      absolute right-3 z-10
                      opacity-55
                      transition-all duration-300
                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                      group-hover:opacity-100
                    "
                  />

                </a>
              )}

              {/* 4. LINKEDIN - BLUE SHIMMER NEON */}

              {linkedinUrl && (
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit LinkedIn Profile"
                  className="
                    group relative isolate
                    inline-flex h-[46px] w-[145px]
                    items-center justify-center
                    gap-2.5 overflow-hidden rounded-xl
                    border border-sky-400/50
                    bg-[var(--surface)]
                    px-4
                    text-[13px] font-bold
                    text-[var(--foreground)]
                    shadow-[0_0_8px_rgba(14,165,233,0.15)]
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-sky-400
                    hover:shadow-[0_0_12px_rgba(14,165,233,0.65),0_0_30px_rgba(14,165,233,0.25)]
                    max-[600px]:w-full
                  "
                >

                  <span
                    className="
                      pointer-events-none absolute inset-y-0
                      -left-full w-1/2
                      skew-x-[-25deg]
                      bg-gradient-to-r
                      from-transparent via-sky-400/30 to-transparent
                      transition-transform duration-700
                      group-hover:translate-x-[350%]
                    "
                  />

                  <span className="relative z-10">
                    LinkedIn
                  </span>

                  <ArrowUpRight
                    size={15}
                    className="
                      absolute right-3 z-10
                      opacity-55
                      transition-all duration-300
                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                      group-hover:opacity-100
                    "
                  />

                </a>
              )}

            </div>

          </div>

        </div>

        {/* =====================================
            RIGHT PROFILE IMAGE
        ====================================== */}

        <div
          className="
            relative flex w-full
            items-center justify-center
            max-[900px]:mx-auto
            max-[900px]:max-w-[430px] translate-x-[5px]
          "
        >

          {/* Image Frame */}

          <div
            className="
              relative isolate
              aspect-[0.88/1]
              w-full max-w-[410px]
              overflow-hidden
              rounded-[32px]
              p-[3px]
              shadow-[0_25px_80px_rgba(37,99,235,0.12)]
              max-[1200px]:max-w-[380px]
              max-[900px]:max-w-[350px]
              max-[600px]:w-[min(85%,300px)]
              max-[600px]:rounded-[26px]
            "
          >

            {/* Animated Image Neon Border */}

            <div
              className="
                absolute inset-[-150%]
                animate-spin
                bg-[conic-gradient(from_0deg,#2563eb,#06b6d4,#6366f1,#8b5cf6,#2563eb)]
                [animation-duration:8s]
              "
            />

            {/* Image Container */}

            <div
              className="
                absolute inset-[3px] z-10
                overflow-hidden
                rounded-[29px]
                bg-[var(--surface)]
                max-[600px]:rounded-[23px]
              "
            >
              {profileImage ? (
                <Image
                  src={profileImage}
                  alt="Mohomed Sajid - Software Engineer"
                  fill
                  priority
                  sizes="(max-width: 600px) 300px, (max-width: 900px) 350px, (max-width: 1200px) 380px, 410px"
                  style={{
                    objectFit: "cover",
                    objectPosition: "75% top",
                  }}
                  className="
                    transition-transform duration-700
                    hover:scale-[1.035]
                  "
                />
              ) : (
                <div className="flex h-full items-center justify-center">
                  <Code2
                    size={75}
                    className="text-indigo-500/40"
                  />
                </div>
              )}
            </div>

            {/* Decorative Corner */}

            <div
              className="
                absolute -bottom-4 -left-4 -z-10
                h-28 w-28
                rounded-3xl
                border border-blue-500/20
              "
            />

          </div>

        </div>

        {/* Desktop Image Caption */}

        <div
          className="
            pointer-events-none absolute
            bottom-9 right-[9%]
            flex items-center gap-3
            text-[13px] font-semibold
            tracking-wide text-[var(--muted)]
            max-[1200px]:right-[7%]
            max-[900px]:hidden
          "
        >
          <span
            className="
              h-[2px] w-9 rounded-full
              bg-gradient-to-r from-blue-600 to-cyan-400
            "
          />

          <span>Turning ideas into reality.</span>
        </div>

      </div>

      {/* =====================================
          MOBILE / TABLET IMAGE CAPTION
      ====================================== */}

      <div
        className="
          pointer-events-none absolute
          bottom-16 left-1/2
          hidden -translate-x-1/2
          items-center gap-3
          whitespace-nowrap
          text-xs font-semibold
          tracking-wide text-[var(--muted)]
          max-[900px]:flex
          max-[600px]:bottom-12
        "
      >
        <span className="h-[2px] w-7 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400" />

        <span>Turning ideas into reality.</span>
      </div>

      {/* =====================================
          SCROLL INDICATOR
      ====================================== */}

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="
          absolute bottom-6 left-1/2
          flex -translate-x-1/2
          flex-col items-center gap-2
          text-[10px] font-extrabold
          tracking-[2px]
          text-[var(--muted)]
          transition-colors duration-300
          hover:text-indigo-500
          max-[900px]:hidden
        "
      >
        <span>SCROLL TO EXPLORE</span>

        <ArrowDown
          size={15}
          className="animate-bounce"
        />
      </a>

    </section>
  );
}