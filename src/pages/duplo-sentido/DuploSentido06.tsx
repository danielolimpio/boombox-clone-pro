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
import duploImage from "@/assets/duplo-sentido/duplo-06.jpg";

const DuploSentido06 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Casal no Sofá: A Foto Caseira que Confundiu a Internet Inteira | eFuxico</title>
        <meta name="description" content="Entenda a ilusão de ótica criada por uma foto casual de um casal no sofá que deixou milhões de pessoas confusas nas redes sociais." />
        <link rel="canonical" href="https://efuxico.com.br/foto-duplo-sentido-casal-sofa" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Casal no Sofá: A Foto Caseira que Confundiu a Internet Inteira | eFuxico" />
        <meta property="og:description" content="Entenda a ilusão de ótica criada por uma foto casual de um casal no sofá que deixou milhões de pessoas confusas nas redes sociais." />
        <meta property="og:url" content="https://efuxico.com.br/foto-duplo-sentido-casal-sofa" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <article className="bg-card rounded-lg p-6 shadow-lg">
                <h1 className="text-4xl font-bold mb-4">10 Fotos de Duplo Sentido que Vão Confundir Sua Mente</h1>
                <h2 className="text-3xl font-bold mb-6 text-primary">#6 - Casal no Sofá: A Ilusão Caseira</h2>
                
                <img src={duploImage} alt="Casal no sofá - ilusão de ótica" className="w-full rounded-lg mb-8" />
                
                <div className="prose prose-lg max-w-none text-foreground">
                  <p className="mb-4">
                    Uma foto aparentemente comum de um casal relaxando no sofá de casa se tornou viral por criar uma das ilusões de ótica mais confusas da internet. À primeira vista, a imagem parece mostrar algo que definitivamente não é o que está acontecendo.
                  </p>
                  
                  <p className="mb-4">
                    Na imagem, vemos uma sala de estar confortável com um sofá vermelho onde estão sentados um homem e uma mulher. A mulher está lendo uma revista enquanto o homem está ao lado dela. A decoração da casa é simples e aconchegante, típica de um lar comum.
                  </p>
                  
                  <p className="mb-4">
                    A confusão acontece pela forma como os corpos do casal estão posicionados. As pernas de um parecem se misturar com as do outro, e a posição do corpo do homem, combinada com a perspectiva da foto, cria uma impressão visual que engana completamente nosso cérebro.
                  </p>
                  
                  <p className="mb-4">
                    O que realmente está acontecendo é muito simples: o casal está apenas sentado lado a lado no sofá de forma relaxada. A mulher está com as pernas estendidas e o homem está em uma posição que faz parecer que os corpos estão em uma configuração diferente do que realmente estão.
                  </p>
                  
                  <p className="mb-4">
                    Este tipo de ilusão é particularmente interessante porque acontece em um ambiente doméstico comum. Não há nenhuma intenção de criar confusão visual, é apenas uma coincidência de posicionamento que resulta em uma imagem que faz as pessoas olharem várias vezes.
                  </p>
                  
                  <p className="mb-4">
                    A foto demonstra como nosso cérebro tenta interpretar rapidamente o que vemos, e quando os elementos visuais não se encaixam nos padrões esperados, acabamos chegando a conclusões erradas. É um lembrete divertido de que nem sempre podemos confiar na primeira impressão visual.
                  </p>
                </div>

                <SocialShare 
                  url="https://efuxico.com.br/foto-duplo-sentido-casal-sofa"
                  title="Casal no Sofá: A Foto Caseira que Confundiu a Internet Inteira"
                />

                <AuthorBio />

                <div className="mt-8 flex justify-between">
                  <Link to="/foto-duplo-sentido-fonte-parque">
                    <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                      <ArrowLeft className="mr-2" /> Anterior
                    </Button>
                  </Link>
                  <Link to="/foto-duplo-sentido-grupo-amigos">
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

export default DuploSentido06;
