import { lazy, Suspense, useLayoutEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import Duo from "./pages/Duo.tsx";
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

const pageTitle = "Fisioterapia y Pilates en Murcia | Clínica Corpo Ronda Sur";
const notFoundTitle = "Página no encontrada | Clínica Corpo Murcia";

const RouteEffects = () => {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    document.title = pathname === "/" ? pageTitle : notFoundTitle;

    const html = document.documentElement;
    const previousBehavior = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";
    if (!hash) window.scrollTo(0, 0);

    let observer: MutationObserver | undefined;
    const moveFocus = () => {
      const target = hash ? document.getElementById(hash.slice(1)) : document.querySelector<HTMLElement>("h1");
      if (!target) return false;
      if (hash) {
        target.scrollIntoView({ block: target.dataset.scrollAlign === "start" ? "start" : "center" });
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
    <Suspense fallback={<main className="route-loading" aria-live="polite">Cargando…</main>}>
      <Routes>
        <Route path="/" element={<Duo />} />
        <Route path="/duo" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App;
