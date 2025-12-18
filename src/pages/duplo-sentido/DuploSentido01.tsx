import { Helmet } from "react-helmet";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import SocialShare from "@/components/SocialShare";
import AuthorBio from "@/components/AuthorBio";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import duploImage from "@/assets/duplo-sentido/duplo-01.jpg";

const DuploSentido01 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Criança na Praia: A Ilusão de Ótica que Viralizou na Internet | eFuxico</title>
        <meta name="description" content="Descubra a verdade por trás da foto viral de uma criança na praia que confundiu milhões de pessoas com sua ilusão de ótica incrível." />
        <link rel="canonical" href="https://efuxico.com.br/foto-duplo-sentido-crianca-praia" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <article className="bg-card rounded-lg p-6 shadow-lg">
                <h1 className="text-4xl font-bold mb-4">10 Fotos de Duplo Sentido que Vão Confundir Sua Mente</h1>
                <h2 className="text-3xl font-bold mb-6 text-primary">#1 - Criança na Praia: A Ilusão de Ótica que Viralizou</h2>
                
                <img src={duploImage} alt="Criança na praia - ilusão de ótica" className="w-full rounded-lg mb-8" />
                
                <div className="prose prose-lg max-w-none text-foreground">
                  <p className="mb-4">
                    Esta imagem se tornou um verdadeiro fenômeno viral nas redes sociais, deixando milhões de pessoas confusas ao primeiro olhar. O que parece ser algo completamente diferente é, na verdade, uma cena totalmente inocente de um dia comum na praia.
                  </p>
                  
                  <p className="mb-4">
                    Na foto, vemos uma criança pequena sentada na areia da praia, usando um chapéu branco para se proteger do sol e uma fralda azul clara. A criança está de costas para a câmera, aparentemente apreciando o dia ensolarado ou brincando com algo nas mãos.
                  </p>
                  
                  <p className="mb-4">
                    O que causa a confusão é a posição da criança e o ângulo da foto. As pernas da criança, combinadas com a cor da areia e a forma como ela está sentada, criam uma ilusão de ótica que faz muitas pessoas pensarem estar vendo algo completamente diferente à primeira vista.
                  </p>
                  
                  <p className="mb-4">
                    A realidade é muito mais simples: trata-se apenas de uma criança sentada na praia, com suas perninhas dobradas de uma forma que, combinada com as sombras e a perspectiva da foto, cria essa ilusão interessante. Os joelhos da criança e a forma como a luz incide sobre a cena são os principais responsáveis pelo efeito visual.
                  </p>
                  
                  <p className="mb-4">
                    Este tipo de foto demonstra perfeitamente como nosso cérebro pode nos pregar peças. A forma como processamos imagens é baseada em padrões que reconhecemos, e quando algo não se encaixa perfeitamente nesses padrões, nossa mente tenta preencher as lacunas, muitas vezes chegando a conclusões erradas.
                  </p>
                  
                  <p className="mb-4">
                    É fascinante como uma simples foto de família em um dia de praia pode se transformar em um quebra-cabeça visual que engana milhões de pessoas ao redor do mundo. Esta imagem é um ótimo exemplo de como a perspectiva e o ângulo podem transformar completamente a percepção de uma cena cotidiana.
                  </p>
                </div>

                <SocialShare 
                  url="https://efuxico.com.br/foto-duplo-sentido-crianca-praia"
                  title="Criança na Praia: A Ilusão de Ótica que Viralizou na Internet"
                />

                <AuthorBio />

                <div className="mt-8 flex justify-end">
                  <Link to="/foto-duplo-sentido-casal-barco">
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

export default DuploSentido01;
