import xuxaImage from "@/assets/celebs/xuxa-meneghel.jpeg";
import duploSentidoImage from "@/assets/duplo-sentido/duplo-01.jpg";
import felinosImage from "@/assets/felinos/leopardo-nebuloso.jpg";
import { lugaresProibidos } from "@/data/lugaresProibidos";
import { objetosFuncoes } from "@/data/objetosFuncoes";
import { fenomenosNaturais } from "@/data/fenomenosNaturais";
import { errosHistoricos } from "@/data/errosHistoricos";
import { testesPersonalidade } from "@/data/testesPersonalidade";
import { segredosProfissoes } from "@/data/segredosProfissoes";

export type RealPost = {
  title: string;
  author: string;
  date: string;
  views: string;
  votes: string;
  image: string;
  category: string;
  categorySlug: "curiosidades" | "celebridades" | "entretenimento" | "questionarios" | "tecnologia";
  description?: string;
  reaction?: string;
  tags: string[];
  link: string;
  viewsNum: number;
  votesNum: number;
  publishedAt: number; // ms since epoch
  hotScore: number;
};

const now = Date.now();
const minutes = (n: number) => now - n * 60 * 1000;
const hours = (n: number) => now - n * 60 * 60 * 1000;
const days = (n: number) => now - n * 24 * 60 * 60 * 1000;

export const allPosts: RealPost[] = [
  {
    title: "20 Segredos de Profissões que os Profissionais Nunca Contam",
    author: "Daniel Olimpio",
    date: "agora mesmo",
    views: "24,3K",
    votes: "1,6K",
    image: segredosProfissoes[0].imageUrl,
    category: "CURIOSIDADES",
    categorySlug: "curiosidades",
    description:
      "De médicos a motoristas de aplicativo: 20 verdades reveladas por quem vive o dia a dia das profissões — com contexto, curiosidades e lições aprendidas em cada página.",
    reaction: "🤫",
    tags: ["profissões", "mercado de trabalho", "carreira"],
    link: `/segredo-profissao/${segredosProfissoes[0].slug}`,
    viewsNum: 24300,
    votesNum: 1600,
    publishedAt: minutes(1),
    hotScore: 98,
  },
  {
    title: "15 Testes de Personalidade que Revelam Quem Você Realmente É",
    author: "Daniel Olimpio",
    date: "agora mesmo",
    views: "18,7K",
    votes: "1,2K",
    image: testesPersonalidade[0].imageUrl,
    category: "QUESTIONÁRIOS",
    categorySlug: "questionarios",
    description:
      "Do Rorschach ao Big Five: 15 testes psicológicos usados por especialistas para revelar traços profundos, motivações inconscientes e caminhos de autoconhecimento.",
    reaction: "🧠",
    tags: ["autoconhecimento", "psicologia", "personalidade"],
    link: `/teste-personalidade/${testesPersonalidade[0].slug}`,
    viewsNum: 18700,
    votesNum: 1200,
    publishedAt: minutes(2),
    hotScore: 92,
  },
  {
    title: "10 Erros Históricos que Mudaram o Mundo Para Sempre",
    author: "Daniel Olimpio",
    date: "há 1 minuto",
    views: "12,4K",
    votes: "812",
    image: errosHistoricos[0].imageUrl,
    category: "CURIOSIDADES",
    categorySlug: "curiosidades",
    description:
      "Da Torre de Pisa à falência da Kodak: 10 falhas humanas que redefiniram o rumo da humanidade — cada uma com contexto, consequências e lições aprendidas.",
    reaction: "⏳",
    tags: ["história", "erros", "curiosidades"],
    link: `/erro-historico/${errosHistoricos[0].slug}`,
    viewsNum: 12400,
    votesNum: 812,
    publishedAt: minutes(3),
    hotScore: 78,
  },
  {
    title: "15 Fenômenos Naturais Impossíveis que a Ciência Ainda Não Consegue Explicar",
    author: "Daniel Olimpio",
    date: "há 1 minuto",
    views: "91,2K",
    votes: "5,8K",
    image: fenomenosNaturais[0].imageUrl,
    category: "CURIOSIDADES",
    categorySlug: "curiosidades",
    description:
      "De cataratas vermelho-sangue na Antártida a pedras que caminham sozinhas no Vale da Morte: 15 fenômenos reais que continuam desafiando os maiores cientistas do mundo.",
    reaction: "⚡",
    tags: ["mistério", "natureza", "ciência"],
    link: `/fenomeno-natural/${fenomenosNaturais[0].slug}`,
    viewsNum: 91200,
    votesNum: 5800,
    publishedAt: minutes(4),
    hotScore: 99,
  },
  {
    title: "20 Objetos Cotidianos que Têm Funções Secretas que Ninguém Conhece",
    author: "Daniel Olimpio",
    date: "há 2 minutos",
    views: "84,5K",
    votes: "5,1K",
    image: objetosFuncoes[0].imageUrl,
    category: "CURIOSIDADES",
    categorySlug: "curiosidades",
    description:
      "Você usa esses objetos todos os dias, mas nunca percebeu o detalhe escondido neles. Descubra 20 funções secretas de engenharia que vão mudar sua percepção.",
    reaction: "🤯",
    tags: ["curiosidades", "objetos", "viral"],
    link: `/objeto-funcao/${objetosFuncoes[0].slug}`,
    viewsNum: 84500,
    votesNum: 5100,
    publishedAt: minutes(5),
    hotScore: 96,
  },
  {
    title: "20 Lugares Proibidos que Você Nunca Poderá Visitar",
    author: "Daniel Olimpio",
    date: "há 5 minutos",
    views: "72,1K",
    votes: "4,2K",
    image: lugaresProibidos[0].imageUrl,
    category: "CURIOSIDADES",
    categorySlug: "curiosidades",
    description:
      "De ilhas mortais a bunkers secretos, conheça os 20 locais mais restritos do planeta que você jamais poderá visitar. Mistérios, segredos e proibições reveladas.",
    reaction: "🚫",
    tags: ["mistério", "lugares proibidos", "viral"],
    link: `/lugar-proibido/${lugaresProibidos[0].slug}`,
    viewsNum: 72100,
    votesNum: 4200,
    publishedAt: hours(1),
    hotScore: 94,
  },
  {
    title: "18 Espécies de Felinos ao Redor do Mundo — Incluindo as que Vivem no Brasil",
    author: "Daniel Olimpio",
    date: "há 15 minutos",
    views: "58,7K",
    votes: "3,5K",
    image: felinosImage,
    category: "CURIOSIDADES",
    categorySlug: "curiosidades",
    description:
      "Conheça 18 espécies fascinantes de felinos selvagens distribuídas pelo mundo, incluindo as que habitam o Brasil — do majestoso leopardo nebuloso ao pequeno gato chileno.",
    reaction: "🐆",
    tags: ["animais", "felinos", "natureza"],
    link: "/leopardo-nebuloso-felino-florestas-asiaticas",
    viewsNum: 58700,
    votesNum: 3500,
    publishedAt: hours(3),
    hotScore: 86,
  },
  {
    title: "10 Fotos de Duplo Sentido que Vão Confundir Sua Mente",
    author: "Daniel Olimpio",
    date: "há 30 minutos",
    views: "42,3K",
    votes: "2,8K",
    image: duploSentidoImage,
    category: "ENTRETENIMENTO",
    categorySlug: "entretenimento",
    description:
      "Prepare-se para ver fotos que vão confundir completamente sua mente! Descubra a verdade por trás dessas ilusões de ótica incríveis que viralizaram na internet.",
    reaction: "🤯",
    tags: ["curiosidades", "ilusão", "viral"],
    link: "/foto-duplo-sentido-crianca-praia",
    viewsNum: 42300,
    votesNum: 2800,
    publishedAt: hours(6),
    hotScore: 88,
  },
  {
    title: "10 Celebridades Antes e Depois da Maquiagem",
    author: "Daniel Olimpio",
    date: "há 1 hora",
    views: "25,8K",
    votes: "1,2K",
    image: xuxaImage,
    category: "CELEBRIDADES",
    categorySlug: "celebridades",
    description:
      "Veja a transformação incrível de 10 celebridades brasileiras antes e depois da maquiagem. Descubra os segredos de beleza de Xuxa, Sandy, Ludmilla e muito mais!",
    reaction: "💄",
    tags: ["celebridades", "maquiagem", "beleza"],
    link: "/xuxa-meneghel-antes-depois-maquiagem",
    viewsNum: 25800,
    votesNum: 1200,
    publishedAt: days(1),
    hotScore: 82,
  },
];

export const categoryMeta: Record<
  RealPost["categorySlug"],
  { name: string; description: string }
> = {
  curiosidades: {
    name: "Curiosidades",
    description:
      "Fatos surpreendentes que desafiam o senso comum — reais, mas quase inacreditáveis.",
  },
  celebridades: {
    name: "Celebridades",
    description:
      "Histórias e atualizações sobre figuras famosas que você conhece (ou achava que conhecia).",
  },
  entretenimento: {
    name: "Entretenimento",
    description:
      "Conteúdos que marcaram ou estão marcando a cultura pop — com um toque além do óbvio.",
  },
  questionarios: {
    name: "Questionários",
    description:
      "Testes rápidos e divertidos para você se descobrir (ou se entreter por uns minutos).",
  },
  tecnologia: {
    name: "Tecnologia",
    description:
      "Inovações, invenções e ideias que moldam — ou tentam moldar — o nosso dia a dia.",
  },
};

export const getPostsByCategory = (slug: string) =>
  allPosts.filter((p) => p.categorySlug === slug);

export const getPostsByTag = (tag: string) => {
  const t = tag.toLowerCase();
  return allPosts.filter((p) => p.tags.some((x) => x.toLowerCase() === t));
};

export const getRecent = () =>
  [...allPosts].sort((a, b) => b.publishedAt - a.publishedAt);

export const getPopular = () =>
  [...allPosts].sort((a, b) => b.viewsNum - a.viewsNum);

export const getHot = () =>
  [...allPosts].sort((a, b) => b.hotScore - a.hotScore);

export const getTrending = () =>
  [...allPosts].sort(
    (a, b) => b.votesNum + b.hotScore * 100 - (a.votesNum + a.hotScore * 100)
  );
