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
import gatoDosPampasImage from "@/assets/felinos/gato-dos-pampas.jpg";

const Felinos08GatoDosPampas = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Gato dos Pampas (Gato Palheiro): O Felino das Planícies | eFuxico</title>
        <meta name="description" content="Descubra o gato dos pampas ou gato palheiro, felino sul-americano das planícies e campos abertos. Conheça onde vive e suas características." />
        <meta name="keywords" content="gato dos pampas, gato palheiro, leopardus colocola, felinos sul americanos, felinos brasil" />
        <link rel="canonical" href="https://efuxico.com.br/gato-dos-pampas-palheiro-felino" />
        <meta property="og:title" content="Gato dos Pampas (Gato Palheiro): O Felino das Planícies" />
        <meta property="og:description" content="Descubra o gato dos pampas ou gato palheiro, felino sul-americano das planícies." />
        <meta property="og:url" content="https://efuxico.com.br/gato-dos-pampas-palheiro-felino" />
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
                  #8 - Gato dos Pampas: O Senhor das Planícies
                </h2>

                <div className="mb-8">
                  <img 
                    src={gatoDosPampasImage} 
                    alt="Gato dos pampas ou gato palheiro em seu habitat" 
                    className="w-full rounded-lg shadow-md"
                  />
                </div>

                <div className="bg-muted p-4 rounded-lg mb-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground">Ficha Técnica</h3>
                  <ul className="space-y-2 text-foreground">
                    <li><strong>Nome Científico:</strong> Leopardus colocola</li>
                    <li><strong>Onde Vive:</strong> América do Sul (Brasil, Argentina, Chile, Peru, Bolívia, Equador)</li>
                    <li><strong>Tamanho:</strong> 42 a 79 cm de comprimento (mais 22-33 cm de cauda)</li>
                    <li><strong>Peso:</strong> 3 a 7 kg</li>
                    <li><strong>Tipo:</strong> Felino de pequeno a médio porte, terrestre</li>
                  </ul>
                </div>

                <div className="prose max-w-none text-foreground space-y-4">
                  <p className="text-lg leading-relaxed">
                    O gato dos pampas, conhecido no Brasil como gato palheiro, é um felino sul-americano de aparência robusta e pelagem densa que habita uma variedade impressionante de ambientes abertos. Desde as vastas planícies dos pampas argentinos até os altiplanos andinos acima de 5.000 metros de altitude, esta espécie adaptável demonstra extraordinária capacidade de colonizar habitats diversos. Seu nome popular brasileiro deriva do costume de buscar abrigo em pilhas de palha e construções rurais abandonadas.
                  </p>

                  <p className="text-lg leading-relaxed">
                    A aparência do gato palheiro é distintamente diferente de outros pequenos felinos sul-americanos. Seu corpo compacto e robusto, orelhas pontudas e focinho achatado conferem-lhe uma expressão única, quase zangada. A pelagem varia enormemente entre populações geográficas, podendo ser acinzentada, amarelada, avermelhada ou marrom, com padrões de listras e manchas que também diferem consideravelmente. Esta variação levou alguns pesquisadores a propor que o que chamamos de gato dos pampas pode na verdade representar várias espécies distintas.
                  </p>

                  <p className="text-lg leading-relaxed">
                    A distribuição geográfica do gato dos pampas é uma das mais extensas entre os felinos sul-americanos, abrangendo praticamente todo o cone sul do continente. No Brasil, ocorre principalmente no Cerrado, nos campos sulinos e ocasionalmente em áreas de transição com outros biomas. Esta ampla distribuição reflete sua capacidade de explorar diferentes nichos ecológicos, desde pastagens naturais e campos de altitude até bordas de florestas e áreas agrícolas, demonstrando notável flexibilidade comportamental.
                  </p>

                  <p className="text-lg leading-relaxed">
                    A dieta do gato palheiro consiste predominantemente de pequenos mamíferos terrestres, especialmente roedores como preás, cuises e ratos-do-campo que são abundantes em habitats de pastagem. Aves terrestres como perdizes e codornas também figuram significativamente em sua alimentação, assim como lagartos e grandes insetos. Diferentemente de muitos felinos, o gato dos pampas é frequentemente ativo durante o dia, particularmente em regiões de altitude onde as noites são extremamente frias e a atividade diurna oferece vantagens térmicas.
                  </p>

                  <p className="text-lg leading-relaxed">
                    O status de conservação do gato dos pampas é classificado como quase ameaçado, embora algumas populações enfrentem pressões significativamente maiores que outras. A conversão de pastagens naturais para agricultura intensiva representa a principal ameaça ao longo de grande parte de sua distribuição. No Brasil, a expansão agropecuária sobre o Cerrado e os campos sulinos reduziu drasticamente habitats disponíveis. Caça retaliativa por predação de aves domésticas e atropelamentos em rodovias também contribuem para a mortalidade.
                  </p>

                  <p className="text-lg leading-relaxed">
                    Esforços de conservação para o gato dos pampas incluem pesquisas de campo utilizando câmeras-armadilha e telemetria em diferentes partes de sua distribuição. Programas de educação ambiental junto a comunidades rurais buscam reduzir conflitos e promover coexistência. A proteção de áreas representativas de pastagens naturais é considerada prioritária, embora estes ecossistemas frequentemente recebam menos atenção conservacionista que florestas. O futuro desta espécie carismática depende fundamentalmente da preservação dos últimos remanescentes de campos nativos sul-americanos.
                  </p>
                </div>

                <SocialShare 
                  url="https://efuxico.com.br/gato-dos-pampas-palheiro-felino"
                  title="Gato dos Pampas (Gato Palheiro): O Felino das Planícies"
                />

                <AuthorBio />

                <div className="mt-8 flex justify-between items-center">
                  <Link to="/gato-do-mato-pequeno-felino-brasil">
                    <Button variant="outline" size="lg" className="text-lg px-6 py-6">
                      <ArrowLeft className="mr-2" /> Anterior
                    </Button>
                  </Link>
                  <Link to="/gato-maracaja-felino-acrobata-brasil">
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

export default Felinos08GatoDosPampas;
