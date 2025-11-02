import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PostCard from "@/components/PostCard";
import Sidebar from "@/components/Sidebar";
import { Helmet } from "react-helmet";

const Trending = () => {
  const [posts] = useState([
    {
      id: 1,
      title: "O Assunto Mais Comentado da Semana",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      author: "Pedro Oliveira",
      date: "Há 2 horas",
      views: "5234",
      votes: "892",
      category: "Tendências"
    },
    {
      id: 2,
      title: "Viral: O Que Todo Mundo Está Falando",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      author: "Carla Lima",
      date: "Há 3 horas",
      views: "4567",
      votes: "743",
      category: "Buzz"
    },
    {
      id: 3,
      title: "Tendência do Momento nas Redes Sociais",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      author: "Lucas Ferreira",
      date: "Há 4 horas",
      views: "3891",
      votes: "621",
      category: "Entretenimento"
    },
  ]);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Tendências - eFuxico | Assuntos em Alta</title>
        <meta name="description" content="Descubra as tendências do momento no eFuxico. Os assuntos mais comentados e virais sobre celebridades e entretenimento." />
        <link rel="canonical" href="https://efuxico.com.br/tendencias" />
        <meta property="og:title" content="Tendências - eFuxico | Assuntos em Alta" />
        <meta property="og:description" content="Os assuntos mais comentados e virais do momento." />
        <meta property="og:url" content="https://efuxico.com.br/tendencias" />
      </Helmet>

      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-2">Tendências</h1>
        <p className="text-muted-foreground mb-8">Os assuntos mais comentados do momento</p>
        
        <div className="flex gap-8">
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <PostCard key={post.id} {...post} />
              ))}
            </div>
          </div>
          
          <aside className="hidden lg:block w-80">
            <Sidebar />
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Trending;
