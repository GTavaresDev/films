import { Injectable, NotFoundException } from '@nestjs/common';
import { HttpClient } from '../../../shared/http/http.client';
import { FilmeDetalhe } from '../films.types';
import { getDetailsByFilmParser } from '../_parser/get-detail-by-film.parser';

@Injectable()
export class getDetailByFilmeUseCase {
  constructor(private readonly httpClient: HttpClient) {}
  async getDetailsByFilm(id: number): Promise<FilmeDetalhe> {
    const html = await this.httpClient.getHtml(String(id));
    const filme = getDetailsByFilmParser(html);

    if (!filme) {
      throw new NotFoundException(`Filme ${id} não encontrado`);
    }
    return filme;
  }
}
