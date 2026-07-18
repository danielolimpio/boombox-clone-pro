import { Helmet } from "react-helmet";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import SocialShare from "@/components/SocialShare";
import AuthorBio from "@/components/AuthorBio";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import duploImage from "@/assets/duplo-sentido/duplo-10.webp";

const DuploSentido10 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Selfie no Espelho: A Foto de Quarto que Enganou a Internet | eFuxico</title>
        <meta name="description" content="Descubra a verdade por trás da selfie no espelho que confundiu milhões de pessoas. Uma ilusão de ótica clássica que continua viralizando!" />
        <link rel="canonical" href="https://efuxico.com.br/foto-duplo-sentido-selfie-espelho" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Selfie no Espelho: A Foto de Quarto que Enganou a Internet | eFuxico" />
        <meta property="og:description" content="Descubra a verdade por trás da selfie no espelho que confundiu milhões de pessoas. Uma ilusão de ótica clássica que continua viralizando!" />
        <meta property="og:url" content="https://efuxico.com.br/foto-duplo-sentido-selfie-espelho" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <article className="bg-card rounded-lg p-6 shadow-lg">
                <h1 className="text-4xl font-bold mb-4">10 Fotos de Duplo Sentido que Vão Confundir Sua Mente</h1>
                <h2 className="text-3xl font-bold mb-6 text-primary">#10 - Selfie no Espelho: A Ilusão Final</h2>
                
                <img src={duploImage} alt="Selfie no espelho - ilusão de ótica" className="w-full rounded-lg mb-8" />
                
                <div className="prose prose-lg max-w-none text-foreground">
                  <p className="mb-4">
                    Chegamos à última foto da nossa série, e ela é um clássico absoluto das ilusões de ótica virais. Esta selfie tirada em um quarto com espelho confundiu milhões de pessoas ao redor do mundo e continua circulando nas redes sociais até hoje.
                  </p>
                  
                  <p className="mb-4">
                    Na imagem, vemos o que parece ser uma selfie tirada em um quarto com beliche. Uma jovem está no primeiro plano aplicando maquiagem enquanto outra pessoa segura a câmera. Ao fundo, podemos ver outra pessoa na cama de cima do beliche.
                  </p>
                  
                  <p className="mb-4">
                    A ilusão acontece por causa da presença do espelho e da forma como os reflexos e as pessoas reais se misturam na composição da foto. O ângulo da câmera cria uma confusão sobre quem está onde e o que é reflexo versus realidade.
                  </p>
                  
                  <p className="mb-4">
                    O que realmente está acontecendo é uma cena completamente normal de amigas se arrumando em um quarto de albergue ou dormitório. Uma está se maquiando, outra está tirando a foto, e uma terceira está descansando no beliche. O espelho simplesmente duplica alguns elementos criando a confusão.
                  </p>
                  
                  <p className="mb-4">
                    Fotos com espelhos são particularmente propensas a criar ilusões de ótica porque nosso cérebro tem dificuldade em processar rapidamente o que é reflexo e o que é real. Quando combinamos isso com múltiplas pessoas e um ambiente movimentado, o resultado é uma imagem que desafia nossa percepção.
                  </p>
                  
                  <p className="mb-4">
                    Esta foto encerra perfeitamente nossa série de 10 fotos de duplo sentido. Esperamos que você tenha se divertido tentando decifrar cada uma dessas ilusões de ótica incríveis que mostram como nossa mente pode ser facilmente enganada por ângulos, perspectivas e coincidências visuais!
                  </p>
                </div>

                <SocialShare 
                  url="https://efuxico.com.br/foto-duplo-sentido-selfie-espelho"
                  title="Selfie no Espelho: A Foto de Quarto que Enganou a Internet"
                />

                <AuthorBio />

                <div className="mt-8 flex justify-start">
                  <Link to="/foto-duplo-sentido-amigas-festa">
                    <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                      <ArrowLeft className="mr-2" /> Anterior
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

export default DuploSentido10;
