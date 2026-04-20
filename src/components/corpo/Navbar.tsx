import { useEffect, useState } from "react";

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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-md border-b border-border/60" : "bg-transparent"
      }`}
    >
      <nav className="container-editorial flex items-center justify-between py-5">
        <a href="#" className="font-display text-2xl tracking-[0.3em] text-foreground">
          CORPO
        </a>
        <ul className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm tracking-wide text-foreground/80 hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contacto"
          className="hidden md:inline-flex items-center text-sm tracking-wide border-b border-foreground/40 pb-1 hover:border-primary hover:text-primary transition-colors"
        >
          Reservar cita
        </a>
        <button
          aria-label="Menú"
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5"
        >
          <span className={`h-px w-6 bg-foreground transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`} />
          <span className={`h-px w-6 bg-foreground transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-px w-6 bg-foreground transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
        </button>
      </nav>
      {open && (
        <div className="md:hidden bg-background border-t border-border">
          <ul className="container-editorial flex flex-col gap-5 py-8">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-2xl text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contacto"
                onClick={() => setOpen(false)}
                className="inline-block text-sm tracking-wide text-primary border-b border-primary pb-1"
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
