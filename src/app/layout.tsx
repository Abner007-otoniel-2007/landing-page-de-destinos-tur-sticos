import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rutas & Destinos",
  description: "Descubre lugares increíbles en El Salvador",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="sticky top-0 z-50 w-full bg-emerald-600 text-white shadow">
          <nav className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-center">
            <Link
              href="/"
              className="text-lg font-semibold tracking-wide hover:opacity-90 transition"
            >
              Conoce nuevos lugares
            </Link>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}