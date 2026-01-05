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
import jaguarundiImage from "@/assets/felinos/jaguarundi.jpg";

const Felinos12Jaguarundi = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Jaguarundi (Gato-Mourisco): O Felino Brasileiro Mais Incomum | eFuxico</title>
        <meta name="description" content="Conheça o jaguarundi ou gato-mourisco, felino brasileiro de aparência única. Descubra por que é chamado de gato-lontra e suas características." />
        <meta name="keywords" content="jaguarundi, gato mourisco, herpailurus yagouaroundi, felinos brasileiros, gato lontra" />
        <link rel="canonical" href="https://efuxico.com.br/jaguarundi-gato-mourisco-brasil" />
        <meta property="og:title" content="Jaguarundi (Gato-Mourisco): O Felino Brasileiro Mais Incomum" />
        <meta property="og:description" content="Conheça o jaguarundi ou gato-mourisco, felino brasileiro de aparência única." />
        <meta property="og:url" content="https://efuxico.com.br/jaguarundi-gato-mourisco-brasil" />
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
                  #12 - Jaguarundi: O Felino de Aparência Única
                </h2>

                <div className="mb-8">
                  <img 
                    src={jaguarundiImage} 
                    alt="Jaguarundi ou gato-mourisco em tronco de árvore" 
                    className="w-full rounded-lg shadow-md"
                  />
                </div>

                <div className="bg-muted p-4 rounded-lg mb-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground">Ficha Técnica</h3>
                  <ul className="space-y-2 text-foreground">
                    <li><strong>Nome Científico:</strong> Herpailurus yagouaroundi</li>
                    <li><strong>Onde Vive:</strong> América Central e do Sul (do México à Argentina)</li>
                    <li><strong>Tamanho:</strong> 53 a 77 cm de comprimento (mais 31-60 cm de cauda)</li>
                    <li><strong>Peso:</strong> 3,5 a 9 kg</li>
                    <li><strong>Tipo:</strong> Felino de pequeno a médio porte, terrestre</li>
                  </ul>
                </div>

                <div className="prose max-w-none text-foreground space-y-4">
                  <p className="text-lg leading-relaxed">
                    O jaguarundi, conhecido no Brasil como gato-mourisco, é provavelmente o felino mais incomum das Américas em termos de aparência. Com seu corpo alongado, pernas curtas, cabeça pequena e achatada, e cauda extraordinariamente longa, este animal parece mais uma fusão entre um gato e uma doninha ou lontra do que um felino tradicional. Esta morfologia única levou a diversos nomes populares como "gato-lontra" e "gato-cobra", refletindo a confusão que sua aparência pode causar.
                  </p>

                  <p className="text-lg leading-relaxed">
                    A coloração do jaguarundi apresenta uma característica fascinante: a espécie exibe duas fases de cor completamente distintas que antes eram erroneamente consideradas espécies separadas. A fase cinza-escura ou preta era chamada de "jaguarundi", enquanto a fase vermelho-amarronzada era denominada "eyra". Hoje sabemos que ambas as colorações podem ocorrer na mesma ninhada, representando simplesmente variação natural dentro da espécie. Diferentemente de outros pequenos felinos, sua pelagem é uniformemente colorida, sem manchas ou listras.
                  </p>

                  <p className="text-lg leading-relaxed">
                    O comportamento do jaguarundi difere significativamente de outros pequenos felinos sul-americanos. Esta espécie é predominantemente diurna, sendo mais ativa durante as horas de luz, ao contrário da maioria dos felinos que preferem a noite. Esta adaptação pode ter evoluído para evitar competição com a jaguatirica e outros predadores noturnos que compartilham seu habitat. Observações de campo documentaram grupos familiares viajando juntos, comportamento social incomum entre felinos que tipicamente são solitários.
                  </p>

                  <p className="text-lg leading-relaxed">
                    A dieta do gato-mourisco é variada e oportunista, refletindo sua adaptabilidade ecológica. Pequenos mamíferos como roedores e coelhos constituem a base alimentar, complementada por aves, répteis, anfíbios e até frutas em algumas ocasiões. Pesquisadores na América Central documentaram jaguarundis consumindo quantidades significativas de figos e bananas, comportamento incomum para um carnívoro. Sua técnica de caça combina perseguições curtas em terreno aberto com emboscadas em vegetação densa.
                  </p>

                  <p className="text-lg leading-relaxed">
                    O jaguarundi ocupa uma das maiores distribuições geográficas entre os felinos americanos, estendendo-se do sul do Texas até o norte da Argentina. Esta ampla distribuição reflete sua notável adaptabilidade a diferentes habitats, desde florestas tropicais úmidas até cerrados, campos abertos e até bordas de áreas agrícolas. No Brasil, a espécie ocorre em praticamente todos os biomas, incluindo Amazônia, Mata Atlântica, Cerrado, Caatinga e Pantanal.
                  </p>

                  <p className="text-lg leading-relaxed">
                    Apesar de sua ampla distribuição, o jaguarundi é classificado como de menor preocupação globalmente, embora algumas populações regionais enfrentem ameaças significativas. No Texas, onde representa o único felino selvagem além do puma, a espécie é considerada ameaçada devido à perda de habitat. No Brasil, a destruição de habitats e atropelamentos representam as principais ameaças. A capacidade do jaguarundi de utilizar habitats alterados como plantações e bordas de florestas oferece alguma resiliência, mas a conservação de corredores ecológicos permanece importante para manter conectividade entre populações.
                  </p>
                </div>

                <SocialShare 
                  url="https://efuxico.com.br/jaguarundi-gato-mourisco-brasil"
                  title="Jaguarundi (Gato-Mourisco): O Felino Brasileiro Mais Incomum"
                />

                <AuthorBio />

                <div className="mt-8 flex justify-between items-center">
                  <Link to="/gato-pescador-felino-asia">
                    <Button variant="outline" size="lg" className="text-lg px-6 py-6">
                      <ArrowLeft className="mr-2" /> Anterior
                    </Button>
                  </Link>
                  <Link to="/jaguatirica-felino-brasil">
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

export default Felinos12Jaguarundi;
