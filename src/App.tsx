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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
