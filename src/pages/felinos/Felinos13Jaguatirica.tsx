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
import jaguatiricaImage from "@/assets/felinos/jaguatirica.jpg";

const Felinos13Jaguatirica = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Jaguatirica: A Rainha dos Felinos Brasileiros | eFuxico</title>
        <meta name="description" content="Conheça a jaguatirica, o terceiro maior felino do Brasil. Descubra suas características, habitat e por que é considerada a mais bela das Américas." />
        <meta name="keywords" content="jaguatirica, leopardus pardalis, felinos brasileiros, gatos selvagens brasil, ocelote" />
        <link rel="canonical" href="https://efuxico.com.br/jaguatirica-felino-brasileiro" />
        <meta property="og:title" content="Jaguatirica: A Rainha dos Felinos Brasileiros" />
        <meta property="og:description" content="Conheça a jaguatirica, o terceiro maior felino do Brasil." />
        <meta property="og:url" content="https://efuxico.com.br/jaguatirica-felino-brasileiro" />
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
                  #13 - Jaguatirica: A Beleza Selvagem do Brasil
                </h2>

                <div className="mb-8">
                  <img 
                    src={jaguatiricaImage} 
                    alt="Jaguatirica com sua pelagem característica de rosetas" 
                    className="w-full rounded-lg shadow-md"
                  />
                </div>

                <div className="bg-muted p-4 rounded-lg mb-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground">Ficha Técnica</h3>
                  <ul className="space-y-2 text-foreground">
                    <li><strong>Nome Científico:</strong> Leopardus pardalis</li>
                    <li><strong>Onde Vive:</strong> América Central e do Sul (do Texas à Argentina)</li>
                    <li><strong>Tamanho:</strong> 55 a 100 cm de comprimento (mais 30-45 cm de cauda)</li>
                    <li><strong>Peso:</strong> 8 a 16 kg</li>
                    <li><strong>Tipo:</strong> Felino de médio porte, terrestre e arborícola</li>
                  </ul>
                </div>

                <div className="prose max-w-none text-foreground space-y-4">
                  <p className="text-lg leading-relaxed">
                    A jaguatirica é frequentemente considerada o mais belo dos felinos americanos, e com razão. Sua pelagem luxuriante exibe um padrão complexo de rosetas negras com centros dourados sobre um fundo que varia do amarelo-claro ao cinza-alaranjado, criando uma obra de arte natural que rivalizava com qualquer design humano. Esta beleza, infelizmente, foi sua maldição durante décadas, quando a espécie foi intensamente caçada para alimentar a indústria de peles de luxo, chegando à beira da extinção em várias regiões.
                  </p>

                  <p className="text-lg leading-relaxed">
                    Como o terceiro maior felino do Brasil, atrás apenas da onça-pintada e do puma, a jaguatirica ocupa uma posição ecológica importante como predador de topo em muitos ecossistemas onde felinos maiores estão ausentes. Seu tamanho intermediário permite que capture presas variadas, desde pequenos roedores e aves até animais maiores como gambás, pacas e até pequenos veados. Esta flexibilidade alimentar contribui para sua capacidade de sobreviver em habitats diversos, desde florestas densas até cerrados e áreas de vegetação secundária.
                  </p>

                  <p className="text-lg leading-relaxed">
                    O comportamento territorial da jaguatirica é bem documentado através de estudos utilizando radiotelemetria e câmeras-armadilha. Machos mantêm territórios que podem sobrepor-se aos de várias fêmeas, padrão típico de felinos solitários. A comunicação entre indivíduos ocorre principalmente através de marcações olfativas em árvores e rochas, além de vocalizações que incluem miados, rosnados e chamados de acasalamento. Encontros entre machos podem ser violentos, com disputas territoriais ocasionalmente resultando em ferimentos sérios.
                  </p>

                  <p className="text-lg leading-relaxed">
                    A jaguatirica demonstra notável adaptabilidade quanto ao uso de habitat, sendo encontrada em florestas tropicais úmidas, florestas secas, cerrados, caatingas, manguezais e até mesmo áreas de vegetação secundária próximas a ocupações humanas. Entretanto, a espécie prefere áreas com densa cobertura vegetal que proporcionam oportunidades de emboscada e proteção contra predadores maiores. Estudos indicam que a presença de corpos d'água permanentes e alta densidade de presas são fatores importantes na seleção de habitat.
                  </p>

                  <p className="text-lg leading-relaxed">
                    Historicamente, a jaguatirica sofreu intensa pressão de caça para o comércio de peles. Durante as décadas de 1960 e 1970, estima-se que mais de 200 mil peles eram comercializadas anualmente. A proibição do comércio internacional de peles e a proteção legal na maioria dos países de ocorrência permitiram a recuperação de muitas populações. Hoje, a espécie é classificada como de menor preocupação globalmente, embora enfrente ameaças contínuas de perda de habitat e atropelamentos em rodovias.
                  </p>

                  <p className="text-lg leading-relaxed">
                    No Brasil, a jaguatirica é protegida por lei e ocorre em diversas unidades de conservação. Projetos de pesquisa e conservação trabalham ativamente para monitorar populações e reduzir conflitos com comunidades rurais. A espécie demonstra capacidade de sobreviver em paisagens fragmentadas, desde que corredores ecológicos permitam movimento entre fragmentos florestais. A educação ambiental e o ecoturismo baseado na observação de fauna selvagem representam oportunidades para valorizar economicamente a conservação deste magnífico felino brasileiro.
                  </p>
                </div>

                <SocialShare 
                  url="https://efuxico.com.br/jaguatirica-felino-brasileiro"
                  title="Jaguatirica: A Rainha dos Felinos Brasileiros"
                />

                <AuthorBio />

                <div className="mt-8 flex justify-between items-center">
                  <Link to="/jaguarundi-gato-mourisco-brasil">
                    <Button variant="outline" size="lg" className="text-lg px-6 py-6">
                      <ArrowLeft className="mr-2" /> Anterior
                    </Button>
                  </Link>
                  <Link to="/leopardo-das-neves-felino-himalaia">
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

export default Felinos13Jaguatirica;
