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
import linceIbericoImage from "@/assets/felinos/lince-iberico.jpg";

const Felinos17LinceIberico = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Lince Ibérico: O Felino Mais Ameaçado do Mundo | eFuxico</title>
        <meta name="description" content="Conheça o lince ibérico, considerado o felino mais ameaçado do mundo. Descubra sua incrível recuperação e esforços de conservação na Espanha e Portugal." />
        <meta name="keywords" content="lince ibérico, lynx pardinus, felinos ameaçados, gatos selvagens espanha portugal" />
        <link rel="canonical" href="https://efuxico.com.br/lince-iberico-felino-ameacado" />
        <meta property="og:title" content="Lince Ibérico: O Felino Mais Ameaçado do Mundo" />
        <meta property="og:description" content="Conheça o lince ibérico, considerado o felino mais ameaçado do mundo." />
        <meta property="og:url" content="https://efuxico.com.br/lince-iberico-felino-ameacado" />
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
                  #17 - Lince Ibérico: Uma História de Esperança
                </h2>

                <div className="mb-8">
                  <img 
                    src={linceIbericoImage} 
                    alt="Lince ibérico com suas costeletas características" 
                    className="w-full rounded-lg shadow-md"
                  />
                </div>

                <div className="bg-muted p-4 rounded-lg mb-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground">Ficha Técnica</h3>
                  <ul className="space-y-2 text-foreground">
                    <li><strong>Nome Científico:</strong> Lynx pardinus</li>
                    <li><strong>Onde Vive:</strong> Península Ibérica (Espanha e Portugal)</li>
                    <li><strong>Tamanho:</strong> 68 a 82 cm de comprimento (mais 12-16 cm de cauda)</li>
                    <li><strong>Peso:</strong> 9 a 13 kg</li>
                    <li><strong>Tipo:</strong> Felino de médio porte, terrestre, endêmico</li>
                  </ul>
                </div>

                <div className="prose max-w-none text-foreground space-y-4">
                  <p className="text-lg leading-relaxed">
                    O lince ibérico carrega o peso de ter sido considerado o felino mais ameaçado de extinção do planeta. No início dos anos 2000, estimativas indicavam que menos de 100 indivíduos sobreviviam na natureza, tornando sua extinção uma possibilidade iminente e real. Esta espécie endêmica da Península Ibérica representa um dos exemplos mais dramáticos de declínio populacional de um grande carnívoro europeu, mas também uma das histórias de conservação mais inspiradoras e bem-sucedidas da atualidade.
                  </p>

                  <p className="text-lg leading-relaxed">
                    Visualmente, o lince ibérico é inconfundível. Suas costeletas faciais extremamente desenvolvidas, formando uma barba pronunciada, são mais dramáticas que as de qualquer outro lince. Os tufos auriculares negros são longos e elegantes, e sua pelagem dourada-manchada com padrões distintos de pintas escuras lhe confere uma aparência régia. Menor que seu primo euroasiático, o lince ibérico possui pernas proporcionalmente mais longas e uma silhueta mais esbelta, adaptações que refletem sua especialização em habitats mediterrâneos.
                  </p>

                  <p className="text-lg leading-relaxed">
                    A dieta do lince ibérico é extraordinariamente especializada, com coelhos europeus constituindo até 90% de sua alimentação. Esta dependência extrema de uma única presa criou uma vulnerabilidade catastrófica quando epidemias de mixomatose e doença hemorrágica viral dizimaram as populações de coelhos na Península Ibérica durante as décadas finais do século XX. Sem coelhos suficientes, os linces não conseguiam se reproduzir adequadamente, e populações entraram em colapso mesmo em áreas com habitat aparentemente adequado.
                  </p>

                  <p className="text-lg leading-relaxed">
                    O habitat tradicional do lince ibérico são os matos mediterrâneos, paisagens dominadas por arbustos como estevas, rosmaninhos e carvalhos anões, intercalados com pastagens e bosques abertos. Estes ambientes, conhecidos como "monte mediterrâneo", proporcionam tanto cobertura para os linces quanto habitat ideal para suas presas. A conversão de terras para agricultura intensiva, reflorestamento com espécies exóticas e urbanização reduziu dramaticamente a extensão destes habitats únicos.
                  </p>

                  <p className="text-lg leading-relaxed">
                    O programa de conservação do lince ibérico representa um dos esforços mais intensivos e bem-financiados para salvar uma espécie da extinção. Iniciativas incluem reprodução em cativeiro com subsequente liberação na natureza, recuperação de populações de coelhos através de vacinação e manejo de habitat, construção de passagens de fauna sob rodovias para reduzir atropelamentos, e compensação para proprietários de terras que mantêm habitat adequado. A cooperação entre Espanha e Portugal tem sido exemplar.
                  </p>

                  <p className="text-lg leading-relaxed">
                    Os resultados deste esforço de conservação são extraordinários. De menos de 100 indivíduos em 2002, a população cresceu para mais de 1.700 linces em 2023, representando uma das recuperações mais rápidas de qualquer grande carnívoro. A espécie foi reclassificada de "criticamente ameaçada" para "em perigo" e posteriormente para "vulnerável", refletindo o sucesso das medidas implementadas. Novas populações foram estabelecidas em áreas históricas de ocorrência tanto na Espanha quanto em Portugal. O lince ibérico tornou-se símbolo de que, com vontade política, recursos adequados e cooperação internacional, é possível reverter trajetórias de extinção.
                  </p>
                </div>

                <SocialShare 
                  url="https://efuxico.com.br/lince-iberico-felino-ameacado"
                  title="Lince Ibérico: O Felino Mais Ameaçado do Mundo"
                />

                <AuthorBio />

                <div className="mt-8 flex justify-between items-center">
                  <Link to="/lince-euroasiatico-felino">
                    <Button variant="outline" size="lg" className="text-lg px-6 py-6">
                      <ArrowLeft className="mr-2" /> Anterior
                    </Button>
                  </Link>
                  <Link to="/serval-felino-africa">
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

export default Felinos17LinceIberico;
