// app/filmes.ts

export type Filme = {
  id: number;
  titulo: string;
  data: string;
  autor: string;
  genero: string;
  duracao: string;
  resumo: string;
  sinopse: string;
  elenco: string[];
};

export const filmes: Filme[] = [
  {
    id: 1,
    titulo: "A Origem",
    data: "2010-07-16",
    autor: "Christopher Nolan",
    genero: "Ficção científica, Ação",
    duracao: "148 min",
    resumo:
      "Um ladrão especializado em invadir sonhos recebe a missão de implantar uma ideia na mente de um alvo.",
    sinopse:
      "Dom Cobb é um ladrão habilidoso que rouba segredos do subconsciente de pessoas durante o sono. Após perder tudo por causa de um crime, ele recebe uma última chance: implantar uma ideia na mente de um herdeiro poderoso. Para isso, precisa montar uma equipe e enfrentar camadas cada vez mais perigosas de sonhos dentro de sonhos.",
    elenco: [
      "Leonardo DiCaprio",
      "Joseph Gordon-Levitt",
      "Elliot Page",
      "Tom Hardy",
      "Marion Cotillard",
    ],
  },
  {
    id: 2,
    titulo: "O Poderoso Chefão",
    data: "1972-03-24",
    autor: "Francis Ford Coppola",
    genero: "Crime, Drama",
    duracao: "175 min",
    resumo:
      "A saga da família mafiosa Corleone, com foco na transição de poder entre pai e filho.",
    sinopse:
      "Em Nova York, Vito Corleone comanda uma das maiores famílias da máfia italiana. Quando um atentado quase o mata, seu filho caçula, Michael, que até então se mantinha afastado dos negócios, passa a assumir um papel cada vez mais central no império da família.",
    elenco: [
      "Marlon Brando",
      "Al Pacino",
      "James Caan",
      "Robert Duvall",
      "Diane Keaton",
    ],
  },
  {
    id: 3,
    titulo: "Pulp Fiction",
    data: "1994-10-14",
    autor: "Quentin Tarantino",
    genero: "Crime, Drama",
    duracao: "154 min",
    resumo:
      "Histórias entrelaçadas de criminosos, boxeadores e gângsteres em Los Angeles.",
    sinopse:
      "A narrativa acompanha diferentes personagens ligados ao submundo de Los Angeles, como dois assassinos a serviço de um chefe do crime, um boxeador que deve uma aposta e a esposa de um gângster. As histórias se cruzam fora de ordem cronológica, em episódios marcados por diálogos afiados e violência estilizada.",
    elenco: [
      "John Travolta",
      "Samuel L. Jackson",
      "Uma Thurman",
      "Bruce Willis",
      "Ving Rhames",
    ],
  },
  {
    id: 4,
    titulo: "Cidade de Deus",
    data: "2002-08-30",
    autor: "Fernando Meirelles",
    genero: "Drama, Crime",
    duracao: "130 min",
    resumo:
      "Retrato da violência e do crime organizado na favela carioca Cidade de Deus, nas décadas de 1960 a 1980.",
    sinopse:
      "Baseado no livro de Paulo Lins, o filme mostra como jovens da favela Cidade de Deus, no Rio de Janeiro, são arrastados para o tráfico de drogas. Buscadinho e Zé Pequeno disputam poder ao longo de duas décadas, enquanto Buscapé, que sonha em ser fotógrafo, observa essa escalada de violência.",
    elenco: [
      "Alexandre Rodrigues",
      "Leandro Firmino",
      "Phellipe Haagensen",
      "Matheus Nachtergaele",
    ],
  },
  {
    id: 5,
    titulo: "Interestelar",
    data: "2014-11-07",
    autor: "Christopher Nolan",
    genero: "Ficção científica, Drama",
    duracao: "169 min",
    resumo:
      "Um grupo de astronautas viaja através de um buraco de minhoca em busca de um novo lar para a humanidade.",
    sinopse:
      "Em um futuro em que a Terra sofre com tempestades de poeira e a escassez de alimentos, o ex-piloto Cooper aceita uma missão espacial para encontrar um planeta habitável. A expedição atravessa um buraco de minhoca perto de Saturno, onde a passagem do tempo se comporta de maneira diferente, e Cooper precisa escolher entre a missão e a família que deixou para trás.",
    elenco: [
      "Matthew McConaughey",
      "Anne Hathaway",
      "Jessica Chastain",
      "Michael Caine",
      "Matt Damon",
    ],
  },
  {
    id: 6,
    titulo: "Parasita",
    data: "2019-05-30",
    autor: "Bong Joon-ho",
    genero: "Thriller, Drama",
    duracao: "132 min",
    resumo:
      "Uma família pobre se infiltra na vida de uma família rica, com consequências inesperadas.",
    sinopse:
      "A família Kim vive em um apartamento semissubterrâneo e sobrevive com trabalhos informais. Quando o filho consegue um emprego como professor de inglês na casa de uma família rica, os Kim começam, um a um, a ocupar cargos na residência, sem revelar que são parentes. O equilíbrio se rompe quando um segredo antigo vem à tona.",
    elenco: ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong", "Choi Woo-shik"],
  },
  {
    id: 7,
    titulo: "Matrix",
    data: "1999-03-31",
    autor: "Lana Wachowski e Lilly Wachowski",
    genero: "Ficção científica, Ação",
    duracao: "136 min",
    resumo:
      "Um hacker descobre que a realidade é uma simulação controlada por máquinas e se une à resistência.",
    sinopse:
      "Thomas Anderson, um programador que atua como hacker sob o nome Neo, começa a suspeitar que o mundo não é real. Ele é contatado por Morpheus, que lhe revela a verdade: a humanidade vive escravizada em uma simulação criada por máquinas, e Neo pode ser o escolhido capaz de libertá-la.",
    elenco: [
      "Keanu Reeves",
      "Laurence Fishburne",
      "Carrie-Anne Moss",
      "Hugo Weaving",
    ],
  },
  {
    id: 8,
    titulo: "Clube da Luta",
    data: "1999-10-15",
    autor: "David Fincher",
    genero: "Drama, Thriller",
    duracao: "139 min",
    resumo:
      "Um homem insatisfeito com a vida cria um clube de luta clandestino ao lado de um vendedor de sabão carismático.",
    sinopse:
      "Um funcionário de uma montadora, cansado da rotina e da insônia, conhece Tyler Durden, um vendedor de sabão de personalidade magnética. Juntos, eles criam um clube de luta clandestino que logo se espalha pelo país, transformando-se em um movimento com ideias radicais sobre consumo e identidade.",
    elenco: ["Brad Pitt", "Edward Norton", "Helena Bonham Carter", "Meat Loaf"],
  },
  {
    id: 9,
    titulo: "Forrest Gump",
    data: "1994-07-06",
    autor: "Robert Zemeckis",
    genero: "Drama, Comédia",
    duracao: "142 min",
    resumo:
      "A vida de um homem de bom coração que testemunha e influencia importantes eventos da história americana.",
    sinopse:
      "Forrest Gump, um homem de QI limitado mas de coração generoso, narra sua vida desde a infância no Alabama. Sem jamais buscar holofotes, ele acaba envolvido em momentos decisivos da história dos Estados Unidos, como a Guerra do Vietnã, o Watergate e a ascensão de movimentos culturais, enquanto tenta reencontrar Jenny, seu grande amor.",
    elenco: ["Tom Hanks", "Robin Wright", "Gary Sinise", "Sally Field"],
  },
  {
    id: 10,
    titulo: "O Silêncio dos Inocentes",
    data: "1991-02-14",
    autor: "Jonathan Demme",
    genero: "Thriller, Suspense",
    duracao: "118 min",
    resumo:
      "Uma jovem agente do FBI busca a ajuda de um psiquiatra canibal para capturar um assassino em série.",
    sinopse:
      "A agente em formação Clarice Starling é designada para entrevistar Hannibal Lecter, um psiquiatra preso e ex-paciente de alta periculosidade. O FBI precisa de pistas sobre um assassino conhecido como Buffalo Bill, e Lecter, em um jogo psicológico perturbador, se oferece para ajudar em troca de favores.",
    elenco: ["Jodie Foster", "Anthony Hopkins", "Scott Glenn", "Ted Levine"],
  },
  {
    id: 11,
    titulo: "Gladiador",
    data: "2000-05-05",
    autor: "Ridley Scott",
    genero: "Ação, Drama",
    duracao: "155 min",
    resumo:
      "Um general romano traído é reduzido à escravidão e se torna gladiador em busca de vingança.",
    sinopse:
      "Maximus, general leal ao imperador Marco Aurélio, tem sua família assassinada após o imperador ser traído pelo próprio filho, Commodus. Capturado e vendido como escravo, ele ascende na arena de gladiadores de Roma, ganhando a atenção do povo enquanto planeja se vingar do novo imperador.",
    elenco: [
      "Russell Crowe",
      "Joaquin Phoenix",
      "Connie Nielsen",
      "Oliver Reed",
    ],
  },
  {
    id: 12,
    titulo: "A Lista de Schindler",
    data: "1993-12-15",
    autor: "Steven Spielberg",
    genero: "Drama, História",
    duracao: "195 min",
    resumo:
      "Durante o Holocausto, um industrial alemão salva centenas de judeus empregando-os em suas fábricas.",
    sinopse:
      "Oskar Schindler, um empresário alemão oportunista, instala uma fábrica em Cracóvia durante a ocupação nazista. Aos poucos, ele percebe a barbárie do regime e passa a usar sua influência para proteger trabalhadores judeus, gastando sua fortuna para incluí-los em uma lista que os salvaria da deportação para Auschwitz.",
    elenco: [
      "Liam Neeson",
      "Ben Kingsley",
      "Ralph Fiennes",
      "Caroline Goodall",
    ],
  },
  {
    id: 13,
    titulo: "De Volta para o Futuro",
    data: "1985-07-03",
    autor: "Robert Zemeckis",
    genero: "Ficção científica, Comédia",
    duracao: "116 min",
    resumo:
      "Um adolescente viaja no tempo com um cientista excêntrico e precisa garantir que seus pais se apaixonem.",
    sinopse:
      "Marty McFly, um adolescente de 1985, acidentalmente viaja para 1955 em um DeLorean modificado pelo cientista Doc Brown. Lá, ele percebe que sua existência está ameaçada, já que sua mãe se apaixona por ele em vez de por seu futuro pai, e precisa arrumar a situação antes de conseguir voltar para casa.",
    elenco: [
      "Michael J. Fox",
      "Christopher Lloyd",
      "Lea Thompson",
      "Crispin Glover",
    ],
  },
  {
    id: 14,
    titulo: "Tropa de Elite",
    data: "2007-10-12",
    autor: "José Padilha",
    genero: "Ação, Drama",
    duracao: "115 min",
    resumo:
      "Um capitão do BOPE enfrenta a corrupção policial e o tráfico de drogas no Rio de Janeiro.",
    sinopse:
      "Em 1997, durante a preparação para a visita do Papa ao Rio de Janeiro, o capitão Nascimento do BOPE precisa encontrar um substituto para deixar a corporação. Enquanto treina dois recrutas, ele investiga o tráfico nas favelas e a relação entre policiais corruptos e traficantes.",
    elenco: ["Wagner Moura", "Caio Junqueira", "André Ramiro", "Maria Ribeiro"],
  },
  {
    id: 15,
    titulo: "O Senhor dos Anéis: A Sociedade do Anel",
    data: "2001-12-19",
    autor: "Peter Jackson",
    genero: "Fantasia, Aventura",
    duracao: "178 min",
    resumo:
      "Um hobbit recebe a missão de destruir um anel poderoso e levá-lo até as Montanhas da Perdição.",
    sinopse:
      "Frodo Bolseiro herda do tio Bilbo um anel que se revela o Um Anel, criado pelo Senhor do Escuro, Sauron. Para evitar que ele caia em mãos malignas, Frodo parte da Terra-média acompanhado por um grupo formado por humanos, elfos, anões e hobbits, em uma jornada que atravessa perigos em todo o território.",
    elenco: [
      "Elijah Wood",
      "Ian McKellen",
      "Viggo Mortensen",
      "Orlando Bloom",
      "Sean Astin",
    ],
  },
  {
    id: 16,
    titulo: "Whiplash",
    data: "2014-10-10",
    autor: "Damien Chazelle",
    genero: "Drama, Música",
    duracao: "106 min",
    resumo:
      "Um jovem baterista é levado aos limites por um professor de música extremamente exigente.",
    sinopse:
      "Andrew Neiman é um estudante de bateria em uma das escolas de música mais prestigiadas dos Estados Unidos. Ao ser escolhido para a banda do conservatório, ele passa a ser submetido aos métodos brutais do regente Terence Fletcher, que está disposto a tudo para lapidar o talento de seus alunos.",
    elenco: ["Miles Teller", "J.K. Simmons", "Melissa Benoist"],
  },
  {
    id: 17,
    titulo: "Corra!",
    data: "2017-02-24",
    autor: "Jordan Peele",
    genero: "Terror, Suspense",
    duracao: "104 min",
    resumo:
      "Um jovem negro visita a família da namorada branca e descobre um segredo perturbador.",
    sinopse:
      "Chris Washington viaja com a namorada, Rose, para conhecer os pais dela em uma propriedade isolada. Apesar da recepção aparentemente acolhedora, ele começa a notar comportamentos estranhos nos empregados e nos convidados, e logo descobre que algo sinistro está acontecendo naquela casa.",
    elenco: [
      "Daniel Kaluuya",
      "Allison Williams",
      "Bradley Whitford",
      "Catherine Keener",
    ],
  },
  {
    id: 18,
    titulo: "Oppenheimer",
    data: "2023-07-21",
    autor: "Christopher Nolan",
    genero: "Drama, História",
    duracao: "180 min",
    resumo:
      "A história do físico J. Robert Oppenheimer e seu papel no desenvolvimento da bomba atômica.",
    sinopse:
      "Durante a Segunda Guerra Mundial, o físico J. Robert Oppenheimer é escolhido para liderar o Projeto Manhattan, que busca desenvolver a primeira bomba atômica. O filme acompanha sua trajetória científica e pessoal, incluindo as consequências morais de seu trabalho e a audiência que, anos depois, põe em xeque sua lealdade ao país.",
    elenco: [
      "Cillian Murphy",
      "Emily Blunt",
      "Matt Damon",
      "Robert Downey Jr.",
    ],
  },
  {
    id: 19,
    titulo: "Doutor Estranho no Multiverso da Loucura",
    data: "2022-05-06",
    autor: "Sam Raimi",
    genero: "Ação, Fantasia",
    duracao: "126 min",
    resumo:
      "Stephen Strange viaja pelo multiverso ao lado de uma jovem capaz de atravessar realidades.",
    sinopse:
      "Stephen Strange é levado ao multiverso após America Chavez, uma jovem capaz de abrir portais entre realidades, fugir de uma entidade ameaçadora. Juntos, eles enfrentam ameaças de universos diferentes, enquanto Strange precisa lidar com as consequências de seus próprios erros e com a feiticeira Wanda Maximoff.",
    elenco: [
      "Benedict Cumberbatch",
      "Elizabeth Olsen",
      "Chiwetel Ejiofor",
      "Benedict Wong",
    ],
  },
  {
    id: 20,
    titulo: "Ainda Estou Aqui",
    data: "2024-11-07",
    autor: "Walter Salles",
    genero: "Drama, História",
    duracao: "137 min",
    resumo:
      "Baseado em fatos reais, acompanha a luta de uma família brasileira após o desaparecimento de um de seus membros durante a ditadura militar.",
    sinopse:
      "Em 1971, no Rio de Janeiro, a família de Eunice e Rubens Paiva vive uma rotina tranquila até que Rubens é levado por militares para prestar depoimento e desaparece. A partir daí, Eunice precisa reconstruir a vida da família e enfrentar a busca pela verdade durante os anos mais duros da ditadura militar.",
    elenco: [
      "Fernanda Torres",
      "Selton Mello",
      "Fernanda Montenegro",
      "Valentina Herszage",
    ],
  },
];

export function formatarData(data: string): string {
  const [ano, mes, dia] = data.split("-");
  return `${dia}/${mes}/${ano}`;
}
