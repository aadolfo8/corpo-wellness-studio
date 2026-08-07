import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { corpo } from "@/lib/corpo";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#metodo", label: "Método" },
  { href: "#contacto", label: "Contacto" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 motion-reduce:transition-none ${
        scrolled ? "bg-background/85 backdrop-blur-md border-b border-border/60" : "bg-transparent"
      }`}
    >
      <nav className="container-editorial flex items-center justify-between py-5">
        <Link to="/#proposal-wellness" className="font-display text-2xl tracking-[0.3em] text-foreground" aria-label="Volver a la propuesta Wellness">
          CORPO
        </Link>
        <ul className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="inline-flex min-h-11 items-center text-sm tracking-wide text-foreground/80 hover:text-primary transition-colors motion-reduce:transition-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={corpo.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden min-h-11 md:inline-flex items-center text-sm tracking-wide border-b border-foreground/40 hover:border-primary hover:text-primary transition-colors motion-reduce:transition-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          Reservar cita
        </a>
        <button
          aria-controls="wellness-mobile-menu"
          aria-expanded={open}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((current) => !current)}
          className="md:hidden flex h-11 w-11 flex-col items-center justify-center gap-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          <span className={`h-px w-6 bg-foreground transition-transform motion-reduce:transition-none ${open ? "translate-y-[6px] rotate-45" : ""}`} />
          <span className={`h-px w-6 bg-foreground transition-opacity motion-reduce:transition-none ${open ? "opacity-0" : ""}`} />
          <span className={`h-px w-6 bg-foreground transition-transform motion-reduce:transition-none ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
        </button>
      </nav>
      {open && (
        <div id="wellness-mobile-menu" className="md:hidden bg-background border-t border-border">
          <ul className="container-editorial flex flex-col gap-5 py-8">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="inline-flex min-h-11 items-center font-display text-2xl text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={corpo.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="inline-flex min-h-11 items-center text-sm tracking-wide text-primary border-b border-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                Reservar cita
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
