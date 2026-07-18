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
import linceEuroasiaticoImage from "@/assets/felinos/lince-euroasiatico.jpg";

const Felinos16LinceEuroasiatico = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Lince Euroasiático: O Maior Lince do Mundo | eFuxico</title>
        <meta name="description" content="Conheça o lince euroasiático, o maior de todos os linces. Descubra suas características, habitat nas florestas da Europa e Ásia, e esforços de conservação." />
        <meta name="keywords" content="lince euroasiático, lynx lynx, maior lince, felinos europa, gatos selvagens" />
        <link rel="canonical" href="https://efuxico.com.br/lince-euroasiatico-felino" />

        <meta property="og:url" content="https://efuxico.com.br/lince-euroasiatico-felino" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Lince Euroasiático: O Maior Lince do Mundo | eFuxico" />
        <meta property="og:description" content="Conheça o lince euroasiático, o maior de todos os linces. Descubra suas características, habitat nas florestas da Europa e Ásia, e esforços de conservação." />
        <meta property="og:url" content="https://efuxico.com.br/lince-euroasiatico-felino" />
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
                  #16 - Lince Euroasiático: O Gigante Entre os Linces
                </h2>

                <div className="mb-8">
                  <img 
                    src={linceEuroasiaticoImage} 
                    alt="Filhote de lince euroasiático entre galhos de pinheiro" 
                    className="w-full rounded-lg shadow-md"
                  />
                </div>

                <div className="bg-muted p-4 rounded-lg mb-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground">Ficha Técnica</h3>
                  <ul className="space-y-2 text-foreground">
                    <li><strong>Nome Científico:</strong> Lynx lynx</li>
                    <li><strong>Onde Vive:</strong> Europa e Ásia (da Escandinávia à Sibéria e China)</li>
                    <li><strong>Tamanho:</strong> 80 a 130 cm de comprimento (mais 11-25 cm de cauda)</li>
                    <li><strong>Peso:</strong> 12 a 38 kg</li>
                    <li><strong>Tipo:</strong> Felino de médio a grande porte, terrestre</li>
                  </ul>
                </div>

                <div className="prose max-w-none text-foreground space-y-4">
                  <p className="text-lg leading-relaxed">
                    O lince euroasiático detém o título de maior espécie entre os quatro linces existentes no mundo, com machos adultos podendo atingir impressionantes 38 quilogramas. Este magnífico felino possui a maior distribuição geográfica entre todos os felinos, estendendo-se das montanhas da Escandinávia até as florestas da Sibéria oriental e norte da China. Sua presença histórica abrangia praticamente toda a Europa continental, embora séculos de caça e destruição de habitat tenham restringido drasticamente sua área de ocorrência.
                  </p>

                  <p className="text-lg leading-relaxed">
                    A aparência do lince euroasiático é inconfundível, com seus característicos tufos negros nas orelhas, costeletas faciais proeminentes e cauda curta com ponta preta. A pelagem varia consideravelmente conforme a região e estação, podendo ser cinza-prateada, amarelo-acastanhada ou avermelhada, com padrões de manchas que vão desde quase ausentes até pronunciados. Os olhos amendoados de cor amarela ou âmbar conferem-lhe uma expressão penetrante que captura a essência selvagem das florestas europeias.
                  </p>

                  <p className="text-lg leading-relaxed">
                    Diferentemente do lince do Canadá, que depende quase exclusivamente de lebres, o lince euroasiático é um predador de ungulados. Corças, veados e camurças constituem suas presas principais em grande parte da distribuição, embora lebres, coelhos, raposas e aves terrestres também sejam consumidos. Esta capacidade de abater presas relativamente grandes explica seu tamanho corporal maior comparado aos outros linces. A técnica de caça envolve longas perseguições silenciosas seguidas de ataques precisos ao pescoço das presas.
                  </p>

                  <p className="text-lg leading-relaxed">
                    O habitat preferido do lince euroasiático são florestas boreais e temperadas com densa cobertura vegetal e abundância de presas. Ao contrário de sua reputação de animal de floresta profunda, a espécie demonstra considerável adaptabilidade, sendo encontrada em ambientes que variam de montanhas rochosas a planícies florestadas. Territórios individuais podem ser enormes, com machos patrulhando áreas de até 450 quilômetros quadrados em regiões de baixa densidade de presas.
                  </p>

                  <p className="text-lg leading-relaxed">
                    A história do lince euroasiático na Europa é uma narrativa de quase extinção seguida de notável recuperação. Durante os séculos XIX e XX, a espécie foi exterminada da maior parte da Europa Ocidental devido à caça e destruição de habitat. Programas de reintrodução iniciados nas décadas de 1970 e 1980 restabeleceram populações em países como Suíça, França, Alemanha, Áustria e Eslovênia. Estas populações reintroduzidas enfrentam desafios de isolamento genético e conectividade, mas representam um dos maiores sucessos de conservação de grandes carnívoros na Europa.
                  </p>

                  <p className="text-lg leading-relaxed">
                    Globalmente, o lince euroasiático é classificado como de menor preocupação, com população estimada em mais de 50.000 indivíduos. Entretanto, várias populações regionais permanecem ameaçadas, particularmente na Europa Ocidental e nos Bálcãs. A caça furtiva, atropelamentos rodoviários e fragmentação de habitat continuam representando desafios significativos. Esforços de conservação focam em estabelecer corredores ecológicos entre populações isoladas, reduzir conflitos com caçadores e criadores de ovelhas, e promover coexistência através de educação e compensação por perdas de gado.
                  </p>
                </div>

                <SocialShare 
                  url="https://efuxico.com.br/lince-euroasiatico-felino"
                  title="Lince Euroasiático: O Maior Lince do Mundo"
                />

                <AuthorBio />

                <div className="mt-8 flex justify-between items-center">
                  <Link to="/lince-do-canada-felino">
                    <Button variant="outline" size="lg" className="text-lg px-6 py-6">
                      <ArrowLeft className="mr-2" /> Anterior
                    </Button>
                  </Link>
                  <Link to="/lince-iberico-felino-europa">
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

export default Felinos16LinceEuroasiatico;
