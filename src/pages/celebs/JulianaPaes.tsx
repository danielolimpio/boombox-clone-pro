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
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Juliana Paes Antes e Depois da Maquiagem - Beleza Brasileira | eFuxico" />
        <meta property="og:description" content="Veja a transformação de Juliana Paes antes e depois da maquiagem. A atriz revela sua beleza brasileira e sensualidade natural." />
        <meta property="og:url" content="https://efuxico.com.br/juliana-paes-antes-depois-maquiagem" />
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

                <div className="prose max-w-none text-foreground space-y-4">
                  <p className="text-lg leading-relaxed">
                    Juliana Couto Paes, aos 46 anos, segue como um dos maiores ícones de beleza da televisão brasileira. Nascida em Rio Bonito (RJ), a atriz global construiu uma trajetória marcada por personagens fortes como Gabriela, Bibi Perigosa e Maya, e uma imagem pública associada à sensualidade natural, cabelos volumosos e pele bronzeada. Suas fotos sem maquiagem revelam uma mulher segura da própria beleza, com traços marcantes que dispensam qualquer artifício.
                  </p>

                  <h3 className="text-2xl font-bold mt-6 mb-4">A Beleza Natural de Juliana Paes</h3>
                  <p className="text-lg leading-relaxed">
                    Juliana é uma das poucas atrizes brasileiras que assume publicamente uma rotina de beleza simples. Ela costuma aparecer nas redes sociais sem base, apostando em protetor solar, hidratante e um leve iluminador. A atriz defende que o segredo da pele bonita é a constância: limpeza correta, hidratação diária e proteção solar em qualquer estação do ano — hábito que mantém desde os 20 anos.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Outro ponto forte é a aceitação do próprio corpo. Juliana já falou várias vezes sobre não ceder à pressão estética do meio artístico e sobre encarar a maturidade como um privilégio. Essa postura tornou-a referência de autoestima para mulheres brasileiras na faixa dos 40 anos, especialmente por manter cabelos naturalmente cacheados e curvas reais mesmo em produções de moda.
                  </p>

                  <h3 className="text-2xl font-bold mt-6 mb-4">A Transformação com Maquiagem</h3>
                  <p className="text-lg leading-relaxed">
                    Quando o assunto é tapete vermelho, Juliana entrega glamour de alto padrão. Sua maquiadora costuma trabalhar com base de acabamento acetinado, contorno leve nas maçãs, olhos esfumados em tons quentes (marrom, dourado, terracota) e boca marcada em nude rosado ou vermelho clássico. O objetivo é sempre valorizar os olhos amendoados e a boca carnuda, sem esconder as sardas naturais.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Nas gravações de novela, a make é mais discreta, pensada para durar 12 horas sob luz forte. Já em eventos como o Baile da Vogue, Juliana já apostou em olhos gráficos, cílios postiços fartos e iluminadores no arco do cupido, provando que sabe transitar entre o natural e o extravagante sem perder identidade.
                  </p>

                  <h3 className="text-2xl font-bold mt-6 mb-4">Inspiração de Autoestima</h3>
                  <p className="text-lg leading-relaxed">
                    Casada com Carlos Eduardo Baptista e mãe de dois filhos, Juliana equilibra a rotina intensa de gravações com a vida familiar. Ela pratica dança, musculação e caminhada, além de manter uma alimentação com muitas frutas, castanhas e proteínas magras. Para ela, o corpo bonito é consequência de saúde, e não uma meta estética em si.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Aos 46 anos, Juliana Paes prova que envelhecer com autenticidade é possível mesmo sob os holofotes. Suas fotos antes e depois da maquiagem mostram que a make é apenas uma ferramenta de expressão — a base de tudo continua sendo a segurança de quem se aceita como é.
                  </p>
                </div>

                <div className="mt-8 bg-muted p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Perguntas Frequentes sobre Juliana Paes</h3>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-left">Qual é a idade de Juliana Paes?</AccordionTrigger>
                      <AccordionContent>Juliana Paes nasceu em 26 de março de 1979, em Rio Bonito (RJ), e tem 46 anos.</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger className="text-left">Juliana Paes já fez cirurgia plástica?</AccordionTrigger>
                      <AccordionContent>Juliana já confirmou aplicações de botox e cuidados dermatológicos regulares, mas nega cirurgias estéticas de grande porte. Ela defende procedimentos discretos que preservem a expressão facial.</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger className="text-left">Qual é o segredo da pele de Juliana?</AccordionTrigger>
                      <AccordionContent>Limpeza dupla à noite, hidratante com ácido hialurônico, protetor solar diário e sessões periódicas de laser e microagulhamento. Ela também investe em máscaras hidratantes semanais.</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger className="text-left">Juliana usa maquiagem no dia a dia?</AccordionTrigger>
                      <AccordionContent>Não. No cotidiano ela prefere apenas hidratante com cor, blush cremoso e gloss labial. As makes mais elaboradas ficam reservadas a gravações, eventos e ensaios fotográficos.</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                      <AccordionTrigger className="text-left">Como Juliana mantém os cabelos cacheados?</AccordionTrigger>
                      <AccordionContent>Ela adotou a transição capilar há alguns anos e defende a valorização dos cachos naturais. Usa cronograma capilar com hidratação, nutrição e reconstrução, além de finalizadores sem sulfato.</AccordionContent>
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
