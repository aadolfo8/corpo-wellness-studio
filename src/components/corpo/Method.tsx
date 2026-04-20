const benefits = [
  { t: "Postura consciente", d: "Reeducamos patrones para que tu cuerpo encuentre su eje natural." },
  { t: "Fuerza funcional", d: "Tonificación profunda sin impacto, ideal en cualquier edad y nivel." },
  { t: "Movilidad articular", d: "Recupera rango y fluidez con movimientos guiados y precisos." },
  { t: "Mente en calma", d: "Respiración y concentración como parte esencial de cada sesión." },
];

export const Method = () => {
  return (
    <section id="metodo" className="relative bg-ink text-cream py-28 md:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-clay opacity-40" />
      <div className="relative container-editorial">
        <div className="grid md:grid-cols-12 gap-10 mb-20">
          <p className="eyebrow md:col-span-3 text-cream/60">— Método CORPO</p>
          <h2 className="md:col-span-9 font-display text-4xl md:text-6xl leading-[1.05] text-balance text-cream">
            Pequeños grupos. Atención plena.
            <span className="font-display-italic text-accent"> Resultados que duran.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-cream/10">
          {benefits.map((b, i) => (
            <div key={b.t} className="bg-ink p-8 md:p-10">
              <span className="font-display text-cream/40 text-sm">0{i + 1}</span>
              <h3 className="font-display text-2xl mt-6 mb-3 text-cream">{b.t}</h3>
              <p className="text-cream/70 leading-relaxed text-sm">{b.d}</p>
            </div>
          ))}
        </div>

        <figure className="mt-24 max-w-3xl">
          <blockquote className="font-display-italic text-2xl md:text-3xl leading-snug text-cream/90">
            "Llegué con dolor lumbar crónico y, tres meses después, no solo me ha desaparecido:
            me siento más fuerte y ligera que nunca. El equipo de CORPO es excepcional."
          </blockquote>
          <figcaption className="mt-6 eyebrow text-cream/50">
            — Marta R., paciente desde 2023
          </figcaption>
        </figure>
      </div>
    </section>
  );
};
