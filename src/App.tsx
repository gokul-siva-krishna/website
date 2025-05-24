
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TestJigDevelopment from "./pages/TestJigDevelopment";
import LabVIEWProgramming from "./pages/LabVIEWProgramming";
import DataAcquisition from "./pages/DataAcquisition";
import AutomationSolutions from "./pages/AutomationSolutions";
import TechnicalConsulting from "./pages/TechnicalConsulting";
import ProjectsPage from "./pages/ProjectsPage";
import AboutUs from "./pages/AboutUs";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/test-jig-development" element={<TestJigDevelopment />} />
          <Route path="/labview-programming" element={<LabVIEWProgramming />} />
          <Route path="/data-acquisition" element={<DataAcquisition />} />
          <Route path="/automation-solutions" element={<AutomationSolutions />} />
          <Route path="/technical-consulting" element={<TechnicalConsulting />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutUs />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
