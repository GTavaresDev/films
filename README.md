# Films

Projeto com duas partes: um **frontend** que lista filmes e exibe seus detalhes, e um **backend** que faz scraping desse site e expõe os dados por uma API.

## Frontend

Site que lista filmes e mostra os detalhes de cada um (sinopse, elenco, direção, data de lançamento e duração).

- **Site:** https://app-films-by-gbtavares.vercel.app/
- **Tecnologias:** Next.js (App Router), React, TypeScript e Tailwind CSS

## Backend

API em NestJS que faz scraping do site acima, extrai os dados das páginas HTML e os retorna em JSON.

- **API:** https://service-films-by-gbtavares.vercel.app/
- **Tecnologias:** NestJS, TypeScript e Cheerio (para interpretar o HTML)

### Endpoints

| Método | Rota         | Descrição                              |
| ------ | ------------ | -------------------------------------- |
| GET    | `/films`     | Lista todos os filmes                  |
| GET    | `/films/:id` | Retorna os detalhes de um filme por id |

### Exemplos de uso

Buscar todos os filmes:

```bash
curl https://service-films-by-gbtavares.vercel.app/films
```

Buscar um filme específico (exemplo: id `1`):

```bash
curl https://service-films-by-gbtavares.vercel.app/films/1
```

Se o id não existir, a API responde com `404 Not Found`.

## Como rodar localmente

### Backend

```bash
cd backend
npm install
```

Crie um arquivo `.env` na pasta `backend/` com a URL de origem dos dados:

```dotenv
SITE_URL=https://app-films-by-gbtavares.vercel.app/
```

Depois, inicie o servidor:

```bash
npm run start:dev
```

A API fica disponível em `http://localhost:3000`.

### Frontend

Para rodar o frontend localmente, siga as instruções do projeto Next.js (`npm install` seguido de `npm run dev`).
