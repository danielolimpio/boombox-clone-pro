import { Helmet } from "react-helmet";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import SocialShare from "@/components/SocialShare";
import AuthorBio from "@/components/AuthorBio";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import gatoDoMatoImage from "@/assets/felinos/gato-do-mato.jpg";

const Felinos07GatoDoMato = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Gato do Mato Pequeno: O Felino Brasileiro da Mata Atlântica | eFuxico</title>
        <meta name="description" content="Conheça o gato do mato pequeno, felino nativo do Brasil que habita a Mata Atlântica. Descubra suas características e importância ecológica." />
        <meta name="keywords" content="gato do mato, gato do mato pequeno, leopardus tigrinus, felinos brasileiros, mata atlântica" />
        <link rel="canonical" href="https://efuxico.com.br/gato-do-mato-pequeno-felino-brasil" />
        <meta property="og:title" content="Gato do Mato Pequeno: O Felino Brasileiro da Mata Atlântica" />
        <meta property="og:description" content="Conheça o gato do mato pequeno, felino nativo do Brasil que habita a Mata Atlântica." />
        <meta property="og:url" content="https://efuxico.com.br/gato-do-mato-pequeno-felino-brasil" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <article className="bg-card rounded-lg p-6 shadow-lg">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                  18 Espécies de Felinos ao Redor do Mundo
                </h1>
                
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
                  #7 - Gato do Mato Pequeno: Tesouro da Mata Atlântica
                </h2>

                <div className="mb-8">
                  <img 
                    src={gatoDoMatoImage} 
                    alt="Gato do mato pequeno brasileiro em movimento" 
                    className="w-full rounded-lg shadow-md"
                  />
                </div>

                <div className="bg-muted p-4 rounded-lg mb-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground">Ficha Técnica</h3>
                  <ul className="space-y-2 text-foreground">
                    <li><strong>Nome Científico:</strong> Leopardus tigrinus (ou Leopardus guttulus)</li>
                    <li><strong>Onde Vive:</strong> Brasil (Mata Atlântica, Cerrado), Costa Rica até Argentina</li>
                    <li><strong>Tamanho:</strong> 38 a 59 cm de comprimento (mais 20-42 cm de cauda)</li>
                    <li><strong>Peso:</strong> 1,5 a 3 kg</li>
                    <li><strong>Tipo:</strong> Felino de pequeno porte, terrestre e arborícola</li>
                  </ul>
                </div>

                <div className="prose max-w-none text-foreground space-y-4">
                  <p className="text-lg leading-relaxed">
                    O gato do mato pequeno, também chamado de gato-tigre ou tigrillo, representa um dos felinos mais belos e menos conhecidos da fauna brasileira. Este pequeno predador habita principalmente a Mata Atlântica, um dos biomas mais ameaçados do planeta, onde desempenha papel ecológico fundamental no controle de populações de pequenos mamíferos e aves. Sua pelagem ornamentada com rosetas negras sobre fundo amarelado ou acinzentado proporciona camuflagem perfeita entre as folhagens da floresta tropical.
                  </p>

                  <p className="text-lg leading-relaxed">
                    A taxonomia do gato do mato pequeno passou por revisões significativas nos últimos anos. Pesquisas genéticas revelaram que o que era considerado uma única espécie na verdade compreende pelo menos duas espécies distintas: Leopardus tigrinus no norte do Brasil e América Central, e Leopardus guttulus no sul do Brasil, Paraguai e Argentina. Esta descoberta tem implicações importantes para a conservação, pois cada espécie requer estratégias de proteção específicas baseadas em suas distribuições geográficas únicas.
                  </p>

                  <p className="text-lg leading-relaxed">
                    Como o menor felino selvagem do Brasil, o gato do mato pequeno raramente ultrapassa três quilogramas de peso, sendo frequentemente confundido com filhotes de jaguatiricas por observadores inexperientes. Suas características distintivas incluem orelhas arredondadas proporcionalmente grandes, olhos amendoados expressivos e uma cauda relativamente longa que auxilia no equilíbrio durante escaladas. A pelagem pode variar consideravelmente, com indivíduos melânicos completamente negros sendo ocasionalmente documentados.
                  </p>

                  <p className="text-lg leading-relaxed">
                    A dieta do gato do mato pequeno reflete sua natureza como predador oportunista de pequeno porte. Roedores silvestres como ratos-do-mato e camundongos constituem a base alimentar, complementada por pequenas aves, lagartos, insetos grandes e ocasionalmente ovos encontrados em ninhos. Estudos comportamentais indicam que esta espécie é primariamente noturna e crepuscular, embora atividade diurna seja observada em áreas com menor pressão de caça e perturbação humana.
                  </p>

                  <p className="text-lg leading-relaxed">
                    O status de conservação do gato do mato pequeno é preocupante, sendo classificado como vulnerável no Brasil e internacionalmente. A principal ameaça é a destruição da Mata Atlântica, bioma reduzido a menos de 12% de sua cobertura original. A fragmentação florestal isola populações, reduzindo diversidade genética e viabilidade a longo prazo. Atropelamentos em rodovias, caça retaliativa por ataques a aves domésticas e tráfico ilegal de animais silvestres também contribuem para o declínio populacional.
                  </p>

                  <p className="text-lg leading-relaxed">
                    Esforços de conservação para o gato do mato pequeno incluem pesquisas de longo prazo utilizando câmeras-armadilha em fragmentos florestais, programas de educação ambiental em comunidades rurais e a proteção legal em unidades de conservação. Iniciativas como o Projeto Gatos do Mato trabalham ativamente para estudar e proteger esta e outras espécies de pequenos felinos brasileiros. A restauração de corredores ecológicos conectando fragmentos florestais é considerada essencial para garantir a sobrevivência das populações isoladas deste precioso felino nacional.
                  </p>
                </div>

                <SocialShare 
                  url="https://efuxico.com.br/gato-do-mato-pequeno-felino-brasil"
                  title="Gato do Mato Pequeno: O Felino Brasileiro da Mata Atlântica"
                />

                <AuthorBio />

                <div className="mt-8 flex justify-between items-center">
                  <Link to="/gato-do-deserto-areia-felino">
                    <Button variant="outline" size="lg" className="text-lg px-6 py-6">
                      <ArrowLeft className="mr-2" /> Anterior
                    </Button>
                  </Link>
                  <Link to="/gato-dos-pampas-palheiro-felino">
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

export default Felinos07GatoDoMato;
