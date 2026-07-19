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
import anaImage from "@/assets/celebs/ana-hickmann.jpeg";

const AnaHickmann = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Ana Hickmann Antes e Depois da Maquiagem | eFuxico</title>
        <meta name="description" content="Ana Hickmann antes e depois da maquiagem: a apresentadora e ex-modelo revela sua rotina de beleza, cuidados com a pele e transformação com make aos 44 anos." />
        <link rel="canonical" href="https://efuxico.com.br/ana-hickmann-antes-depois-maquiagem" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Ana Hickmann Antes e Depois da Maquiagem | eFuxico" />
        <meta property="og:description" content="Ana Hickmann antes e depois da maquiagem: a apresentadora e ex-modelo revela sua rotina de beleza, cuidados com a pele e transformação com make aos 44 anos." />
        <meta property="og:url" content="https://efuxico.com.br/ana-hickmann-antes-depois-maquiagem" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <article className="bg-card rounded-lg p-6 shadow-lg">
                <h1 className="text-4xl font-bold mb-4">10 Celebridades Antes e Depois da Maquiagem</h1>
                <h2 className="text-3xl font-bold mb-6 text-primary">#9 - Ana Hickmann: Elegância de Modelo</h2>
                <img src={anaImage} alt="Ana Hickmann antes e depois da maquiagem" className="w-full rounded-lg mb-8" />

                <div className="prose max-w-none text-foreground space-y-4">
                  <p className="text-lg leading-relaxed">
                    Ana Paula Almeida Hickmann, aos 44 anos, é um dos maiores nomes da moda e da televisão brasileira. Nascida em Santa Cruz do Sul (RS), Ana começou a carreira aos 14 anos como modelo internacional, chegando a entrar para o Guinness Book como a modelo com as pernas mais longas do mundo. Hoje, apresentadora consolidada, ela mantém a postura elegante e a beleza escultural que a tornaram referência.
                  </p>

                  <h3 className="text-2xl font-bold mt-6 mb-4">A Beleza Natural de Ana Hickmann</h3>
                  <p className="text-lg leading-relaxed">
                    Ana é conhecida por sua rotina rigorosa de skincare. Ela costuma dizer que a base de uma pele bonita não está na maquiagem, e sim na hidratação e no protetor solar diários. Nas redes sociais, publica com frequência fotos sem base, exibindo uma pele uniforme, sardas discretas e olhos verdes marcantes — traços que sempre a diferenciaram entre as modelos brasileiras.
                  </p>
                  <p className="text-lg leading-relaxed">
                    A apresentadora enfrentou momentos delicados nos últimos anos, incluindo tratamentos de saúde e mudanças pessoais que a levaram a repensar prioridades. Publicamente, ela passou a defender uma beleza mais leve, com menos camadas de maquiagem e mais foco em bem-estar, alimentação equilibrada e prática regular de atividade física.
                  </p>

                  <h3 className="text-2xl font-bold mt-6 mb-4">A Transformação com Maquiagem</h3>
                  <p className="text-lg leading-relaxed">
                    No estúdio de TV, a maquiagem de Ana é pensada para durar horas sob luz forte. Bases de média cobertura em acabamento natural, iluminador nas maçãs, olhos com sombras neutras e cílios postiços leves compõem o visual clássico da apresentadora. A boca varia entre nude amadeirado e vermelho clássico, dependendo da produção.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Já em eventos de gala, Ana aposta em glamour máximo: pele iluminada, contorno bem definido, olhos esfumados em tons dourados e cabelos com ondas soltas. A altura (1,86 m) e a postura de passarela fazem qualquer look ganhar impacto imediato, mas ela costuma pedir maquiagens que não competam com o vestido, mantendo o equilíbrio visual.
                  </p>

                  <h3 className="text-2xl font-bold mt-6 mb-4">Inspiração para Mulheres Reais</h3>
                  <p className="text-lg leading-relaxed">
                    Ana Hickmann é hoje muito mais do que uma referência estética: tornou-se símbolo de resiliência para mulheres brasileiras. Empresária, mãe de Alexandre e apresentadora, ela concilia rotina intensa com cuidados básicos que qualquer mulher pode reproduzir em casa — limpeza, hidratação, sono adequado e proteção solar. A beleza, segundo ela, é reflexo direto da paz interior.
                  </p>
                </div>

                <div className="mt-8 bg-muted p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Perguntas Frequentes sobre Ana Hickmann</h3>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-left">Qual é a idade de Ana Hickmann?</AccordionTrigger>
                      <AccordionContent>Ana Hickmann nasceu em 1º de março de 1981, em Santa Cruz do Sul (RS), e tem 44 anos.</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger className="text-left">Qual é a altura de Ana Hickmann?</AccordionTrigger>
                      <AccordionContent>Ana tem 1,86 m e ficou conhecida no início da carreira por ter as pernas proporcionalmente mais longas entre as modelos do mundo, feito registrado pelo Guinness Book.</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger className="text-left">Qual é a rotina de skincare de Ana?</AccordionTrigger>
                      <AccordionContent>Limpeza pela manhã e à noite, sérum com vitamina C, hidratante leve, protetor solar diário e máscaras hidratantes semanais. Ela também faz tratamentos dermatológicos preventivos.</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger className="text-left">Ana Hickmann fez cirurgia plástica?</AccordionTrigger>
                      <AccordionContent>Ana já falou publicamente que faz apenas procedimentos discretos, como botox e preenchimentos pontuais, e nega cirurgias plásticas de grande porte no rosto.</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                      <AccordionTrigger className="text-left">Ana usa maquiagem fora do trabalho?</AccordionTrigger>
                      <AccordionContent>Fora dos estúdios, ela prefere um visual clean: hidratante com cor, máscara para cílios e batom nude. A make pesada fica reservada para gravações e eventos.</AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                <SocialShare 
                  url="https://efuxico.com.br/ana-hickmann-antes-depois-maquiagem"
                  title="Ana Hickmann Antes e Depois da Maquiagem"
                />

                <AuthorBio />

                <div className="mt-8 flex justify-between">
                  <Link to="/juliana-paes-antes-depois-maquiagem">
                    <Button variant="outline"><ArrowLeft className="mr-2" /> Anterior</Button>
                  </Link>
                  <Link to="/carolina-ferraz-antes-depois-maquiagem">
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

export default AnaHickmann;
