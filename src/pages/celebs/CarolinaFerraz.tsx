import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import carolinaImage from "@/assets/celebs/carolina-ferraz.jpeg";

const CarolinaFerraz = () => {
  return (
    <>
      <Helmet>
        <title>Carolina Ferraz Antes e Depois da Maquiagem | eFuxico</title>
        <link rel="canonical" href="https://efuxico.com.br/carolina-ferraz-antes-depois-maquiagem" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <article className="bg-card rounded-lg p-6 shadow-lg">
                <h1 className="text-4xl font-bold mb-4">10 Celebridades Antes e Depois da Maquiagem</h1>
                <h2 className="text-3xl font-bold mb-6 text-primary">#10 - Carolina Ferraz: Beleza Clássica</h2>
                <img src={carolinaImage} alt="Carolina Ferraz" className="w-full rounded-lg mb-8" />
                
                <div className="mt-8">
                  <Link to="/ana-hickmann-antes-depois-maquiagem">
                    <Button variant="outline"><ArrowLeft className="mr-2" /> Anterior: Ana Hickmann</Button>
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

export default CarolinaFerraz;
