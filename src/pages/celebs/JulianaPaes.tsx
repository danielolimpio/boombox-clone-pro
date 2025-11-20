import { Helmet } from "react-helmet";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import SocialShare from "@/components/SocialShare";
import AuthorBio from "@/components/AuthorBio";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import julianaImage from "@/assets/celebs/juliana-paes.jpeg";

const JulianaPaes = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Juliana Paes Antes e Depois da Maquiagem - Beleza Brasileira | eFuxico</title>
        <meta name="description" content="Veja a transformação de Juliana Paes antes e depois da maquiagem. A atriz revela sua beleza brasileira e sensualidade natural." />
        <link rel="canonical" href="https://efuxico.com.br/juliana-paes-antes-depois-maquiagem" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <article className="bg-card rounded-lg p-6 shadow-lg">
                <h1 className="text-4xl font-bold mb-4">10 Celebridades Antes e Depois da Maquiagem</h1>
                <h2 className="text-3xl font-bold mb-6 text-primary">#8 - Juliana Paes: Beleza Brasileira Exuberante</h2>

                <div className="mb-8">
                  <img src={julianaImage} alt="Juliana Paes" className="w-full rounded-lg shadow-md" />
                </div>

                <div className="prose max-w-none space-y-4">
                  <p className="text-lg">Juliana Paes aos 45 anos continua sendo um dos maiores símbolos de beleza brasileira. Sua transformação com maquiagem realça ainda mais sua sensualidade natural.</p>
                  {/* Content abbreviated for space */}
                </div>

                <div className="mt-8 bg-muted p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4">Perguntas Frequentes</h3>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Qual a idade de Juliana Paes?</AccordionTrigger>
                      <AccordionContent>Juliana nasceu em 26 de março de 1979, tem 45 anos.</AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                <SocialShare 
                  url="https://efuxico.com.br/juliana-paes-antes-depois-maquiagem"
                  title="Juliana Paes Antes e Depois da Maquiagem"
                />

                <AuthorBio />

                <div className="mt-8 flex justify-between">
                  <Link to="/eliane-apresentadora-antes-depois-maquiagem">
                    <Button variant="outline"><ArrowLeft className="mr-2" /> Anterior</Button>
                  </Link>
                  <Link to="/ana-hickmann-antes-depois-maquiagem">
                    <Button>Próximo <ArrowRight className="ml-2" /></Button>
                  </Link>
                </div>
              </article>
            </div>
            <aside className="lg:col-span-1"><Sidebar /></aside>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default JulianaPaes;
