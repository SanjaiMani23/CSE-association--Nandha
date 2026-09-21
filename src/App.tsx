import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./pages/Team";
import Grievances from "./pages/Grievances";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import Achievements from "./pages/Achievements";
import Gallery from "./pages/Gallery";
import Verticals from "./pages/Verticals";
import CoordinatorDashboard from "./pages/CoordinatorDashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner position="top-right" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/events" element={<Events />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/verticals" element={<Verticals />} />
          <Route path="/grievances" element={<Grievances />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/coordinator" element={<CoordinatorDashboard />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
