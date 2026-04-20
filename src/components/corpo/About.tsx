import about from "@/assets/about-studio.jpg";

export const About = () => {
  return (
    <section id="nosotros" className="bg-card py-28 md:py-40">
      <div className="container-editorial grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-6 relative">
          <img
            src={about}
            alt="Interior del estudio CORPO en Murcia"
            loading="lazy"
            className="w-full aspect-[4/5] object-cover shadow-soft"
          />
          <div className="absolute -bottom-8 -right-4 md:-right-12 bg-background px-8 py-6 shadow-elegant max-w-[260px]">
            <p className="font-display text-5xl text-primary">+10</p>
            <p className="eyebrow mt-2">Años cuidando cuerpos en Murcia</p>
          </div>
        </div>

        <div className="md:col-span-6 md:pl-10">
          <p className="eyebrow mb-6">— Sobre CORPO</p>
          <h2 className="font-display text-4xl md:text-5xl leading-[1.05] text-balance mb-8">
            Una clínica donde la ciencia
            <span className="font-display-italic text-primary"> se mueve despacio</span> y mira de cerca.
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Nacimos con una idea sencilla: tratar a cada persona como única.
              Nuestro equipo de fisioterapeutas combina la mejor evidencia clínica
              con un trato humano y cercano.
            </p>
            <p>
              Trabajamos en grupos reducidos, con tiempo, escucha y un espacio
              pensado para que dejes el ruido fuera. Aquí no hay prisas: hay método.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6 pt-10 border-t border-border">
            <div>
              <p className="font-display text-3xl text-primary">5★</p>
              <p className="eyebrow mt-2">Valoración Google</p>
            </div>
            <div>
              <p className="font-display text-3xl text-primary">+2k</p>
              <p className="eyebrow mt-2">Pacientes</p>
            </div>
            <div>
              <p className="font-display text-3xl text-primary">1:1</p>
              <p className="eyebrow mt-2">Atención</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
