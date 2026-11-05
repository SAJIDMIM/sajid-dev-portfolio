import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Sajid.dev | Software Engineer",
  description:
    "Personal portfolio of a Software Engineer specialising in full-stack web development, mobile applications, and modern digital solutions.",
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