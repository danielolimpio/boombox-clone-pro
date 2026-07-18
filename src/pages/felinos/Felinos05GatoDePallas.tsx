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
import gatoDePallasImage from "@/assets/felinos/gato-de-pallas.jpg";

const Felinos05GatoDePallas = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Gato de Pallas (Manul): O Felino Mais Expressivo do Mundo | eFuxico</title>
        <meta name="description" content="Descubra o gato de Pallas ou manul, famoso por suas expressões faciais únicas. Conheça este felino peludo das estepes da Ásia Central." />
        <meta name="keywords" content="gato de pallas, manul, otocolobus manul, felinos ásia central, gatos selvagens expressivos" />
        <link rel="canonical" href="https://efuxico.com.br/gato-de-pallas-manul-felino" />

        <meta property="og:url" content="https://efuxico.com.br/gato-de-pallas-manul-felino" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Gato de Pallas (Manul): O Felino Mais Expressivo do Mundo | eFuxico" />
        <meta property="og:description" content="Descubra o gato de Pallas ou manul, famoso por suas expressões faciais únicas. Conheça este felino peludo das estepes da Ásia Central." />
        <meta property="og:url" content="https://efuxico.com.br/gato-de-pallas-manul-felino" />
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
                  #5 - Gato de Pallas (Manul): A Celebridade das Estepes
                </h2>

                <div className="mb-8">
                  <img 
                    src={gatoDePallasImage} 
                    alt="Gato de Pallas manul com sua pelagem densa característica" 
                    className="w-full rounded-lg shadow-md"
                  />
                </div>

                <div className="bg-muted p-4 rounded-lg mb-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground">Ficha Técnica</h3>
                  <ul className="space-y-2 text-foreground">
                    <li><strong>Nome Científico:</strong> Otocolobus manul</li>
                    <li><strong>Onde Vive:</strong> Ásia Central (Mongólia, China, Rússia, Irã, Afeganistão)</li>
                    <li><strong>Tamanho:</strong> 46 a 65 cm de comprimento (mais 21-31 cm de cauda)</li>
                    <li><strong>Peso:</strong> 2,5 a 4,5 kg</li>
                    <li><strong>Tipo:</strong> Felino de pequeno porte, terrestre</li>
                  </ul>
                </div>

                <div className="prose max-w-none text-foreground space-y-4">
                  <p className="text-lg leading-relaxed">
                    O gato de Pallas, também conhecido pelo nome mongol "manul", conquistou uma legião de admiradores na internet graças às suas expressões faciais extraordinariamente comunicativas. Este pequeno felino das estepes asiáticas possui características físicas únicas que o distinguem imediatamente de qualquer outro gato selvagem: olhos posicionados frontalmente como uma coruja, pupilas que contraem em círculos perfeitos em vez de fendas, e uma pelagem tão densa que o faz parecer muito maior do que realmente é.
                  </p>

                  <p className="text-lg leading-relaxed">
                    Nomeado em homenagem ao naturalista alemão Peter Simon Pallas, que primeiro descreveu a espécie em 1776, o manul desenvolveu adaptações notáveis para sobreviver em alguns dos ambientes mais hostis da Terra. Sua pelagem é a mais densa entre todos os felinos, com cerca de 9.000 pelos por centímetro quadrado, fornecendo isolamento excepcional contra temperaturas que podem cair a -50°C nas estepes mongóis. A coloração acinzentada com tons de areia e as marcas faciais discretas proporcionam camuflagem perfeita entre rochas e vegetação baixa.
                  </p>

                  <p className="text-lg leading-relaxed">
                    O habitat natural do gato de Pallas inclui estepes rochosas, desertos frios, pastagens alpinas e encostas montanhosas em altitudes que variam de 1.000 a 5.000 metros. Estas paisagens abertas e desprovidas de árvores exigem estratégias comportamentais específicas para evitar predadores maiores. O manul utiliza fendas entre rochas, tocas de marmotas abandonadas e depressões no terreno como abrigos e locais de emboscada. Seus movimentos são calculados e lentos, minimizando a detecção visual por águias e outros predadores aéreos.
                  </p>

                  <p className="text-lg leading-relaxed">
                    A dieta do gato de Pallas é altamente especializada em pequenos mamíferos, particularmente pikas, que constituem a grande maioria de sua alimentação. Estes roedores coloniais das estepes são caçados através de emboscadas pacientes nas proximidades de suas tocas. Quando pikas são escassas, o manul suplementa sua dieta com pequenos roedores, aves terrestres e insetos. Sua técnica de caça é distintivamente lenta e metódica, contrastando com a agilidade explosiva de outros pequenos felinos.
                  </p>

                  <p className="text-lg leading-relaxed">
                    Apesar de sua popularidade nas redes sociais, o gato de Pallas enfrenta ameaças reais em seu habitat natural. A espécie é classificada como quase ameaçada, com populações em declínio em diversas partes de sua distribuição. As principais ameaças incluem a diminuição de suas presas devido a programas de controle de roedores, degradação de habitat por pastoreio excessivo, caça ilegal para o comércio de peles e mortalidade acidental em armadilhas destinadas a outras espécies.
                  </p>

                  <p className="text-lg leading-relaxed">
                    Programas de conservação para o manul incluem pesquisas de longo prazo na Mongólia e Rússia utilizando colares de rastreamento e câmeras-armadilha. Zoológicos ao redor do mundo participam de programas coordenados de reprodução em cativeiro, embora o manul seja notoriamente difícil de manter devido à sua suscetibilidade a doenças comuns em gatos domésticos. A conscientização crescente sobre esta espécie carismática, impulsionada por sua popularidade online, representa uma oportunidade única para canalizar interesse público em apoio concreto à conservação das estepes asiáticas.
                  </p>
                </div>

                <SocialShare 
                  url="https://efuxico.com.br/gato-de-pallas-manul-felino"
                  title="Gato de Pallas (Manul): O Felino Mais Expressivo do Mundo"
                />

                <AuthorBio />

                <div className="mt-8 flex justify-between items-center">
                  <Link to="/gato-chines-deserto-felino">
                    <Button variant="outline" size="lg" className="text-lg px-6 py-6">
                      <ArrowLeft className="mr-2" /> Anterior
                    </Button>
                  </Link>
                  <Link to="/gato-do-deserto-areia-felino">
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

export default Felinos05GatoDePallas;
