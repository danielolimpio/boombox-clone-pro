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
      category: "CELEBRIDADES",
      tags: ["trending", "viral", "famosos"]
    },
    {
      id: 2,
      title: "Viral: O Que Todo Mundo Está Falando",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      author: "Carla Lima",
      date: "Há 3 horas",
      views: "4567",
      votes: "743",
      category: "ENTRETENIMENTO",
      tags: ["viral", "tendência", "redes sociais"]
    },
    {
      id: 3,
      title: "Tendência do Momento nas Redes Sociais",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      author: "Lucas Ferreira",
      date: "Há 4 horas",
      views: "3891",
      votes: "621",
      category: "CURIOSIDADES",
      tags: ["social", "tendência", "viral"]
    },
    {
      id: 4,
      title: "Quiz Viral: Todos Estão Fazendo",
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2",
      author: "Fernanda Alves",
      date: "Há 5 horas",
      views: "3234",
      votes: "589",
      category: "QUESTIONÁRIOS",
      tags: ["quiz", "viral", "trending"]
    },
    {
      id: 5,
      title: "Tech em Alta: O Que Está em Tendência",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      author: "Roberto Silva",
      date: "Há 6 horas",
      views: "2987",
      votes: "534",
      category: "TECNOLOGIA",
      tags: ["tech", "trending", "inovação"]
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
        <h1 className="text-4xl font-extrabold mb-2">Tendências</h1>
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
