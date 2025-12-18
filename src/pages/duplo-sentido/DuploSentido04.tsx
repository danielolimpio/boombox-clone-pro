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
import duploImage from "@/assets/duplo-sentido/duplo-04.jpg";

const DuploSentido04 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Jogador de Basquete: A Ilusão de Ótica na NBA que Viralizou | eFuxico</title>
        <meta name="description" content="Descubra a verdade por trás da foto viral de um jogador de basquete da NBA que criou uma ilusão de ótica inacreditável nas quadras." />
        <link rel="canonical" href="https://efuxico.com.br/foto-duplo-sentido-jogador-basquete" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <article className="bg-card rounded-lg p-6 shadow-lg">
                <h1 className="text-4xl font-bold mb-4">10 Fotos de Duplo Sentido que Vão Confundir Sua Mente</h1>
                <h2 className="text-3xl font-bold mb-6 text-primary">#4 - Jogador de Basquete: A Ilusão na NBA</h2>
                
                <img src={duploImage} alt="Jogador de basquete - ilusão de ótica" className="w-full rounded-lg mb-8" />
                
                <div className="prose prose-lg max-w-none text-foreground">
                  <p className="mb-4">
                    Esta foto tirada durante um jogo da NBA se tornou um dos maiores exemplos de ilusão de ótica no mundo esportivo. À primeira vista, a imagem parece mostrar algo anatomicamente impossível, mas a explicação é muito mais simples do que parece.
                  </p>
                  
                  <p className="mb-4">
                    Na foto, vemos um jogador do Oklahoma City Thunder, vestindo o uniforme azul do time com o número 35, de costas para a câmera. Ele está próximo à lateral da quadra, onde estão sentadas várias pessoas, incluindo comentaristas e membros da imprensa.
                  </p>
                  
                  <p className="mb-4">
                    A ilusão acontece porque a cabeça de um senhor de cabelos brancos, que está sentado logo atrás do jogador, aparece exatamente no lugar onde deveria estar a cabeça do atleta. Isso cria a impressão hilária de que o jogador tem a cabeça de um idoso.
                  </p>
                  
                  <p className="mb-4">
                    O que realmente está acontecendo é que o jogador está olhando para baixo ou para o lado, fazendo com que sua cabeça fique fora do enquadramento da foto. No exato momento em que o fotógrafo capturou a imagem, a cabeça do homem de cabelos brancos se alinhou perfeitamente com o corpo do atleta.
                  </p>
                  
                  <p className="mb-4">
                    Este tipo de coincidência fotográfica é rara, mas quando acontece, os resultados são sempre hilários. A foto demonstra como o timing perfeito pode criar imagens que parecem impossíveis, mas que na verdade são apenas o resultado de uma sobreposição visual no momento certo.
                  </p>
                  
                  <p className="mb-4">
                    A imagem circulou amplamente nas redes sociais e se tornou um exemplo clássico de como fotos esportivas podem capturar momentos únicos e engraçados que não são percebidos no momento real do jogo, mas que se tornam evidentes quando congelados em uma fotografia.
                  </p>
                </div>

                <SocialShare 
                  url="https://efuxico.com.br/foto-duplo-sentido-jogador-basquete"
                  title="Jogador de Basquete: A Ilusão de Ótica na NBA que Viralizou"
                />

                <AuthorBio />

                <div className="mt-8 flex justify-between">
                  <Link to="/foto-duplo-sentido-nado-sincronizado">
                    <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                      <ArrowLeft className="mr-2" /> Anterior
                    </Button>
                  </Link>
                  <Link to="/foto-duplo-sentido-fonte-parque">
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

export default DuploSentido04;
