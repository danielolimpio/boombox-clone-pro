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
import gatoDoDesertoImage from "@/assets/felinos/gato-do-deserto.jpg";

const Felinos06GatoDoDeserto = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Gato do Deserto: O Felino Adaptado às Areias Escaldantes | eFuxico</title>
        <meta name="description" content="Conheça o gato do deserto ou gato-das-areias, o único felino verdadeiramente adaptado à vida nos desertos mais áridos do planeta." />
        <meta name="keywords" content="gato do deserto, gato das areias, felis margarita, felinos deserto, gatos selvagens" />
        <link rel="canonical" href="https://efuxico.com.br/gato-do-deserto-areia-felino" />

        <meta property="og:url" content="https://efuxico.com.br/gato-do-deserto-areia-felino" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Gato do Deserto: O Felino Adaptado às Areias Escaldantes | eFuxico" />
        <meta property="og:description" content="Conheça o gato do deserto ou gato-das-areias, o único felino verdadeiramente adaptado à vida nos desertos mais áridos do planeta." />
        <meta property="og:url" content="https://efuxico.com.br/gato-do-deserto-areia-felino" />
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
                  #6 - Gato do Deserto: O Sobrevivente das Areias
                </h2>

                <div className="mb-8">
                  <img 
                    src={gatoDoDesertoImage} 
                    alt="Gato do deserto com suas orelhas grandes características" 
                    className="w-full rounded-lg shadow-md"
                  />
                </div>

                <div className="bg-muted p-4 rounded-lg mb-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground">Ficha Técnica</h3>
                  <ul className="space-y-2 text-foreground">
                    <li><strong>Nome Científico:</strong> Felis margarita</li>
                    <li><strong>Onde Vive:</strong> Norte da África, Oriente Médio e Ásia Central (Saara, Arábia, Irã)</li>
                    <li><strong>Tamanho:</strong> 39 a 52 cm de comprimento (mais 23-31 cm de cauda)</li>
                    <li><strong>Peso:</strong> 1,5 a 3,4 kg</li>
                    <li><strong>Tipo:</strong> Felino de pequeno porte, terrestre, especialista em desertos</li>
                  </ul>
                </div>

                <div className="prose max-w-none text-foreground space-y-4">
                  <p className="text-lg leading-relaxed">
                    O gato do deserto, também conhecido como gato-das-areias ou gato de areia, representa o único felino verdadeiramente especializado para a vida em desertos arenosos extremos. Esta espécie notável habita algumas das regiões mais inóspitas do planeta, desde o vasto Saara africano até os desertos da Península Arábica e as áridas paisagens do Irã e Paquistão. Seu nome científico homenageia Jean Auguste Margueritte, o general francês que liderou a expedição durante a qual a espécie foi descoberta em 1858.
                  </p>

                  <p className="text-lg leading-relaxed">
                    As adaptações físicas do gato do deserto são verdadeiras maravilhas da evolução. Suas orelhas excepcionalmente grandes não são apenas adoráveis, mas funcionam como radiadores de calor, dissipando o excesso de temperatura corporal. Os canais auditivos são protegidos por pelos densos que impedem a entrada de areia durante tempestades. Talvez a adaptação mais extraordinária sejam as almofadas das patas, cobertas por pelos longos que funcionam como raquetes de neve ao contrário, distribuindo o peso sobre a areia fofa e protegendo contra superfícies escaldantes que podem ultrapassar 80°C durante o dia.
                  </p>

                  <p className="text-lg leading-relaxed">
                    A capacidade do gato-das-areias de sobreviver sem água livre é extraordinária. Esta espécie obtém praticamente toda a umidade necessária através das presas que consome, podendo passar meses sem beber diretamente. Sua dieta inclui roedores gerbils, jerboas e ratos-do-deserto, além de lagartos, serpentes venenosas como víboras, e ocasionalmente insetos e aranhas. A audição excepcional permite detectar presas se movendo sob a areia, e estes felinos são capazes de escavar rapidamente para capturar roedores em suas tocas subterrâneas.
                  </p>

                  <p className="text-lg leading-relaxed">
                    O comportamento do gato do deserto é perfeitamente sincronizado com as condições extremas de seu ambiente. Durante o dia, quando as temperaturas são proibitivas, estes felinos permanecem em tocas profundas escavadas na areia ou utilizam abrigos abandonados por raposas-do-deserto e outros animais. A atividade ocorre principalmente durante a noite, quando as temperaturas caem drasticamente, permitindo caçadas eficientes sem risco de superaquecimento. Mesmo no inverno, quando os desertos podem ficar surpreendentemente frios, sua pelagem densa proporciona isolamento adequado.
                  </p>

                  <p className="text-lg leading-relaxed">
                    A conservação do gato do deserto enfrenta desafios únicos relacionados à dificuldade de estudar uma espécie tão elusiva em habitats tão remotos e inacessíveis. A espécie é classificada como quase ameaçada, com ameaças incluindo degradação de habitat por desenvolvimento humano, caça por populações nômades e captura ilegal para o comércio de animais de estimação exóticos. Sua aparência extremamente adorável, frequentemente descrita como de um gato doméstico perpétuo filhote, infelizmente alimenta demanda no mercado negro de pets.
                  </p>

                  <p className="text-lg leading-relaxed">
                    Esforços de conservação incluem pesquisas utilizando câmeras-armadilha e rastreamento por rádio em países como Israel, Emirados Árabes Unidos e Marrocos. Alguns zoológicos participam de programas de reprodução em cativeiro, embora o gato do deserto seja sensível a condições de umidade e suscetível a doenças respiratórias fora de seu ambiente natural. A proteção efetiva desta espécie requer cooperação internacional entre os numerosos países que abrigam suas populações fragmentadas, além de combate rigoroso ao tráfico ilegal de animais silvestres.
                  </p>
                </div>

                <SocialShare 
                  url="https://efuxico.com.br/gato-do-deserto-areia-felino"
                  title="Gato do Deserto: O Felino Adaptado às Areias Escaldantes"
                />

                <AuthorBio />

                <div className="mt-8 flex justify-between items-center">
                  <Link to="/gato-de-pallas-manul-felino">
                    <Button variant="outline" size="lg" className="text-lg px-6 py-6">
                      <ArrowLeft className="mr-2" /> Anterior
                    </Button>
                  </Link>
                  <Link to="/gato-do-mato-pequeno-felino-brasil">
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

export default Felinos06GatoDoDeserto;
