import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import ReactionBar from "@/components/ReactionBar";
import PostCard from "@/components/PostCard";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const Index = () => {
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const observerTarget = useRef(null);

  const initialPosts = [
    {
      title: "10 Celebridades Antes e Depois da Maquiagem",
      author: "Daniel Olimpio",
      date: "há 1 hora",
      views: "25,8K",
      votes: "1,2K",
      image: "https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=800&h=600&fit=crop",
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
