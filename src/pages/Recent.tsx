import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PostCard from "@/components/PostCard";
import Sidebar from "@/components/Sidebar";
import { Helmet } from "react-helmet";

const Recent = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Últimas Notícias do Mundo das Celebridades",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      author: "Maria Silva",
      date: "Há 10 minutos",
      views: "523",
      votes: "89",
      category: "Celebridades"
    },
    {
      id: 2,
      title: "Novidades Fresquinhas do Entretenimento",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      author: "João Santos",
      date: "Há 30 minutos",
      views: "412",
      votes: "67",
      category: "Entretenimento"
    },
    {
      id: 3,
      title: "Breaking News: Aconteceu Agora!",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      author: "Ana Costa",
      date: "Há 1 hora",
      views: "789",
      votes: "123",
      category: "Buzz"
    },
  ]);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Recentes - eFuxico | Últimas Notícias e Novidades</title>
        <meta name="description" content="Confira as notícias mais recentes do eFuxico. Últimas novidades sobre celebridades, entretenimento e muito mais atualizado em tempo real." />
        <link rel="canonical" href="https://efuxico.com.br/recentes" />
        <meta property="og:title" content="Recentes - eFuxico | Últimas Notícias" />
        <meta property="og:description" content="Últimas notícias e novidades sobre celebridades e entretenimento." />
        <meta property="og:url" content="https://efuxico.com.br/recentes" />
      </Helmet>

      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-2">Recentes</h1>
        <p className="text-muted-foreground mb-8">As notícias mais recentes e atualizadas</p>
        
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

export default Recent;
