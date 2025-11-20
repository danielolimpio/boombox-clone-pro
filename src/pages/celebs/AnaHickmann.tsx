import { Helmet } from "react-helmet";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import anaImage from "@/assets/celebs/ana-hickmann.jpeg";

const AnaHickmann = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Ana Hickmann Antes e Depois da Maquiagem | eFuxico</title>
        <link rel="canonical" href="https://efuxico.com.br/ana-hickmann-antes-depois-maquiagem" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <article className="bg-card rounded-lg p-6 shadow-lg">
                <h1 className="text-4xl font-bold mb-4">10 Celebridades Antes e Depois da Maquiagem</h1>
                <h2 className="text-3xl font-bold mb-6 text-primary">#9 - Ana Hickmann: Elegância de Modelo</h2>
                <img src={anaImage} alt="Ana Hickmann" className="w-full rounded-lg mb-8" />
                
                <div className="mt-8 flex justify-between">
                  <Link to="/juliana-paes-antes-depois-maquiagem">
                    <Button variant="outline"><ArrowLeft className="mr-2" /> Anterior</Button>
                  </Link>
                  <Link to="/carolina-ferraz-antes-depois-maquiagem">
                    <Button>Próximo <ArrowRight className="ml-2" /></Button>
                  </Link>
                </div>
              </article>
            </div>
            <aside className="lg:col-span-1"><Sidebar /></aside>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default AnaHickmann;
