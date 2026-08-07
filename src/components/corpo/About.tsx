import about from "@/assets/about-studio.jpg";

export const About = () => {
  return (
    <section id="nosotros" className="bg-card py-28 md:py-40">
      <div className="container-editorial grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-6 relative">
          <img
            src={about}
            alt="Sala luminosa con camilla y plantas"
            loading="lazy"
            className="w-full aspect-[4/5] object-cover shadow-soft"
          />
          <div className="absolute -bottom-8 -right-4 md:-right-12 bg-background px-8 py-6 shadow-elegant max-w-[260px]">
            <p className="font-display text-4xl text-primary">Ronda Sur</p>
            <p className="eyebrow mt-2">Murcia</p>
          </div>
        </div>

        <div className="md:col-span-6 md:pl-10">
          <p className="eyebrow mb-6">— Sobre CORPO</p>
          <h2 className="font-display text-4xl md:text-5xl leading-[1.05] text-balance mb-8">
            Un espacio cercano para
            <span className="font-display-italic text-primary"> cuidar el cuerpo</span> de forma personal.
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Corpo reúne fisioterapia avanzada, Pilates Máquina y recuperación en
              un entorno cercano de Ronda Sur, Murcia.
            </p>
            <p>
              La atención y la progresión se adaptan a cada persona, con o sin una
              lesión concreta.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-border">
            <div>
              <p className="font-display text-2xl text-primary">Fisioterapia</p>
              <p className="eyebrow mt-2">Avanzada</p>
            </div>
            <div>
              <p className="font-display text-2xl text-primary">Pilates</p>
              <p className="eyebrow mt-2">Máquina</p>
            </div>
            <div>
              <p className="font-display text-2xl text-primary">Atención</p>
              <p className="eyebrow mt-2">Personalizada</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
