import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import PostCard from "@/components/PostCard";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { getPostsByTag } from "@/data/allPosts";

const Tag = () => {
  const { slug = "" } = useParams();
  const tagName = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
  const posts = getPostsByTag(slug.replace(/-/g, " "));

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{tagName} - eFuxico</title>
        <meta
          name="description"
          content={`Todos os artigos do eFuxico marcados com ${tagName}.`}
        />
        <link rel="canonical" href={`https://efuxico.com.br/tag/${slug}`} />
      </Helmet>

      <Header />

      <main className="container mx-auto px-4 py-6">
        <div className="flex items-center gap-2 mb-8 flex-wrap">
          <h1 className="text-3xl md:text-4xl font-bold">Tag:</h1>
          <span className="text-3xl md:text-4xl font-bold text-primary">
            {tagName}
          </span>
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
                  Nenhum artigo encontrado para esta tag.
                </p>
                <Button asChild className="mt-4">
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

export default Tag;
