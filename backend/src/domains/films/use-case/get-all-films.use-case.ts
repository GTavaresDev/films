import { Injectable } from '@nestjs/common';
import { HttpClient } from '../../../shared/http/http.client';
import { FilmeHome } from '../films.types';
import { getFilmsByHomeParser } from '../_parser/get-films-by-home.parser';

@Injectable()
export class getAllFilmsUseCase {
  constructor(private readonly httpClient: HttpClient) {}
  async getFilms(): Promise<FilmeHome[]> {
    const html = await this.httpClient.getHtml();
    return getFilmsByHomeParser(html);
  }
}
