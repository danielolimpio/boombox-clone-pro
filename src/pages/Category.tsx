import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import PostCard from "@/components/PostCard";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { categoryMeta, getPostsByCategory } from "@/data/allPosts";

const Category = () => {
  const { slug = "" } = useParams();
  const meta = (categoryMeta as any)[slug];
  const posts = getPostsByCategory(slug);

  const title = meta ? `${meta.name} - eFuxico` : "Categoria - eFuxico";

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={meta?.description || "Categoria eFuxico"} />
        <link rel="canonical" href={`https://efuxico.com.br/categoria/${slug}`} />
      </Helmet>

      <Header />

      <main className="container mx-auto px-4 py-6">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            {meta?.name || "Categoria"}
          </h1>
          <p className="text-base md:text-lg text-muted-foreground">
            {meta?.description || ""}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="lg:col-span-2">
            {posts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
                {posts.map((post, index) => (
                  <PostCard key={index} {...post} />
                ))}
              </div>
            ) : (
              <div className="bg-card border rounded-lg p-8 text-center">
                <p className="text-lg font-semibold mb-2">
                  Nenhum artigo publicado nesta categoria ainda.
                </p>
                <p className="text-muted-foreground mb-6">
                  Estamos preparando conteúdo novo. Enquanto isso, explore
                  outras categorias.
                </p>
                <Button asChild>
                  <Link to="/">Voltar para o início</Link>
                </Button>
              </div>
            )}
          </div>

          <Sidebar />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Category;
