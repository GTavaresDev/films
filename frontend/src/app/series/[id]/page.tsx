// app/series/[id]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import { series, formatarData } from "../../_data/series";

export function generateStaticParams() {
  return series.map((serie) => ({ id: String(serie.id) }));
}

export default async function DetalheSerie({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const serie = series.find((s) => s.id === Number(id));

  if (!serie) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-zinc-950 px-4 py-12 text-zinc-100">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/series"
          className="inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-amber-300"
        >
          ← Voltar ao catálogo de séries
        </Link>

        <article className="mt-6 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60 shadow-xl">
          <div className="border-b border-zinc-800 p-8">
            <span className="inline-block rounded-full bg-amber-400/10 px-3 py-1 text-xs font-semibold text-amber-300 ring-1 ring-inset ring-amber-400/30">
              #{serie.id}
            </span>
            <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              {serie.titulo}
            </h1>
            <p className="mt-2 text-amber-300">{serie.genero}</p>

            <dl className="mt-6 grid grid-cols-1 gap-4 text-sm sm:grid-cols-3">
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
              <div>
                <dt className="text-zinc-500">Temporadas</dt>
                <dd className="font-medium text-zinc-200">{serie.temporadas}</dd>
              </div>
            </dl>
          </div>

          <div className="space-y-8 p-8">
            <section>
              <h2 className="text-lg font-semibold text-zinc-100">Sinopse</h2>
              <p className="mt-3 leading-relaxed text-zinc-400">
                {serie.sinopse}
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-zinc-100">Elenco</h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {serie.elenco.map((ator) => (
                  <li
                    key={ator}
                    className="rounded-full border border-zinc-700 bg-zinc-800/60 px-3 py-1 text-sm text-zinc-300"
                  >
                    {ator}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}
