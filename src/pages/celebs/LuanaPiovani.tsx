import { Helmet } from "react-helmet";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import luanaImage from "@/assets/celebs/luana-piovani.jpeg";

const LuanaPiovani = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Luana Piovani Antes e Depois da Maquiagem - Beleza Autêntica | eFuxico</title>
        <meta name="description" content="Veja a transformação de Luana Piovani antes e depois da maquiagem. A atriz mostra sua beleza natural e autenticidade sem filtros." />
        <meta name="keywords" content="luana piovani antes e depois, luana piovani sem maquiagem, atriz maquiagem, beleza natural luana" />
        <link rel="canonical" href="https://efuxico.com.br/luana-piovani-antes-depois-maquiagem" />
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
                  #4 - Luana Piovani: A Beleza Natural Sem Filtros
                </h2>

                <div className="mb-8">
                  <img 
                    src={luanaImage} 
                    alt="Luana Piovani antes e depois da maquiagem" 
                    className="w-full rounded-lg shadow-md"
                  />
                </div>

                <div className="prose max-w-none text-foreground space-y-4">
                  <p className="text-lg leading-relaxed">
                    Luana Piovani é conhecida por sua personalidade autêntica e sem filtros, tanto na vida pessoal quanto na profissional. A atriz, que conquistou o Brasil com seus papéis marcantes na televisão, também se destaca por sua beleza natural e por não ter medo de mostrar seu rosto sem maquiagem nas redes sociais. Aos 47 anos, Luana continua linda e radiante.
                  </p>

                  <h3 className="text-2xl font-bold mt-6 mb-4">Autenticidade em Primeiro Lugar</h3>
                  <p className="text-lg leading-relaxed">
                    Luana Piovani sempre foi uma das celebridades mais autênticas do Brasil. A atriz não tem medo de postar fotos sem maquiagem, mostrando sua pele real, com manchas, sardas e marcas de expressão. Essa transparência conquistou o respeito e a admiração de milhões de seguidores que se identificam com sua honestidade sobre os padrões de beleza irreais da indústria do entretenimento.
                  </p>

                  <p className="text-lg leading-relaxed">
                    Morando em Portugal, Luana adotou um estilo de vida mais natural e descontraído. A atriz frequentemente aparece em vídeos e fotos curtindo a praia com os filhos, sempre sem maquiagem e com o cabelo natural. Essa fase de sua vida demonstra sua conexão profunda com a natureza e a simplicidade, valores que ela faz questão de transmitir para seus seguidores.
                  </p>

                  <h3 className="text-2xl font-bold mt-6 mb-4">A Transformação para Eventos</h3>
                  <p className="text-lg leading-relaxed">
                    Quando precisa comparecer a eventos ou gravações, Luana passa por uma transformação elegante e sofisticada. Sua maquiagem profissional destaca seus olhos azuis penetrantes e sua pele clara, criando um visual glamouroso mas sem perder a naturalidade. A atriz prefere makes que valorizem sua beleza sem criar uma máscara artificial.
                  </p>

                  <p className="text-lg leading-relaxed">
                    Os maquiadores de Luana sabem exatamente como trabalhar com sua pele madura, utilizando técnicas de iluminação e produtos específicos para peles maduras que garantem um resultado impecável. A escolha de bases leves, corretivos estratégicos e iluminadores bem posicionados cria um efeito lifting natural que realça a beleza atemporal da atriz.
                  </p>

                  <h3 className="text-2xl font-bold mt-6 mb-4">Mensagem de Autoaceitação</h3>
                  <p className="text-lg leading-relaxed">
                    Luana Piovani usa sua plataforma para promover a autoaceitação e criticar os padrões de beleza inatingíveis impostos pela sociedade. A atriz frequentemente fala sobre a pressão que as mulheres sofrem para parecerem sempre perfeitas e jovens, defendendo que a beleza real está na autenticidade e na confiança que cada mulher tem em si mesma.
                  </p>

                  <p className="text-lg leading-relaxed">
                    A atriz também é vocal sobre procedimentos estéticos, tendo revelado que já fez e desfeito alguns, aprendendo com a experiência. Luana defende que cada mulher tem o direito de fazer o que quiser com seu corpo, mas sempre de forma consciente e sem ceder a pressões externas. Sua mensagem de empoderamento feminino ressoa fortemente com suas seguidoras.
                  </p>

                  <p className="text-lg leading-relaxed">
                    A transformação de Luana Piovani antes e depois da maquiagem é um exemplo poderoso de como a beleza natural pode coexistir com o glamour. Ela prova que é possível ser elegante e sofisticada quando necessário, mas sem abrir mão da autenticidade e da naturalidade no dia a dia.
                  </p>
                </div>

                <div className="mt-8 bg-muted p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Perguntas Frequentes sobre Luana Piovani</h3>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-left">
                        Qual é a idade de Luana Piovani?
                      </AccordionTrigger>
                      <AccordionContent>
                        Luana Piovani nasceu em 29 de agosto de 1976, atualmente tem 47 anos. A atriz é mãe de três filhos e vive em Portugal desde 2019.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                      <AccordionTrigger className="text-left">
                        Luana Piovani fez cirurgia plástica?
                      </AccordionTrigger>
                      <AccordionContent>
                        Luana já admitiu publicamente ter feito diversos procedimentos estéticos ao longo dos anos, incluindo rinoplastia e aplicação de botox. A atriz é transparente sobre suas escolhas e também já reverteu alguns procedimentos que não a agradaram.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                      <AccordionTrigger className="text-left">
                        Por que Luana Piovani se mudou para Portugal?
                      </AccordionTrigger>
                      <AccordionContent>
                        Luana se mudou para Portugal em 2019 junto com o ex-marido Pedro Scooby (antes da separação) buscando melhor qualidade de vida para a família e educação para os filhos. Após a separação, ela decidiu permanecer no país com as crianças.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                      <AccordionTrigger className="text-left">
                        Qual é a rotina de skincare de Luana Piovani?
                      </AccordionTrigger>
                      <AccordionContent>
                        Luana compartilha que mantém uma rotina simples de skincare com limpeza, hidratação e protetor solar diário. Ela prioriza produtos naturais e tratamentos não invasivos, além de defender a aceitação natural do envelhecimento.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5">
                      <AccordionTrigger className="text-left">
                        Luana Piovani ainda atua?
                      </AccordionTrigger>
                      <AccordionContent>
                        Desde que se mudou para Portugal, Luana reduziu significativamente seus trabalhos como atriz, focando mais em projetos digitais, palestras e sua vida pessoal. Ela ocasionalmente participa de projetos especiais e mantém presença ativa nas redes sociais.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                <div className="mt-8 flex justify-between items-center">
                  <Link to="/ludmilla-antes-depois-maquiagem">
                    <Button variant="outline" size="lg">
                      <ArrowLeft className="mr-2" /> Anterior
                    </Button>
                  </Link>
                  <Link to="/leticia-spiller-antes-depois-maquiagem">
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

export default LuanaPiovani;
