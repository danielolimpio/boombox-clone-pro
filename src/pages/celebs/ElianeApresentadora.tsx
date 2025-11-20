import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import elianeImage from "@/assets/celebs/eliane-apresentadora.jpeg";

const ElianeApresentadora = () => {
  return (
    <>
      <Helmet>
        <title>Eliane Antes e Depois da Maquiagem - Elegância e Profissionalismo | eFuxico</title>
        <meta name="description" content="Descubra a transformação de Eliane antes e depois da maquiagem. A apresentadora revela elegância e profissionalismo em suas aparições." />
        <meta name="keywords" content="eliane antes e depois, eliane sem maquiagem, apresentadora maquiagem, eliane beleza" />
        <link rel="canonical" href="https://efuxico.com.br/eliane-apresentadora-antes-depois-maquiagem" />
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
                  #7 - Eliane: A Elegância Profissional da Apresentadora
                </h2>

                <div className="mb-8">
                  <img 
                    src={elianeImage} 
                    alt="Eliane antes e depois da maquiagem" 
                    className="w-full rounded-lg shadow-md"
                  />
                </div>

                <div className="prose max-w-none text-foreground space-y-4">
                  <p className="text-lg leading-relaxed">
                    Eliane é uma das apresentadoras mais elegantes e profissionais da televisão brasileira. Com uma carreira consolidada no jornalismo, ela se destaca não apenas pelo talento profissional, mas também por sua aparência impecável e sofisticada. Aos 54 anos, a apresentadora mantém uma beleza atemporal que inspira mulheres de todas as idades.
                  </p>

                  <h3 className="text-2xl font-bold mt-6 mb-4">Beleza Natural e Discrição</h3>
                  <p className="text-lg leading-relaxed">
                    Diferente de muitas celebridades, Eliane mantém sua vida pessoal extremamente discreta, incluindo fotos sem maquiagem. No entanto, em raras ocasiões em que aparece em momentos mais descontraídos, é possível perceber sua beleza natural e pele bem cuidada. A apresentadora é conhecida por manter uma rotina de skincare rigorosa e cuidados preventivos com a pele.
                  </p>

                  <p className="text-lg leading-relaxed">
                    Eliane é adepta de um estilo de vida saudável que reflete diretamente em sua aparência. A apresentadora pratica exercícios regularmente, mantém uma alimentação equilibrada e prioriza o sono adequado. Esses hábitos, combinados com sua genética favorável, contribuem para sua aparência jovial e radiante mesmo aos 54 anos.
                  </p>

                  <h3 className="text-2xl font-bold mt-6 mb-4">O Visual Profissional Impecável</h3>
                  <p className="text-lg leading-relaxed">
                    Quando está no ar, Eliane apresenta um visual sempre impecável e profissional. Sua maquiagem é cuidadosamente elaborada para as câmeras de alta definição, com técnicas específicas para jornalismo que garantem naturalidade sem perder a elegância. A apresentadora trabalha com uma equipe de maquiadores especializados que conhecem perfeitamente suas preferências e características.
                  </p>

                  <p className="text-lg leading-relaxed">
                    A maquiagem de Eliane para o programa é caracterizada por sua neutralidade sofisticada. Bases de longa duração que uniformizam perfeitamente o tom da pele, corretivos estratégicos, iluminadores sutis e sombras em tons neutros que valorizam seus olhos são elementos constantes. O resultado é um visual polido e profissional que transmite credibilidade e autoridade.
                  </p>

                  <h3 className="text-2xl font-bold mt-6 mb-4">Referência de Elegância</h3>
                  <p className="text-lg leading-relaxed">
                    Eliane se tornou referência de elegância e profissionalismo para mulheres que buscam um visual sofisticado e adequado para o ambiente de trabalho. Seu estilo clássico e atemporal inspira profissionais de diversas áreas que admiram sua capacidade de manter a feminilidade sem perder a seriedade que o jornalismo exige.
                  </p>

                  <p className="text-lg leading-relaxed">
                    A apresentadora também é conhecida por seu cabelo loiro sempre impecável, com cortes e colorações profissionais que valorizam seu rosto e complementam seu visual elegante. Eliane mantém uma frequência regular no cabeleireiro e investe em tratamentos capilares de qualidade que garantem fios saudáveis e brilhantes.
                  </p>

                  <p className="text-lg leading-relaxed">
                    A transformação de Eliane antes e depois da maquiagem demonstra como a make profissional pode criar um visual adequado para diferentes ocasiões. Ela prova que é possível manter a elegância e a sofisticação em todas as idades, com uma abordagem equilibrada que valoriza a beleza natural sem exageros.
                  </p>
                </div>

                <div className="mt-8 bg-muted p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Perguntas Frequentes sobre Eliane</h3>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-left">
                        Qual é a idade de Eliane?
                      </AccordionTrigger>
                      <AccordionContent>
                        Eliane nasceu em 14 de novembro de 1971, atualmente tem 54 anos. A apresentadora mantém uma aparência jovem e elegante que desafia sua idade cronológica.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                      <AccordionTrigger className="text-left">
                        Qual é a formação profissional de Eliane?
                      </AccordionTrigger>
                      <AccordionContent>
                        Eliane é formada em jornalismo e possui pós-graduação em comunicação. Ela construiu uma carreira sólida no jornalismo televisivo, tornando-se uma das apresentadoras mais respeitadas do país.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                      <AccordionTrigger className="text-left">
                        Eliane fez procedimentos estéticos?
                      </AccordionTrigger>
                      <AccordionContent>
                        Eliane é extremamente discreta sobre sua vida pessoal e procedimentos estéticos. A apresentadora prefere manter o foco em seu trabalho profissional e raramente comenta sobre temas relacionados à estética.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                      <AccordionTrigger className="text-left">
                        Qual é o estilo de maquiagem preferido de Eliane?
                      </AccordionTrigger>
                      <AccordionContent>
                        Eliane prefere maquiagens clássicas e elegantes, com tons neutros e acabamento sofisticado. Seu estilo é caracterizado pela naturalidade profissional, adequada ao ambiente jornalístico onde atua.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5">
                      <AccordionTrigger className="text-left">
                        Há quanto tempo Eliane trabalha na televisão?
                      </AccordionTrigger>
                      <AccordionContent>
                        Eliane tem mais de 30 anos de carreira na televisão brasileira, tendo passado por diversas emissoras e apresentado diferentes programas jornalísticos. Sua experiência e profissionalismo são amplamente reconhecidos no meio.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                <div className="mt-8 flex justify-between items-center">
                  <Link to="/giovanna-antonelli-antes-depois-maquiagem">
                    <Button variant="outline" size="lg">
                      <ArrowLeft className="mr-2" /> Anterior: Giovanna Antonelli
                    </Button>
                  </Link>
                  <Link to="/juliana-paes-antes-depois-maquiagem">
                    <Button size="lg" className="text-lg px-8 py-6">
                      Próxima: Juliana Paes <ArrowRight className="ml-2" />
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

export default ElianeApresentadora;
