import fisio from "@/assets/service-fisio.jpg";
import pilates from "@/assets/service-pilates.jpg";
import recovery from "@/assets/service-recovery.jpg";

const services = [
  {
    n: "01",
    title: "Fisioterapia avanzada",
    desc: "Atención de fisioterapia; no es una clase de Pilates Máquina. Si tienes dudas sobre su oferta, puedes contactar con Corpo.",
    img: fisio,
    alt: "Manos durante una sesión de terapia manual",
  },
  {
    n: "02",
    title: "Pilates Máquina",
    desc: "Práctica con máquina en sesiones individuales y grupos reducidos. Son modalidades del mismo servicio.",
    img: pilates,
    alt: "Persona practicando Pilates Máquina",
  },
  {
    n: "03",
    title: "Otros recursos",
    desc: "Diatermia, ondas de choque y presoterapia son recursos citados por la clínica. Pregunta por su disponibilidad sin elegirlos como tratamiento.",
    img: recovery,
    alt: "Toalla preparada en un espacio de cuidado",
  },
];

export const Services = () => {
  return (
    <section id="servicios" className="bg-background py-28 md:py-40">
      <div className="container-editorial">
        <div className="grid md:grid-cols-12 gap-10 items-end mb-20">
          <div className="md:col-span-3">
            <p className="eyebrow">— Servicios</p>
          </div>
          <h2 className="md:col-span-9 font-display text-4xl md:text-6xl leading-[1.05] text-balance">
            Distintas formas de cuidar el cuerpo,
            <span className="font-display-italic text-primary"> una atención personal.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 lg:gap-16">
          {services.map((s) => (
            <article key={s.n} className="group">
              <div className="relative overflow-hidden bg-muted aspect-[4/5] mb-6">
                <img
                  src={s.img}
                  alt={s.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none"
                />
                <span className="absolute top-5 left-5 font-display text-sm text-cream mix-blend-difference">
                  {s.n}
                </span>
              </div>
              <h3 className="font-display text-3xl mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
