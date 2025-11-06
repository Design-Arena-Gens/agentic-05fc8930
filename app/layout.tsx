import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Remylar | Workflow Intelligence for Enterprise AI",
  description:
    "Remylar transforms siloed enterprise data into orchestrated, self-evolving workflow intelligence."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-night text-white antialiased">
        <div className="noise-overlay pointer-events-none fixed inset-0 z-[-1]" />
        {children}
      </body>
    </html>
  );
}
