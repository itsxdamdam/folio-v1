import type { Metadata } from "next";
import { Mona_Sans, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

const mona_sans = Mona_Sans({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Bakare Samuel | Software Engineer",
  description: "Software Engineer focused on building user-friendly solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${syne.className} ${mona_sans.className}`}>
        {children}
      </body>
    </html>
  );
}
