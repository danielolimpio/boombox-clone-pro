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
import gatoChilenoImage from "@/assets/felinos/gato-chileno.jpg";

const Felinos03GatoChileno = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Gato Chileno (Kodkod): O Menor Felino das Américas | eFuxico</title>
        <meta name="description" content="Conheça o gato chileno ou kodkod, o menor felino selvagem das Américas. Descubra onde vive, características e curiosidades deste raro predador." />
        <meta name="keywords" content="gato chileno, kodkod, leopardus guigna, menor felino américas, felinos chile" />
        <link rel="canonical" href="https://efuxico.com.br/gato-chileno-kodkod-felino" />
        <meta property="og:title" content="Gato Chileno (Kodkod): O Menor Felino das Américas" />
        <meta property="og:description" content="Conheça o gato chileno ou kodkod, o menor felino selvagem das Américas." />
        <meta property="og:url" content="https://efuxico.com.br/gato-chileno-kodkod-felino" />
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
                  #3 - Gato Chileno (Kodkod): O Pequeno Gigante
                </h2>

                <div className="mb-8">
                  <img 
                    src={gatoChilenoImage} 
                    alt="Gato chileno kodkod em seu habitat natural na floresta" 
                    className="w-full rounded-lg shadow-md"
                  />
                </div>

                <div className="bg-muted p-4 rounded-lg mb-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground">Ficha Técnica</h3>
                  <ul className="space-y-2 text-foreground">
                    <li><strong>Nome Científico:</strong> Leopardus guigna</li>
                    <li><strong>Onde Vive:</strong> Chile e Argentina (florestas temperadas)</li>
                    <li><strong>Tamanho:</strong> 37 a 51 cm de comprimento (mais 19-25 cm de cauda)</li>
                    <li><strong>Peso:</strong> 1,5 a 3 kg</li>
                    <li><strong>Tipo:</strong> Felino de pequeno porte, terrestre e arborícola</li>
                  </ul>
                </div>

                <div className="prose max-w-none text-foreground space-y-4">
                  <p className="text-lg leading-relaxed">
                    O gato chileno, conhecido localmente como kodkod ou güiña, ostenta o título de menor felino selvagem de todo o continente americano. Com um peso que raramente ultrapassa três quilogramas, este diminuto predador demonstra que tamanho não é documento quando se trata de sobrevivência e adaptação. Endêmico das florestas temperadas do Chile e de uma pequena porção da Argentina, o kodkod desenvolveu características únicas que o tornaram perfeitamente adaptado ao seu ambiente específico.
                  </p>

                  <p className="text-lg leading-relaxed">
                    A pelagem do gato chileno apresenta um padrão fascinante de manchas negras sobre um fundo que varia do amarelo-acinzentado ao marrom-avermelhado. Indivíduos melânicos, completamente negros, são relativamente comuns em algumas populações, especialmente nas áreas mais densamente florestadas. Suas orelhas arredondadas e cauda relativamente curta e grossa distinguem-no visualmente de outros pequenos felinos sul-americanos, enquanto suas patas proporcionalmente grandes facilitam a escalada e a captura de presas.
                  </p>

                  <p className="text-lg leading-relaxed">
                    Apesar de seu tamanho diminuto, o kodkod é um caçador surpreendentemente versátil. Sua dieta inclui principalmente pequenos roedores como ratos e camundongos silvestres, mas também consome aves, lagartos, insetos e ocasionalmente ovos encontrados em ninhos. Estudos comportamentais revelaram que estes felinos são predominantemente noturnos e crepusculares, embora possam apresentar atividade diurna em áreas com menor perturbação humana. Sua habilidade de escalar árvores com agilidade permite tanto a captura de presas arbóreas quanto a fuga de predadores maiores.
                  </p>

                  <p className="text-lg leading-relaxed">
                    O habitat preferido do gato chileno são as florestas valdívianas e araucárias do sul do Chile, ecossistemas caracterizados por alta pluviosidade e densa vegetação. Entretanto, a espécie demonstra certa plasticidade ambiental, sendo encontrada também em fragmentos florestais menores, matas ciliares e até mesmo em plantações de eucalipto e pinus, embora com densidades populacionais muito menores. Esta capacidade de utilizar habitats alterados oferece alguma esperança para sua sobrevivência em paisagens cada vez mais modificadas pela atividade humana.
                  </p>

                  <p className="text-lg leading-relaxed">
                    A conservação do kodkod enfrenta desafios significativos. A destruição e fragmentação das florestas nativas do Chile para agricultura, silvicultura e urbanização representam as maiores ameaças. Adicionalmente, o conflito com criadores de aves domésticas resulta em perseguição direta, pois os felinos ocasionalmente atacam galinheiros. Atropelamentos em estradas que cortam seu habitat também contribuem para a mortalidade. A espécie é classificada como vulnerável pela IUCN, com estimativas sugerindo que a população total pode não ultrapassar dez mil indivíduos adultos.
                  </p>

                  <p className="text-lg leading-relaxed">
                    Esforços de conservação para o gato chileno incluem pesquisas científicas utilizando câmeras-armadilha e radiotelemetria, programas de educação ambiental junto às comunidades rurais e a proteção de áreas-chave dentro de parques nacionais chilenos. Organizações como a Fundación Fauna Andina trabalham ativamente para reduzir conflitos entre felinos e criadores através de melhorias nas estruturas de proteção de aves domésticas. O futuro deste pequeno e precioso felino depende fundamentalmente da preservação das florestas temperadas sul-americanas e da coexistência harmoniosa com as populações humanas locais.
                  </p>
                </div>

                <SocialShare 
                  url="https://efuxico.com.br/gato-chileno-kodkod-felino"
                  title="Gato Chileno (Kodkod): O Menor Felino das Américas"
                />

                <AuthorBio />

                <div className="mt-8 flex justify-between items-center">
                  <Link to="/gato-bravo-dourado-asia-felino">
                    <Button variant="outline" size="lg" className="text-lg px-6 py-6">
                      <ArrowLeft className="mr-2" /> Anterior
                    </Button>
                  </Link>
                  <Link to="/gato-chines-deserto-felino">
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

export default Felinos03GatoChileno;
