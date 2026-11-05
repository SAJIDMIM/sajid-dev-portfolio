import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sajid.dev"),

  title: {
    default: "Mohomed Sajid | Software Engineer",
    template: "%s | Sajid.dev",
  },

  description:
    "Personal portfolio of Mohomed Sajid, a Software Engineer specialising in full-stack web development, mobile applications, and modern digital solutions.",

  applicationName: "Sajid.dev",

  authors: [
    {
      name: "Mohomed Sajid",
    },
  ],

  creator: "Mohomed Sajid",

  keywords: [
    "Mohomed Sajid",
    "Sajid.dev",
    "Software Engineer",
    "Full-Stack Developer",
    "Mobile Application Developer",
    "React Developer",
    "Next.js Developer",
    "MERN Stack Developer",
    "Web Developer",
    "Android Developer",
    "Software Development",
  ],

  icons: {
    icon: [
      {
        url: "/icons/download.svg",
        type: "image/svg+xml",
      },
    ],
    apple: [
      {
        url: "/icons/download.svg",
        type: "image/svg+xml",
      },
    ],
  },

  openGraph: {
    title: "Mohomed Sajid | Software Engineer",

    description:
      "Explore the portfolio, projects, technical expertise, and software development services of Mohomed Sajid.",

    siteName: "Sajid.dev",
    type: "website",
    locale: "en_US",
    url: "https://sajid.dev",
  },

  twitter: {
    card: "summary_large_image",
    title: "Mohomed Sajid | Software Engineer",

    description:
      "Explore the portfolio, projects, and software development services of Mohomed Sajid.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}