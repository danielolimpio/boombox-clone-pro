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
import gatoMarmoradoImage from "@/assets/felinos/gato-marmorado.jpg";

const Felinos10GatoMarmorado = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Gato Marmorado: O Felino Fantasma das Florestas Asiáticas | eFuxico</title>
        <meta name="description" content="Descubra o gato marmorado, um dos felinos mais raros e elusivos da Ásia. Conheça suas características únicas e estilo de vida noturno." />
        <meta name="keywords" content="gato marmorado, pardofelis marmorata, felinos asiáticos, gatos selvagens raros, felinos noturnos" />
        <link rel="canonical" href="https://efuxico.com.br/gato-marmorado-felino-asia" />
        <meta property="og:title" content="Gato Marmorado: O Felino Fantasma das Florestas Asiáticas" />
        <meta property="og:description" content="Descubra o gato marmorado, um dos felinos mais raros e elusivos da Ásia." />
        <meta property="og:url" content="https://efuxico.com.br/gato-marmorado-felino-asia" />
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
                  #10 - Gato Marmorado: O Fantasma Noturno
                </h2>

                <div className="mb-8">
                  <img 
                    src={gatoMarmoradoImage} 
                    alt="Gato marmorado em atividade noturna na floresta" 
                    className="w-full rounded-lg shadow-md"
                  />
                </div>

                <div className="bg-muted p-4 rounded-lg mb-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground">Ficha Técnica</h3>
                  <ul className="space-y-2 text-foreground">
                    <li><strong>Nome Científico:</strong> Pardofelis marmorata</li>
                    <li><strong>Onde Vive:</strong> Sudeste Asiático (Nepal até Indonésia)</li>
                    <li><strong>Tamanho:</strong> 45 a 62 cm de comprimento (mais 35-55 cm de cauda)</li>
                    <li><strong>Peso:</strong> 2 a 5 kg</li>
                    <li><strong>Tipo:</strong> Felino de pequeno porte, altamente arborícola</li>
                  </ul>
                </div>

                <div className="prose max-w-none text-foreground space-y-4">
                  <p className="text-lg leading-relaxed">
                    O gato marmorado é um dos felinos mais enigmáticos e menos estudados do Sudeste Asiático, vivendo nas sombras das densas florestas tropicais como um verdadeiro fantasma. Seu nome deriva do padrão distintivo de sua pelagem, que lembra mármore polido com manchas irregulares e alongadas sobre um fundo amarelado a acinzentado. Esta espécie permanece envolta em mistério científico, com grande parte de sua biologia e comportamento ainda desconhecidos devido à extrema dificuldade de observação na natureza.
                  </p>

                  <p className="text-lg leading-relaxed">
                    A aparência do gato marmorado revela sua natureza profundamente arborícola. Sua cauda extraordinariamente longa e espessa, que pode ser tão comprida quanto o próprio corpo, funciona como balancim durante manobras nas copas das árvores. As patas possuem almofadas largas e garras curvadas que proporcionam aderência excepcional em galhos e troncos. Seus olhos grandes e proeminentes, adaptados para visão noturna, e suas orelhas arredondadas conferem-lhe uma expressão distintamente diferente de outros felinos asiáticos.
                  </p>

                  <p className="text-lg leading-relaxed">
                    O habitat preferido do gato marmorado são florestas tropicais e subtropicais úmidas, desde as encostas do Himalaia no Nepal até as ilhas de Sumatra e Bornéu na Indonésia. A espécie parece demonstrar forte preferência por florestas primárias intactas, embora ocasionalmente seja registrada em florestas secundárias e plantações florestais adjacentes a áreas naturais. Esta dependência de habitats florestais contínuos torna o gato marmorado particularmente vulnerável ao desmatamento que assola o Sudeste Asiático.
                  </p>

                  <p className="text-lg leading-relaxed">
                    As informações sobre a dieta do gato marmorado são fragmentárias, baseadas principalmente em observações ocasionais e análise de conteúdo estomacal de poucos espécimes. Pequenos mamíferos arborícolas como esquilos e ratos-de-árvore parecem constituir a base alimentar, complementados por aves, répteis e possivelmente morcegos. Sua natureza estritamente noturna e comportamento extremamente cauteloso dificultam estudos comportamentais diretos, deixando lacunas significativas no conhecimento sobre suas estratégias de caça e organização social.
                  </p>

                  <p className="text-lg leading-relaxed">
                    O status de conservação do gato marmorado é classificado como quase ameaçado, embora a falta de dados populacionais confiáveis torne esta avaliação incerta. O desmatamento acelerado das florestas do Sudeste Asiático para plantações de óleo de palma, agricultura e desenvolvimento urbano representa a ameaça mais significativa. A caça para o comércio ilegal de peles e o tráfico de animais vivos também contribuem para a pressão sobre as populações selvagens, particularmente em países com fiscalização ambiental deficiente.
                  </p>

                  <p className="text-lg leading-relaxed">
                    Esforços de conservação para o gato marmorado são dificultados pela escassez de informações básicas sobre a espécie. Pesquisas utilizando câmeras-armadilha têm fornecido dados valiosos sobre distribuição e atividade, revelando a presença da espécie em áreas onde era considerada ausente. A proteção de grandes blocos de floresta primária é considerada essencial, com parques nacionais na Tailândia, Malásia e Indonésia abrigando populações potencialmente significativas. A cooperação internacional entre países do Sudeste Asiático é fundamental para garantir a sobrevivência a longo prazo deste misterioso felino das florestas tropicais.
                  </p>
                </div>

                <SocialShare 
                  url="https://efuxico.com.br/gato-marmorado-felino-asia"
                  title="Gato Marmorado: O Felino Fantasma das Florestas Asiáticas"
                />

                <AuthorBio />

                <div className="mt-8 flex justify-between items-center">
                  <Link to="/gato-maracaja-felino-acrobata-brasil">
                    <Button variant="outline" size="lg" className="text-lg px-6 py-6">
                      <ArrowLeft className="mr-2" /> Anterior
                    </Button>
                  </Link>
                  <Link to="/">
                    <Button size="lg" className="text-lg px-8 py-6">
                      Ver Mais Artigos <ArrowRight className="ml-2" />
                    </Button>
                  </Link>
                </div>

                <div className="mt-6 p-4 bg-primary/10 rounded-lg text-center">
                  <p className="text-foreground font-medium">
                    Continue acompanhando! Em breve mais 8 espécies de felinos serão adicionadas a esta série.
                  </p>
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

export default Felinos10GatoMarmorado;
