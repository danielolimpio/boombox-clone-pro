import { Helmet } from "react-helmet";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import giovannaImage from "@/assets/celebs/giovanna-antonelli.jpeg";

const GiovannaAntonelli = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Giovanna Antonelli Antes e Depois da Maquiagem - Beleza Radiante | eFuxico</title>
        <meta name="description" content="Veja a transformação de Giovanna Antonelli antes e depois da maquiagem. A atriz encanta com sua beleza radiante e natural." />
        <meta name="keywords" content="giovanna antonelli antes e depois, giovanna antonelli sem maquiagem, atriz beleza, giovanna maquiagem" />
        <link rel="canonical" href="https://efuxico.com.br/giovanna-antonelli-antes-depois-maquiagem" />
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
                  #6 - Giovanna Antonelli: A Beleza Radiante que Inspira
                </h2>

                <div className="mb-8">
                  <img 
                    src={giovannaImage} 
                    alt="Giovanna Antonelli antes e depois da maquiagem" 
                    className="w-full rounded-lg shadow-md"
                  />
                </div>

                <div className="prose max-w-none text-foreground space-y-4">
                  <p className="text-lg leading-relaxed">
                    Giovanna Antonelli é uma das atrizes mais queridas da televisão brasileira, conhecida por sua beleza radiante e seu talento versátil. Aos 48 anos, a atriz continua deslumbrante e serve de inspiração para milhões de mulheres. Suas fotos sem maquiagem revelam uma pele impecável e uma beleza natural que conquista admiradores em todo o país.
                  </p>

                  <h3 className="text-2xl font-bold mt-6 mb-4">Beleza Natural e Autenticidade</h3>
                  <p className="text-lg leading-relaxed">
                    Giovanna Antonelli sempre foi transparente sobre seus cuidados com a beleza e não tem receio de mostrar seu rosto natural nas redes sociais. A atriz frequentemente compartilha momentos do dia a dia sem maquiagem, mostrando-se em momentos de lazer com os filhos, na praia ou simplesmente em casa. Essa naturalidade conquistou o coração de suas seguidoras que admiram sua autenticidade.
                  </p>

                  <p className="text-lg leading-relaxed">
                    A pele luminosa de Giovanna é resultado de anos de cuidados constantes e uma rotina de skincare rigorosa. A atriz já revelou em entrevistas que investe em tratamentos dermatológicos preventivos, usa protetor solar diariamente e mantém a pele sempre hidratada. Além disso, ela pratica exercícios físicos regularmente e mantém uma alimentação equilibrada, fatores que contribuem para sua aparência saudável e jovial.
                  </p>

                  <h3 className="text-2xl font-bold mt-6 mb-4">A Transformação nos Holofotes</h3>
                  <p className="text-lg leading-relaxed">
                    Quando está em cena ou em eventos importantes, Giovanna Antonelli passa por transformações espetaculares. Sua equipe de maquiadores profissionais cria looks sofisticados que destacam seus olhos expressivos e seu sorriso marcante. A maquiagem de Giovanna é sempre impecável, com técnicas avançadas que garantem um resultado duradouro e fotogênico.
                  </p>

                  <p className="text-lg leading-relaxed">
                    A atriz é conhecida por ousar em diferentes estilos de maquiagem, adaptando-se perfeitamente aos personagens que interpreta. De looks mais românticos e suaves a makes dramáticas e intensas, Giovanna prova sua versatilidade. Seus maquiadores utilizam produtos de alta qualidade que valorizam sua pele madura, criando um acabamento natural mesmo sob as luzes intensas dos estúdios de televisão.
                  </p>

                  <h3 className="text-2xl font-bold mt-6 mb-4">Inspiração para Mulheres Modernas</h3>
                  <p className="text-lg leading-relaxed">
                    Giovanna Antonelli se tornou referência de beleza e estilo de vida saudável para mulheres de todas as idades. A atriz, mãe de três filhos, prova que é possível conciliar carreira, maternidade e cuidados pessoais. Ela frequentemente compartilha dicas de beleza, exercícios e bem-estar com suas milhões de seguidoras nas redes sociais.
                  </p>

                  <p className="text-lg leading-relaxed">
                    A atriz também é empresária de sucesso, tendo lançado sua própria linha de cosméticos que reflete sua filosofia de beleza: produtos de qualidade que realçam a beleza natural de cada mulher. Giovanna defende que a maquiagem deve ser uma ferramenta de expressão pessoal e autoconfiança, nunca uma máscara para esconder quem realmente somos.
                  </p>

                  <p className="text-lg leading-relaxed">
                    A transformação de Giovanna Antonelli antes e depois da maquiagem é um exemplo inspirador de como a beleza natural pode ser potencializada com técnicas profissionais. Ela continua provando que é possível envelhecer com graciosidade, mantendo a autenticidade e a confiança que sempre a caracterizaram.
                  </p>
                </div>

                <div className="mt-8 bg-muted p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Perguntas Frequentes sobre Giovanna Antonelli</h3>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-left">
                        Qual é a idade de Giovanna Antonelli?
                      </AccordionTrigger>
                      <AccordionContent>
                        Giovanna Antonelli nasceu em 18 de março de 1976, atualmente tem 48 anos. A atriz começou sua carreira ainda na adolescência e acumula mais de 30 anos de trabalho na televisão.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                      <AccordionTrigger className="text-left">
                        Giovanna Antonelli tem sua própria marca de cosméticos?
                      </AccordionTrigger>
                      <AccordionContent>
                        Sim, Giovanna Antonelli lançou sua própria linha de cosméticos chamada "Gioh", que oferece produtos de beleza com foco em qualidade e naturalidade. A marca reflete a filosofia pessoal da atriz sobre beleza e cuidados com a pele.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                      <AccordionTrigger className="text-left">
                        Qual é a rotina de exercícios de Giovanna Antonelli?
                      </AccordionTrigger>
                      <AccordionContent>
                        Giovanna mantém uma rotina intensa de exercícios que inclui musculação, pilates, surf e atividades ao ar livre. A atriz é conhecida por seu corpo tonificado e frequentemente compartilha treinos nas redes sociais, inspirando suas seguidoras.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                      <AccordionTrigger className="text-left">
                        Giovanna Antonelli fez procedimentos estéticos?
                      </AccordionTrigger>
                      <AccordionContent>
                        Giovanna é discreta sobre procedimentos estéticos, mas já mencionou fazer tratamentos dermatológicos regulares e cuidados preventivos. A atriz defende uma abordagem equilibrada e natural em relação à estética.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5">
                      <AccordionTrigger className="text-left">
                        Quais foram os papéis mais marcantes de Giovanna Antonelli?
                      </AccordionTrigger>
                      <AccordionContent>
                        Giovanna ficou famosa por personagens inesquecíveis como Jade em "O Clone", Helô em "Salve Jorge", Lívia em "Sete Vidas" e Atena em "A Regra do Jogo". Ela é uma das atrizes mais versáteis da televisão brasileira.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                <div className="mt-8 flex justify-between items-center">
                  <Link to="/leticia-spiller-antes-depois-maquiagem">
                    <Button variant="outline" size="lg">
                      <ArrowLeft className="mr-2" /> Anterior
                    </Button>
                  </Link>
                  <Link to="/eliane-apresentadora-antes-depois-maquiagem">
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

export default GiovannaAntonelli;
