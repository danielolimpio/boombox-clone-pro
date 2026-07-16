import Header from "@/components/Header";
import ReactionBar from "@/components/ReactionBar";
import PostCard from "@/components/PostCard";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import xuxaImage from "@/assets/celebs/xuxa-meneghel.jpeg";
import duploSentidoImage from "@/assets/duplo-sentido/duplo-01.jpg";
import felinosImage from "@/assets/felinos/leopardo-nebuloso.jpg";
import { lugaresProibidos } from "@/data/lugaresProibidos";
import { objetosFuncoes } from "@/data/objetosFuncoes";
import { fenomenosNaturais } from "@/data/fenomenosNaturais";
import { errosHistoricos } from "@/data/errosHistoricos";
import { testesPersonalidade } from "@/data/testesPersonalidade";
import { segredosProfissoes } from "@/data/segredosProfissoes";

const Index = () => {
  const posts = [
    {
      title: "20 Segredos de Profissões que os Profissionais Nunca Contam",
      author: "Daniel Olimpio",
      date: "agora mesmo",
      views: "24,3K",
      votes: "1,6K",
      image: segredosProfissoes[0].imageUrl,
      category: "MERCADO DE TRABALHO",
      description: "De médicos a motoristas de aplicativo: 20 verdades reveladas por quem vive o dia a dia das profissões — com contexto, curiosidades e lições aprendidas em cada página.",
      reaction: "🤫",
      large: true,
      tags: ["profissões", "mercado de trabalho", "carreira"],
      link: `/segredo-profissao/${segredosProfissoes[0].slug}`,
    },
    {
      title: "15 Testes de Personalidade que Revelam Quem Você Realmente É",
      author: "Daniel Olimpio",
      date: "agora mesmo",
      views: "18,7K",
      votes: "1,2K",
      image: testesPersonalidade[0].imageUrl,
      category: "CURIOSIDADES",
      description: "Do Rorschach ao Big Five: 15 testes psicológicos usados por especialistas para revelar traços profundos, motivações inconscientes e caminhos de autoconhecimento.",
      reaction: "🧠",
      large: true,
      tags: ["autoconhecimento", "psicologia", "personalidade"],
      link: `/teste-personalidade/${testesPersonalidade[0].slug}`,
    },
    {
      title: "10 Erros Históricos que Mudaram o Mundo Para Sempre",
      author: "Daniel Olimpio",
      date: "há 1 minuto",
      views: "12,4K",
      votes: "812",
      image: errosHistoricos[0].imageUrl,
      category: "CURIOSIDADES",
      description: "Da Torre de Pisa à falência da Kodak: 10 falhas humanas que redefiniram o rumo da humanidade — cada uma com contexto, consequências e lições aprendidas.",
      reaction: "⏳",
      large: true,
      tags: ["história", "erros", "curiosidades"],
      link: `/erro-historico/${errosHistoricos[0].slug}`,
    },
    {
      title: "15 Fenômenos Naturais Impossíveis que a Ciência Ainda Não Consegue Explicar",
      author: "Daniel Olimpio",
      date: "há 1 minuto",
      views: "91,2K",
      votes: "5,8K",
      image: fenomenosNaturais[0].imageUrl,
      category: "CURIOSIDADES",
      description: "De cataratas vermelho-sangue na Antártida a pedras que caminham sozinhas no Vale da Morte: 15 fenômenos reais que continuam desafiando os maiores cientistas do mundo.",
      reaction: "⚡",
      large: true,
      tags: ["mistério", "natureza", "ciência"],
      link: `/fenomeno-natural/${fenomenosNaturais[0].slug}`,
    },
    {
      title: "20 Objetos Cotidianos que Têm Funções Secretas que Ninguém Conhece",
      author: "Daniel Olimpio",
      date: "há 2 minutos",
      views: "84,5K",
      votes: "5,1K",
      image: objetosFuncoes[0].imageUrl,
      category: "CURIOSIDADES",
      description: "Você usa esses objetos todos os dias, mas nunca percebeu o detalhe escondido neles. Descubra 20 funções secretas de engenharia que vão mudar sua percepção.",
      reaction: "🤯",
      large: true,
      tags: ["curiosidades", "objetos", "viral"],
      link: `/objeto-funcao/${objetosFuncoes[0].slug}`,
    },
    {
      title: "20 Lugares Proibidos que Você Nunca Poderá Visitar",
      author: "Daniel Olimpio",
      date: "há 5 minutos",
      views: "72,1K",
      votes: "4,2K",
      image: lugaresProibidos[0].imageUrl,
      category: "CURIOSIDADES",
      description: "De ilhas mortais a bunkers secretos, conheça os 20 locais mais restritos do planeta que você jamais poderá visitar. Mistérios, segredos e proibições reveladas.",
      reaction: "🚫",
      large: true,
      tags: ["mistério", "lugares proibidos", "viral"],
      link: `/lugar-proibido/${lugaresProibidos[0].slug}`,
    },
    {
      title: "18 Espécies de Felinos ao Redor do Mundo — Incluindo as que Vivem no Brasil",
      author: "Daniel Olimpio",
      date: "há 15 minutos",
      views: "58,7K",
      votes: "3,5K",
      image: felinosImage,
      category: "ANIMAIS",
      description: "Conheça 18 espécies fascinantes de felinos selvagens distribuídas pelo mundo, incluindo as que habitam o Brasil — do majestoso leopardo nebuloso ao pequeno gato chileno.",
      reaction: "🐆",
      large: true,
      tags: ["animais", "felinos", "natureza"],
      link: "/leopardo-nebuloso-felino-florestas-asiaticas",
    },
    {
      title: "10 Fotos de Duplo Sentido que Vão Confundir Sua Mente",
      author: "Daniel Olimpio",
      date: "há 30 minutos",
      views: "42,3K",
      votes: "2,8K",
      image: duploSentidoImage,
      category: "CURIOSIDADES",
      description: "Prepare-se para ver fotos que vão confundir completamente sua mente! Descubra a verdade por trás dessas ilusões de ótica incríveis que viralizaram na internet.",
      reaction: "🤯",
      large: true,
      tags: ["curiosidades", "ilusão", "viral"],
      link: "/foto-duplo-sentido-crianca-praia",
    },
    {
      title: "10 Celebridades Antes e Depois da Maquiagem",
      author: "Daniel Olimpio",
      date: "há 1 hora",
      views: "25,8K",
      votes: "1,2K",
      image: xuxaImage,
      category: "CELEBRIDADES",
      description: "Veja a transformação incrível de 10 celebridades brasileiras antes e depois da maquiagem. Descubra os segredos de beleza de Xuxa, Sandy, Ludmilla e muito mais!",
      reaction: "💄",
      large: true,
      tags: ["celebridades", "maquiagem", "beleza"],
      link: "/xuxa-meneghel-antes-depois-maquiagem",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-6">
        <ReactionBar />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mt-6 lg:mt-8">
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
              {posts.map((post, index) => (
                <PostCard key={`${index}-${post.title}`} {...post} />
              ))}
            </div>
          </div>

          <Sidebar />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
