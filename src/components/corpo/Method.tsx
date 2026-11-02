const benefits = [
  {
    t: "Fisioterapia avanzada",
    d: "Atención de fisioterapia, distinta de una sesión de Pilates Máquina.",
  },
  {
    t: "Pilates Máquina",
    d: "Una práctica con máquina que se anuncia en formato individual y grupo reducido.",
  },
  {
    t: "Consulta directa",
    d: "WhatsApp, teléfono y email si quieres preguntar por un servicio o una modalidad.",
  },
  {
    t: "Otros recursos",
    d: "Ondas de choque, diatermia y presoterapia se citan aparte de las modalidades de Pilates.",
  },
];

export const Method = () => {
  return (
    <section id="metodo" className="relative bg-ink text-cream py-28 md:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-clay opacity-40" />
      <div className="relative container-editorial">
        <div className="grid md:grid-cols-12 gap-10 mb-20">
          <p className="eyebrow md:col-span-3 text-cream/60">— Entender la oferta</p>
          <h2 className="md:col-span-9 font-display text-4xl md:text-6xl leading-[1.05] text-balance text-cream">
            Dos servicios principales.
            <span className="font-display-italic text-accent"> Otras preguntas posibles.</span>
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
          Dos formas de conocer Corpo: explorar su fisioterapia y descubrir
          las modalidades de Pilates Máquina que anuncia.
        </p>
      </div>
    </section>
  );
};
