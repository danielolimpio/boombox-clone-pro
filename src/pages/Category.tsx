import { useState } from "react";
import { useParams } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import PostCard from "@/components/PostCard";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const Category = () => {
  const { slug } = useParams();
  const [page, setPage] = useState(1);

  const categoryNames: { [key: string]: string } = {
    "curiosidades": "Curiosidades",
    "celebridades": "Celebridades",
    "entretenimento": "Entretenimento",
    "questionarios": "Questionários",
    "tecnologia": "Tecnologia"
  };

  const categoryDescriptions: { [key: string]: string } = {
    "curiosidades": "Fatos surpreendentes que desafiam o senso comum — reais, mas quase inacreditáveis.",
    "celebridades": "Histórias e atualizações sobre figuras famosas que você conhece (ou achava que conhecia).",
    "entretenimento": "Conteúdos que marcaram ou estão marcando a cultura pop — com um toque além do óbvio.",
    "questionarios": "Testes rápidos e divertidos para você se descobrir (ou se entreter por uns minutos).",
    "tecnologia": "Inovações, invenções e ideias que moldam — ou tentam moldar — o nosso dia a dia."
  };

  const categoryName = categoryNames[slug || ""] || "Categoria";

  const getCategoryPosts = () => {
    const allPosts: { [key: string]: any[] } = {
      "curiosidades": [
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
          tags: ["ciência", "espaço", "fatos"],
        },
        {
          title: "10 Curiosidades Sobre Animais Que Você Nunca Imaginou",
          author: "Roberto Silva",
          date: "há 1 semana",
          views: "11,2K",
          votes: "445",
          image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=400&h=300&fit=crop",
          category: "CURIOSIDADES",
          reaction: "🤯",
          tags: ["animais", "natureza", "curiosidades"],
        },
      ],
      "celebridades": [
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
      ],
      "entretenimento": [
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
          title: "Os 10 Melhores Festivais de Música do Brasil",
          author: "Carlos Mendes",
          date: "há 2 semanas",
          views: "7,5K",
          votes: "267",
          image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=400&h=300&fit=crop",
          category: "ENTRETENIMENTO",
          reaction: "🎸",
          tags: ["música", "festivais", "eventos"],
        },
      ],
      "questionarios": [
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
      ],
      "tecnologia": [
        {
          title: "5 Inovações Tecnológicas Que Vão Mudar o Mundo",
          author: "Carla Souza",
          date: "há 5 dias",
          views: "6,8K",
          votes: "198",
          image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
          category: "TECNOLOGIA",
          reaction: "💡",
          tags: ["inovação", "futuro", "tech"],
        },
        {
          title: "Inteligência Artificial: O Futuro Chegou",
          author: "Paulo Martins",
          date: "há 3 dias",
          views: "10,1K",
          votes: "387",
          image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
          category: "TECNOLOGIA",
          reaction: "🤖",
          tags: ["ia", "tecnologia", "inovação"],
        },
      ],
    };

    return allPosts[slug || ""] || [];
  };

  const posts = getCategoryPosts();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-6">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{categoryName}</h1>
          <p className="text-lg text-muted-foreground">
            {categoryDescriptions[slug || ""] || ""}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
                {[1, 2, 3].map((p) => (
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

export default Category;
