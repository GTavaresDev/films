import * as cheerio from 'cheerio';
import { FilmeHome } from '../films.types';
import { converterDataBR } from '../../../shared/utils/formatDates.utils';

export function getFilmsByHomeParser(html: string): FilmeHome[] {
  const $ = cheerio.load(html);

  return $('main ul > li > a')
    .map((_, el): FilmeHome | null => {
      const card = $(el);

      const id = Number(card.attr('href')?.replace('/', ''));
      if (Number.isNaN(id)) return null;

      // Pega o valor do <dd> que segue um <dt> com o rótulo informado
      const campo = (rotulo: string): string =>
        card
          .find('dt')
          .filter((_, dt) => $(dt).text().trim() === rotulo)
          .next('dd')
          .text()
          .trim();

      return {
        id,
        titulo: card.find('h2').text().trim(),
        data: converterDataBR(campo('Lançamento')),
        autor: campo('Autor'),
        duracao: campo('Duração'),
        resumo: card.find('p').text().trim(),
      };
    })
    .get()
    .filter((filme): filme is FilmeHome => filme !== null);
}
