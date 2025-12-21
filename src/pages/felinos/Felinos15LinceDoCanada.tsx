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
import linceDoCanadaImage from "@/assets/felinos/lince-do-canada.jpg";

const Felinos15LinceDoCanada = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Lince do Canadá: O Caçador das Florestas Boreais | eFuxico</title>
        <meta name="description" content="Conheça o lince do Canadá, felino especialista em caçar lebres nas florestas geladas. Descubra suas patas gigantes e adaptações ao frio extremo." />
        <meta name="keywords" content="lince do canadá, lynx canadensis, felinos américa norte, lince boreal, gatos selvagens" />
        <link rel="canonical" href="https://efuxico.com.br/lince-do-canada-felino" />
        <meta property="og:title" content="Lince do Canadá: O Caçador das Florestas Boreais" />
        <meta property="og:description" content="Conheça o lince do Canadá, felino especialista em caçar lebres nas florestas geladas." />
        <meta property="og:url" content="https://efuxico.com.br/lince-do-canada-felino" />
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
                  #15 - Lince do Canadá: O Senhor das Florestas Geladas
                </h2>

                <div className="mb-8">
                  <img 
                    src={linceDoCanadaImage} 
                    alt="Lince do Canadá caminhando na neve com suas patas enormes" 
                    className="w-full rounded-lg shadow-md"
                  />
                </div>

                <div className="bg-muted p-4 rounded-lg mb-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground">Ficha Técnica</h3>
                  <ul className="space-y-2 text-foreground">
                    <li><strong>Nome Científico:</strong> Lynx canadensis</li>
                    <li><strong>Onde Vive:</strong> Canadá e norte dos Estados Unidos (florestas boreais)</li>
                    <li><strong>Tamanho:</strong> 76 a 106 cm de comprimento (mais 5-13 cm de cauda)</li>
                    <li><strong>Peso:</strong> 5 a 17 kg</li>
                    <li><strong>Tipo:</strong> Felino de médio porte, terrestre</li>
                  </ul>
                </div>

                <div className="prose max-w-none text-foreground space-y-4">
                  <p className="text-lg leading-relaxed">
                    O lince do Canadá é um felino magnificamente adaptado às condições extremas das florestas boreais norte-americanas, onde temperaturas podem cair a -40°C durante os longos invernos. Com sua pelagem densa e sedosa, tufos auriculares pronunciados e uma expressão que parece eternamente sábia, este lince representa uma das quatro espécies do gênero Lynx distribuídas pelo hemisfério norte. Sua aparência inconfundível inclui pernas traseiras mais longas que as dianteiras, dando-lhe uma silhueta característica.
                  </p>

                  <p className="text-lg leading-relaxed">
                    A característica mais distintiva do lince do Canadá são suas patas extraordinariamente grandes, que funcionam como raquetes de neve naturais. Estas patas, cobertas por pelos densos inclusive entre os dedos, permitem que o animal caminhe sobre neve fofa sem afundar, proporcionando vantagem crucial sobre suas presas. Durante o inverno, quando a neve pode atingir metros de profundidade, esta adaptação torna o lince um predador supremamente eficiente em seu ambiente gelado.
                  </p>

                  <p className="text-lg leading-relaxed">
                    A relação entre o lince do Canadá e a lebre-americana representa um dos exemplos mais estudados de dinâmica predador-presa na ecologia. A lebre-americana constitui até 97% da dieta do lince em algumas regiões, criando uma dependência quase absoluta. As populações de ambas as espécies flutuam em ciclos sincronizados de aproximadamente 10 anos: quando as lebres são abundantes, os linces prosperam e se reproduzem mais; quando as lebres declinam, os linces enfrentam escassez alimentar e suas populações caem correspondentemente.
                  </p>

                  <p className="text-lg leading-relaxed">
                    O habitat do lince do Canadá compreende as vastas florestas de coníferas que se estendem do Alasca até a Terra Nova, passando por todo o Canadá e entrando nos Estados Unidos em áreas montanhosas do norte. Estes felinos preferem florestas maduras com sub-bosque denso que proporciona cobertura tanto para eles quanto para suas presas. Áreas recentemente queimadas ou perturbadas são evitadas até que a vegetação se recupere suficientemente para suportar populações de lebres.
                  </p>

                  <p className="text-lg leading-relaxed">
                    O comportamento de caça do lince do Canadá combina paciência com explosões de velocidade. Estes felinos são caçadores de emboscada que esperam imóveis por longos períodos até que uma lebre passe ao alcance de um ataque. A perseguição raramente ultrapassa alguns saltos, pois o lince depende de surpresa e velocidade inicial para capturar presas que são notoriamente ágeis e rápidas. Durante o inverno, trilhas na neve revelam os padrões de movimento dos linces e suas tentativas de caça.
                  </p>

                  <p className="text-lg leading-relaxed">
                    O lince do Canadá é classificado como de menor preocupação globalmente, embora algumas populações periféricas enfrentem ameaças. Nos Estados Unidos, a espécie foi listada como ameaçada em 2000 devido a declínios populacionais e perda de habitat. A exploração madeireira que remove florestas maduras, o desenvolvimento humano que fragmenta habitats contínuos e as mudanças climáticas que alteram a distribuição de neve representam preocupações de conservação. Esforços de recuperação incluem proteção de habitat crítico e reintroduções em áreas históricas de ocorrência.
                  </p>
                </div>

                <SocialShare 
                  url="https://efuxico.com.br/lince-do-canada-felino"
                  title="Lince do Canadá: O Caçador das Florestas Boreais"
                />

                <AuthorBio />

                <div className="mt-8 flex justify-between items-center">
                  <Link to="/leopardo-das-neves-felino-himalaia">
                    <Button variant="outline" size="lg" className="text-lg px-6 py-6">
                      <ArrowLeft className="mr-2" /> Anterior
                    </Button>
                  </Link>
                  <Link to="/lince-euroasiatico-felino">
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

export default Felinos15LinceDoCanada;
