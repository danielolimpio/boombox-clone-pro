import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PostCard from "@/components/PostCard";
import Sidebar from "@/components/Sidebar";
import { Helmet } from "react-helmet";
import { getHot } from "@/data/allPosts";

const Hot = () => {
  const posts = getHot();

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Hot 🔥 - eFuxico</title>
        <meta name="description" content="Conteúdo em alta no eFuxico: os artigos mais quentes do momento." />
        <link rel="canonical" href="https://efuxico.com.br/hot" />
        <meta property="og:title" content="Hot 🔥 - eFuxico" />
        <meta property="og:description" content="Conteúdo em alta no eFuxico: os artigos mais quentes do momento." />
        <meta property="og:url" content="https://efuxico.com.br/hot" />
      </Helmet>

      <Header />

      <main className="container mx-auto px-4 py-6 md:py-8">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-2">Hot 🔥</h1>
        <p className="text-muted-foreground mb-6 md:mb-8">Os artigos mais quentes do momento</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {posts.map((post, i) => (
                <PostCard key={i} {...post} />
              ))}
            </div>
          </div>
          <Sidebar />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Hot;
