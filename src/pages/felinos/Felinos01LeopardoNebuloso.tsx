import { Helmet } from "react-helmet";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import SocialShare from "@/components/SocialShare";
import AuthorBio from "@/components/AuthorBio";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import leopardoNebulosoImage from "@/assets/felinos/leopardo-nebuloso.jpg";

const Felinos01LeopardoNebuloso = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Leopardo Nebuloso: O Felino das Florestas Asiáticas | eFuxico</title>
        <meta name="description" content="Conheça o leopardo nebuloso, felino misterioso das florestas asiáticas com caninos proporcionalmente maiores que qualquer outro gato selvagem." />
        <meta name="keywords" content="leopardo nebuloso, neofelis nebulosa, felinos asiáticos, gatos selvagens, felinos do mundo" />
        <link rel="canonical" href="https://efuxico.com.br/leopardo-nebuloso-felino-florestas-asiaticas" />

        <meta property="og:url" content="https://efuxico.com.br/leopardo-nebuloso-felino-florestas-asiaticas" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Leopardo Nebuloso: O Felino das Florestas Asiáticas | eFuxico" />
        <meta property="og:description" content="Conheça o leopardo nebuloso, felino misterioso das florestas asiáticas com caninos proporcionalmente maiores que qualquer outro gato selvagem." />
        <meta property="og:url" content="https://efuxico.com.br/leopardo-nebuloso-felino-florestas-asiaticas" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <article className="bg-card rounded-lg p-6 shadow-lg">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                  18 Espécies de Felinos ao Redor do Mundo — Incluindo as que Vivem no Brasil
                </h1>

                <div className="mb-6">
                  <img 
                    src={leopardoNebulosoImage} 
                    alt="Leopardo nebuloso exibindo seus caninos impressionantes" 
                    className="w-full rounded-lg shadow-md"
                  />
                </div>

                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
                  #1 - Leopardo Nebuloso: O Misterioso Predador das Copas
                </h2>

                <div className="bg-muted p-4 rounded-lg mb-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground">Ficha Técnica</h3>
                  <ul className="space-y-2 text-foreground">
                    <li><strong>Nome Científico:</strong> Neofelis nebulosa</li>
                    <li><strong>Onde Vive:</strong> Sudeste Asiático (Nepal, Índia, China, Malásia, Indonésia)</li>
                    <li><strong>Tamanho:</strong> 60 a 110 cm de comprimento (mais 60-90 cm de cauda)</li>
                    <li><strong>Peso:</strong> 11 a 23 kg</li>
                    <li><strong>Tipo:</strong> Felino de médio porte, arborícola</li>
                  </ul>
                </div>

                <div className="prose max-w-none text-foreground space-y-4">
                  <p className="text-lg leading-relaxed">
                    Se você já observou seu gato doméstico espreitar um brinquedo com olhos fixos e silêncio absoluto antes do ataque, saiba que está diante de um comportamento ancestral compartilhado com os maiores felinos selvagens. Gatos domésticos dividem cerca de 96% do DNA com seus primos selvagens, herança de uma linhagem evolutiva que remonta a mais de 25 milhões de anos.
                  </p>

                  <p className="text-lg leading-relaxed">
                    O leopardo nebuloso representa uma das espécies mais enigmáticas do planeta. Habitante das densas florestas tropicais do Sudeste Asiático, este predador desenvolveu adaptações extraordinárias para a vida arbórea. Seu nome deriva das manchas em formato de nuvem que adornam sua pelagem, criando camuflagem perfeita entre as folhagens da floresta.
                  </p>

                  <p className="text-lg leading-relaxed">
                    Uma característica impressionante são seus caninos — proporcionalmente os maiores entre todos os felinos vivos, podendo medir até 4 centímetros. Essa dentição permite capturar presas como macacos, aves e pequenos cervídeos nas copas das árvores com eficiência extraordinária.
                  </p>

                  <p className="text-lg leading-relaxed">
                    Sua agilidade nas árvores é verdadeiramente notável. Patas com articulações extremamente flexíveis permitem rotação completa, possibilitando descer troncos de cabeça para baixo como esquilos. A cauda longa funciona como balancim durante acrobacias aéreas, e as garras afiadas proporcionam aderência excepcional em superfícies verticais.
                  </p>

                  <p className="text-lg leading-relaxed">
                    Infelizmente, a espécie enfrenta sérias ameaças. A destruição de florestas para agricultura reduziu drasticamente seu habitat, enquanto a caça ilegal para comércio de peles pressiona as populações selvagens. Classificado como vulnerável, estima-se que menos de dez mil indivíduos adultos sobrevivam na natureza.
                  </p>

                  <p className="text-lg leading-relaxed">
                    Os esforços de conservação incluem áreas protegidas, programas de reprodução em cativeiro e campanhas de conscientização. O futuro deste felino misterioso depende diretamente da preservação das florestas asiáticas e do combate ao tráfico de animais silvestres. Nesta série de artigos, você conhecerá 18 espécies fascinantes, incluindo as que habitam o Brasil.
                  </p>
                </div>

                <SocialShare 
                  url="https://efuxico.com.br/leopardo-nebuloso-felino-florestas-asiaticas"
                  title="Leopardo Nebuloso: O Felino das Florestas Asiáticas"
                />

                <AuthorBio />

                <div className="mt-8 text-center">
                  <Link to="/gato-bravo-dourado-asia-felino">
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

export default Felinos01LeopardoNebuloso;
