import { CorpoMap } from "@/components/corpo/CorpoMap";
import { corpo } from "@/lib/corpo";

export const LocationMap = () => {
  return (
    <section id="ubicacion" className="bg-card py-28 md:py-40">
      <div className="container-editorial">
        <div className="grid md:grid-cols-12 gap-10 items-end mb-16">
          <div className="md:col-span-3">
            <p className="eyebrow">— Ubicación</p>
          </div>
          <h2 className="md:col-span-9 font-display text-4xl md:text-6xl leading-[1.05] text-balance">
            Corpo está en Ronda Sur,
            <span className="font-display-italic text-primary"> Murcia.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-12 gap-8 lg:gap-12">
          <CorpoMap variant="wellness" className="md:col-span-8 min-h-[460px] md:min-h-[560px] shadow-soft" />

          <aside className="md:col-span-4 bg-background p-8 md:p-10 shadow-soft flex flex-col justify-between">
            <div>
              <p className="eyebrow mb-3">Visítanos</p>
              <h3 className="font-display text-3xl mb-6 leading-tight">
                Corpo<br />
                <span className="font-display-italic text-primary">Ronda Sur</span>
              </h3>
              <dl className="space-y-5 text-sm leading-relaxed">
                <div>
                  <dt className="eyebrow mb-1">Dirección</dt>
                  <dd className="text-foreground/85">
                    {corpo.addressLines.map((line) => <span key={line} className="block">{line}</span>)}
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow mb-1">Contacto</dt>
                  <dd className="text-foreground/85">
                    <a className="inline-flex min-h-11 items-center hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary" href={corpo.phoneUrl}>{corpo.phone}</a>
                  </dd>
                </div>
              </dl>
            </div>
            <a
              href={corpo.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="story-link mt-10 inline-flex min-h-11 items-center gap-2 text-sm tracking-wide text-primary self-start focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              Cómo llegar
              <span aria-hidden="true">→</span>
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
};
