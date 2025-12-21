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
        <meta property="og:title" content="Leopardo Nebuloso: O Felino das Florestas Asiáticas" />
        <meta property="og:description" content="Conheça o leopardo nebuloso, felino misterioso das florestas asiáticas com caninos impressionantes." />
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

                <div className="bg-muted p-4 rounded-lg mb-6">
                  <p className="text-lg leading-relaxed text-foreground">
                    Se você já observou seu gato doméstico espreitar um brinquedo com olhos fixos, músculos em tensão e um silêncio absoluto antes do ataque, saiba que está diante de um comportamento ancestral: o mesmo instinto que guia tigres nas selvas da Ásia ou onças nos corações da Amazônia. Apesar das diferenças de escala, os gatos que dividem nossas casas compartilham cerca de 96% do seu DNA com os maiores felinos selvagens, herança de uma linhagem evolutiva que remonta a mais de 25 milhões de anos.
                  </p>
                  <p className="text-lg leading-relaxed text-foreground mt-4">
                    Ao longo desse tempo, os felinos se espalharam por quase todos os cantos do planeta — da África aos desertos da Ásia, das florestas tropicais da América do Sul às montanhas geladas da Sibéria —, adaptando-se a ambientes dos mais diversos, com exceção apenas da Antártida. Eles variam impressionantemente em tamanho, comportamento e habitat: há espécies menores que um coelho doméstico e outras capazes de derrubar presas maiores que elas mesmas.
                  </p>
                  <p className="text-lg leading-relaxed text-foreground mt-4">
                    Reverenciados como deuses no Egito Antigo, temidos como feras lendárias em culturas indígenas e celebrados hoje como ícones da vida selvagem, os felinos sempre exerceram um fascínio profundo sobre os seres humanos. Dotados de sentidos extremamente apurados, reflexos relâmpago e uma capacidade quase sobrenatural de se mover sem serem notados, esses animais são o auge da eficiência predatória na natureza.
                  </p>
                  <p className="text-lg leading-relaxed text-foreground mt-4">
                    Neste artigo, você vai conhecer 18 espécies de felinos distribuídas pelo mundo, com destaque especial para aquelas que chamam o Brasil de lar — desde os majestosos habitantes do Pantanal até os tímidos moradores da Mata Atlântica.
                  </p>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
                  #1 - Leopardo Nebuloso: O Misterioso Predador das Copas
                </h2>

                <div className="mb-8">
                  <img 
                    src={leopardoNebulosoImage} 
                    alt="Leopardo nebuloso exibindo seus caninos impressionantes" 
                    className="w-full rounded-lg shadow-md"
                  />
                </div>

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
                    O leopardo nebuloso representa uma das espécies de felinos mais enigmáticas e fascinantes do planeta. Habitante das densas florestas tropicais e subtropicais do Sudeste Asiático, este predador médio desenvolveu adaptações extraordinárias que o transformaram em um verdadeiro mestre da vida arbórea. Seu nome deriva das manchas em formato de nuvem que adornam sua pelagem, criando um padrão único e hipnotizante que serve como camuflagem perfeita entre as folhagens e sombras da floresta.
                  </p>

                  <p className="text-lg leading-relaxed">
                    Uma das características mais impressionantes do leopardo nebuloso são seus caninos, que proporcionalmente ao tamanho do corpo são os maiores entre todos os felinos vivos. Esses dentes podem medir até 4 centímetros de comprimento, rivalizando com os extintos tigres-dente-de-sabre em termos proporcionais. Essa dentição especializada permite que o animal capture e abata presas de forma extremamente eficiente, incluindo macacos, aves, esquilos e pequenos cervídeos que compartilham seu habitat nas copas das árvores.
                  </p>

                  <p className="text-lg leading-relaxed">
                    A agilidade do leopardo nebuloso nas árvores é verdadeiramente extraordinária. Suas patas possuem articulações extremamente flexíveis que permitem rotação completa, possibilitando que desça de troncos de cabeça para baixo como um esquilo. A cauda longa e grossa funciona como balancim durante suas acrobacias aéreas, e suas garras afiadas proporcionam aderência excepcional em superfícies verticais. Pesquisadores já documentaram esses felinos pendurados em galhos apenas pelas patas traseiras enquanto manipulavam presas com as dianteiras.
                  </p>

                  <p className="text-lg leading-relaxed">
                    Infelizmente, o leopardo nebuloso enfrenta sérias ameaças à sua sobrevivência. A destruição das florestas para agricultura e urbanização reduziu drasticamente seu habitat natural. Além disso, a caça ilegal para o comércio de peles e partes do corpo para medicina tradicional representa uma pressão constante sobre as populações selvagens. Atualmente, a espécie é classificada como vulnerável pela União Internacional para a Conservação da Natureza, com estimativas sugerindo que menos de dez mil indivíduos adultos sobrevivam na natureza.
                  </p>

                  <p className="text-lg leading-relaxed">
                    Os esforços de conservação para proteger o leopardo nebuloso incluem a criação de áreas protegidas, programas de reprodução em cativeiro e campanhas de conscientização junto às comunidades locais. Algumas instituições zoológicas ao redor do mundo mantêm populações cativas como seguro genético para a espécie, embora a reprodução em cativeiro seja desafiadora devido ao comportamento agressivo dos machos durante o acasalamento. O futuro deste felino misterioso depende diretamente da preservação das florestas asiáticas e do combate efetivo ao tráfico de animais silvestres.
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
