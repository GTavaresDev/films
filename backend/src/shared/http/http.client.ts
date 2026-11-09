import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class HttpClient {
  constructor(private readonly configService: ConfigService) {}

  async getHtml(path = ''): Promise<string> {
    const baseUrl = this.configService.getOrThrow<string>('SITE_URL');
    const url = new URL(path, baseUrl).toString();

    const response = await fetch(url);

    if (!response.ok) {
      const { status, statusText } = response;
      throw new InternalServerErrorException(
        `Falha ao buscar ${url}: ${status} ${statusText}`,
      );
    }

    return response.text();
  }
}
