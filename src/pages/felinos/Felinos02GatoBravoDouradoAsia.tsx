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
import gatoBravoDouradoImage from "@/assets/felinos/gato-bravo-dourado-asia.jpg";

const Felinos02GatoBravoDouradoAsia = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Gato Bravo Dourado da Ásia: O Felino Secreto das Florestas | eFuxico</title>
        <meta name="description" content="Descubra o gato bravo dourado asiático, felino raro e misterioso das florestas do Sudeste Asiático. Conheça seus hábitos e características." />
        <meta name="keywords" content="gato bravo dourado asiático, catopuma temminckii, felinos asiáticos, gatos selvagens raros" />
        <link rel="canonical" href="https://efuxico.com.br/gato-bravo-dourado-asia-felino" />
        <meta property="og:title" content="Gato Bravo Dourado da Ásia: O Felino Secreto das Florestas" />
        <meta property="og:description" content="Descubra o gato bravo dourado asiático, felino raro e misterioso das florestas do Sudeste Asiático." />
        <meta property="og:url" content="https://efuxico.com.br/gato-bravo-dourado-asia-felino" />
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
                  #2 - Gato Bravo Dourado da Ásia: O Guardião Silencioso
                </h2>

                <div className="mb-8">
                  <img 
                    src={gatoBravoDouradoImage} 
                    alt="Gato bravo dourado da Ásia em seu habitat natural" 
                    className="w-full rounded-lg shadow-md"
                  />
                </div>

                <div className="bg-muted p-4 rounded-lg mb-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground">Ficha Técnica</h3>
                  <ul className="space-y-2 text-foreground">
                    <li><strong>Nome Científico:</strong> Catopuma temminckii</li>
                    <li><strong>Onde Vive:</strong> Sudeste Asiático (Himalaia, China, Indonésia, Malásia)</li>
                    <li><strong>Tamanho:</strong> 66 a 105 cm de comprimento (mais 40-57 cm de cauda)</li>
                    <li><strong>Peso:</strong> 9 a 16 kg</li>
                    <li><strong>Tipo:</strong> Felino de médio porte, terrestre e arborícola</li>
                  </ul>
                </div>

                <div className="prose max-w-none text-foreground space-y-4">
                  <p className="text-lg leading-relaxed">
                    O gato bravo dourado da Ásia, também conhecido como gato dourado asiático ou gato de Temminck, permanece como um dos felinos menos estudados e mais misteriosos do continente asiático. Esta espécie recebe seu nome em homenagem ao zoólogo holandês Coenraad Jacob Temminck, que primeiro descreveu cientificamente o animal no século XIX. Sua pelagem característica varia do vermelho-dourado ao marrom-acinzentado, com indivíduos melânicos completamente negros ocorrendo em algumas populações.
                  </p>

                  <p className="text-lg leading-relaxed">
                    Habitando uma ampla variedade de ambientes florestais desde as encostas do Himalaia até as florestas tropicais da Sumatra, o gato bravo dourado demonstra notável adaptabilidade ecológica. Pesquisadores documentaram sua presença em altitudes que variam do nível do mar até impressionantes 3.738 metros nas montanhas do Butão e do Nepal. Esta flexibilidade de habitat reflete sua capacidade de explorar diferentes nichos alimentares e de se proteger de predadores maiores.
                  </p>

                  <p className="text-lg leading-relaxed">
                    A dieta do gato bravo dourado asiático inclui uma variedade impressionante de presas. Estudos baseados em análise de fezes e observações diretas revelam que estes felinos consomem desde pequenos roedores e aves até lebres, muntjacs jovens e até mesmo búfalos recém-nascidos em casos excepcionais. Sua técnica de caça combina emboscadas pacientes com perseguições curtas e explosivas, aproveitando sua musculatura poderosa para dominar presas que podem ser proporcionalmente grandes.
                  </p>

                  <p className="text-lg leading-relaxed">
                    Culturalmente, o gato bravo dourado ocupa um lugar especial nas tradições de diversos povos asiáticos. Em algumas comunidades da Tailândia, acredita-se que carregar um pelo deste animal oferece proteção contra tigres. Tribos do Himalaia consideram a espécie um símbolo de coragem e força, incorporando sua imagem em rituais e adornos cerimoniais. Infelizmente, essas mesmas crenças contribuem para a caça ilegal, já que partes do corpo são comercializadas para fins medicinais tradicionais.
                  </p>

                  <p className="text-lg leading-relaxed">
                    O status de conservação do gato bravo dourado asiático é classificado como quase ameaçado, com tendência populacional decrescente. As principais ameaças incluem a fragmentação de habitat devido ao desmatamento para agricultura e desenvolvimento urbano, além da caça tanto direta quanto acidental em armadilhas destinadas a outras espécies. Programas de monitoramento utilizando câmeras-armadilha têm fornecido dados valiosos sobre a distribuição e comportamento da espécie, auxiliando esforços de conservação em toda sua área de ocorrência.
                  </p>

                  <p className="text-lg leading-relaxed">
                    Apesar dos desafios, algumas populações de gato bravo dourado asiático parecem estáveis em áreas protegidas bem gerenciadas. Parques nacionais na Índia, Tailândia e Malásia mantêm habitats cruciais para a espécie. A cooperação internacional entre países que abrigam estas populações é fundamental para garantir corredores ecológicos que permitam o fluxo genético entre grupos isolados. O futuro deste felino enigmático depende diretamente da preservação das florestas asiáticas e do combate ao comércio ilegal de vida selvagem.
                  </p>
                </div>

                <SocialShare 
                  url="https://efuxico.com.br/gato-bravo-dourado-asia-felino"
                  title="Gato Bravo Dourado da Ásia: O Felino Secreto das Florestas"
                />

                <AuthorBio />

                <div className="mt-8 flex justify-between items-center">
                  <Link to="/leopardo-nebuloso-felino-florestas-asiaticas">
                    <Button variant="outline" size="lg" className="text-lg px-6 py-6">
                      <ArrowLeft className="mr-2" /> Anterior
                    </Button>
                  </Link>
                  <Link to="/gato-chileno-kodkod-felino">
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

export default Felinos02GatoBravoDouradoAsia;
