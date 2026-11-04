import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  // Las rutas inexistentes no deben indexarse.
  useEffect(() => {
    const robots = document.querySelector<HTMLMetaElement>('meta[name="robots"]');
    const previous = robots?.content;
    robots?.setAttribute("content", "noindex, follow");
    return () => {
      if (robots && previous) robots.content = previous;
    };
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Esta página no existe.</p>
        <Link to="/" className="text-primary underline hover:text-primary/90">
          Ir a Clínica Corpo
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
