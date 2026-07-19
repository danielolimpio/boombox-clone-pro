import { Helmet } from "react-helmet";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import SocialShare from "@/components/SocialShare";
import AuthorBio from "@/components/AuthorBio";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import carolinaImage from "@/assets/celebs/carolina-ferraz.jpeg";

const CarolinaFerraz = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Carolina Ferraz Antes e Depois da Maquiagem | eFuxico</title>
        <meta name="description" content="Carolina Ferraz antes e depois da maquiagem: a atriz e apresentadora revela sua rotina de beleza, cuidados com a pele e envelhecimento com elegância aos 57 anos." />
        <link rel="canonical" href="https://efuxico.com.br/carolina-ferraz-antes-depois-maquiagem" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Carolina Ferraz Antes e Depois da Maquiagem | eFuxico" />
        <meta property="og:description" content="Carolina Ferraz antes e depois da maquiagem: a atriz e apresentadora revela sua rotina de beleza, cuidados com a pele e envelhecimento com elegância aos 57 anos." />
        <meta property="og:url" content="https://efuxico.com.br/carolina-ferraz-antes-depois-maquiagem" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <article className="bg-card rounded-lg p-6 shadow-lg">
                <h1 className="text-4xl font-bold mb-4">10 Celebridades Antes e Depois da Maquiagem</h1>
                <h2 className="text-3xl font-bold mb-6 text-primary">#10 - Carolina Ferraz: Beleza Clássica</h2>
                <img src={carolinaImage} alt="Carolina Ferraz antes e depois da maquiagem" className="w-full rounded-lg mb-8" />

                <div className="prose max-w-none text-foreground space-y-4">
                  <p className="text-lg leading-relaxed">
                    Carolina Ferraz, aos 57 anos, é o retrato de uma beleza clássica que atravessou décadas sem perder sofisticação. Nascida no Rio de Janeiro em 11 de setembro de 1968, a atriz e apresentadora construiu uma carreira sólida em novelas marcantes como "Felicidade", "Um Anjo Caiu do Céu" e "Ligações Perigosas", além de comandar programas jornalísticos e de estilo de vida.
                  </p>

                  <h3 className="text-2xl font-bold mt-6 mb-4">A Beleza Natural de Carolina Ferraz</h3>
                  <p className="text-lg leading-relaxed">
                    Carolina é referência quando o assunto é envelhecimento com naturalidade. Ela nunca escondeu as marcas de expressão do rosto e frequentemente aparece sem base nas redes sociais, defendendo que rugas contam histórias. Sua pele levemente bronzeada, os olhos verdes marcantes e o cabelo castanho iluminado formam um conjunto que dispensa transformações radicais.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Além disso, Carolina é entusiasta da culinária saudável — inclusive lançou livros e apresentou programas gastronômicos. Ela credita boa parte da aparência jovial à alimentação equilibrada, rica em vegetais, azeite de oliva, peixes e água em abundância. É praticante regular de pilates e ioga, atividades que ajudam na postura e no tônus muscular.
                  </p>

                  <h3 className="text-2xl font-bold mt-6 mb-4">A Transformação com Maquiagem</h3>
                  <p className="text-lg leading-relaxed">
                    A maquiagem preferida de Carolina para gravações valoriza o frescor da pele: base fluida em acabamento luminoso, blush cremoso rosado, sombras neutras e boca em nude com brilho discreto. O objetivo é destacar o olhar sem endurecer as feições, algo especialmente importante para peles maduras, que ficam melhores com produtos menos opacos.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Em eventos, a atriz aposta em vermelhos clássicos e olhos suavemente esfumados, um look atemporal que combina com sua persona sofisticada. Ela costuma dispensar iluminadores metalizados intensos, preferindo brilhos sutis nas maçãs e no arco do cupido — técnica que rejuvenesce sem exagero.
                  </p>

                  <h3 className="text-2xl font-bold mt-6 mb-4">Inspiração para Mulheres Maduras</h3>
                  <p className="text-lg leading-relaxed">
                    Aos 57 anos, Carolina Ferraz é prova de que envelhecer não é sinônimo de perder relevância. Casada com o médico Marcelo Marins, mãe de duas filhas, ela conquistou espaço em áreas tão diversas quanto dramaturgia, jornalismo, gastronomia e apresentação. Sua transformação antes e depois da maquiagem mostra que a make bem escolhida realça uma beleza que já é, por natureza, elegante.
                  </p>
                </div>

                <div className="mt-8 bg-muted p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Perguntas Frequentes sobre Carolina Ferraz</h3>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-left">Qual é a idade de Carolina Ferraz?</AccordionTrigger>
                      <AccordionContent>Carolina Ferraz nasceu em 11 de setembro de 1968, no Rio de Janeiro, e tem 57 anos.</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger className="text-left">Carolina Ferraz fez cirurgia plástica?</AccordionTrigger>
                      <AccordionContent>Ela sempre defendeu o envelhecimento natural e afirma não ter feito grandes cirurgias. Já falou abertamente sobre pequenos procedimentos estéticos, feitos de forma discreta.</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger className="text-left">Qual é o segredo da pele de Carolina?</AccordionTrigger>
                      <AccordionContent>Alimentação saudável, muita água, protetor solar diário, hidratação constante e sono adequado. Ela evita produtos agressivos e prefere fórmulas com ingredientes naturais.</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger className="text-left">Carolina Ferraz apresenta algum programa atualmente?</AccordionTrigger>
                      <AccordionContent>Além da carreira de atriz, Carolina consolidou-se também como apresentadora de programas jornalísticos e de estilo de vida, com foco em gastronomia, bem-estar e temas femininos.</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                      <AccordionTrigger className="text-left">Qual é o estilo de maquiagem preferido de Carolina?</AccordionTrigger>
                      <AccordionContent>Ela prefere makes clássicas: pele iluminada, olhar suave e boca marcada em nude ou vermelho. Evita camadas pesadas de base e opta sempre por acabamentos luminosos.</AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                <SocialShare 
                  url="https://efuxico.com.br/carolina-ferraz-antes-depois-maquiagem"
                  title="Carolina Ferraz Antes e Depois da Maquiagem"
                />

                <AuthorBio />

                <div className="mt-8">
                  <Link to="/ana-hickmann-antes-depois-maquiagem">
                    <Button variant="outline"><ArrowLeft className="mr-2" /> Anterior</Button>
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

export default CarolinaFerraz;
