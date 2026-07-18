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
import duploImage from "@/assets/duplo-sentido/duplo-02.jpg";

const DuploSentido02 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Casal no Barco: A Foto que Enganou Milhões de Pessoas | eFuxico</title>
        <meta name="description" content="Entenda como a foto de um casal em um barco criou uma das ilusões de ótica mais compartilhadas da internet. A verdade vai te surpreender!" />
        <link rel="canonical" href="https://efuxico.com.br/foto-duplo-sentido-casal-barco" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Casal no Barco: A Foto que Enganou Milhões de Pessoas | eFuxico" />
        <meta property="og:description" content="Entenda como a foto de um casal em um barco criou uma das ilusões de ótica mais compartilhadas da internet. A verdade vai te surpreender!" />
        <meta property="og:url" content="https://efuxico.com.br/foto-duplo-sentido-casal-barco" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <article className="bg-card rounded-lg p-6 shadow-lg">
                <h1 className="text-4xl font-bold mb-4">10 Fotos de Duplo Sentido que Vão Confundir Sua Mente</h1>
                <h2 className="text-3xl font-bold mb-6 text-primary">#2 - Casal no Barco: A Foto que Enganou Milhões</h2>
                
                <img src={duploImage} alt="Casal no barco - ilusão de ótica" className="w-full rounded-lg mb-8" />
                
                <div className="prose prose-lg max-w-none text-foreground">
                  <p className="mb-4">
                    Esta foto de um casal aproveitando um passeio de barco se tornou viral por um motivo muito específico: à primeira vista, parece mostrar algo completamente inapropriado. Mas a realidade é bem diferente e totalmente inocente.
                  </p>
                  
                  <p className="mb-4">
                    Na imagem, vemos um casal sentado em um barco, com um belo lago e montanhas verdes ao fundo. Ambos usam óculos escuros e parecem estar aproveitando um dia ensolarado de lazer na água. A mulher veste um vestido florido e está abraçada ao homem.
                  </p>
                  
                  <p className="mb-4">
                    O que causa toda a confusão é a forma como as pernas do casal estão posicionadas. A perna da mulher está cruzada sobre a perna do homem de uma maneira que, combinada com o ângulo da foto e as cores das roupas, cria uma ilusão de ótica impressionante.
                  </p>
                  
                  <p className="mb-4">
                    A verdade é simples: estamos vendo apenas as pernas do casal entrelaçadas de forma carinhosa. A perna bronzeada que aparece em primeiro plano pertence à mulher, que está com as pernas cruzadas. A mão do homem está apoiada em seu próprio joelho.
                  </p>
                  
                  <p className="mb-4">
                    Este tipo de ilusão acontece porque nosso cérebro tenta processar rapidamente o que vemos, e às vezes faz associações equivocadas. Quando olhamos com mais atenção e analisamos a anatomia da cena, fica claro que é apenas um casal em uma pose comum.
                  </p>
                  
                  <p className="mb-4">
                    A foto é um exemplo perfeito de como o ângulo e a posição dos elementos em uma imagem podem criar interpretações completamente diferentes. É também um lembrete de que nem sempre devemos confiar na primeira impressão que temos ao ver uma fotografia.
                  </p>
                </div>

                <SocialShare 
                  url="https://efuxico.com.br/foto-duplo-sentido-casal-barco"
                  title="Casal no Barco: A Foto que Enganou Milhões de Pessoas"
                />

                <AuthorBio />

                <div className="mt-8 flex justify-between">
                  <Link to="/foto-duplo-sentido-crianca-praia">
                    <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                      <ArrowLeft className="mr-2" /> Anterior
                    </Button>
                  </Link>
                  <Link to="/foto-duplo-sentido-nado-sincronizado">
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

export default DuploSentido02;
