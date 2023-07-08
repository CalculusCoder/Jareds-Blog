import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jared's Blog",
  description: "Jared's Blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="mx-auto max-w-sm px-2 sm:px-0 sm:max-w-2xl">
          <div className="text-center bg-slate-800 text-white p-8 mt-6 mb-12 rounded-xl">
            <Link href={`/`}>
              <header className="text-3xl font-bold mb-3">
                Jared&apos;s Blog
              </header>
            </Link>
            <p>👋 Welcome to my Software Engineering Blog 💻</p>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
