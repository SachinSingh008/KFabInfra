import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import IndustriesPage from "./pages/IndustriesPage";
import InfrastructurePage from "./pages/InfrastructurePage";
import QualityPage from "./pages/QualityPage";
import ClientsPage from "./pages/ClientsPage";
import ContactPage from "./pages/ContactPage";
import CareersPage from "./pages/CareersPage";
import React, { Suspense, lazy } from "react";
import NotFound from "./pages/NotFound";
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const LocationDetail = lazy(() => import("./pages/LocationDetail"));
const BlogDetail = lazy(() => import("./pages/BlogDetail"));
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import StickyCTA from "./components/StickyCTA";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <FloatingWhatsApp />
          <StickyCTA />
          <Suspense fallback={<div className="flex h-screen items-center justify-center"><div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div></div>}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/industries" element={<IndustriesPage />} />
              <Route path="/infrastructure" element={<InfrastructurePage />} />
              <Route path="/quality" element={<QualityPage />} />
              <Route path="/clients" element={<ClientsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/services/:slug" element={<ServiceDetail />} />
              <Route path="/location/:slug" element={<LocationDetail />} />
              <Route path="/blog/:slug" element={<BlogDetail />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
