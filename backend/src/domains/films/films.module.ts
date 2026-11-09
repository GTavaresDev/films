import { Module } from '@nestjs/common';
import { getAllFilmsUseCase } from './use-case/get-all-films.use-case';
import { FilmsController } from './films.controller';
import { HttpClient } from '../../shared/http/http.client';
import { getDetailByFilmeUseCase } from './use-case/get-detail-film.use-case';

@Module({
  controllers: [FilmsController],
  providers: [getAllFilmsUseCase, HttpClient, getDetailByFilmeUseCase],
})
export class FilmsModule {}
