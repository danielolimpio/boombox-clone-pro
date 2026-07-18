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
import leopardoDasNevesImage from "@/assets/felinos/leopardo-das-neves.jpg";

const Felinos14LeopardoDasNeves = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Leopardo das Neves: O Fantasma das Montanhas | eFuxico</title>
        <meta name="description" content="Conheça o leopardo das neves, o misterioso felino do Himalaia. Descubra suas adaptações incríveis para sobreviver nas montanhas mais altas do mundo." />
        <meta name="keywords" content="leopardo das neves, panthera uncia, felinos himalaia, snow leopard, gatos selvagens" />
        <link rel="canonical" href="https://efuxico.com.br/leopardo-das-neves-felino-himalaia" />

        <meta property="og:url" content="https://efuxico.com.br/leopardo-das-neves-felino-himalaia" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Leopardo das Neves: O Fantasma das Montanhas | eFuxico" />
        <meta property="og:description" content="Conheça o leopardo das neves, o misterioso felino do Himalaia. Descubra suas adaptações incríveis para sobreviver nas montanhas mais altas do mundo." />
        <meta property="og:url" content="https://efuxico.com.br/leopardo-das-neves-felino-himalaia" />
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
                  #14 - Leopardo das Neves: O Fantasma do Himalaia
                </h2>

                <div className="mb-8">
                  <img 
                    src={leopardoDasNevesImage} 
                    alt="Leopardo das neves caminhando na neve com sua cauda longa" 
                    className="w-full rounded-lg shadow-md"
                  />
                </div>

                <div className="bg-muted p-4 rounded-lg mb-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground">Ficha Técnica</h3>
                  <ul className="space-y-2 text-foreground">
                    <li><strong>Nome Científico:</strong> Panthera uncia</li>
                    <li><strong>Onde Vive:</strong> Ásia Central (Himalaia, Altai, Karakorum, Hindu Kush)</li>
                    <li><strong>Tamanho:</strong> 75 a 130 cm de comprimento (mais 80-105 cm de cauda)</li>
                    <li><strong>Peso:</strong> 22 a 55 kg</li>
                    <li><strong>Tipo:</strong> Felino de grande porte, habitante de alta montanha</li>
                  </ul>
                </div>

                <div className="prose max-w-none text-foreground space-y-4">
                  <p className="text-lg leading-relaxed">
                    O leopardo das neves, conhecido como o "fantasma das montanhas", é um dos felinos mais misteriosos e elusivos do planeta. Habitando as montanhas mais altas e remotas da Ásia Central, este magnífico predador permaneceu praticamente desconhecido para a ciência ocidental até o século XIX. Sua pelagem cinza-esbranquiçada salpicada de rosetas escuras proporciona camuflagem perfeita entre as rochas e neve de seu habitat alpino, tornando avistamentos na natureza eventos extraordinariamente raros.
                  </p>

                  <p className="text-lg leading-relaxed">
                    As adaptações do leopardo das neves para a vida em altitudes extremas são verdadeiras maravilhas da evolução. Sua cauda extraordinariamente longa e peluda, que pode medir até um metro de comprimento, serve múltiplas funções: auxilia no equilíbrio durante saltos entre rochas íngremes, e é frequentemente enrolada ao redor do corpo ou face durante o descanso para proteção contra o frio intenso. Suas narinas alargadas permitem respiração eficiente em ambientes com baixa concentração de oxigênio, e suas patas largas funcionam como raquetes de neve naturais.
                  </p>

                  <p className="text-lg leading-relaxed">
                    O habitat do leopardo das neves compreende algumas das paisagens mais dramáticas e inacessíveis da Terra. Estes felinos são encontrados em altitudes que variam de 3.000 a 5.500 metros, embora ocasionalmente desçam a vales mais baixos durante o inverno seguindo suas presas. Sua distribuição abrange 12 países asiáticos, do Afeganistão à Mongólia, passando por toda a cordilheira do Himalaia. Estima-se que existam entre 4.000 e 6.500 indivíduos na natureza, tornando-o um dos grandes felinos mais raros.
                  </p>

                  <p className="text-lg leading-relaxed">
                    A dieta do leopardo das neves reflete a fauna disponível em seu habitat montanhoso. Bharals (carneiros azuis), íbex asiáticos e tahrs himalaianos constituem as presas principais, complementadas por marmotas, pikas, lebres e ocasionalmente aves terrestres. Estes felinos são capazes de abater presas três vezes seu próprio peso, demonstrando força e habilidade de caça impressionantes. Uma única presa grande pode alimentar um leopardo das neves por até duas semanas, adaptação importante em um ambiente onde encontros com presas podem ser esporádicos.
                  </p>

                  <p className="text-lg leading-relaxed">
                    O leopardo das neves é classificado como vulnerável, enfrentando múltiplas ameaças à sua sobrevivência. A caça furtiva para o comércio de peles e partes do corpo para medicina tradicional representa uma pressão constante. Conflitos com pastores locais, cujo gado ocasionalmente é predado, resultam em retaliações fatais. A redução de populações de presas selvagens devido à competição com gado doméstico e caça também afeta a espécie. Mudanças climáticas ameaçam alterar os ecossistemas de alta montanha que constituem seu habitat.
                  </p>

                  <p className="text-lg leading-relaxed">
                    Esforços de conservação para o leopardo das neves envolvem cooperação internacional entre os 12 países de sua distribuição. Programas de monitoramento utilizando câmeras-armadilha e rastreamento por GPS fornecem dados cruciais sobre populações e comportamento. Iniciativas comunitárias buscam reduzir conflitos com pastores através de seguros para perdas de gado e melhorias em cercados. O ecoturismo baseado na observação de leopardos das neves está emergindo como alternativa econômica sustentável em algumas regiões. A conservação deste felino icônico representa um desafio que transcende fronteiras nacionais, exigindo cooperação internacional para garantir sua sobrevivência.
                  </p>
                </div>

                <SocialShare 
                  url="https://efuxico.com.br/leopardo-das-neves-felino-himalaia"
                  title="Leopardo das Neves: O Fantasma das Montanhas"
                />

                <AuthorBio />

                <div className="mt-8 flex justify-between items-center">
                  <Link to="/jaguatirica-felino-brasil">
                    <Button variant="outline" size="lg" className="text-lg px-6 py-6">
                      <ArrowLeft className="mr-2" /> Anterior
                    </Button>
                  </Link>
                  <Link to="/lince-do-canada-felino">
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

export default Felinos14LeopardoDasNeves;
