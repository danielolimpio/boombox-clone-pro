import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import ReactionBar from "@/components/ReactionBar";
import PostCard from "@/components/PostCard";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const Index = () => {
  const [page, setPage] = useState(1);

  const posts = [
    {
      title: "25 Fatos Incríveis Que Você Não Sabia Sobre Animais Selvagens",
      author: "Ana Silva",
      date: "há 2 dias",
      views: "12,5K",
      votes: "432",
      image: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=800&h=600&fit=crop",
      category: "ANIMAIS",
      description: "Descubra fatos fascinantes sobre a vida selvagem que vão explodir sua mente.",
      reaction: "😱",
      large: true,
    },
    {
      title: "Coisas Que Você Pode Dizer Ao Invés de 'Eu Não Sei'",
      author: "João Santos",
      date: "há 1 dia",
      views: "8,3K",
      votes: "256",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
      category: "VIDA",
      reaction: "🤔",
    },
    {
      title: "Áudios Escolhidos do Soundcloud Melhores de 2025",
      author: "Pedro Lima",
      date: "há 3 dias",
      views: "15,2K",
      votes: "589",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=300&fit=crop",
      category: "MÚSICA",
      reaction: "🎵",
    },
    {
      title: "Tudo Que Você Queria Saber Sobre Amor Mas Tinha Medo de Perguntar",
      author: "Maria Costa",
      date: "há 4 dias",
      views: "9,7K",
      votes: "324",
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=300&fit=crop",
      category: "VIDA",
      reaction: "❤️",
    },
    {
      title: "Imagens de Garota na Nigéria Sentada no Barco",
      author: "Carla Souza",
      date: "há 5 dias",
      views: "6,8K",
      votes: "198",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
      category: "FOTOS",
    },
    {
      title: "Entrevista Especial: Conversando Com o Pai no Dia dos Pais",
      author: "Roberto Silva",
      date: "há 1 semana",
      views: "11,2K",
      votes: "445",
      image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=400&h=300&fit=crop",
      category: "FAMÍLIA",
    },
    {
      title: "Vídeo: Luzes Natalinas nas Ruas dos Himalaias",
      author: "Juliana Oliveira",
      date: "há 1 semana",
      views: "18,9K",
      votes: "723",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop",
      category: "VIAGEM",
      reaction: "✨",
    },
    {
      title: "Os 10 Melhores Lugares Para Acampar Ao Redor do Mundo",
      author: "Carlos Mendes",
      date: "há 2 semanas",
      views: "7,5K",
      votes: "267",
      image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=400&h=300&fit=crop",
      category: "VIAGEM",
    },
    {
      title: "Quiz: Os Melhores Destinos de Camping do Planeta",
      author: "Fernanda Alves",
      date: "há 2 semanas",
      views: "13,4K",
      votes: "512",
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=300&fit=crop",
      category: "QUIZ",
      reaction: "🏕️",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-6">
        <ReactionBar />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {posts.map((post, index) => (
                <PostCard key={index} {...post} />
              ))}
            </div>

            <div className="flex items-center justify-center gap-4">
              <Button
                size="lg"
                variant="outline"
                onClick={() => setPage(Math.max(1, page - 1))}
                disabled={page === 1}
                className="gap-2"
              >
                <ChevronLeft className="h-5 w-5" />
                Anterior
              </Button>
              
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((p) => (
                  <Button
                    key={p}
                    variant={page === p ? "default" : "outline"}
                    size="icon"
                    onClick={() => setPage(p)}
                  >
                    {p}
                  </Button>
                ))}
              </div>

              <Button
                size="lg"
                className="gap-2 bg-primary hover:bg-primary/90"
                onClick={() => setPage(page + 1)}
              >
                Próximo
                <ChevronRight className="h-5 w-5" />
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
