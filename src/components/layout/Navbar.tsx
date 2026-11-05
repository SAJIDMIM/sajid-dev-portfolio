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

import "./Navbar.css";

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
    <header className="site-header">

      <nav
        className="site-navbar"
        aria-label="Main navigation"
      >

        {/* BRAND LOGO */}

        <Link
          href="#home"
          className="brand-logo"
          aria-label="Sajid.dev Home"
          onClick={() =>
            handleNavigation("home")
          }
        >
          <span className="brand-mark">

            <span className="brand-ms" aria-label="MS">
              <span className="brand-mark-m">M</span>
              <span className="brand-mark-s">S</span>
            </span>

            <span className="brand-dot" />

            <span className="brand-mark-shine" />

          </span>
        </Link>

        {/* DESKTOP NAVIGATION */}

        <div className="desktop-navigation">

          {navigationItems.map((item) => {
            const sectionId =
              item.href.replace("#", "");

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`nav-link ${
                  activeSection === sectionId
                    ? "is-active"
                    : ""
                }`}
                onClick={() =>
                  handleNavigation(sectionId)
                }
              >
                <span>{item.name}</span>
              </Link>
            );
          })}

        </div>

        {/* RIGHT ACTIONS */}

        <div className="navbar-actions">

          {/* THEME TOGGLE */}

          <button
            type="button"
            className="theme-toggle"
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
            className="navbar-cta"
            onClick={() =>
              handleNavigation("contact")
            }
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight size={17} />
          </Link>

          {/* MOBILE MENU BUTTON */}

          <button
            type="button"
            className="mobile-menu-toggle"
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
        className={`mobile-navigation ${
          mobileMenuOpen ? "is-open" : ""
        }`}
        aria-hidden={!mobileMenuOpen}
        inert={!mobileMenuOpen}
      >

        <div className="mobile-navigation-inner">

          <div className="mobile-navigation-heading">
            <span>Navigation</span>
            <span className="mobile-navigation-line" />
          </div>

          {navigationItems.map((item, index) => {
            const sectionId =
              item.href.replace("#", "");

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`mobile-nav-link ${
                  activeSection === sectionId
                    ? "is-active"
                    : ""
                }`}
                onClick={() =>
                  handleNavigation(sectionId)
                }
                style={{
                  transitionDelay: mobileMenuOpen
                    ? `${index * 45}ms`
                    : "0ms",
                }}
              >
                <span className="mobile-nav-number">
                  0{index + 1}
                </span>

                <span className="mobile-nav-label">
                  {item.name}
                </span>

                <ArrowUpRight
                  size={16}
                  className="mobile-nav-arrow"
                />
              </Link>
            );
          })}

          <Link
            href="#contact"
            className="mobile-navigation-cta"
            onClick={() =>
              handleNavigation("contact")
            }
          >
            Let&apos;s Talk
            <ArrowUpRight size={18} />
          </Link>

          <div className="mobile-navigation-footer">
            <span>SAJID.DEV</span>
            <span>Building digital experiences.</span>
          </div>

        </div>

      </div>

    </header>
  );
}