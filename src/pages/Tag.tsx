import { useState } from "react";
import { useParams } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import PostCard from "@/components/PostCard";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const Tag = () => {
  const { slug } = useParams();
  const [page, setPage] = useState(1);

  const tagName = slug?.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ") || "Tag";

  const posts = [
    {
      title: "Conteúdo Marcado com " + tagName,
      author: "Maria Costa",
      date: "há 3 dias",
      views: "9,7K",
      votes: "324",
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=300&fit=crop",
      category: "TAG",
      description: "Explore todo o conteúdo relacionado a " + tagName.toLowerCase() + ".",
      reaction: "❤️",
    },
    {
      title: "Mais sobre " + tagName,
      author: "Pedro Lima",
      date: "há 4 dias",
      views: "7,2K",
      votes: "198",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=300&fit=crop",
      category: "TAG",
      reaction: "🎵",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-6">
        <div className="flex items-center gap-2 mb-8">
          <h1 className="text-4xl font-bold">Tag:</h1>
          <span className="text-4xl font-bold text-primary">{tagName}</span>
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

export default Tag;
