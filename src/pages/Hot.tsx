import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PostCard from "@/components/PostCard";
import Sidebar from "@/components/Sidebar";
import { Helmet } from "react-helmet";

const Hot = () => {
  const [posts] = useState([
    {
      id: 1,
      title: "HOT: Polêmica Esquenta as Redes Sociais",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      author: "Fernanda Rocha",
      date: "Há 1 hora",
      views: "8923",
      votes: "1456",
      category: "CELEBRIDADES",
      tags: ["polêmica", "hot", "escândalo"]
    },
    {
      id: 2,
      title: "Escândalo: Revelações Bombásticas",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      author: "Ricardo Mendes",
      date: "Há 2 horas",
      views: "7654",
      votes: "1234",
      category: "ENTRETENIMENTO",
      tags: ["escândalo", "revelação", "bombástico"]
    },
    {
      id: 3,
      title: "Ferveu: O Que Está Pegando Fogo Agora",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      author: "Juliana Alves",
      date: "Há 3 horas",
      views: "6789",
      votes: "1098",
      category: "CURIOSIDADES",
      tags: ["hot", "trending", "polêmico"]
    },
    {
      id: 4,
      title: "Polêmica: Quiz Divide Opiniões",
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2",
      author: "Carlos Mendes",
      date: "Há 4 horas",
      views: "5432",
      votes: "987",
      category: "QUESTIONÁRIOS",
      tags: ["quiz", "polêmica", "debate"]
    },
    {
      id: 5,
      title: "Tecnologia Controversa Gera Debate",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      author: "Ana Costa",
      date: "Há 5 horas",
      views: "4876",
      votes: "876",
      category: "TECNOLOGIA",
      tags: ["tech", "polêmica", "debate"]
    },
  ]);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Hot - eFuxico | Conteúdo Quente e Polêmico</title>
        <meta name="description" content="O que está pegando fogo no eFuxico! Polêmicas, escândalos e os assuntos mais quentes do momento sobre celebridades." />
        <link rel="canonical" href="https://efuxico.com.br/hot" />
        <meta property="og:title" content="Hot - eFuxico | Conteúdo Quente" />
        <meta property="og:description" content="Polêmicas e os assuntos mais quentes do momento." />
        <meta property="og:url" content="https://efuxico.com.br/hot" />
      </Helmet>

      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-extrabold mb-2">Hot 🔥</h1>
        <p className="text-muted-foreground mb-8">O conteúdo mais quente e polêmico</p>
        
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

export default Hot;
