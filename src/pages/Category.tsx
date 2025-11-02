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
    "celebridades": "Celebridades",
    "entretenimento": "Entretenimento",
    "musica": "Música",
    "vida": "Vida",
    "animais": "Animais",
    "arte": "Arte",
    "audio": "Áudio",
    "grandes-historias": "Grandes Histórias",
    "livros": "Livros",
    "negocios": "Negócios",
    "buzz": "Buzz",
    "geek": "Geek",
    "saude": "Saúde",
    "ideias": "Ideias",
    "filmes": "Filmes",
    "pais": "Pais",
    "podcasts": "Podcasts",
    "politica": "Política",
    "enigmas": "Enigmas",
    "retrospectiva": "Retrospectiva"
  };

  const categoryName = categoryNames[slug || ""] || "Categoria";

  const posts = [
    {
      title: "Novidades Incríveis da Categoria " + categoryName,
      author: "Ana Silva",
      date: "há 2 dias",
      views: "12,5K",
      votes: "432",
      image: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=800&h=600&fit=crop",
      category: categoryName.toUpperCase(),
      description: "Descubra as últimas novidades sobre " + categoryName.toLowerCase() + ".",
      reaction: "😱",
    },
    {
      title: "Top 10 " + categoryName + " de 2025",
      author: "João Santos",
      date: "há 1 dia",
      views: "8,3K",
      votes: "256",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
      category: categoryName.toUpperCase(),
      reaction: "🤔",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-6">
        <h1 className="text-4xl font-bold mb-8">{categoryName}</h1>

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
