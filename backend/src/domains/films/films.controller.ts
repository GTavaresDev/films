import { Controller, Get, Header, Param } from '@nestjs/common';
import { getAllFilmsUseCase } from './use-case/get-all-films.use-case';
import { getDetailByFilmeUseCase } from './use-case/get-detail-film.use-case';

@Controller('')
export class FilmsController {
  constructor(
    private readonly filmsService: getAllFilmsUseCase,
    private readonly getDetailFilmsService: getDetailByFilmeUseCase,
  ) {}

  @Get('films')
  findAll() {
    return this.filmsService.getFilms();
  }

  @Get('films/:id')
  findOne(@Param('id') id: string) {
    return this.getDetailFilmsService.getDetailsByFilm(+id);
  }
}
