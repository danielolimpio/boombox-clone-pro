import { Helmet } from "react-helmet";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import SocialShare from "@/components/SocialShare";
import AuthorBio from "@/components/AuthorBio";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import duploImage from "@/assets/duplo-sentido/duplo-07.jpg";

const DuploSentido07 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Grupo de Amigos: A Foto de Balada que Viralizou na Internet | eFuxico</title>
        <meta name="description" content="Veja como uma foto de grupo de amigos em uma balada criou uma ilusão de ótica que deixou milhões confusos. A explicação vai te surpreender!" />
        <link rel="canonical" href="https://efuxico.com.br/foto-duplo-sentido-grupo-amigos" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Grupo de Amigos: A Foto de Balada que Viralizou na Internet | eFuxico" />
        <meta property="og:description" content="Veja como uma foto de grupo de amigos em uma balada criou uma ilusão de ótica que deixou milhões confusos. A explicação vai te surpreender!" />
        <meta property="og:url" content="https://efuxico.com.br/foto-duplo-sentido-grupo-amigos" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <article className="bg-card rounded-lg p-6 shadow-lg">
                <h1 className="text-4xl font-bold mb-4">10 Fotos de Duplo Sentido que Vão Confundir Sua Mente</h1>
                <h2 className="text-3xl font-bold mb-6 text-primary">#7 - Grupo de Amigos: A Ilusão da Balada</h2>
                
                <img src={duploImage} alt="Grupo de amigos - ilusão de ótica" className="w-full rounded-lg mb-8" />
                
                <div className="prose prose-lg max-w-none text-foreground">
                  <p className="mb-4">
                    Uma foto típica de um grupo de amigos se divertindo em uma balada se tornou um dos exemplos mais famosos de ilusão de ótica nas redes sociais. A imagem parece perfeitamente normal, mas quando você olha com atenção, algo parece muito errado.
                  </p>
                  
                  <p className="mb-4">
                    Na foto, vemos cinco pessoas sentadas juntas em um sofá de uma boate ou bar, posando para a câmera. O ambiente tem iluminação típica de balada, com tons rosados e aconchegantes. Todos parecem estar se divertindo e aproveitando a noite.
                  </p>
                  
                  <p className="mb-4">
                    A ilusão acontece por causa da forma como as pessoas estão sentadas e como suas pernas estão posicionadas. As pernas de uma das moças aparecem de forma que parece pertencer a outra pessoa, criando uma confusão visual sobre quem são as pernas de quem.
                  </p>
                  
                  <p className="mb-4">
                    O que realmente está acontecendo é que as pessoas estão sentadas muito próximas umas das outras, como é comum em fotos de grupo em ambientes de festa. A proximidade, combinada com roupas de cores semelhantes e a iluminação ambiente, faz com que seja difícil distinguir onde termina uma pessoa e começa outra.
                  </p>
                  
                  <p className="mb-4">
                    Este tipo de foto é extremamente comum em fotos de grupo, especialmente em ambientes noturnos onde a iluminação pode criar sombras e reflexos inesperados. A confusão visual é amplificada pela forma como nosso cérebro tenta organizar rapidamente os elementos da imagem.
                  </p>
                  
                  <p className="mb-4">
                    A imagem serve como um exemplo perfeito de como fotos casuais de momentos de diversão podem acidentalmente criar ilusões visuais que nos fazem questionar o que realmente estamos vendo. É um lembrete divertido da importância de olhar com atenção antes de tirar conclusões.
                  </p>
                </div>

                <SocialShare 
                  url="https://efuxico.com.br/foto-duplo-sentido-grupo-amigos"
                  title="Grupo de Amigos: A Foto de Balada que Viralizou na Internet"
                />

                <AuthorBio />

                <div className="mt-8 flex justify-between">
                  <Link to="/foto-duplo-sentido-casal-sofa">
                    <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                      <ArrowLeft className="mr-2" /> Anterior
                    </Button>
                  </Link>
                  <Link to="/foto-duplo-sentido-telescopio">
                    <Button size="lg" className="text-lg px-8 py-4">
                      Próximo <ArrowRight className="ml-2" />
                    </Button>
                  </Link>
                </div>
              </article>
            </div>
            <aside className="lg:col-span-1">
              <Sidebar />
            </aside>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default DuploSentido07;
