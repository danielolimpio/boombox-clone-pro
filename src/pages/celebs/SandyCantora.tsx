import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import sandyImage from "@/assets/celebs/sandy-cantora.jpeg";

const SandyCantora = () => {
  return (
    <>
      <Helmet>
        <title>Sandy Antes e Depois da Maquiagem - Beleza Natural e Elegância | eFuxico</title>
        <meta name="description" content="Veja a transformação de Sandy antes e depois da maquiagem. A cantora revela sua beleza natural e elegância aos 40 anos." />
        <meta name="keywords" content="sandy antes e depois, sandy sem maquiagem, sandy cantora maquiagem, beleza natural sandy" />
        <link rel="canonical" href="https://efuxico.com.br/sandy-cantora-antes-depois-maquiagem" />
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
                  #2 - Sandy: A Transformação Elegante da Ex-Menina Prodígio
                </h2>

                <div className="mb-8">
                  <img 
                    src={sandyImage} 
                    alt="Sandy antes e depois da maquiagem" 
                    className="w-full rounded-lg shadow-md"
                  />
                </div>

                <div className="prose max-w-none text-foreground space-y-4">
                  <p className="text-lg leading-relaxed">
                    Sandy Leah Lima, conhecida artisticamente apenas como Sandy, conquistou o Brasil desde criança ao lado do irmão Junior. Hoje, aos 42 anos, a cantora é admirada não apenas pelo talento musical, mas também por sua beleza natural e elegante. Suas fotos sem maquiagem mostram uma mulher confiante e segura de sua beleza autêntica.
                  </p>

                  <h3 className="text-2xl font-bold mt-6 mb-4">A Evolução da Beleza de Sandy</h3>
                  <p className="text-lg leading-relaxed">
                    Diferente de muitas celebridades que cresceram sob os holofotes, Sandy conseguiu fazer uma transição natural da infância para a vida adulta, mantendo sua essência e autenticidade. A cantora sempre foi conhecida por preferir um visual mais clean e natural no dia a dia, reservando looks mais elaborados apenas para shows e eventos especiais.
                  </p>

                  <p className="text-lg leading-relaxed">
                    Em suas redes sociais, Sandy frequentemente aparece sem maquiagem, mostrando sua pele impecável e saudável. A cantora compartilha sua rotina de skincare com as fãs, revelando que investe em tratamentos dermatológicos regulares e produtos de qualidade. Sua transparência sobre cuidados com a pele inspira milhares de seguidoras a adotarem rotinas similares.
                  </p>

                  <h3 className="text-2xl font-bold mt-6 mb-4">O Glamour nos Palcos</h3>
                  <p className="text-lg leading-relaxed">
                    Quando sobe aos palcos, Sandy passa por uma transformação impressionante. Sua equipe de maquiadores cria looks sofisticados que destacam seus olhos castanhos e realçam suas feições delicadas. A cantora prefere maquiagens que mantenham seu ar romântico e feminino, com destaque para olhos esfumados e lábios em tons suaves.
                  </p>

                  <p className="text-lg leading-relaxed">
                    A maquiagem de palco de Sandy é cuidadosamente elaborada para resistir às luzes intensas e ao calor dos shows. Bases de longa duração, iluminadores estratégicos e fixadores potentes garantem que sua make permaneça perfeita do início ao fim das apresentações. O resultado é um visual glamouroso que não perde a naturalidade característica da artista.
                  </p>

                  <h3 className="text-2xl font-bold mt-6 mb-4">Inspiração de Beleza Natural</h3>
                  <p className="text-lg leading-relaxed">
                    Sandy é prova viva de que é possível envelhecer com graça e naturalidade na indústria do entretenimento. Aos 42 anos, ela mantém uma pele viçosa e livre de imperfeições, resultado de cuidados constantes e uma vida equilibrada. A cantora pratica yoga regularmente, mantém uma alimentação saudável e prioriza o bem-estar mental.
                  </p>

                  <p className="text-lg leading-relaxed">
                    A artista também é conhecida por seu estilo minimalista e elegante, tanto na moda quanto na maquiagem. Ela defende que menos é mais e que a beleza verdadeira está na autoconfiança. Sandy frequentemente compartilha mensagens de autoaceitação com suas fãs, incentivando-as a abraçarem suas características naturais.
                  </p>

                  <p className="text-lg leading-relaxed">
                    A transformação de Sandy antes e depois da maquiagem demonstra perfeitamente como a make pode ser usada para realçar a beleza natural, sem criar uma máscara. Ela continua sendo referência de elegância e naturalidade para milhões de brasileiras que a acompanham desde a infância.
                  </p>
                </div>

                <div className="mt-8 bg-muted p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Perguntas Frequentes sobre Sandy</h3>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-left">
                        Qual é a idade de Sandy em 2025?
                      </AccordionTrigger>
                      <AccordionContent>
                        Sandy nasceu em 28 de janeiro de 1983, atualmente tem 42 anos. A cantora celebra seu aniversário sempre com posts emocionantes nas redes sociais.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                      <AccordionTrigger className="text-left">
                        Sandy fez procedimentos estéticos?
                      </AccordionTrigger>
                      <AccordionContent>
                        Sandy nunca confirmou publicamente ter feito cirurgias plásticas. Ela é discreta sobre sua vida pessoal, mas compartilha sua rotina de cuidados com a pele, que inclui tratamentos dermatológicos e produtos de qualidade.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                      <AccordionTrigger className="text-left">
                        Qual é o segredo da pele perfeita de Sandy?
                      </AccordionTrigger>
                      <AccordionContent>
                        Sandy atribui sua pele saudável a uma rotina consistente de skincare, uso diário de protetor solar, limpeza de pele regular, hidratação intensiva e tratamentos dermatológicos preventivos. Ela também pratica yoga e mantém uma alimentação equilibrada.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                      <AccordionTrigger className="text-left">
                        Sandy usa maquiagem no dia a dia?
                      </AccordionTrigger>
                      <AccordionContent>
                        No cotidiano, Sandy prefere um visual minimalista, usando apenas protetor solar, corretivo se necessário e gloss labial. Ela reserva maquiagens mais elaboradas para eventos, shows e compromissos profissionais.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5">
                      <AccordionTrigger className="text-left">
                        Quais são as marcas de maquiagem favoritas de Sandy?
                      </AccordionTrigger>
                      <AccordionContent>
                        Embora Sandy não divulgue marcas específicas frequentemente, ela já revelou preferir produtos veganos e cruelty-free. Sua maquiadora utiliza marcas profissionais de alta performance para shows e eventos.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                <div className="mt-8 flex justify-between items-center">
                  <Link to="/xuxa-meneghel-antes-depois-maquiagem">
                    <Button variant="outline" size="lg">
                      <ArrowLeft className="mr-2" /> Anterior: Xuxa
                    </Button>
                  </Link>
                  <Link to="/ludmilla-antes-depois-maquiagem">
                    <Button size="lg" className="text-lg px-8 py-6">
                      Próxima: Ludmilla <ArrowRight className="ml-2" />
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

export default SandyCantora;
