export type FilmeHome = {
  id: number;
  titulo: string;
  data: string; // formato ISO: yyyy-mm-dd
  autor: string;
  duracao: string;
  resumo: string;
};

export type FilmeDetalhe = {
  id: number;
  titulo: string;
  genero: string;
  autor: string;
  data: string; // ISO: yyyy-mm-dd
  duracao: string;
  sinopse: string;
  elenco: string[];
};
