import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Category from "./pages/Category";
import Tag from "./pages/Tag";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Recent from "./pages/Recent";
import Trending from "./pages/Trending";
import Hot from "./pages/Hot";
import Popular from "./pages/Popular";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import XuxaMeneghel from "./pages/celebs/XuxaMeneghel";
import SandyCantora from "./pages/celebs/SandyCantora";
import Ludmilla from "./pages/celebs/Ludmilla";
import LuanaPiovani from "./pages/celebs/LuanaPiovani";
import LeticiaSpiller from "./pages/celebs/LeticiaSpiller";
import GiovannaAntonelli from "./pages/celebs/GiovannaAntonelli";
import ElianeApresentadora from "./pages/celebs/ElianeApresentadora";
import JulianaPaes from "./pages/celebs/JulianaPaes";
import AnaHickmann from "./pages/celebs/AnaHickmann";
import CarolinaFerraz from "./pages/celebs/CarolinaFerraz";
import DuploSentido01 from "./pages/duplo-sentido/DuploSentido01";
import DuploSentido02 from "./pages/duplo-sentido/DuploSentido02";
import DuploSentido03 from "./pages/duplo-sentido/DuploSentido03";
import DuploSentido04 from "./pages/duplo-sentido/DuploSentido04";
import DuploSentido05 from "./pages/duplo-sentido/DuploSentido05";
import DuploSentido06 from "./pages/duplo-sentido/DuploSentido06";
import DuploSentido07 from "./pages/duplo-sentido/DuploSentido07";
import DuploSentido08 from "./pages/duplo-sentido/DuploSentido08";
import DuploSentido09 from "./pages/duplo-sentido/DuploSentido09";
import DuploSentido10 from "./pages/duplo-sentido/DuploSentido10";
import FelinosIndex from "./pages/felinos/FelinosIndex";
import Felinos01LeopardoNebuloso from "./pages/felinos/Felinos01LeopardoNebuloso";
import Felinos02GatoBravoDouradoAsia from "./pages/felinos/Felinos02GatoBravoDouradoAsia";
import Felinos03GatoChileno from "./pages/felinos/Felinos03GatoChileno";
import Felinos04GatoChinêsDeserto from "./pages/felinos/Felinos04GatoChinêsDeserto";
import Felinos05GatoDePallas from "./pages/felinos/Felinos05GatoDePallas";
import Felinos06GatoDoDeserto from "./pages/felinos/Felinos06GatoDoDeserto";
import Felinos07GatoDoMato from "./pages/felinos/Felinos07GatoDoMato";
import Felinos08GatoDosPampas from "./pages/felinos/Felinos08GatoDosPampas";
import Felinos09GatoMaracaja from "./pages/felinos/Felinos09GatoMaracaja";
import Felinos10GatoMarmorado from "./pages/felinos/Felinos10GatoMarmorado";
import Felinos11GatoPescador from "./pages/felinos/Felinos11GatoPescador";
import Felinos12Jaguarundi from "./pages/felinos/Felinos12Jaguarundi";
import Felinos13Jaguatirica from "./pages/felinos/Felinos13Jaguatirica";
import Felinos14LeopardoDasNeves from "./pages/felinos/Felinos14LeopardoDasNeves";
import Felinos15LinceDoCanada from "./pages/felinos/Felinos15LinceDoCanada";
import Felinos16LinceEuroasiatico from "./pages/felinos/Felinos16LinceEuroasiatico";
import Felinos17LinceIberico from "./pages/felinos/Felinos17LinceIberico";
import Felinos18Serval from "./pages/felinos/Felinos18Serval";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/categoria/:slug" element={<Category />} />
          <Route path="/tag/:slug" element={<Tag />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/privacidade" element={<Privacy />} />
          <Route path="/termos" element={<Terms />} />
          <Route path="/recentes" element={<Recent />} />
          <Route path="/tendencias" element={<Trending />} />
          <Route path="/hot" element={<Hot />} />
          <Route path="/populares" element={<Popular />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/xuxa-meneghel-antes-depois-maquiagem" element={<XuxaMeneghel />} />
          <Route path="/sandy-cantora-antes-depois-maquiagem" element={<SandyCantora />} />
          <Route path="/ludmilla-antes-depois-maquiagem" element={<Ludmilla />} />
          <Route path="/luana-piovani-antes-depois-maquiagem" element={<LuanaPiovani />} />
          <Route path="/leticia-spiller-antes-depois-maquiagem" element={<LeticiaSpiller />} />
          <Route path="/giovanna-antonelli-antes-depois-maquiagem" element={<GiovannaAntonelli />} />
          <Route path="/eliane-apresentadora-antes-depois-maquiagem" element={<ElianeApresentadora />} />
          <Route path="/juliana-paes-antes-depois-maquiagem" element={<JulianaPaes />} />
          <Route path="/ana-hickmann-antes-depois-maquiagem" element={<AnaHickmann />} />
          <Route path="/carolina-ferraz-antes-depois-maquiagem" element={<CarolinaFerraz />} />
          <Route path="/foto-duplo-sentido-crianca-praia" element={<DuploSentido01 />} />
          <Route path="/foto-duplo-sentido-casal-barco" element={<DuploSentido02 />} />
          <Route path="/foto-duplo-sentido-nado-sincronizado" element={<DuploSentido03 />} />
          <Route path="/foto-duplo-sentido-jogador-basquete" element={<DuploSentido04 />} />
          <Route path="/foto-duplo-sentido-fonte-parque" element={<DuploSentido05 />} />
          <Route path="/foto-duplo-sentido-casal-sofa" element={<DuploSentido06 />} />
          <Route path="/foto-duplo-sentido-grupo-amigos" element={<DuploSentido07 />} />
          <Route path="/foto-duplo-sentido-telescopio" element={<DuploSentido08 />} />
          <Route path="/foto-duplo-sentido-amigas-festa" element={<DuploSentido09 />} />
          <Route path="/foto-duplo-sentido-selfie-espelho" element={<DuploSentido10 />} />
          <Route path="/felinos" element={<FelinosIndex />} />
          <Route path="/leopardo-nebuloso-felino-florestas-asiaticas" element={<Felinos01LeopardoNebuloso />} />
          <Route path="/gato-bravo-dourado-asia-felino" element={<Felinos02GatoBravoDouradoAsia />} />
          <Route path="/gato-chileno-kodkod-felino" element={<Felinos03GatoChileno />} />
          <Route path="/gato-chines-deserto-felino" element={<Felinos04GatoChinêsDeserto />} />
          <Route path="/gato-de-pallas-manul-felino" element={<Felinos05GatoDePallas />} />
          <Route path="/gato-do-deserto-areia-felino" element={<Felinos06GatoDoDeserto />} />
          <Route path="/gato-do-mato-pequeno-felino-brasil" element={<Felinos07GatoDoMato />} />
          <Route path="/gato-dos-pampas-palheiro-felino" element={<Felinos08GatoDosPampas />} />
          <Route path="/gato-maracaja-felino-acrobata-brasil" element={<Felinos09GatoMaracaja />} />
          <Route path="/gato-marmorado-felino-asia" element={<Felinos10GatoMarmorado />} />
          <Route path="/gato-pescador-felino-asia" element={<Felinos11GatoPescador />} />
          <Route path="/jaguarundi-felino-americas" element={<Felinos12Jaguarundi />} />
          <Route path="/jaguatirica-felino-brasil" element={<Felinos13Jaguatirica />} />
          <Route path="/leopardo-das-neves-felino-montanhas" element={<Felinos14LeopardoDasNeves />} />
          <Route path="/lince-do-canada-felino" element={<Felinos15LinceDoCanada />} />
          <Route path="/lince-euroasiatico-felino" element={<Felinos16LinceEuroasiatico />} />
          <Route path="/lince-iberico-felino-europa" element={<Felinos17LinceIberico />} />
          <Route path="/serval-felino-africa" element={<Felinos18Serval />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
