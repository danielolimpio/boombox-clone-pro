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
import gatoMaracajaImage from "@/assets/felinos/gato-maracaja.jpg";

const Felinos09GatoMaracaja = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Gato Maracajá: O Acrobata das Florestas Brasileiras | eFuxico</title>
        <meta name="description" content="Conheça o gato maracajá, o felino mais adaptado à vida nas árvores. Descubra suas habilidades acrobáticas únicas nas florestas brasileiras." />
        <meta name="keywords" content="gato maracajá, leopardus wiedii, felinos brasileiros, gatos selvagens brasil, felino acrobata" />
        <link rel="canonical" href="https://efuxico.com.br/gato-maracaja-felino-acrobata-brasil" />
        <meta property="og:title" content="Gato Maracajá: O Acrobata das Florestas Brasileiras" />
        <meta property="og:description" content="Conheça o gato maracajá, o felino mais adaptado à vida nas árvores." />
        <meta property="og:url" content="https://efuxico.com.br/gato-maracaja-felino-acrobata-brasil" />
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
                  #9 - Gato Maracajá: O Mestre das Copas
                </h2>

                <div className="mb-8">
                  <img 
                    src={gatoMaracajaImage} 
                    alt="Gato maracajá demonstrando sua agilidade em rochas" 
                    className="w-full rounded-lg shadow-md"
                  />
                </div>

                <div className="bg-muted p-4 rounded-lg mb-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground">Ficha Técnica</h3>
                  <ul className="space-y-2 text-foreground">
                    <li><strong>Nome Científico:</strong> Leopardus wiedii</li>
                    <li><strong>Onde Vive:</strong> México até Argentina (florestas tropicais e subtropicais)</li>
                    <li><strong>Tamanho:</strong> 46 a 79 cm de comprimento (mais 33-51 cm de cauda)</li>
                    <li><strong>Peso:</strong> 2,6 a 4 kg</li>
                    <li><strong>Tipo:</strong> Felino de pequeno porte, altamente arborícola</li>
                  </ul>
                </div>

                <div className="prose max-w-none text-foreground space-y-4">
                  <p className="text-lg leading-relaxed">
                    O gato maracajá é considerado o felino mais adaptado à vida arborícola de todas as Américas, possuindo habilidades acrobáticas que desafiam as leis da física. Este elegante predador das florestas tropicais desenvolveu adaptações anatômicas extraordinárias que o permitem realizar façanhas impossíveis para outros gatos: descer de troncos verticais de cabeça para baixo, pular entre galhos com precisão milimétrica e até pendurar-se por uma única pata traseira enquanto captura presas com as dianteiras.
                  </p>

                  <p className="text-lg leading-relaxed">
                    As adaptações físicas do maracajá para a vida nas árvores são verdadeiramente notáveis. Suas articulações do tornozelo podem girar até 180 graus, permitindo que desça de troncos como um esquilo, algo que nenhum outro felino consegue replicar. A cauda excepcionalmente longa, que pode representar até 70% do comprimento do corpo, funciona como balancim durante manobras aéreas. Suas patas proporcionalmente grandes possuem almofadas largas e garras extremamente curvas, proporcionando aderência excepcional em superfícies verticais e galhos escorregadios.
                  </p>

                  <p className="text-lg leading-relaxed">
                    A aparência do gato maracajá é frequentemente confundida com a da jaguatirica, seu parente maior, devido ao padrão similar de manchas. Entretanto, observadores atentos notarão diferenças significativas: o maracajá possui olhos proporcionalmente maiores e mais proeminentes, adaptados para a vida noturna nas copas, cauda mais longa e grossa, e focinho mais curto e arredondado. Sua pelagem luxuriante com rosetas bem definidas proporciona camuflagem perfeita entre as folhagens e sombras do dossel florestal.
                  </p>

                  <p className="text-lg leading-relaxed">
                    A dieta do maracajá reflete seu estilo de vida arborícola, sendo composta principalmente por presas que habitam as copas das árvores. Pequenos mamíferos como esquilos, cuícas e ratos-de-árvore figuram proeminentemente em sua alimentação, junto com aves e seus ovos. Pesquisadores também documentaram comportamento fascinante de mimetismo vocal: o maracajá pode imitar os chamados de filhotes de sagui-de-tufo-preto para atrair adultos desavisados, uma estratégia de caça extraordinariamente sofisticada.
                  </p>

                  <p className="text-lg leading-relaxed">
                    O status de conservação do gato maracajá é classificado como quase ameaçado, com populações em declínio ao longo de grande parte de sua distribuição. A destruição e fragmentação das florestas tropicais representam as ameaças mais significativas, pois esta espécie depende absolutamente de cobertura florestal contínua para sobreviver. Diferentemente de alguns outros pequenos felinos, o maracajá demonstra pouca capacidade de utilizar habitats alterados, tornando-o especialmente vulnerável à perda de habitat.
                  </p>

                  <p className="text-lg leading-relaxed">
                    Esforços de conservação para o maracajá concentram-se na proteção de grandes blocos de floresta tropical e na manutenção de corredores ecológicos que conectam populações isoladas. No Brasil, a espécie ocorre em diversas unidades de conservação na Amazônia e nos remanescentes de Mata Atlântica. Pesquisas utilizando câmeras-armadilha e telemetria continuam revelando informações importantes sobre seus requisitos de habitat e comportamento, fundamentais para estratégias de conservação efetivas. A sobrevivência deste extraordinário acrobata depende diretamente da preservação das florestas tropicais americanas.
                  </p>
                </div>

                <SocialShare 
                  url="https://efuxico.com.br/gato-maracaja-felino-acrobata-brasil"
                  title="Gato Maracajá: O Acrobata das Florestas Brasileiras"
                />

                <AuthorBio />

                <div className="mt-8 flex justify-between items-center">
                  <Link to="/gato-dos-pampas-palheiro-felino">
                    <Button variant="outline" size="lg" className="text-lg px-6 py-6">
                      <ArrowLeft className="mr-2" /> Anterior
                    </Button>
                  </Link>
                  <Link to="/gato-marmorado-felino-asia">
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

export default Felinos09GatoMaracaja;
