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
import ludmillaImage from "@/assets/celebs/ludmilla-cantora.jpeg";

const Ludmilla = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Ludmilla Antes e Depois da Maquiagem - Transformação Poderosa | eFuxico</title>
        <meta name="description" content="Descubra a transformação impressionante de Ludmilla antes e depois da maquiagem. A cantora mostra sua beleza natural e poder de transformação." />
        <meta name="keywords" content="ludmilla antes e depois, ludmilla sem maquiagem, ludmilla cantora maquiagem, transformação ludmilla" />
        <link rel="canonical" href="https://efuxico.com.br/ludmilla-antes-depois-maquiagem" />
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
                  #3 - Ludmilla: A Diva que Celebra Sua Beleza Negra
                </h2>

                <div className="mb-8">
                  <img 
                    src={ludmillaImage} 
                    alt="Ludmilla antes e depois da maquiagem" 
                    className="w-full rounded-lg shadow-md"
                  />
                </div>

                <div className="prose max-w-none text-foreground space-y-4">
                  <p className="text-lg leading-relaxed">
                    Ludmilla Oliveira da Silva, conhecida simplesmente como Ludmilla, é uma das maiores estrelas da música brasileira atual. A cantora de funk e pagode conquistou o país com seu talento e também se tornou ícone de beleza, especialmente para mulheres negras. Suas transformações com maquiagem são verdadeiras obras de arte que celebram a beleza negra em toda sua potência.
                  </p>

                  <h3 className="text-2xl font-bold mt-6 mb-4">Beleza Natural e Autêntica</h3>
                  <p className="text-lg leading-relaxed">
                    Ludmilla nunca teve medo de mostrar seu rosto natural nas redes sociais. A cantora frequentemente posta fotos e vídeos sem maquiagem, revelando sua pele negra linda e radiante. Essas imagens se tornaram inspiração para milhões de mulheres negras que se veem representadas pela artista. Ludmilla usa sua plataforma para promover a autoaceitação e o amor próprio.
                  </p>

                  <p className="text-lg leading-relaxed">
                    A pele de Ludmilla é resultado de cuidados específicos para peles negras, incluindo hidratação profunda, uso de óleos naturais e proteção solar adequada. A cantora já revelou em entrevistas que investe em tratamentos dermatológicos regulares e mantém uma rotina rigorosa de skincare. Seu brilho natural é potencializado por uma vida saudável e equilibrada.
                  </p>

                  <h3 className="text-2xl font-bold mt-6 mb-4">A Transformação nos Palcos</h3>
                  <p className="text-lg leading-relaxed">
                    Quando se trata de shows e eventos, Ludmilla passa por transformações espetaculares. Sua equipe de maquiadores cria looks ousados e impactantes que complementam seu estilo poderoso e sua personalidade forte. A maquiagem de Ludmilla é conhecida por destacar seus traços marcantes, com ênfase em olhos expressivos e lábios carnudos.
                  </p>

                  <p className="text-lg leading-relaxed">
                    A cantora adora experimentar com cores vibrantes, glitter, pedras e técnicas inovadoras de maquiagem. Desde looks mais naturais e sofisticados até makes artísticas e extravagantes, Ludmilla não tem medo de ousar. Sua maquiadora oficial, que a acompanha há anos, conhece perfeitamente os tons que mais favorecem sua pele negra, criando harmonias perfeitas.
                  </p>

                  <h3 className="text-2xl font-bold mt-6 mb-4">Representatividade e Empoderamento</h3>
                  <p className="text-lg leading-relaxed">
                    Ludmilla se tornou símbolo de representatividade no mundo da beleza. Ela frequentemente usa sua voz para falar sobre a importância de produtos de maquiagem desenvolvidos especialmente para peles negras e a necessidade de mais diversidade na indústria da beleza. A cantora já lançou colaborações com marcas de cosméticos focadas em inclusão e diversidade.
                  </p>

                  <p className="text-lg leading-relaxed">
                    A artista também é conhecida por seu cabelo poderoso, experimentando com diferentes texturas, cores e estilos. De tranças a mega hair, de black power a cabelos coloridos, Ludmilla celebra a versatilidade dos cabelos crespos e cacheados. Essa liberdade de expressão inspira suas fãs a também explorarem sua própria beleza sem limites.
                  </p>

                  <p className="text-lg leading-relaxed">
                    A transformação de Ludmilla antes e depois da maquiagem é mais do que uma mudança estética – é uma afirmação de identidade, poder e autenticidade. Ela prova que a maquiagem é uma ferramenta de expressão artística e empoderamento, especialmente quando celebra e valoriza a beleza negra em todas as suas nuances.
                  </p>
                </div>

                <div className="mt-8 bg-muted p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Perguntas Frequentes sobre Ludmilla</h3>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-left">
                        Qual é a idade de Ludmilla?
                      </AccordionTrigger>
                      <AccordionContent>
                        Ludmilla nasceu em 24 de abril de 1995, atualmente tem 29 anos. A cantora começou sua carreira muito jovem e já conquistou inúmeros prêmios e reconhecimentos na música brasileira.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                      <AccordionTrigger className="text-left">
                        Ludmilla fez harmonização facial?
                      </AccordionTrigger>
                      <AccordionContent>
                        Ludmilla já admitiu publicamente ter feito procedimentos estéticos, incluindo harmonização facial. A cantora é transparente sobre suas escolhas e defende o direito de cada pessoa de fazer o que a faz sentir-se bem consigo mesma.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                      <AccordionTrigger className="text-left">
                        Quais são os cuidados de Ludmilla com a pele negra?
                      </AccordionTrigger>
                      <AccordionContent>
                        Ludmilla mantém uma rotina de skincare específica para pele negra, incluindo hidratação intensa com manteigas e óleos naturais, limpeza suave, esfoliação regular, uso de protetor solar específico para pele negra e tratamentos dermatológicos profissionais.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                      <AccordionTrigger className="text-left">
                        Quem é a maquiadora de Ludmilla?
                      </AccordionTrigger>
                      <AccordionContent>
                        Ludmilla trabalha com diversos profissionais de maquiagem, mas sua maquiadora oficial é Bruna Tavares, que a acompanha em shows e eventos importantes. A profissional é especializada em maquiagem para peles negras.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5">
                      <AccordionTrigger className="text-left">
                        Ludmilla usa produtos de beleza específicos para pele negra?
                      </AccordionTrigger>
                      <AccordionContent>
                        Sim, Ludmilla prioriza marcas que desenvolvem produtos específicos para peles negras, incluindo bases em tons adequados, iluminadores que valorizam o undertone da pele negra e produtos que respeitam as características únicas dessa tonalidade de pele.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                <div className="mt-8 flex justify-between items-center">
                  <Link to="/sandy-cantora-antes-depois-maquiagem">
                    <Button variant="outline" size="lg">
                      <ArrowLeft className="mr-2" /> Anterior
                    </Button>
                  </Link>
                  <Link to="/luana-piovani-antes-depois-maquiagem">
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

export default Ludmilla;
