
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Advertising from "./pages/services/Advertising";
import BrandPhotography from "./pages/services/BrandPhotography";
import CorporateFilms from "./pages/services/CorporateFilms";
import CelebrityManagement from "./pages/services/CelebrityManagement";
import BrandConsultancy from "./pages/services/BrandConsultancy";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-luxury-cream">
          <Navigation />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/advertising" element={<Advertising />} />
            <Route path="/services/brand-photography" element={<BrandPhotography />} />
            <Route path="/services/corporate-films" element={<CorporateFilms />} />
            <Route path="/services/celebrity-management" element={<CelebrityManagement />} />
            <Route path="/services/brand-consultancy" element={<BrandConsultancy />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
