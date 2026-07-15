import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
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
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const observerTarget = useRef(null);

  const initialPosts = [
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
    {
      title: "25 Fatos Incríveis Que Você Não Sabia Sobre o Universo",
      author: "Ana Silva",
      date: "há 2 dias",
      views: "12,5K",
      votes: "432",
      image: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=800&h=600&fit=crop",
      category: "CURIOSIDADES",
      description: "Descubra fatos fascinantes sobre o universo que vão explodir sua mente.",
      reaction: "😱",
      large: true,
      tags: ["ciência", "espaço", "fatos"],
    },
    {
      title: "Vida Secreta das Celebridades Brasileiras em 2025",
      author: "João Santos",
      date: "há 1 dia",
      views: "8,3K",
      votes: "256",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
      category: "CELEBRIDADES",
      reaction: "🤔",
      tags: ["famosos", "brasil", "novidades"],
    },
    {
      title: "Melhores Séries e Filmes de 2025 Para Maratonar",
      author: "Pedro Lima",
      date: "há 3 dias",
      views: "15,2K",
      votes: "589",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=300&fit=crop",
      category: "ENTRETENIMENTO",
      reaction: "🎵",
      tags: ["streaming", "filmes", "séries"],
    },
    {
      title: "Quiz: Que Tipo de Pessoa Você É?",
      author: "Maria Costa",
      date: "há 4 dias",
      views: "9,7K",
      votes: "324",
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=300&fit=crop",
      category: "QUESTIONÁRIOS",
      reaction: "❤️",
      tags: ["quiz", "personalidade", "teste"],
    },
    {
      title: "5 Inovações Tecnológicas Que Vão Mudar o Mundo",
      author: "Carla Souza",
      date: "há 5 dias",
      views: "6,8K",
      votes: "198",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
      category: "TECNOLOGIA",
      tags: ["inovação", "futuro", "tech"],
    },
    {
      title: "10 Curiosidades Sobre Animais Que Você Nunca Imaginou",
      author: "Roberto Silva",
      date: "há 1 semana",
      views: "11,2K",
      votes: "445",
      image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=400&h=300&fit=crop",
      category: "CURIOSIDADES",
      tags: ["animais", "natureza", "curiosidades"],
    },
    {
      title: "Entrevista Exclusiva: Anitta Fala Sobre Novos Projetos",
      author: "Juliana Oliveira",
      date: "há 1 semana",
      views: "18,9K",
      votes: "723",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop",
      category: "CELEBRIDADES",
      reaction: "✨",
      tags: ["anitta", "música", "entrevista"],
    },
    {
      title: "Os 10 Melhores Festivais de Música do Brasil",
      author: "Carlos Mendes",
      date: "há 2 semanas",
      views: "7,5K",
      votes: "267",
      image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=400&h=300&fit=crop",
      category: "ENTRETENIMENTO",
      tags: ["música", "festivais", "eventos"],
    },
    {
      title: "Quiz: Descubra Seu Destino de Viagem Ideal",
      author: "Fernanda Alves",
      date: "há 2 semanas",
      views: "13,4K",
      votes: "512",
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=300&fit=crop",
      category: "QUESTIONÁRIOS",
      reaction: "🏕️",
      tags: ["viagem", "quiz", "turismo"],
    },
  ];

  const loadMorePosts = useCallback(() => {
    if (loading) return;
    
    setLoading(true);
    
    setTimeout(() => {
      const newPosts = initialPosts.map((post, index) => ({
        ...post,
        title: `${post.title} - Página ${posts.length / initialPosts.length + 1}`,
      }));
      
      setPosts(prevPosts => [...prevPosts, ...newPosts]);
      setLoading(false);
    }, 800);
  }, [loading, posts.length]);

  useEffect(() => {
    setPosts(initialPosts);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && !loading) {
          loadMorePosts();
        }
      },
      { threshold: 0.1 }
    );

    const currentTarget = observerTarget.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [loadMorePosts, loading]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-6">
        <ReactionBar />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {posts.map((post, index) => (
                <PostCard key={`${index}-${post.title}`} {...post} />
              ))}
            </div>

            <div ref={observerTarget} className="flex items-center justify-center py-8">
              {loading && (
                <div className="flex items-center gap-2 text-muted-foreground">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
                  <span>Carregando mais posts...</span>
                </div>
              )}
            </div>

            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                size="lg"
                variant="outline"
                onClick={() => setPage(Math.max(1, page - 1))}
                disabled={page === 1}
                className="gap-2 h-14 px-8 text-lg font-semibold"
              >
                <ChevronLeft className="h-6 w-6" />
                Anterior
              </Button>
              
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((p) => (
                  <Button
                    key={p}
                    variant={page === p ? "default" : "outline"}
                    size="icon"
                    onClick={() => setPage(p)}
                    className="h-12 w-12 text-base"
                  >
                    {p}
                  </Button>
                ))}
              </div>

              <Button
                size="lg"
                className="gap-2 bg-primary hover:bg-primary/90 h-14 px-8 text-lg font-semibold"
                onClick={() => setPage(page + 1)}
              >
                Próximo
                <ChevronRight className="h-6 w-6" />
              </Button>
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
