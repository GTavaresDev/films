// app/series/page.tsx
import Link from "next/link";
import { series, formatarData } from "../_data/series";

export default function SeriesPage() {
  return (
    <main className="min-h-screen bg-zinc-950 px-4 py-12 text-zinc-100">
      <div className="mx-auto max-w-5xl">
        <header className="mb-10 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-amber-400">
            Coleção
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            Catálogo de Séries
          </h1>
          <p className="mt-3 text-zinc-400">
            {series.length} produções imperdíveis
          </p>
        </header>

        <ul className="grid gap-6 sm:grid-cols-2">
          {series.map((serie) => (
            <li key={serie.id}>
              <Link
                href={`/series/${serie.id}`}
                className="group flex h-full flex-col rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-amber-400/60 hover:shadow-amber-500/10"
              >
                <div className="flex items-start justify-between gap-4">
                  <h2 className="text-xl font-semibold leading-snug group-hover:text-amber-300">
                    {serie.titulo}
                  </h2>
                  <span className="shrink-0 rounded-full bg-amber-400/10 px-3 py-1 text-xs font-semibold text-amber-300 ring-1 ring-inset ring-amber-400/30">
                    #{serie.id}
                  </span>
                </div>

                <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                  <div>
                    <dt className="text-zinc-500">Criação</dt>
                    <dd className="font-medium text-zinc-200">{serie.criador}</dd>
                  </div>
                  <div>
                    <dt className="text-zinc-500">Estreia</dt>
                    <dd className="font-medium text-zinc-200">
                      {formatarData(serie.data)}
                    </dd>
                  </div>
                  <div className="col-span-2">
                    <dt className="text-zinc-500">Temporadas</dt>
                    <dd className="font-medium text-zinc-200">
                      {serie.temporadas}
                    </dd>
                  </div>
                </dl>

                <p className="mt-4 border-t border-zinc-800 pt-4 text-sm leading-relaxed text-zinc-400">
                  {serie.resumo}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
