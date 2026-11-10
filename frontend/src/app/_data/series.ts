// app/_data/series.ts

export type Serie = {
  id: number;
  titulo: string;
  data: string;
  criador: string;
  genero: string;
  temporadas: string;
  resumo: string;
  sinopse: string;
  elenco: string[];
};

export const series: Serie[] = [
  {
    id: 1,
    titulo: "Breaking Bad",
    data: "2008-01-20",
    criador: "Vince Gilligan",
    genero: "Crime, Drama, Thriller",
    temporadas: "5 temporadas (62 eps)",
    resumo:
      "Um professor de química com câncer terminal passa a produzir metanfetamina com um ex-aluno para sustentar sua família.",
    sinopse:
      "Walter White é um humilde professor de química do ensino médio que descobre um câncer de pulmão inoperável. Desesperado para garantir a segurança financeira de sua família, ele se alia ao ex-aluno Jesse Pinkman para produzir e vender metanfetamina de alta pureza, mergulhando cada vez mais no violento submundo do narcotráfico.",
    elenco: [
      "Bryan Cranston",
      "Aaron Paul",
      "Anna Gunn",
      "Dean Norris",
      "Betsy Brandt",
      "RJ Mitte",
    ],
  },
  {
    id: 2,
    titulo: "Stranger Things",
    data: "2016-07-15",
    criador: "Os Irmãos Duffer",
    genero: "Ficção científica, Terror, Drama",
    temporadas: "4 temporadas (34 eps)",
    resumo:
      "O desaparecimento de um garoto em uma pequena cidade desencadeia eventos misteriosos envolvendo forças sobrenaturais.",
    sinopse:
      "Na pacata cidade de Hawkins, em 1983, o sumiço do jovem Will Byers mobiliza seus amigos, a família e a polícia local. Enquanto procuram por respostas, eles encontram Eleven, uma garota com habilidades telecinéticas em fuga de um laboratório secreto do governo, revelando a existência de uma dimensão paralela sombria conhecida como Mundo Invertido.",
    elenco: [
      "Millie Bobby Brown",
      "Finn Wolfhard",
      "Winona Ryder",
      "David Harbour",
      "Gaten Matarazzo",
      "Caleb McLaughlin",
    ],
  },
  {
    id: 3,
    titulo: "Game of Thrones",
    data: "2011-04-17",
    criador: "David Benioff e D.B. Weiss",
    genero: "Fantasia, Drama, Aventura",
    temporadas: "8 temporadas (73 eps)",
    resumo:
      "Nove famílias nobres disputam o controle do Trono de Ferro de Westeros enquanto uma antiga ameaça ressurge no Norte.",
    sinopse:
      "Situada nos continentes fictícios de Westeros e Essos, a trama foca nas intrigas políticas, alianças traiçoeiras e guerras sangrentas entre clãs aristocráticos que competem pela supremacia no continente. Ao mesmo tempo, patrulheiros da Muralha enfrentam o retorno de criaturas gélidas esquecidas há milênios, e a última herdeira de uma dinastia deposta reúne um exército de além-mar com seus dragões.",
    elenco: [
      "Emilia Clarke",
      "Kit Harington",
      "Peter Dinklage",
      "Lena Headey",
      "Nikolaj Coster-Waldau",
      "Maisie Williams",
    ],
  },
  {
    id: 4,
    titulo: "Succession",
    data: "2018-06-03",
    criador: "Jesse Armstrong",
    genero: "Drama, Comédia dramática",
    temporadas: "4 temporadas (39 eps)",
    resumo:
      "Os herdeiros de um gigantesco império global de mídia lutam pelo controle da empresa familiar diante do declínio de seu patriarca.",
    sinopse:
      "A família Roy controla a Waystar RoyCo, um dos maiores conglomerados de mídia e entretenimento do mundo. Quando o idoso e impiedoso patriarca Logan Roy começa a ter problemas de saúde, seus quatro filhos — Kendall, Shiv, Roman e Connor — iniciam uma guerra velada repleta de traições, manipulações e jogos de ego para herdar a presidência da companhia.",
    elenco: [
      "Brian Cox",
      "Jeremy Strong",
      "Sarah Snook",
      "Kieran Culkin",
      "Matthew Macfadyen",
      "Nicholas Braun",
    ],
  },
  {
    id: 5,
    titulo: "Dark",
    data: "2017-12-01",
    criador: "Baran bo Odar e Jantje Friese",
    genero: "Ficção científica, Mistério, Suspense",
    temporadas: "3 temporadas (26 eps)",
    resumo:
      "O desaparecimento de duas crianças em uma cidade alemã expõe segredos e conexões temporais entre quatro famílias.",
    sinopse:
      "Em Winden, uma cidade cercada por florestas densas e uma usina nuclear prestes a fechar, sumiços misteriosos expõem as vidas duplas e relacionamentos fraturados de quatro famílias locais. Gradualmente, mistérios que atravessam gerações e viagens temporais revelam uma intrincada conspiração que ameaça a própria existência do tempo.",
    elenco: [
      "Louis Hofmann",
      "Oliver Masucci",
      "Karoline Eichhorn",
      "Jördis Triebel",
      "Maja Schöne",
      "Mark Waschke",
    ],
  },
  {
    id: 6,
    titulo: "The Last of Us",
    data: "2023-01-15",
    criador: "Craig Mazin e Neil Druckmann",
    genero: "Drama, Pós-apocalíptico, Ação",
    temporadas: "1 temporada (9 eps)",
    resumo:
      "Um sobrevivente calejado é encarregado de escoltar uma garota imune através de um país devastado por uma infecção fúngica.",
    sinopse:
      "Vinte anos após uma praga fúngica devastar a civilização moderna e transformar pessoas em monstros agressivos, Joel, um contrabandista calejado pela perda de sua filha, é contratado para tirar a jovem Ellie de uma rígida zona de quarentena. O que começa como um pequeno trabalho logo se torna uma jornada brutal e emocionante pelos Estados Unidos.",
    elenco: [
      "Pedro Pascal",
      "Bella Ramsey",
      "Gabriel Luna",
      "Anna Torv",
      "Merle Dandridge",
    ],
  },
];

export function formatarData(data: string): string {
  const [ano, mes, dia] = data.split("-");
  return `${dia}/${mes}/${ano}`;
}
