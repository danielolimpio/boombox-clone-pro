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
import gatoChinêsDesertoImage from "@/assets/felinos/gato-chines-deserto.jpg";

const Felinos04GatoChinêsDeserto = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Gato Chinês do Deserto: O Felino Endêmico da China | eFuxico</title>
        <meta name="description" content="Conheça o gato chinês do deserto, único felino endêmico da China. Descubra onde vive, características e por que é tão raro na natureza." />
        <meta name="keywords" content="gato chinês do deserto, felis bieti, gato montês chinês, felinos china, gatos selvagens raros" />
        <link rel="canonical" href="https://efuxico.com.br/gato-chines-deserto-felino" />

        <meta property="og:url" content="https://efuxico.com.br/gato-chines-deserto-felino" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Gato Chinês do Deserto: O Felino Endêmico da China | eFuxico" />
        <meta property="og:description" content="Conheça o gato chinês do deserto, único felino endêmico da China. Descubra onde vive, características e por que é tão raro na natureza." />
        <meta property="og:url" content="https://efuxico.com.br/gato-chines-deserto-felino" />
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
                  #4 - Gato Chinês do Deserto: O Enigma das Estepes
                </h2>

                <div className="mb-8">
                  <img 
                    src={gatoChinêsDesertoImage} 
                    alt="Gato chinês do deserto com seus olhos característicos" 
                    className="w-full rounded-lg shadow-md"
                  />
                </div>

                <div className="bg-muted p-4 rounded-lg mb-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground">Ficha Técnica</h3>
                  <ul className="space-y-2 text-foreground">
                    <li><strong>Nome Científico:</strong> Felis bieti</li>
                    <li><strong>Onde Vive:</strong> China (planalto tibetano e regiões adjacentes)</li>
                    <li><strong>Tamanho:</strong> 68 a 84 cm de comprimento (mais 29-35 cm de cauda)</li>
                    <li><strong>Peso:</strong> 4,5 a 9 kg</li>
                    <li><strong>Tipo:</strong> Felino de pequeno a médio porte, terrestre</li>
                  </ul>
                </div>

                <div className="prose max-w-none text-foreground space-y-4">
                  <p className="text-lg leading-relaxed">
                    O gato chinês do deserto, também chamado de gato montês chinês ou gato de Biet, possui a distinção singular de ser o único felino completamente endêmico da China. Esta espécie permanece envolta em mistério científico, sendo considerada um dos felinos menos conhecidos do mundo. Sua distribuição restrita ao planalto tibetano e regiões adjacentes, combinada com seu comportamento extremamente elusivo, tornam encontros na natureza eventos extraordinariamente raros.
                  </p>

                  <p className="text-lg leading-relaxed">
                    A aparência do gato chinês do deserto revela adaptações específicas para seu ambiente árido e frio. Sua pelagem densa e arenosa proporciona excelente camuflagem nas estepes e pastagens alpinas que habita, além de isolamento térmico contra temperaturas que podem cair drasticamente. As orelhas apresentam pequenos tufos nas pontas, semelhantes aos de alguns linces, e seus olhos grandes e penetrantes sugerem capacidade visual apurada para caça em condições de baixa luminosidade.
                  </p>

                  <p className="text-lg leading-relaxed">
                    O habitat preferido deste felino inclui estepes áridas, bordas de desertos, florestas de coníferas montanhosas e arbustais alpinos em altitudes que variam de 2.500 a 5.000 metros acima do nível do mar. Estas regiões inóspitas apresentam invernos rigorosos e verões curtos, exigindo adaptações fisiológicas e comportamentais especializadas. O gato chinês do deserto é predominantemente crepuscular e noturno, passando as horas mais extremas do dia abrigado em tocas ou fendas rochosas.
                  </p>

                  <p className="text-lg leading-relaxed">
                    A alimentação do gato montês chinês consiste principalmente de pequenos mamíferos, especialmente pikas e zokor, roedores abundantes nas estepes tibetanas. Aves terrestres como perdizes e faisões também compõem parte significativa de sua dieta, assim como pequenos répteis durante os meses mais quentes. Pesquisadores observaram que estes felinos utilizam uma combinação de técnicas de caça que incluem emboscadas pacientemente preparadas e escavação ativa para alcançar presas em suas tocas subterrâneas.
                  </p>

                  <p className="text-lg leading-relaxed">
                    A conservação do gato chinês do deserto enfrenta desafios únicos relacionados à falta de informações básicas sobre sua biologia e ecologia. A espécie é classificada como vulnerável, com ameaças incluindo degradação de habitat por pastoreio excessivo, envenenamento acidental através de rodenticidas utilizados para controle de pragas agrícolas e caça para o comércio de peles. Sua pele era historicamente comercializada em mercados chineses, embora esta prática tenha diminuído com regulamentações mais rígidas.
                  </p>

                  <p className="text-lg leading-relaxed">
                    Estudos recentes utilizando câmeras-armadilha e análises genéticas começaram a revelar informações valiosas sobre a distribuição e comportamento desta espécie enigmática. Algumas reservas naturais no planalto tibetano oferecem proteção para populações locais, embora a fiscalização efetiva nestas áreas remotas seja desafiadora. A cooperação entre cientistas chineses e internacionais é essencial para desenvolver estratégias de conservação baseadas em evidências que garantam a sobrevivência a longo prazo deste felino verdadeiramente singular.
                  </p>
                </div>

                <SocialShare 
                  url="https://efuxico.com.br/gato-chines-deserto-felino"
                  title="Gato Chinês do Deserto: O Felino Endêmico da China"
                />

                <AuthorBio />

                <div className="mt-8 flex justify-between items-center">
                  <Link to="/gato-chileno-kodkod-felino">
                    <Button variant="outline" size="lg" className="text-lg px-6 py-6">
                      <ArrowLeft className="mr-2" /> Anterior
                    </Button>
                  </Link>
                  <Link to="/gato-de-pallas-manul-felino">
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

export default Felinos04GatoChinêsDeserto;
