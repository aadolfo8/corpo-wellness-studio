const benefits = [
  {
    t: "Fisioterapia avanzada",
    d: "Fisioterapia y terapia manual dentro de una atención personalizada.",
  },
  {
    t: "Pilates Máquina",
    d: "Movimiento guiado con una progresión adaptada a cada persona.",
  },
  {
    t: "Recuperación",
    d: "Un acompañamiento cercano para cuidar el cuerpo con o sin una lesión concreta.",
  },
  {
    t: "Servicios disponibles",
    d: "Ondas de choque, diatermia y presoterapia forman parte de la atención de Corpo.",
  },
];

export const Method = () => {
  return (
    <section id="metodo" className="relative bg-ink text-cream py-28 md:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-clay opacity-40" />
      <div className="relative container-editorial">
        <div className="grid md:grid-cols-12 gap-10 mb-20">
          <p className="eyebrow md:col-span-3 text-cream/60">— Forma de cuidar</p>
          <h2 className="md:col-span-9 font-display text-4xl md:text-6xl leading-[1.05] text-balance text-cream">
            Una atención cercana.
            <span className="font-display-italic text-accent"> Una progresión personal.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-cream/10">
          {benefits.map((b, i) => (
            <div
              key={b.t}
              className="bg-ink p-8 md:p-10 transition-colors duration-500 hover:bg-[hsl(var(--ink)/0.85)] motion-reduce:transition-none"
            >
              <span className="font-display text-cream/60 text-sm">0{i + 1}</span>
              <h3 className="font-display text-2xl mt-6 mb-3 text-cream">{b.t}</h3>
              <p className="text-cream/70 leading-relaxed text-sm">{b.d}</p>
            </div>
          ))}
        </div>

        <p className="mt-24 max-w-3xl font-display-italic text-2xl md:text-3xl leading-snug text-cream/90">
          Fisioterapia, Pilates Máquina y recuperación comparten una misma idea:
          acompañar a cada persona con cercanía.
        </p>
      </div>
    </section>
  );
};
