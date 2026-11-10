import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Catálogo de Filmes & Séries",
  description: "Catálogo de filmes e séries com visualização detalhada",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-100">
        <header className="border-b border-zinc-800/80 bg-zinc-900/50 backdrop-blur sticky top-0 z-50">
          <div className="mx-auto max-w-5xl px-4 py-3.5 flex items-center justify-between">
            <Link
              href="/"
              className="text-lg font-bold tracking-tight text-zinc-100 hover:text-amber-300 transition"
            >
              Cine<span className="text-amber-400">Vault</span>
            </Link>

            <nav className="flex items-center gap-2">
              <Link
                href="/"
                className="px-3.5 py-1.5 rounded-lg text-sm font-medium text-zinc-300 hover:text-amber-300 hover:bg-zinc-800/60 transition"
              >
                Filmes
              </Link>
              <Link
                href="/series"
                className="px-3.5 py-1.5 rounded-lg text-sm font-medium text-zinc-300 hover:text-amber-300 hover:bg-zinc-800/60 transition"
              >
                Séries
              </Link>
            </nav>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}
