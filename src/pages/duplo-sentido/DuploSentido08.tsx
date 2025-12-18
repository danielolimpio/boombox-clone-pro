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
import duploImage from "@/assets/duplo-sentido/duplo-08.jpg";

const DuploSentido08 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Telescópio no Píer: A Foto Turística que Confundiu Milhões | eFuxico</title>
        <meta name="description" content="Descubra a verdade por trás da foto viral de uma turista usando um telescópio que criou uma das ilusões de ótica mais engraçadas da internet." />
        <link rel="canonical" href="https://efuxico.com.br/foto-duplo-sentido-telescopio" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <article className="bg-card rounded-lg p-6 shadow-lg">
                <h1 className="text-4xl font-bold mb-4">10 Fotos de Duplo Sentido que Vão Confundir Sua Mente</h1>
                <h2 className="text-3xl font-bold mb-6 text-primary">#8 - Telescópio no Píer: A Ilusão Turística</h2>
                
                <img src={duploImage} alt="Telescópio no píer - ilusão de ótica" className="w-full rounded-lg mb-8" />
                
                <div className="prose prose-lg max-w-none text-foreground">
                  <p className="mb-4">
                    Uma foto aparentemente inocente de turistas em um píer se tornou viral por um motivo completamente inesperado. A imagem mostra pessoas apreciando a vista em um ponto turístico, mas a composição da foto criou uma ilusão que fez milhões de pessoas olharem duas vezes.
                  </p>
                  
                  <p className="mb-4">
                    Na foto, vemos um píer ou deck de observação com várias pessoas aproveitando o dia. Em primeiro plano, uma mulher de blusa rosa está usando um telescópio público para observar a paisagem. Ao fundo, outras pessoas estão apoiadas na grade, admirando a vista.
                  </p>
                  
                  <p className="mb-4">
                    A ilusão acontece por causa da posição da mulher que está usando o telescópio. A forma como ela está curvada para olhar através do equipamento, combinada com a posição de um homem que está atrás dela apoiado na grade, cria uma impressão visual completamente diferente do que realmente está acontecendo.
                  </p>
                  
                  <p className="mb-4">
                    O que realmente está acontecendo é muito simples: a mulher está apenas usando o telescópio da forma correta, inclinando-se para colocar o olho no visor. O homem atrás dela está em uma posição completamente separada, apenas admirando a vista. A sobreposição visual é pura coincidência.
                  </p>
                  
                  <p className="mb-4">
                    Este tipo de ilusão é particularmente comum em fotos de pontos turísticos, onde muitas pessoas estão em um espaço limitado e os ângulos de fotografia podem criar sobreposições inesperadas. O resultado é uma imagem que parece mostrar algo que não está realmente acontecendo.
                  </p>
                  
                  <p className="mb-4">
                    A foto é um lembrete hilário de como devemos ter cuidado com o fundo das nossas fotos de viagem. Às vezes, elementos que parecem inofensivos podem criar composições que geram interpretações muito diferentes da realidade. É sempre bom conferir a foto antes de postar!
                  </p>
                </div>

                <SocialShare 
                  url="https://efuxico.com.br/foto-duplo-sentido-telescopio"
                  title="Telescópio no Píer: A Foto Turística que Confundiu Milhões"
                />

                <AuthorBio />

                <div className="mt-8 flex justify-between">
                  <Link to="/foto-duplo-sentido-grupo-amigos">
                    <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                      <ArrowLeft className="mr-2" /> Anterior
                    </Button>
                  </Link>
                  <Link to="/foto-duplo-sentido-amigas-festa">
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

export default DuploSentido08;
