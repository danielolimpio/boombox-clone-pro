import { Helmet } from "react-helmet";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import SocialShare from "@/components/SocialShare";
import AuthorBio from "@/components/AuthorBio";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import servalImage from "@/assets/felinos/serval.jpg";

const Felinos18Serval = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Serval: O Felino de Pernas Longas da África | eFuxico</title>
        <meta name="description" content="Conheça o serval, o felino africano de pernas extraordinariamente longas. Descubra suas habilidades de salto impressionantes e adaptações únicas." />
        <meta name="keywords" content="serval, leptailurus serval, felinos africanos, gatos selvagens africa, felino pernas longas" />
        <link rel="canonical" href="https://efuxico.com.br/serval-felino-africano" />
        <meta property="og:title" content="Serval: O Felino de Pernas Longas da África" />
        <meta property="og:description" content="Conheça o serval, o felino africano de pernas extraordinariamente longas." />
        <meta property="og:url" content="https://efuxico.com.br/serval-felino-africano" />
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
                  #18 - Serval: O Saltador das Savanas Africanas
                </h2>

                <div className="mb-8">
                  <img 
                    src={servalImage} 
                    alt="Serval africano mostrando suas pernas longas características" 
                    className="w-full rounded-lg shadow-md"
                  />
                </div>

                <div className="bg-muted p-4 rounded-lg mb-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground">Ficha Técnica</h3>
                  <ul className="space-y-2 text-foreground">
                    <li><strong>Nome Científico:</strong> Leptailurus serval</li>
                    <li><strong>Onde Vive:</strong> África Subsaariana (savanas e áreas úmidas)</li>
                    <li><strong>Tamanho:</strong> 59 a 92 cm de comprimento (mais 20-38 cm de cauda)</li>
                    <li><strong>Peso:</strong> 7 a 18 kg</li>
                    <li><strong>Tipo:</strong> Felino de médio porte, terrestre</li>
                  </ul>
                </div>

                <div className="prose max-w-none text-foreground space-y-4">
                  <p className="text-lg leading-relaxed">
                    O serval é um dos felinos mais distintivos e elegantes da África, imediatamente reconhecível por suas pernas extraordinariamente longas, orelhas enormes e pelagem dourada salpicada de manchas e listras negras. Proporcionalmente, o serval possui as pernas mais longas de qualquer felino em relação ao tamanho do corpo, uma adaptação que lhe permite enxergar acima da vegetação alta das savanas africanas e executar saltos impressionantes para capturar presas.
                  </p>

                  <p className="text-lg leading-relaxed">
                    As habilidades de salto do serval são verdadeiramente espetaculares. Este felino pode pular verticalmente até três metros do solo para capturar aves em voo, e horizontalmente até quatro metros para alcançar roedores tentando escapar. Sua técnica de caça característica envolve localizar presas através da audição aguçada, aproximar-se silenciosamente, e então executar um salto alto que termina com as patas dianteiras golpeando a presa contra o solo. A taxa de sucesso nas caçadas pode chegar a impressionantes 50%, muito superior à maioria dos predadores.
                  </p>

                  <p className="text-lg leading-relaxed">
                    As orelhas do serval são as maiores entre todos os felinos em proporção ao tamanho da cabeça, funcionando como antenas parabólicas naturais que captam sons de presas movendo-se sob a vegetação ou mesmo sob o solo. Pesquisadores documentaram servais localizando e capturando roedores completamente invisíveis, baseando-se exclusivamente em pistas auditivas. Esta capacidade auditiva excepcional permite que cacem eficientemente durante a noite, quando a maioria de suas presas está ativa.
                  </p>

                  <p className="text-lg leading-relaxed">
                    O habitat preferido do serval são savanas com vegetação alta, zonas úmidas, margens de rios e bordas de florestas onde a cobertura vegetal proporciona tanto oportunidades de emboscada quanto abundância de presas. Estes felinos evitam desertos secos e florestas densas, preferindo o mosaico de gramíneas altas e arbustos que caracteriza grande parte da África Subsaariana. A disponibilidade de água é importante, e servais raramente são encontrados longe de fontes hídricas permanentes.
                  </p>

                  <p className="text-lg leading-relaxed">
                    A dieta do serval é dominada por pequenos mamíferos, especialmente roedores como ratos-do-mato e ratos-toupeira que são abundantes nas savanas africanas. Entretanto, sua dieta é surpreendentemente variada, incluindo aves, répteis, anfíbios, insetos e até pequenos antílopes em raras ocasiões. Estudos em diferentes regiões revelaram flexibilidade alimentar notável, com servais ajustando suas preferências conforme a disponibilidade sazonal de diferentes presas.
                  </p>

                  <p className="text-lg leading-relaxed">
                    O serval é classificado como de menor preocupação globalmente, mantendo populações saudáveis em grande parte de sua distribuição africana. Entretanto, a espécie enfrenta ameaças crescentes de perda de habitat para agricultura, caça por sua pelagem e conflitos com criadores de aves domésticas. Em algumas regiões da África Ocidental, populações locais declinaram significativamente. A demanda por servais como animais de estimação exóticos e para criação de híbridos "Savannah cats" também representa preocupação conservacionista. A proteção de zonas úmidas e savanas africanas é fundamental para garantir o futuro deste extraordinário felino saltador.
                  </p>
                </div>

                <div className="mt-8 p-4 bg-primary/10 rounded-lg text-center">
                  <p className="text-foreground font-medium text-lg">
                    🎉 Parabéns! Você completou a série sobre os 18 Felinos ao Redor do Mundo!
                  </p>
                  <p className="text-muted-foreground mt-2">
                    Esperamos que tenha gostado de conhecer essas incríveis espécies de felinos selvagens.
                  </p>
                </div>

                <SocialShare 
                  url="https://efuxico.com.br/serval-felino-africano"
                  title="Serval: O Felino de Pernas Longas da África"
                />

                <AuthorBio />

                <div className="mt-8 flex justify-between items-center">
                  <Link to="/lince-iberico-felino-europa">
                    <Button variant="outline" size="lg" className="text-lg px-6 py-6">
                      <ArrowLeft className="mr-2" /> Anterior
                    </Button>
                  </Link>
                  <Link to="/">
                    <Button size="lg" className="text-lg px-8 py-6">
                      Ver Mais Artigos
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

export default Felinos18Serval;
