import { lazy, Suspense, useLayoutEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
const StudioIndex = lazy(() => import("./pages/StudioIndex.tsx"));
const Index = lazy(() => import("./pages/Index.tsx"));
const Atelier = lazy(() => import("./pages/Atelier.tsx"));
const Motion = lazy(() => import("./pages/Motion.tsx"));
const Pulse = lazy(() => import("./pages/Pulse.tsx"));
const Terra = lazy(() => import("./pages/Terra.tsx"));
const Clinical = lazy(() => import("./pages/Clinical.tsx"));
const Nocturne = lazy(() => import("./pages/Nocturne.tsx"));
const Restore = lazy(() => import("./pages/Restore.tsx"));
const Reformer = lazy(() => import("./pages/Reformer.tsx"));
const Trama = lazy(() => import("./pages/Trama.tsx"));
const Linea = lazy(() => import("./pages/Linea.tsx"));
const Eje = lazy(() => import("./pages/Eje.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

const routeMeta: Record<string, [string, string]> = {
  "/": ["Corpo | Propuestas de diseño", "Nueve direcciones creativas para la web de Corpo."],
  "/wellness": ["Corpo Wellness | Fisioterapia y Pilates Máquina", "Una propuesta editorial y cercana para descubrir Corpo en Ronda Sur, Murcia."],
  "/motion": ["Corpo Motion | Movimiento y recuperación", "Una propuesta dinámica para conocer la fisioterapia, el Pilates Máquina y la recuperación en Corpo."],
  "/atelier": ["Corpo Atelier | Galería de movimiento", "Una propuesta de Corpo concebida como una galería de movimiento, servicios y espacio."],
  "/pulse": ["Corpo Pulse | Encuentra tu punto de partida", "Una propuesta interactiva para orientarte entre los servicios confirmados de Corpo."],
  "/terra": ["Corpo Terra | Una clínica en Ronda Sur", "Una propuesta mediterránea con los servicios, el contacto y la ubicación exacta de Corpo."],
  "/clinical": ["Corpo Clinical | Servicios y contacto", "Una propuesta precisa para consultar los servicios y canales de contacto de Corpo."],
  "/nocturne": ["Corpo Nocturne | Fisioterapia y Pilates Máquina", "Una propuesta nocturna para recorrer la fisioterapia y el Pilates Máquina de Corpo."],
  "/restore": ["Corpo Restore | Mapa de recuperación", "Una propuesta centrada en movilidad, fuerza, control y atención personalizada."],
  "/reformer": ["Corpo Reformer | Pilates Máquina", "Una guía visual para descubrir el aparato Reformer y reservar Pilates Máquina en Corpo."],
  "/trama": ["Corpo Trama | Volver al movimiento", "Una propuesta guiada para descubrir cómo puede acompañarte Corpo en Ronda Sur, Murcia."],
  "/linea": ["Corpo Línea | Cuidar el cuerpo", "Una propuesta minimalista para descubrir la fisioterapia y Pilates Máquina de Corpo."],
  "/eje": ["Corpo Eje | Movimiento con precisión", "Una propuesta de señalización industrial para conocer los servicios de Corpo."],
};

const RouteEffects = () => {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    const [title, description] = routeMeta[pathname] ?? ["Corpo", "Fisioterapia y Pilates Máquina en Ronda Sur, Murcia."];
    document.title = title;
    document.querySelector<HTMLMetaElement>('meta[name="description"]')?.setAttribute("content", description);

    const html = document.documentElement;
    const previousBehavior = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";
    if (!hash) window.scrollTo(0, 0);

    let observer: MutationObserver | undefined;
    const moveFocus = () => {
      const target = hash ? document.getElementById(hash.slice(1)) : document.querySelector<HTMLElement>("h1");
      if (!target) return false;
      if (hash) {
        target.scrollIntoView({ block: "center" });
        if (target.matches("a, button, [tabindex]")) target.focus({ preventScroll: true });
      }
      else {
        target.setAttribute("tabindex", "-1");
        target.focus({ preventScroll: true });
      }
      html.style.scrollBehavior = previousBehavior;
      return true;
    };

    const frame = requestAnimationFrame(() => {
      if (moveFocus()) return;
      observer = new MutationObserver(() => {
        if (!moveFocus()) return;
        observer?.disconnect();
      });
      observer.observe(document.getElementById("root")!, { childList: true, subtree: true });
    });

    return () => {
      cancelAnimationFrame(frame);
      observer?.disconnect();
      html.style.scrollBehavior = previousBehavior;
    };
  }, [pathname, hash]);

  return null;
};

const App = () => (
  <BrowserRouter>
    <RouteEffects />
    <Suspense fallback={<main className="route-loading" aria-live="polite">Abriendo propuesta...</main>}>
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
        <Route path="/reformer" element={<Reformer />} />
        <Route path="/trama" element={<Trama />} />
        <Route path="/linea" element={<Linea />} />
        <Route path="/eje" element={<Eje />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App;
