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
import duploImage from "@/assets/duplo-sentido/duplo-03.jpg";

const DuploSentido03 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Nado Sincronizado: A Foto Esportiva que Confundiu a Internet | eFuxico</title>
        <meta name="description" content="Veja como uma foto de nado sincronizado criou uma ilusão de ótica hilária que viralizou nas redes sociais. A explicação é surpreendente!" />
        <link rel="canonical" href="https://efuxico.com.br/foto-duplo-sentido-nado-sincronizado" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Nado Sincronizado: A Foto Esportiva que Confundiu a Internet | eFuxico" />
        <meta property="og:description" content="Veja como uma foto de nado sincronizado criou uma ilusão de ótica hilária que viralizou nas redes sociais. A explicação é surpreendente!" />
        <meta property="og:url" content="https://efuxico.com.br/foto-duplo-sentido-nado-sincronizado" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <article className="bg-card rounded-lg p-6 shadow-lg">
                <h1 className="text-4xl font-bold mb-4">10 Fotos de Duplo Sentido que Vão Confundir Sua Mente</h1>
                <h2 className="text-3xl font-bold mb-6 text-primary">#3 - Nado Sincronizado: A Ilusão Esportiva</h2>
                
                <img src={duploImage} alt="Nado sincronizado - ilusão de ótica" className="w-full rounded-lg mb-8" />
                
                <div className="prose prose-lg max-w-none text-foreground">
                  <p className="mb-4">
                    O nado sincronizado é conhecido por suas coreografias impressionantes e movimentos graciosos na água. Mas esta foto em particular ficou famosa por um motivo completamente diferente: ela cria uma das ilusões de ótica mais engraçadas do mundo esportivo.
                  </p>
                  
                  <p className="mb-4">
                    Na imagem, vemos atletas de nado sincronizado durante uma apresentação. Uma das nadadoras está com o corpo parcialmente submerso enquanto outra está com as pernas para fora da água, em um movimento típico do esporte. Ambas vestem maiôs vermelhos.
                  </p>
                  
                  <p className="mb-4">
                    A ilusão acontece porque as pernas de uma atleta aparecem exatamente atrás da cabeça da outra, criando a impressão de que seria uma pessoa só com uma anatomia muito, muito estranha. O timing perfeito do fotógrafo capturou o momento exato em que essa sobreposição visual ocorre.
                  </p>
                  
                  <p className="mb-4">
                    O que realmente está acontecendo é simples: são duas atletas diferentes executando movimentos sincronizados. Uma está emergindo da água enquanto a outra executa uma figura com as pernas para cima. A água azul cristalina e o maiô vermelho ajudam a criar a ilusão.
                  </p>
                  
                  <p className="mb-4">
                    Este tipo de foto é bastante comum em competições de nado sincronizado, onde os fotógrafos buscam capturar a beleza e a sincronia dos movimentos. Ocasionalmente, o ângulo perfeito resulta em imagens como esta, que se tornam virais pela confusão que causam.
                  </p>
                  
                  <p className="mb-4">
                    A foto nos lembra de como a fotografia esportiva pode capturar momentos únicos e, às vezes, criar imagens que parecem desafiar a lógica e a anatomia humana. É um exemplo divertido de como a perspectiva pode transformar completamente nossa percepção.
                  </p>
                </div>

                <SocialShare 
                  url="https://efuxico.com.br/foto-duplo-sentido-nado-sincronizado"
                  title="Nado Sincronizado: A Foto Esportiva que Confundiu a Internet"
                />

                <AuthorBio />

                <div className="mt-8 flex justify-between">
                  <Link to="/foto-duplo-sentido-casal-barco">
                    <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                      <ArrowLeft className="mr-2" /> Anterior
                    </Button>
                  </Link>
                  <Link to="/foto-duplo-sentido-jogador-basquete">
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

export default DuploSentido03;
