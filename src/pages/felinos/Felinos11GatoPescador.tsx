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
import gatoPescadorImage from "@/assets/felinos/gato-pescador.jpg";

const Felinos11GatoPescador = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Gato Pescador: O Felino que Caça Debaixo d'Água | eFuxico</title>
        <meta name="description" content="Conheça o gato pescador, único felino que mergulha para capturar peixes. Descubra suas adaptações aquáticas únicas nas zonas úmidas asiáticas." />
        <meta name="keywords" content="gato pescador, prionailurus viverrinus, felinos aquáticos, gatos selvagens ásia" />
        <link rel="canonical" href="https://efuxico.com.br/gato-pescador-felino-aquatico" />
        <meta property="og:title" content="Gato Pescador: O Felino que Caça Debaixo d'Água" />
        <meta property="og:description" content="Conheça o gato pescador, único felino que mergulha para capturar peixes." />
        <meta property="og:url" content="https://efuxico.com.br/gato-pescador-felino-aquatico" />
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
                  #11 - Gato Pescador: O Nadador das Zonas Úmidas
                </h2>

                <div className="mb-8">
                  <img 
                    src={gatoPescadorImage} 
                    alt="Gato pescador descansando em seu habitat natural" 
                    className="w-full rounded-lg shadow-md"
                  />
                </div>

                <div className="bg-muted p-4 rounded-lg mb-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground">Ficha Técnica</h3>
                  <ul className="space-y-2 text-foreground">
                    <li><strong>Nome Científico:</strong> Prionailurus viverrinus</li>
                    <li><strong>Onde Vive:</strong> Sul e Sudeste Asiático (Índia, Nepal, Sri Lanka, Bangladesh)</li>
                    <li><strong>Tamanho:</strong> 57 a 78 cm de comprimento (mais 20-30 cm de cauda)</li>
                    <li><strong>Peso:</strong> 5 a 16 kg</li>
                    <li><strong>Tipo:</strong> Felino de médio porte, semiaquático</li>
                  </ul>
                </div>

                <div className="prose max-w-none text-foreground space-y-4">
                  <p className="text-lg leading-relaxed">
                    O gato pescador é um felino extraordinário que desafia a noção comum de que gatos odeiam água. Esta espécie robusta e musculosa desenvolveu adaptações notáveis para uma vida semiaquática nas zonas úmidas do subcontinente indiano e sudeste asiático. Seu nome científico "viverrinus" refere-se à sua aparência semelhante a um civeta, com corpo alongado, pernas relativamente curtas e pelagem manchada que proporciona camuflagem perfeita entre a vegetação aquática.
                  </p>

                  <p className="text-lg leading-relaxed">
                    As adaptações físicas do gato pescador para a vida aquática são verdadeiramente impressionantes. Suas patas dianteiras apresentam membranas interdigitais parcialmente desenvolvidas, algo único entre os felinos, que auxiliam na natação e na captura de presas escorregadias. A pelagem possui duas camadas: uma interna densa e impermeável que mantém a pele seca, e uma externa mais longa que pode ser achatada contra o corpo durante mergulhos. Suas garras não retraem completamente, proporcionando tração adicional em terrenos lamacentos.
                  </p>

                  <p className="text-lg leading-relaxed">
                    O comportamento de caça do gato pescador é fascinante de observar. Diferentemente de outros felinos que evitam a água, esta espécie mergulha ativamente atrás de peixes, às vezes submergindo completamente para capturar presas. Pesquisadores documentaram indivíduos tocando a superfície da água com suas patas para atrair peixes curiosos, e então golpeando com precisão relâmpago. Além de peixes, sua dieta inclui caranguejos, camarões, moluscos, rãs, cobras aquáticas e ocasionalmente aves aquáticas e pequenos mamíferos.
                  </p>

                  <p className="text-lg leading-relaxed">
                    O habitat preferido do gato pescador são mangues, pântanos, várzeas de rios e margens de lagos cobertos por vegetação densa. Estas zonas úmidas fornecem tanto as presas aquáticas que constituem a base de sua dieta quanto a cobertura necessária para emboscadas. A espécie demonstra forte associação com corpos d'água permanentes e áreas de vegetação aquática densa, sendo raramente encontrada longe destes ambientes específicos.
                  </p>

                  <p className="text-lg leading-relaxed">
                    Infelizmente, o gato pescador é classificado como vulnerável e enfrenta ameaças severas em toda sua distribuição. A destruição de zonas úmidas para agricultura, aquicultura e desenvolvimento urbano reduziu drasticamente os habitats disponíveis. A poluição de corpos d'água afeta tanto a espécie diretamente quanto suas presas. Conflitos com pescadores locais, que os veem como competidores pelos peixes, resultam em perseguição e mortes. O tráfico ilegal para o comércio de peles e o mercado de animais exóticos adiciona pressão sobre populações já fragilizadas.
                  </p>

                  <p className="text-lg leading-relaxed">
                    Esforços de conservação para o gato pescador concentram-se na proteção de zonas úmidas remanescentes e na redução de conflitos com comunidades locais. Na Índia, a espécie recebe proteção legal sob o Wildlife Protection Act, e várias reservas foram estabelecidas em áreas de ocorrência conhecida. Programas de educação ambiental buscam conscientizar pescadores sobre a importância ecológica deste felino único. A sobrevivência do gato pescador depende fundamentalmente da preservação das zonas úmidas asiáticas, ecossistemas que fornecem serviços essenciais tanto para a vida selvagem quanto para as populações humanas.
                  </p>
                </div>

                <SocialShare 
                  url="https://efuxico.com.br/gato-pescador-felino-aquatico"
                  title="Gato Pescador: O Felino que Caça Debaixo d'Água"
                />

                <AuthorBio />

                <div className="mt-8 flex justify-between items-center">
                  <Link to="/gato-marmorado-felino-asia">
                    <Button variant="outline" size="lg" className="text-lg px-6 py-6">
                      <ArrowLeft className="mr-2" /> Anterior
                    </Button>
                  </Link>
                  <Link to="/jaguarundi-felino-americas">
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

export default Felinos11GatoPescador;
