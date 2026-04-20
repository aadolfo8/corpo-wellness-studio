export const Footer = () => {
  return (
    <footer className="bg-ink text-cream/70 py-16">
      <div className="container-editorial grid md:grid-cols-12 gap-10 items-end">
        <div className="md:col-span-6">
          <p className="font-display text-5xl md:text-6xl tracking-[0.2em] text-cream">CORPO</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed">
            Clínica de fisioterapia y Pilates máquina en Murcia.
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="eyebrow text-cream/50 mb-3">Visítanos</p>
          <p className="text-sm">Calle ejemplo 12, bajo<br />30001 Murcia</p>
        </div>
        <div className="md:col-span-3">
          <p className="eyebrow text-cream/50 mb-3">Síguenos</p>
          <a
            href="https://www.instagram.com/clinicacorpomurcia/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:text-accent transition-colors"
          >
            Instagram →
          </a>
        </div>
      </div>
      <div className="container-editorial mt-16 pt-8 border-t border-cream/10 flex flex-wrap justify-between gap-4 text-xs text-cream/40">
        <p>© {new Date().getFullYear()} CORPO Clínica. Todos los derechos reservados.</p>
        <p>Hecho con cuidado en Murcia.</p>
      </div>
    </footer>
  );
};
