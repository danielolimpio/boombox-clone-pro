import { Helmet } from "react-helmet";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import { Link } from "react-router-dom";

// Import all feline images
import leopardoNebulosoImage from "@/assets/felinos/leopardo-nebuloso.jpg";
import gatoBravoDouradoImage from "@/assets/felinos/gato-bravo-dourado-asia.jpg";
import gatoChilenoImage from "@/assets/felinos/gato-chileno.jpg";
import gatoChinêsDesertoImage from "@/assets/felinos/gato-chines-deserto.jpg";
import gatoPallasImage from "@/assets/felinos/gato-de-pallas.jpg";
import gatoDoDesertoImage from "@/assets/felinos/gato-do-deserto.jpg";
import gatoDoMatoImage from "@/assets/felinos/gato-do-mato.jpg";
import gatoDosPampasImage from "@/assets/felinos/gato-dos-pampas.jpg";
import gatoMaracajaImage from "@/assets/felinos/gato-maracaja.jpg";
import gatoMarmoradoImage from "@/assets/felinos/gato-marmorado.jpg";
import gatoPescadorImage from "@/assets/felinos/gato-pescador.jpg";
import jaguarundiImage from "@/assets/felinos/jaguarundi.jpg";
import jaguatiricaImage from "@/assets/felinos/jaguatirica.jpg";
import leopardoDasNevesImage from "@/assets/felinos/leopardo-das-neves.jpg";
import linceDoCanadaImage from "@/assets/felinos/lince-do-canada.jpg";
import linceEuroasiaticoImage from "@/assets/felinos/lince-euroasiatico.jpg";
import linceIbericoImage from "@/assets/felinos/lince-iberico.jpg";
import servalImage from "@/assets/felinos/serval.jpg";

const felinos = [
  {
    id: 1,
    name: "Leopardo Nebuloso",
    scientificName: "Neofelis nebulosa",
    image: leopardoNebulosoImage,
    slug: "/leopardo-nebuloso-felino-florestas-asiaticas",
    region: "Ásia"
  },
  {
    id: 2,
    name: "Gato Bravo Dourado da Ásia",
    scientificName: "Catopuma temminckii",
    image: gatoBravoDouradoImage,
    slug: "/gato-bravo-dourado-asia-felino",
    region: "Ásia"
  },
  {
    id: 3,
    name: "Gato Chileno (Kodkod)",
    scientificName: "Leopardus guigna",
    image: gatoChilenoImage,
    slug: "/gato-chileno-kodkod-felino",
    region: "América do Sul"
  },
  {
    id: 4,
    name: "Gato Chinês do Deserto",
    scientificName: "Felis bieti",
    image: gatoChinêsDesertoImage,
    slug: "/gato-chines-deserto-felino",
    region: "Ásia"
  },
  {
    id: 5,
    name: "Gato de Pallas (Manul)",
    scientificName: "Otocolobus manul",
    image: gatoPallasImage,
    slug: "/gato-de-pallas-manul-felino",
    region: "Ásia Central"
  },
  {
    id: 6,
    name: "Gato do Deserto",
    scientificName: "Felis margarita",
    image: gatoDoDesertoImage,
    slug: "/gato-do-deserto-areia-felino",
    region: "África e Ásia"
  },
  {
    id: 7,
    name: "Gato do Mato",
    scientificName: "Leopardus tigrinus",
    image: gatoDoMatoImage,
    slug: "/gato-do-mato-pequeno-felino-brasil",
    region: "Brasil"
  },
  {
    id: 8,
    name: "Gato dos Pampas",
    scientificName: "Leopardus colocola",
    image: gatoDosPampasImage,
    slug: "/gato-dos-pampas-palheiro-felino",
    region: "América do Sul"
  },
  {
    id: 9,
    name: "Gato Maracajá",
    scientificName: "Leopardus wiedii",
    image: gatoMaracajaImage,
    slug: "/gato-maracaja-felino-acrobata-brasil",
    region: "Brasil"
  },
  {
    id: 10,
    name: "Gato Marmorado",
    scientificName: "Pardofelis marmorata",
    image: gatoMarmoradoImage,
    slug: "/gato-marmorado-felino-asia",
    region: "Ásia"
  },
  {
    id: 11,
    name: "Gato Pescador",
    scientificName: "Prionailurus viverrinus",
    image: gatoPescadorImage,
    slug: "/gato-pescador-felino-asia",
    region: "Ásia"
  },
  {
    id: 12,
    name: "Jaguarundi",
    scientificName: "Herpailurus yagouaroundi",
    image: jaguarundiImage,
    slug: "/jaguarundi-felino-americas",
    region: "Américas"
  },
  {
    id: 13,
    name: "Jaguatirica",
    scientificName: "Leopardus pardalis",
    image: jaguatiricaImage,
    slug: "/jaguatirica-felino-brasil",
    region: "Brasil"
  },
  {
    id: 14,
    name: "Leopardo das Neves",
    scientificName: "Panthera uncia",
    image: leopardoDasNevesImage,
    slug: "/leopardo-das-neves-felino-montanhas",
    region: "Ásia Central"
  },
  {
    id: 15,
    name: "Lince do Canadá",
    scientificName: "Lynx canadensis",
    image: linceDoCanadaImage,
    slug: "/lince-do-canada-felino",
    region: "América do Norte"
  },
  {
    id: 16,
    name: "Lince Euroasiático",
    scientificName: "Lynx lynx",
    image: linceEuroasiaticoImage,
    slug: "/lince-euroasiatico-felino",
    region: "Europa e Ásia"
  },
  {
    id: 17,
    name: "Lince Ibérico",
    scientificName: "Lynx pardinus",
    image: linceIbericoImage,
    slug: "/lince-iberico-felino-europa",
    region: "Europa"
  },
  {
    id: 18,
    name: "Serval",
    scientificName: "Leptailurus serval",
    image: servalImage,
    slug: "/serval-felino-africa",
    region: "África"
  }
];

const FelinosIndex = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>18 Espécies de Felinos ao Redor do Mundo | eFuxico</title>
        <meta name="description" content="Conheça 18 espécies incríveis de felinos selvagens ao redor do mundo, incluindo as que vivem no Brasil. Fotos, curiosidades e informações." />
        <meta name="keywords" content="felinos selvagens, gatos selvagens, espécies de felinos, felinos do Brasil, felinos do mundo" />
        <link rel="canonical" href="https://efuxico.com.br/felinos" />
        <meta property="og:title" content="18 Espécies de Felinos ao Redor do Mundo" />
        <meta property="og:description" content="Conheça 18 espécies incríveis de felinos selvagens ao redor do mundo." />
        <meta property="og:url" content="https://efuxico.com.br/felinos" />
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
                
                <p className="text-lg text-muted-foreground mb-8">
                  Explore nossa coleção completa de 18 espécies de felinos selvagens de todos os continentes. 
                  Clique em cada um para conhecer sua história, habitat e características únicas.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {felinos.map((felino) => (
                    <Link 
                      key={felino.id} 
                      to={felino.slug}
                      className="group bg-muted rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="aspect-square overflow-hidden">
                        <img 
                          src={felino.image} 
                          alt={felino.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-3">
                        <span className="text-xs font-semibold text-primary">#{felino.id}</span>
                        <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                          {felino.name}
                        </h3>
                        <p className="text-xs text-muted-foreground italic">{felino.scientificName}</p>
                        <span className="inline-block mt-2 text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                          {felino.region}
                        </span>
                      </div>
                    </Link>
                  ))}
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

export default FelinosIndex;
