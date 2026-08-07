import heroImg from "@/assets/hero-reformer.jpg";
import { corpo } from "@/lib/corpo";

export const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Sala luminosa con una máquina de Pilates"
          className="h-full w-full object-cover animate-slow-zoom motion-reduce:animate-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/10 to-background/85" />
      </div>

      <div className="relative container-editorial flex min-h-screen flex-col justify-end pb-20 pt-40">
        <p className="eyebrow mb-6 animate-fade-up motion-reduce:animate-none">Fisioterapia avanzada · Pilates Máquina · Murcia</p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground max-w-4xl leading-[0.95] text-balance animate-fade-up motion-reduce:animate-none [animation-delay:120ms]">
          El cuerpo,
          <br />
          <span className="font-display-italic text-primary">como obra</span> a cuidar.
        </h1>
        <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed animate-fade-up motion-reduce:animate-none [animation-delay:240ms]">
          Fisioterapia avanzada, Pilates Máquina y recuperación con atención
          personalizada y una progresión adaptada a cada persona.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-6 animate-fade-up motion-reduce:animate-none [animation-delay:360ms]">
          <a
            href={corpo.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex min-h-11 items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-sm tracking-wide hover:bg-ink transition-colors motion-reduce:transition-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            Reservar online
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none">→</span>
          </a>
          <a href="#servicios" className="inline-flex min-h-11 items-center text-sm tracking-wide border-b border-foreground/40 hover:border-primary hover:text-primary transition-colors motion-reduce:transition-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
            Conocer nuestros servicios
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 hidden md:flex items-center gap-3 text-xs tracking-[0.2em] text-foreground/70 rotate-90 origin-bottom-right">
        <span className="h-px w-10 bg-foreground/40" />
        SCROLL
      </div>
    </section>
  );
};
