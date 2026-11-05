"use client";

import {
  useEffect,
  useState,
} from "react";

import Link from "next/link";

import {
  Menu,
  X,
  Sun,
  Moon,
  ArrowUpRight,
} from "lucide-react";

/* =========================================
   NAVIGATION ITEMS
========================================= */

const navigationItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Expertise", href: "#expertise" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

/* =========================================
   THEME TYPE
========================================= */

type Theme = "light" | "dark";

/* =========================================
   NAVBAR COMPONENT
========================================= */

export default function Navbar() {
  const [activeSection, setActiveSection] =
    useState("home");

  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  const [theme, setTheme] =
    useState<Theme>("dark");

  const [themeInitialized, setThemeInitialized] =
    useState(false);

  /* =========================================
     INITIALIZE THEME
  ========================================= */

  useEffect(() => {
    const savedTheme = localStorage.getItem(
      "sajid-theme"
    );

    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const initialTheme: Theme =
      savedTheme === "light" || savedTheme === "dark"
        ? savedTheme
        : systemPrefersDark
          ? "dark"
          : "light";

    document.documentElement.dataset.theme =
      initialTheme;

    setTheme(initialTheme);
    setThemeInitialized(true);
  }, []);

  /* =========================================
     TOGGLE THEME
  ========================================= */

  const toggleTheme = () => {
    setTheme((currentTheme) => {
      const newTheme: Theme =
        currentTheme === "dark"
          ? "light"
          : "dark";

      document.documentElement.dataset.theme =
        newTheme;

      localStorage.setItem(
        "sajid-theme",
        newTheme
      );

      return newTheme;
    });
  };

  /* =========================================
     ACTIVE SECTION OBSERVER
  ========================================= */

  useEffect(() => {
    const sections = navigationItems
      .map((item) =>
        document.querySelector(item.href)
      )
      .filter(
        (section): section is Element =>
          section !== null
      );

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio -
              a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActiveSection(
            visibleSections[0].target.id
          );
        }
      },
      {
        rootMargin: "-20% 0px -65% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  /* =========================================
     CLOSE MOBILE MENU ON ESCAPE
  ========================================= */

  useEffect(() => {
    const handleEscape = (
      event: KeyboardEvent
    ) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, []);

  /* =========================================
     CLOSE MENU ON RESIZE
  ========================================= */

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1050) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, []);

  /* =========================================
     NAVIGATION CLICK
  ========================================= */

  const handleNavigation = (section: string) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
  };

  /* =========================================
     RENDER
  ========================================= */

  return (
    <>
      {/* =====================================
          CUSTOM ANIMATIONS
      ===================================== */}

      <style>{`
        @property --nav-glow-angle {
          syntax: "<angle>";
          initial-value: 0deg;
          inherits: false;
        }

        @keyframes neon-rotate {
          from {
            --nav-glow-angle: 0deg;
          }

          to {
            --nav-glow-angle: 360deg;
          }
        }

        @keyframes brand-entrance {
          from {
            opacity: 0;
            transform: translateY(-12px) scale(0.9);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes logo-float {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-3px);
          }
        }

        @keyframes logo-glow {
          0%,
          100% {
            box-shadow:
              0 0 12px var(--nav-glow-shadow),
              inset 0 0 10px rgba(255, 255, 255, 0.03);
          }

          50% {
            box-shadow:
              0 0 22px var(--nav-glow-shadow),
              inset 0 0 14px rgba(255, 255, 255, 0.07);
          }
        }

        @keyframes logo-border-rotate {
          from {
            --nav-glow-angle: 0deg;
          }

          to {
            --nav-glow-angle: 360deg;
          }
        }

        @keyframes logo-text-appear {
          from {
            opacity: 0;
            transform: scale(0.75);
          }

          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes logo-shine {
          0%,
          65%,
          100% {
            left: -100%;
          }

          80% {
            left: 150%;
          }
        }

        @keyframes dot-pulse {
          0%,
          100% {
            opacity: 1;
            transform: scale(1);
            box-shadow: 0 0 6px var(--nav-glow);
          }

          50% {
            opacity: 0.65;
            transform: scale(0.8);
            box-shadow:
              0 0 10px var(--nav-glow),
              0 0 17px var(--nav-glow);
          }
        }

        @keyframes mobile-link-enter {
          from {
            opacity: 0;
            transform: translateY(8px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* LOGO */

        .brand-logo {
          animation: brand-entrance 0.9s ease-out both;
        }

        .brand-mark {
          animation:
            logo-float 5s ease-in-out infinite,
            logo-glow 4s ease-in-out infinite;
        }

        .brand-mark::before {
          content: "";
          position: absolute;
          z-index: -1;
          inset: -2px;
          border-radius: inherit;

          background: conic-gradient(
            from var(--nav-glow-angle),
            transparent 0deg,
            var(--nav-glow) 90deg,
            var(--nav-glow-secondary) 180deg,
            transparent 270deg,
            var(--nav-glow) 360deg
          );

          opacity: 0.75;
          animation: logo-border-rotate 5s linear infinite;
          pointer-events: none;
        }

        .brand-mark::after {
          content: "";
          position: absolute;
          z-index: 0;
          inset: 2px;
          border-radius: 12px;
          background: var(--surface);
          pointer-events: none;
        }

        .brand-ms {
          animation: logo-text-appear 1s ease-out both;
        }

        .brand-dot {
          animation: dot-pulse 2.5s ease-in-out infinite;
        }

        .brand-mark-shine {
          animation: logo-shine 6s ease-in-out infinite;
        }

        .brand-logo:hover .brand-mark {
          transform: translateY(-4px) scale(1.06);
          border-color: var(--nav-glow);

          box-shadow:
            0 0 22px var(--nav-glow-shadow),
            0 0 40px var(--nav-glow-shadow),
            inset 0 0 15px var(--nav-glow-shadow);
        }

        .brand-logo:hover .brand-mark::before {
          opacity: 1;
          animation-duration: 2s;
        }

        .brand-logo:hover .brand-ms {
          transform: scale(1.06);
        }

        /* NAVIGATION NEON BORDER */

        .nav-link::before,
        .mobile-nav-link::before {
          content: "";
          position: absolute;
          z-index: -2;
          inset: -2px;
          border-radius: inherit;

          background: conic-gradient(
            from var(--nav-glow-angle),
            transparent 0deg,
            var(--nav-glow) 75deg,
            var(--nav-glow-secondary) 180deg,
            transparent 270deg,
            var(--nav-glow) 360deg
          );

          opacity: 0;
          transition: opacity 0.35s ease;
        }

        .nav-link::after,
        .mobile-nav-link::after {
          content: "";
          position: absolute;
          z-index: -1;
          inset: 1px;
          border-radius: inherit;
          background: var(--nav-background);
          opacity: 0;
          transition: opacity 0.35s ease;
        }

        .nav-link:hover::before,
        .nav-link:focus-visible::before,
        .mobile-nav-link:hover::before,
        .mobile-nav-link:focus-visible::before {
          opacity: 1;
          animation: neon-rotate 2.8s linear infinite;
        }

        .nav-link:hover::after,
        .nav-link:focus-visible::after,
        .mobile-nav-link:hover::after,
        .mobile-nav-link:focus-visible::after {
          opacity: 1;
        }

        /* MOBILE MENU */

        .mobile-navigation.is-open .mobile-nav-link {
          animation: mobile-link-enter 0.4s ease forwards;
        }

        /* CTA SHINE */

        .navbar-cta::before {
          content: "";
          position: absolute;
          z-index: -1;
          top: 0;
          left: -120%;
          width: 80%;
          height: 100%;

          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.45),
            transparent
          );

          transform: skewX(-20deg);
          transition: left 0.6s ease;
        }

        .navbar-cta:hover::before {
          left: 150%;
        }

        @media (prefers-reduced-motion: reduce) {
          .brand-logo,
          .brand-mark,
          .brand-ms,
          .brand-dot,
          .brand-mark-shine,
          .mobile-nav-link {
            animation: none !important;
          }

          *,
          *::before,
          *::after {
            scroll-behavior: auto !important;
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      {/* =====================================
          SITE HEADER
      ===================================== */}

      <header className="absolute left-0 top-0 z-[1000] flex w-full justify-center px-[4%] pt-[25px] font-sans max-[520px]:pt-4">

        {/* =====================================
            MAIN NAVBAR
        ===================================== */}

        <nav
          className="
            relative isolate flex
            min-h-[76px] w-full
            max-w-[1450px]
            items-center justify-between
            gap-7
            rounded-[22px]
            border border-[var(--glass-border,var(--border))]
            bg-[var(--nav-background)]
            px-[15px] py-[11px]
            shadow-[0_12px_40px_rgba(0,0,0,0.09),inset_0_1px_0_rgba(255,255,255,0.35)]
            backdrop-blur-[30px]
            backdrop-saturate-[190%]
            transition-all duration-300
            max-[1250px]:gap-[15px]
            max-[1250px]:px-[14px] max-[1250px]:py-[10px]
            max-[1050px]:min-h-[72px]
            max-[1050px]:gap-3
            max-[1050px]:px-[13px] max-[1050px]:py-[10px]
            max-[520px]:min-h-[66px]
            max-[520px]:gap-2
            max-[520px]:rounded-[17px]
            max-[520px]:px-[11px] max-[520px]:py-[9px]
            max-[360px]:p-2
            before:absolute before:inset-[-1px]
            before:-z-10 before:rounded-[inherit]
            before:bg-[linear-gradient(110deg,rgba(56,189,248,0.12),transparent_35%,rgba(167,139,250,0.12))]
            before:opacity-75
            before:content-['']
            before:pointer-events-none
          "
          aria-label="Main navigation"
        >

          {/* BRAND LOGO */}

          <Link
            href="#home"
            className="brand-logo relative z-10 flex shrink-0 items-center justify-center"
            aria-label="Sajid.dev Home"
            onClick={() =>
              handleNavigation("home")
            }
          >
            <span
              className="
                brand-mark relative isolate
                flex h-[47px] w-[47px]
                items-center justify-center
                overflow-hidden
                rounded-[15px]
                border border-[var(--logo-border)]
                bg-[var(--surface)]
                shadow-[0_0_15px_var(--nav-glow-shadow),inset_0_0_12px_rgba(255,255,255,0.04)]
                transition-all duration-300
                max-[520px]:h-[43px]
                max-[520px]:w-[43px]
                max-[520px]:rounded-[13px]
                max-[360px]:h-10
                max-[360px]:w-10
              "
            >
              <span
                className="
                  brand-ms relative z-[2]
                  flex items-center justify-center
                  text-xl font-black
                  leading-none tracking-[-1.8px]
                  opacity-100
                  min-[521px]:visible
                  max-[520px]:text-[17px]
                "
                aria-label="MS"
              >
                <span className="text-[#0284c7] [-webkit-text-fill-color:#0284c7]">
                  M
                </span>

                <span className="text-[#6366f1] [-webkit-text-fill-color:#6366f1]">
                  S
                </span>
              </span>

              <span
                className="
                  brand-dot absolute bottom-[7px]
                  right-[7px] z-[3]
                  h-[6px] w-[6px]
                  rounded-full
                  bg-[var(--nav-glow)]
                  shadow-[0_0_6px_var(--nav-glow),0_0_12px_var(--nav-glow)]
                "
              />

              <span
                className="
                  brand-mark-shine absolute
                  left-[-100%] top-[-50%]
                  z-[1] h-[200%] w-[60%]
                  rotate-[25deg]
                  bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.25),transparent)]
                  pointer-events-none
                "
              />
            </span>
          </Link>

          {/* DESKTOP NAVIGATION */}

          <div
            className="
              relative z-[1]
              flex flex-1
              items-center justify-center
              gap-[7px]
              translate-x-[225px]
              pointer-events-auto
              max-[1250px]:translate-x-[100px]
              max-[1250px]:gap-[2px]
              max-[1050px]:hidden
            "
          >
            {navigationItems.map((item) => {
              const sectionId =
                item.href.replace("#", "");

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    nav-link relative isolate
                    inline-flex min-h-[43px]
                    items-center justify-center
                    overflow-hidden
                    rounded-full
                    border border-transparent
                    px-[14px]
                    text-[13px] font-semibold
                    tracking-[0.1px]
                    whitespace-nowrap
                    text-[var(--nav-muted)]
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:border-[var(--logo-border)]
                    hover:bg-[var(--nav-hover)]
                    hover:text-[var(--nav-glow)]
                    hover:shadow-[0_0_8px_var(--nav-glow-shadow),0_0_18px_var(--nav-glow-shadow),inset_0_0_12px_var(--nav-glow-shadow)]
                    focus-visible:outline-none
                    focus-visible:text-[var(--nav-glow)]
                    max-[1250px]:px-[10px]
                    max-[1250px]:text-xs
                    ${
                      activeSection === sectionId
                        ? "is-active"
                        : ""
                    }
                  `}
                  onClick={() =>
                    handleNavigation(sectionId)
                  }
                >
                  <span className="relative z-[2] transition-all duration-300 hover:[text-shadow:0_0_8px_var(--nav-glow-shadow),0_0_16px_var(--nav-glow-shadow)]">
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* RIGHT ACTIONS */}

          <div
            className="
              relative z-20
              flex shrink-0
              items-center justify-center
              gap-3
              pointer-events-auto
              max-[1250px]:gap-[9px]
              max-[1050px]:ml-auto
              max-[1050px]:gap-[10px]
              max-[520px]:gap-2
              max-[360px]:gap-[6px]
            "
          >

            {/* THEME TOGGLE */}

            <button
              type="button"
              className="
                relative z-30
                flex h-[43px] w-[43px]
                shrink-0 items-center justify-center
                rounded-full
                border border-[var(--border)]
                bg-[var(--glass-background,var(--surface))]
                text-[var(--nav-text)]
                transition-all duration-300
                hover:rotate-[15deg]
                hover:border-[var(--logo-border)]
                hover:bg-[var(--nav-hover)]
                hover:text-[var(--nav-glow)]
                hover:shadow-[0_0_12px_var(--nav-glow-shadow),0_0_22px_var(--nav-glow-shadow),inset_0_0_10px_var(--nav-glow-shadow)]
                active:scale-[0.92]
                focus-visible:outline-2
                focus-visible:outline-[var(--nav-glow)]
                focus-visible:outline-offset-4
                disabled:cursor-not-allowed
                disabled:opacity-65
                max-[1050px]:h-[42px]
                max-[1050px]:w-[42px]
                max-[520px]:h-10
                max-[520px]:w-10
                max-[360px]:h-[38px]
                max-[360px]:w-[38px]
              "
              onClick={toggleTheme}
              disabled={!themeInitialized}
              aria-label={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
              title={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
              aria-pressed={theme === "dark"}
            >
              {theme === "dark" ? (
                <Sun
                  size={19}
                  aria-hidden="true"
                />
              ) : (
                <Moon
                  size={19}
                  aria-hidden="true"
                />
              )}
            </button>

            {/* DESKTOP CTA */}

            <Link
              href="#contact"
              className="
                navbar-cta relative isolate
                inline-flex min-h-[44px]
                items-center justify-center
                gap-2 overflow-hidden
                whitespace-nowrap
                rounded-full
                border border-white/20
                bg-[linear-gradient(110deg,var(--nav-glow),var(--nav-glow-secondary))]
                px-[19px]
                text-[13px] font-bold
                text-white
                no-underline
                shadow-[0_0_12px_var(--nav-glow-shadow),0_5px_20px_var(--nav-glow-shadow)]
                transition-all duration-300
                hover:-translate-y-[3px]
                hover:brightness-110
                hover:shadow-[0_0_18px_var(--nav-glow-shadow),0_0_32px_var(--nav-glow-shadow),0_8px_25px_var(--nav-glow-shadow)]
                max-[1250px]:px-[15px]
                max-[1250px]:text-xs
                max-[520px]:hidden
              "
              onClick={() =>
                handleNavigation("contact")
              }
            >
              <span>Let&apos;s Talk</span>

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-[3px]"
              />
            </Link>

            {/* MOBILE MENU BUTTON */}

            <button
              type="button"
              className="
                relative z-30
                hidden h-[43px] w-[43px]
                shrink-0 items-center justify-center
                rounded-full
                border border-[var(--border)]
                bg-[var(--glass-background,var(--surface))]
                text-[var(--nav-text)]
                transition-all duration-300
                hover:border-[var(--logo-border)]
                hover:bg-[var(--nav-hover)]
                hover:text-[var(--nav-glow)]
                hover:shadow-[0_0_12px_var(--nav-glow-shadow),0_0_20px_var(--nav-glow-shadow)]
                active:scale-[0.93]
                focus-visible:outline-2
                focus-visible:outline-[var(--nav-glow)]
                focus-visible:outline-offset-4
                max-[1050px]:flex
                max-[520px]:h-10
                max-[520px]:w-10
                max-[360px]:h-[38px]
                max-[360px]:w-[38px]
              "
              onClick={() =>
                setMobileMenuOpen(!mobileMenuOpen)
              }
              aria-label={
                mobileMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {mobileMenuOpen ? (
                <X size={23} />
              ) : (
                <Menu size={23} />
              )}
            </button>

          </div>

        </nav>

        {/* MOBILE NAVIGATION */}

        <div
          id="mobile-navigation"
          className={`
            absolute left-0 right-0 top-[calc(100%+12px)]
            z-[25] w-full
            rounded-[22px]
            border border-[var(--border)]
            bg-[var(--nav-panel)]
            shadow-[var(--shadow),0_0_20px_var(--nav-glow-shadow)]
            backdrop-blur-[30px]
            backdrop-saturate-[180%]
            transition-all duration-300
            origin-top
            max-[520px]:top-[calc(100%+9px)]
            max-[520px]:rounded-[18px]
            ${
              mobileMenuOpen
                ? "visible translate-y-0 scale-100 opacity-100 pointer-events-auto"
                : "invisible -translate-y-3 scale-[0.98] opacity-0 pointer-events-none"
            }
          `}
          aria-hidden={!mobileMenuOpen}
          inert={!mobileMenuOpen}
        >
          <div
            className="
              flex flex-col gap-[18px]
              p-[22px]
              max-[520px]:gap-[15px]
              max-[520px]:p-[17px]
              max-[360px]:p-[14px]
            "
          >

            {/* MOBILE NAVIGATION HEADING */}

            <div
              className="
                flex items-center justify-between
                gap-3
                border-b border-[var(--border)]
                pb-[15px]
              "
            >
              <span className="text-xs font-extrabold uppercase tracking-[2px] text-[var(--nav-text)]">
                Navigation
              </span>

              <span
                className="
                  h-[3px] w-[38px]
                  rounded-[10px]
                  bg-[linear-gradient(90deg,var(--nav-glow),var(--nav-glow-secondary))]
                  shadow-[0_0_8px_var(--nav-glow),0_0_16px_var(--nav-glow-shadow)]
                "
              />
            </div>

            {/* MOBILE NAVIGATION LINKS */}

            {navigationItems.map((item, index) => {
              const sectionId =
                item.href.replace("#", "");

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    mobile-nav-link relative isolate
                    flex min-h-[50px] w-full
                    items-center justify-between
                    gap-3 overflow-hidden
                    rounded-[13px]
                    border border-transparent
                    bg-transparent
                    px-[15px]
                    text-[var(--nav-muted)]
                    no-underline
                    transition-all duration-300
                    hover:translate-x-[3px]
                    hover:border-[var(--logo-border)]
                    hover:bg-[var(--nav-hover)]
                    hover:text-[var(--nav-glow)]
                    hover:shadow-[0_0_10px_var(--nav-glow-shadow),inset_0_0_12px_var(--nav-glow-shadow)]
                    focus-visible:outline-none
                    focus-visible:text-[var(--nav-glow)]
                    max-[520px]:min-h-[47px]
                    max-[520px]:px-3
                    ${
                      activeSection === sectionId
                        ? "is-active"
                        : ""
                    }
                  `}
                  onClick={() =>
                    handleNavigation(sectionId)
                  }
                  style={{
                    transitionDelay: mobileMenuOpen
                      ? `${index * 45}ms`
                      : "0ms",
                  }}
                >
                  <span
                    className="
                      relative z-[2]
                      min-w-[26px]
                      text-[11px] font-extrabold
                      tracking-[1px]
                      text-[var(--nav-glow)]
                      max-[520px]:text-[13px]
                    "
                  >
                    0{index + 1}
                  </span>

                  <span
                    className="
                      relative z-[2]
                      flex-1
                      text-sm font-semibold
                      max-[520px]:text-[13px]
                    "
                  >
                    {item.name}
                  </span>

                  <ArrowUpRight
                    size={16}
                    className="
                      relative z-[2]
                      text-[var(--nav-muted)]
                      transition-all duration-300
                      hover:translate-x-[3px]
                      hover:text-[var(--nav-glow)]
                    "
                  />
                </Link>
              );
            })}

            {/* MOBILE CTA */}

            <Link
              href="#contact"
              className="
                flex min-h-12 w-full
                items-center justify-center
                gap-[9px]
                rounded-[13px]
                border border-white/20
                bg-[linear-gradient(110deg,var(--nav-glow),var(--nav-glow-secondary))]
                text-[13px] font-bold
                text-white
                no-underline
                shadow-[0_0_12px_var(--nav-glow-shadow),0_5px_18px_var(--nav-glow-shadow)]
                transition-all duration-300
                hover:-translate-y-0.5
                hover:brightness-110
                hover:shadow-[0_0_18px_var(--nav-glow-shadow),0_8px_24px_var(--nav-glow-shadow)]
                max-[520px]:min-h-[45px]
              "
              onClick={() =>
                handleNavigation("contact")
              }
            >
              Let&apos;s Talk

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300"
              />
            </Link>

            {/* MOBILE FOOTER */}

            <div
              className="
                flex items-center justify-between
                gap-[10px]
                border-t border-[var(--border)]
                pt-[14px]
              "
            >
              <span className="text-[11px] font-medium text-[var(--nav-muted)]">
                SAJID.DEV
              </span>

              <span className="text-[11px] font-medium text-[var(--nav-muted)]">
                Building digital experiences.
              </span>
            </div>

          </div>
        </div>

      </header>
    </>
  );
}