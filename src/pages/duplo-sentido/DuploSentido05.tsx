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
import duploImage from "@/assets/duplo-sentido/duplo-05.jpg";

const DuploSentido05 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Fonte no Parque: A Foto de Passeio que Viralizou nas Redes | eFuxico</title>
        <meta name="description" content="Veja a foto de uma moça em frente a uma fonte que criou uma ilusão de ótica impressionante e confundiu milhares de pessoas na internet." />
        <link rel="canonical" href="https://efuxico.com.br/foto-duplo-sentido-fonte-parque" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Fonte no Parque: A Foto de Passeio que Viralizou nas Redes | eFuxico" />
        <meta property="og:description" content="Veja a foto de uma moça em frente a uma fonte que criou uma ilusão de ótica impressionante e confundiu milhares de pessoas na internet." />
        <meta property="og:url" content="https://efuxico.com.br/foto-duplo-sentido-fonte-parque" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <article className="bg-card rounded-lg p-6 shadow-lg">
                <h1 className="text-4xl font-bold mb-4">10 Fotos de Duplo Sentido que Vão Confundir Sua Mente</h1>
                <h2 className="text-3xl font-bold mb-6 text-primary">#5 - Fonte no Parque: A Ilusão do Passeio</h2>
                
                <img src={duploImage} alt="Fonte no parque - ilusão de ótica" className="w-full rounded-lg mb-8" />
                
                <div className="prose prose-lg max-w-none text-foreground">
                  <p className="mb-4">
                    Uma simples foto de passeio em um parque se transformou em um fenômeno viral graças a uma ilusão de ótica completamente acidental. A imagem mostra uma jovem posando em frente a uma fonte, mas algo na composição da foto faz as pessoas olharem duas vezes.
                  </p>
                  
                  <p className="mb-4">
                    Na foto, vemos uma moça usando óculos de sol, regata branca e shorts claros, posando para a câmera em um dia ensolarado de verão. Atrás dela, há uma fonte d'água jorrando e outras pessoas aproveitando o passeio no parque.
                  </p>
                  
                  <p className="mb-4">
                    A ilusão acontece por causa do jato d'água da fonte que aparece exatamente entre as pernas da moça. O formato e a posição do jato de água, combinados com a roupa clara da jovem, criam uma impressão visual que confunde muitas pessoas à primeira vista.
                  </p>
                  
                  <p className="mb-4">
                    A explicação é simples: é apenas uma fonte de água normal funcionando no parque. A moça está simplesmente posando para uma foto de recordação, e por pura coincidência, o jato d'água ficou alinhado de forma a criar essa ilusão engraçada quando a foto foi tirada.
                  </p>
                  
                  <p className="mb-4">
                    Este é um exemplo perfeito de como o posicionamento casual de elementos em uma foto pode criar resultados inesperados. O fotógrafo provavelmente nem percebeu a ilusão no momento, e só depois, ao ver a imagem, notou o efeito visual criado.
                  </p>
                  
                  <p className="mb-4">
                    A foto serve como um lembrete divertido de que devemos sempre prestar atenção ao fundo das nossas fotos. Às vezes, elementos aparentemente inofensivos podem criar composições que geram interpretações completamente diferentes do que realmente está acontecendo na cena.
                  </p>
                </div>

                <SocialShare 
                  url="https://efuxico.com.br/foto-duplo-sentido-fonte-parque"
                  title="Fonte no Parque: A Foto de Passeio que Viralizou nas Redes"
                />

                <AuthorBio />

                <div className="mt-8 flex justify-between">
                  <Link to="/foto-duplo-sentido-jogador-basquete">
                    <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                      <ArrowLeft className="mr-2" /> Anterior
                    </Button>
                  </Link>
                  <Link to="/foto-duplo-sentido-casal-sofa">
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

export default DuploSentido05;
