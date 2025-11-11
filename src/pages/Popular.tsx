import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PostCard from "@/components/PostCard";
import Sidebar from "@/components/Sidebar";
import { Helmet } from "react-helmet";

const Popular = () => {
  const [posts] = useState([
    {
      id: 1,
      title: "O Post Mais Popular da Semana",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3",
      author: "Marcos Souza",
      date: "Há 1 dia",
      views: "15234",
      votes: "2891",
      category: "CELEBRIDADES",
      tags: ["popular", "famosos", "destaque"]
    },
    {
      id: 2,
      title: "Todos Estão Lendo: Conteúdo Imperdível",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
      author: "Beatriz Castro",
      date: "Há 2 dias",
      views: "12456",
      votes: "2347",
      category: "ENTRETENIMENTO",
      tags: ["popular", "destaque", "leitura"]
    },
    {
      id: 3,
      title: "Sucesso Absoluto: Milhares de Leitores",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
      author: "Rafael Torres",
      date: "Há 3 dias",
      views: "10987",
      votes: "1923",
      category: "CURIOSIDADES",
      tags: ["sucesso", "popular", "viral"]
    },
    {
      id: 4,
      title: "Quiz Mais Feito do Mês",
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2",
      author: "Paula Lima",
      date: "Há 4 dias",
      views: "9876",
      votes: "1789",
      category: "QUESTIONÁRIOS",
      tags: ["quiz", "popular", "teste"]
    },
    {
      id: 5,
      title: "Tecnologia Que Todos Querem Conhecer",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      author: "João Santos",
      date: "Há 5 dias",
      views: "8765",
      votes: "1654",
      category: "TECNOLOGIA",
      tags: ["tech", "popular", "inovação"]
    },
  ]);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Populares - eFuxico | Conteúdo Mais Lido</title>
        <meta name="description" content="Os posts mais populares do eFuxico. Descubra o que milhares de leitores estão adorando sobre celebridades e entretenimento." />
        <link rel="canonical" href="https://efuxico.com.br/populares" />
        <meta property="og:title" content="Populares - eFuxico | Mais Lidos" />
        <meta property="og:description" content="Os posts mais populares e lidos por milhares de pessoas." />
        <meta property="og:url" content="https://efuxico.com.br/populares" />
      </Helmet>

      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-extrabold mb-2">Populares</h1>
        <p className="text-muted-foreground mb-8">Os posts mais lidos e curtidos</p>
        
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

export default Popular;
