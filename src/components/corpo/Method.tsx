const benefits = [
  {
    t: "Pilates Reformer",
    d: "Trabajamos en máquina Reformer: resistencia variable con muelles para un movimiento preciso, fluido y seguro.",
  },
  {
    t: "Guiado por fisios",
    d: "Cada sesión la dirige un fisioterapeuta. Adaptamos cargas y ejercicios a tu cuerpo y a tu objetivo.",
  },
  {
    t: "Cuerpo entero",
    d: "El Reformer activa la musculatura profunda, mejora la postura y devuelve movilidad sin impacto articular.",
  },
  {
    t: "Para todos los niveles",
    d: "Da igual si nunca has hecho Pilates o si entrenas a diario: la máquina se ajusta a ti, no al revés.",
  },
];

export const Method = () => {
  return (
    <section id="metodo" className="relative bg-ink text-cream py-28 md:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-clay opacity-40" />
      <div className="relative container-editorial">
        <div className="grid md:grid-cols-12 gap-10 mb-20">
          <p className="eyebrow md:col-span-3 text-cream/60">— Pilates Reformer</p>
          <h2 className="md:col-span-9 font-display text-4xl md:text-6xl leading-[1.05] text-balance text-cream">
            Pilates con máquina.
            <span className="font-display-italic text-accent"> Precisión, control y resultados.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-cream/10">
          {benefits.map((b, i) => (
            <div
              key={b.t}
              className="bg-ink p-8 md:p-10 transition-colors duration-500 hover:bg-[hsl(var(--ink)/0.85)]"
            >
              <span className="font-display text-cream/40 text-sm">0{i + 1}</span>
              <h3 className="font-display text-2xl mt-6 mb-3 text-cream">{b.t}</h3>
              <p className="text-cream/70 leading-relaxed text-sm">{b.d}</p>
            </div>
          ))}
        </div>

        <figure className="mt-24 max-w-3xl">
          <blockquote className="font-display-italic text-2xl md:text-3xl leading-snug text-cream/90">
            "Las sesiones de Reformer en CORPO me han cambiado la postura y la forma
            de moverme. Salgo de cada clase con el cuerpo despierto y la mente en calma."
          </blockquote>
          <figcaption className="mt-6 eyebrow text-cream/50">
            — Marta R., paciente
          </figcaption>
        </figure>
      </div>
    </section>
  );
};
