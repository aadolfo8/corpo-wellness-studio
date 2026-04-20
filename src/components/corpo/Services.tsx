import fisio from "@/assets/service-fisio.jpg";
import pilates from "@/assets/service-pilates.jpg";
import recovery from "@/assets/service-recovery.jpg";

const services = [
  {
    n: "01",
    title: "Fisioterapia",
    desc: "Diagnóstico y tratamiento manual avanzado: terapia miofascial, punción seca, neurodinamia y ejercicio terapéutico para resolver lesiones desde la raíz.",
    img: fisio,
  },
  {
    n: "02",
    title: "Pilates Máquina",
    desc: "Sesiones reducidas en Reformer guiadas por fisioterapeutas. Tonifica, mejora tu postura y devuelve movilidad a tu cuerpo con precisión.",
    img: pilates,
  },
  {
    n: "03",
    title: "Recuperación",
    desc: "Programas personalizados post-lesión, suelo pélvico y readaptación deportiva. Volvemos a tu mejor versión, paso a paso.",
    img: recovery,
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
            Tres caminos hacia un mismo destino:
            <span className="font-display-italic text-primary"> sentirte bien.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 lg:gap-16">
          {services.map((s) => (
            <article key={s.n} className="group">
              <div className="relative overflow-hidden bg-muted aspect-[4/5] mb-6">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
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
