import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useLayoutEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Atelier from "./pages/Atelier.tsx";
import Motion from "./pages/Motion.tsx";
import Pulse from "./pages/Pulse.tsx";
import Terra from "./pages/Terra.tsx";
import Clinical from "./pages/Clinical.tsx";
import Nocturne from "./pages/Nocturne.tsx";
import Restore from "./pages/Restore.tsx";
import NotFound from "./pages/NotFound.tsx";
import StudioIndex from "./pages/StudioIndex.tsx";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    if (hash) return;

    const html = document.documentElement;
    const previousBehavior = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    html.style.scrollBehavior = previousBehavior;
  }, [pathname, hash]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<StudioIndex />} />
          <Route path="/wellness" element={<Index />} />
          <Route path="/motion" element={<Motion />} />
          <Route path="/atelier" element={<Atelier />} />
          <Route path="/pulse" element={<Pulse />} />
          <Route path="/terra" element={<Terra />} />
          <Route path="/clinical" element={<Clinical />} />
          <Route path="/nocturne" element={<Nocturne />} />
          <Route path="/restore" element={<Restore />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
