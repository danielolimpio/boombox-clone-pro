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
import leticiaImage from "@/assets/celebs/leticia-spiller.jpeg";

const LeticiaSpiller = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Letícia Spiller Antes e Depois da Maquiagem - Beleza Atemporal | eFuxico</title>
        <meta name="description" content="Descubra a transformação de Letícia Spiller antes e depois da maquiagem. A atriz revela sua beleza atemporal e naturalidade aos 50 anos." />
        <meta name="keywords" content="leticia spiller antes e depois, leticia spiller sem maquiagem, atriz beleza natural, leticia spiller maquiagem" />
        <link rel="canonical" href="https://efuxico.com.br/leticia-spiller-antes-depois-maquiagem" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Letícia Spiller Antes e Depois da Maquiagem - Beleza Atemporal | eFuxico" />
        <meta property="og:description" content="Descubra a transformação de Letícia Spiller antes e depois da maquiagem. A atriz revela sua beleza atemporal e naturalidade aos 50 anos." />
        <meta property="og:url" content="https://efuxico.com.br/leticia-spiller-antes-depois-maquiagem" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <article className="bg-card rounded-lg p-6 shadow-lg">
                <h1 className="text-4xl font-bold mb-4 text-foreground">
                  10 Celebridades Antes e Depois da Maquiagem
                </h1>
                
                <h2 className="text-3xl font-bold mb-6 text-primary">
                  #5 - Letícia Spiller: A Beleza que Desafia o Tempo
                </h2>

                <div className="mb-8">
                  <img 
                    src={leticiaImage} 
                    alt="Letícia Spiller antes e depois da maquiagem" 
                    className="w-full rounded-lg shadow-md"
                  />
                </div>

                <div className="prose max-w-none text-foreground space-y-4">
                  <p className="text-lg leading-relaxed">
                    Letícia Spiller é uma das atrizes mais admiradas da televisão brasileira, conhecida por seus papéis marcantes e sua beleza atemporal. Aos 50 anos, a atriz continua deslumbrante e inspira mulheres de todas as idades com sua aparência jovial e radiante. Suas fotos sem maquiagem revelam uma pele impecável e uma beleza natural que desafia o passar dos anos.
                  </p>

                  <h3 className="text-2xl font-bold mt-6 mb-4">O Segredo da Juventude</h3>
                  <p className="text-lg leading-relaxed">
                    Letícia Spiller é frequentemente elogiada por sua aparência jovem e viçosa, mesmo aos 50 anos. A atriz atribui sua boa aparência a uma combinação de genética favorável, cuidados constantes com a pele e um estilo de vida saudável. Ela pratica exercícios físicos regularmente, incluindo yoga e pilates, e mantém uma alimentação equilibrada rica em antioxidantes e nutrientes.
                  </p>

                  <p className="text-lg leading-relaxed">
                    Em suas redes sociais, Letícia não tem medo de mostrar seu rosto natural, sem filtros ou maquiagem pesada. A atriz acredita na importância de aceitar o envelhecimento natural e defende que a beleza está na autenticidade. Suas fotos ao natural revelam uma pele bem cuidada, com luminosidade natural e poucas linhas de expressão.
                  </p>

                  <h3 className="text-2xl font-bold mt-6 mb-4">A Transformação Profissional</h3>
                  <p className="text-lg leading-relaxed">
                    Quando se prepara para personagens ou eventos, Letícia Spiller passa por transformações impressionantes. Sua equipe de maquiadores profissionais sabe exatamente como valorizar suas feições delicadas e seus olhos expressivos. A maquiagem de Letícia para trabalhos e eventos é sempre sofisticada, elegante e perfeitamente adequada à ocasião.
                  </p>

                  <p className="text-lg leading-relaxed">
                    A atriz é conhecida por preferir maquiagens que realcem sua beleza natural, sem exageros. Bases leves de longa duração, iluminadores estratégicos que criam efeito rejuvenescedor, sombras em tons neutros que valorizam seus olhos e lábios em cores suaves são suas escolhas preferidas. O resultado é um visual polido e profissional que mantém sua essência natural.
                  </p>

                  <h3 className="text-2xl font-bold mt-6 mb-4">Inspiração de Beleza Madura</h3>
                  <p className="text-lg leading-relaxed">
                    Letícia Spiller se tornou referência de beleza para mulheres maduras que buscam envelhecer com graça e dignidade. A atriz compartilha regularmente suas rotinas de skincare e dicas de bem-estar com suas seguidoras. Ela defende que a beleza aos 50 anos é diferente da beleza aos 20, mas não menos válida ou admirável.
                  </p>

                  <p className="text-lg leading-relaxed">
                    A atriz também é vocal sobre a importância da saúde mental para a beleza exterior. Letícia pratica meditação, cuida de sua saúde emocional e mantém uma atitude positiva perante a vida. Ela acredita que o verdadeiro segredo da beleza está no equilíbrio entre cuidados físicos, mentais e emocionais.
                  </p>

                  <p className="text-lg leading-relaxed">
                    A transformação de Letícia Spiller antes e depois da maquiagem demonstra perfeitamente como é possível manter a beleza natural ao longo dos anos. Ela prova que a maquiagem deve complementar, não transformar completamente, e que a verdadeira beleza vem de uma combinação de autocuidado, autoconfiança e autoaceitação.
                  </p>
                </div>

                <div className="mt-8 bg-muted p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Perguntas Frequentes sobre Letícia Spiller</h3>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-left">
                        Qual é a idade de Letícia Spiller?
                      </AccordionTrigger>
                      <AccordionContent>
                        Letícia Spiller nasceu em 19 de junho de 1973, atualmente tem 51 anos. A atriz é frequentemente elogiada por sua aparência jovem e bem cuidada.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                      <AccordionTrigger className="text-left">
                        Letícia Spiller fez cirurgia plástica?
                      </AccordionTrigger>
                      <AccordionContent>
                        Letícia é discreta sobre procedimentos estéticos, mas já mencionou fazer tratamentos dermatológicos não invasivos. A atriz defende que cada pessoa deve fazer o que a faz sentir-se bem, mas sempre de forma equilibrada e consciente.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                      <AccordionTrigger className="text-left">
                        Qual é o segredo da pele de Letícia Spiller?
                      </AccordionTrigger>
                      <AccordionContent>
                        Letícia atribui sua pele impecável a uma rotina rigorosa de skincare que inclui limpeza diária, hidratação profunda, uso religioso de protetor solar, tratamentos dermatológicos regulares, alimentação saudável e exercícios físicos constantes.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                      <AccordionTrigger className="text-left">
                        Letícia Spiller pratica exercícios físicos?
                      </AccordionTrigger>
                      <AccordionContent>
                        Sim, Letícia é adepta de yoga e pilates há muitos anos. A atriz frequentemente compartilha fotos e vídeos praticando essas atividades, que ela credita como fundamentais para manter seu corpo tonificado e sua mente equilibrada.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5">
                      <AccordionTrigger className="text-left">
                        Quais são os trabalhos mais famosos de Letícia Spiller?
                      </AccordionTrigger>
                      <AccordionContent>
                        Letícia ficou famosa por papéis em novelas como "Explode Coração", "Quatro por Quatro", "Pé na Jaca" e "Verão 90". Ela também participou de diversos filmes e peças de teatro ao longo de sua carreira de mais de 30 anos.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                <div className="mt-8 flex justify-between items-center">
                  <Link to="/luana-piovani-antes-depois-maquiagem">
                    <Button variant="outline" size="lg">
                      <ArrowLeft className="mr-2" /> Anterior
                    </Button>
                  </Link>
                  <Link to="/giovanna-antonelli-antes-depois-maquiagem">
                    <Button size="lg" className="text-lg px-8 py-6">
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

export default LeticiaSpiller;
