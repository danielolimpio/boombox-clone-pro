import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import xuxaImage from "@/assets/celebs/xuxa-meneghel.jpeg";

const XuxaMeneghel = () => {
  return (
    <>
      <Helmet>
        <title>Xuxa Meneghel Antes e Depois da Maquiagem - Transformação Natural | eFuxico</title>
        <meta name="description" content="Descubra a transformação incrível de Xuxa Meneghel antes e depois da maquiagem. Veja como a Rainha dos Baixinhos mantém sua beleza natural aos 60 anos." />
        <meta name="keywords" content="xuxa antes e depois, xuxa sem maquiagem, xuxa meneghel maquiagem, beleza natural xuxa, xuxa 2025" />
        <link rel="canonical" href="https://efuxico.com.br/xuxa-meneghel-antes-depois-maquiagem" />
        <meta property="og:title" content="Xuxa Meneghel Antes e Depois da Maquiagem - Transformação Natural" />
        <meta property="og:description" content="Descubra a transformação incrível de Xuxa Meneghel antes e depois da maquiagem." />
        <meta property="og:url" content="https://efuxico.com.br/xuxa-meneghel-antes-depois-maquiagem" />
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
                  #1 - Xuxa Meneghel: A Beleza Natural que Encanta Gerações
                </h2>

                <div className="mb-8">
                  <img 
                    src={xuxaImage} 
                    alt="Xuxa Meneghel antes e depois da maquiagem" 
                    className="w-full rounded-lg shadow-md"
                  />
                </div>

                <div className="prose max-w-none text-foreground space-y-4">
                  <p className="text-lg leading-relaxed">
                    Maria da Graça Xuxa Meneghel, conhecida simplesmente como Xuxa, é um ícone da televisão brasileira que continua surpreendendo o público com sua beleza natural aos 60 anos. A apresentadora, que marcou a infância de milhões de brasileiros, sempre foi admirada por sua aparência radiante, e suas fotos sem maquiagem revelam uma beleza autêntica e impressionante.
                  </p>

                  <h3 className="text-2xl font-bold mt-6 mb-4">O Segredo da Beleza Atemporal</h3>
                  <p className="text-lg leading-relaxed">
                    Xuxa sempre foi transparente sobre seus cuidados com a pele e a importância de uma rotina de beleza consistente. A apresentadora revela que prefere looks mais naturais no dia a dia, reservando maquiagens mais elaboradas apenas para ocasiões especiais e gravações. Sua pele impecável é resultado de anos de dedicação aos cuidados dermatológicos e uma alimentação balanceada.
                  </p>

                  <p className="text-lg leading-relaxed">
                    Em suas redes sociais, Xuxa frequentemente compartilha fotos sem filtros e sem maquiagem, demonstrando confiança e naturalidade. Essas imagens conquistam milhares de curtidas e comentários de fãs que admiram sua autenticidade. A "Rainha dos Baixinhos" prova que a verdadeira beleza vem de dentro e que a maquiagem deve realçar, não esconder, os traços naturais.
                  </p>

                  <h3 className="text-2xl font-bold mt-6 mb-4">A Transformação com Maquiagem</h3>
                  <p className="text-lg leading-relaxed">
                    Quando se trata de eventos e gravações, Xuxa recorre a maquiadores profissionais que sabem exatamente como valorizar seus olhos azuis característicos e sua pele clara. A transformação é sutil, mas impactante: bases leves que uniformizam o tom da pele, olhos marcados com técnicas que ampliam o olhar, e lábios com cores que variam do nude ao rosa.
                  </p>

                  <p className="text-lg leading-relaxed">
                    O segredo da maquiagem de Xuxa está na técnica de iluminação estratégica, que destaca seus pontos fortes naturais. Maquiadores revelam que ela prefere produtos de alta qualidade, mas sempre com acabamento natural, evitando excessos que possam parecer artificiais. O resultado é uma aparência radiante que mantém sua essência, mas com um toque de glamour profissional.
                  </p>

                  <h3 className="text-2xl font-bold mt-6 mb-4">Inspiração para Todas as Idades</h3>
                  <p className="text-lg leading-relaxed">
                    Aos 60 anos, Xuxa continua sendo referência de beleza e estilo para mulheres de todas as idades. Sua abordagem equilibrada entre aceitar o envelhecimento natural e cuidar da aparência inspira milhões de seguidoras. A apresentadora defende que cada mulher deve se sentir confortável em sua própria pele, com ou sem maquiagem.
                  </p>

                  <p className="text-lg leading-relaxed">
                    Xuxa também é conhecida por seu estilo de vida saudável, praticando exercícios regularmente e mantendo uma alimentação rica em nutrientes. Ela frequentemente compartilha dicas de bem-estar e autoestima com suas fãs, reforçando a mensagem de que a beleza verdadeira é resultado de um conjunto de hábitos saudáveis, não apenas da maquiagem.
                  </p>

                  <p className="text-lg leading-relaxed">
                    A transformação de Xuxa Meneghel antes e depois da maquiagem é um exemplo perfeito de como a maquiagem pode ser uma ferramenta de expressão pessoal, sem mascarar a beleza natural. Ela continua provando que é possível envelhecer com graça, mantendo a autenticidade e o brilho que sempre a caracterizaram.
                  </p>
                </div>

                <div className="mt-8 bg-muted p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Perguntas Frequentes sobre Xuxa Meneghel</h3>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-left">
                        Qual é a idade real de Xuxa Meneghel?
                      </AccordionTrigger>
                      <AccordionContent>
                        Xuxa nasceu em 27 de março de 1963, atualmente tem 60 anos. A apresentadora sempre foi aberta sobre sua idade e defende o envelhecimento natural com dignidade.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                      <AccordionTrigger className="text-left">
                        Xuxa fez alguma cirurgia plástica?
                      </AccordionTrigger>
                      <AccordionContent>
                        Xuxa sempre foi transparente sobre procedimentos estéticos. Ela já admitiu ter feito aplicações de botox e preenchimentos faciais, mas mantém um visual natural, evitando excessos.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                      <AccordionTrigger className="text-left">
                        Qual é o segredo da pele de Xuxa?
                      </AccordionTrigger>
                      <AccordionContent>
                        Xuxa atribui sua pele saudável a uma combinação de cuidados dermatológicos regulares, uso diário de protetor solar, hidratação constante, alimentação balanceada e sono adequado. Ela também pratica exercícios físicos regularmente.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                      <AccordionTrigger className="text-left">
                        Xuxa usa maquiagem no dia a dia?
                      </AccordionTrigger>
                      <AccordionContent>
                        No dia a dia, Xuxa prefere ficar sem maquiagem ou usar apenas produtos básicos como protetor solar com cor e gloss labial. Ela reserva makes mais elaboradas para gravações, eventos e compromissos profissionais.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5">
                      <AccordionTrigger className="text-left">
                        Como Xuxa mantém seus cabelos loiros naturais?
                      </AccordionTrigger>
                      <AccordionContent>
                        Xuxa mantém seus cabelos loiros com colorações profissionais regulares e tratamentos capilares intensivos. Ela também usa produtos de alta qualidade e evita procedimentos químicos agressivos, priorizando a saúde dos fios.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                <div className="mt-8 text-center">
                  <Link to="/sandy-cantora-antes-depois-maquiagem">
                    <Button size="lg" className="text-lg px-8 py-6">
                      Próxima Celebridade: Sandy <ArrowRight className="ml-2" />
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

export default XuxaMeneghel;
