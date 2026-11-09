import * as cheerio from 'cheerio';
import { FilmeDetalhe } from '../films.types';
import { converterDataBR } from '../../../shared/utils/formatDates.utils';

export function getDetailsByFilmParser(html: string): FilmeDetalhe | null {
  const $ = cheerio.load(html);
  const article = $('article');

  if (article.length === 0) return null;

  // Pega o valor do <dd> que segue um <dt> com o rótulo informado
  const campo = (rotulo: string): string =>
    article
      .find('dt')
      .filter((_, dt) => $(dt).text().trim() === rotulo)
      .next('dd')
      .text()
      .trim();

  // Pega o <p> ou <ul> que segue um <h2> com o título informado
  const secao = (titulo: string) =>
    $('h2')
      .filter((_, h2) => $(h2).text().trim() === titulo)
      .next();

  const id = Number(
    article.find('span').first().text().replace('#', '').trim(),
  );
  if (Number.isNaN(id)) return null;

  return {
    id,
    titulo: article.find('h1').text().trim(),
    genero: article.find('h1 + p').text().trim(),
    autor: campo('Direção'),
    data: converterDataBR(campo('Lançamento')),
    duracao: campo('Duração'),
    sinopse: secao('Sinopse').text().trim(),
    elenco: secao('Elenco')
      .find('li')
      .map((_, li) => $(li).text().trim())
      .get(),
  };
}
