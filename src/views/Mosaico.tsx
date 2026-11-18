import { useRef, useState, type CSSProperties, type KeyboardEvent } from "react";
import { Waves } from "lucide-react";
import fisioPhoto from "@/assets/service-fisio.jpg";
import pilatesPhoto from "@/assets/service-pilates.jpg";
import reformerPhoto from "@/assets/hero-reformer.jpg";
import { CorpoLogo } from "@/components/corpo/CorpoLogo";
import { CorpoMap } from "@/components/corpo/CorpoMap";
import { CorpoMedia } from "@/components/corpo/CorpoMedia";
import { ProposalBar } from "@/components/corpo/ProposalBar";
import { useReveal } from "@/hooks/use-reveal";
import { corpo } from "@/lib/corpo";
import { hasInstagramMedia, type MediaSlot } from "@/lib/instagram-media";
import { scrollToHashLink } from "@/lib/smooth-scroll";
import "./mosaico.css";

const external = { target: "_blank", rel: "noopener noreferrer" } as const;

/** Las tres respuestas a «¿por dónde empiezo?». Solo orientan hacia un servicio; no prometen resultados. */
const paths: {
  id: string;
  question: string;
  title: string;
  text: string;
  slot: MediaSlot;
  fallback: { src: string };
  action: { label: string; href: string };
  more?: { label: string; href: string };
}[] = [
  {
    id: "dolor",
    question: "Me duele algo o me he lesionado",
    title: "Empieza por una valoración de fisioterapia.",
    text: "Con el ecógrafo vemos músculos, tendones y ligamentos en tiempo real, te explicamos lo que vemos y combinamos las manos con la tecnología que necesita tu caso.",
    slot: "ecografia",
    fallback: fisioPhoto,
    action: { label: "Pedir cita de fisioterapia ↗", href: corpo.bookingUrl },
    more: { label: "Ver fisioterapia ↓", href: "#fisioterapia" },
  },
  {
    id: "moverme",
    question: "Quiero moverme y ganar fuerza",
    title: "Empieza por una primera clase de Pilates Máquina.",
    text: "Te explicamos cómo funciona el Reformer antes de empezar y entras en un grupo reducido. No hace falta haber hecho Pilates nunca.",
    slot: "pilates-1",
    fallback: pilatesPhoto,
    action: { label: "Reservar clase ↗", href: corpo.bookingUrl },
    more: { label: "Ver Pilates ↓", href: "#pilates" },
  },
  {
    id: "dudas",
    question: "No lo tengo claro",
    title: "Escríbenos y lo vemos juntos.",
    text: "Cuéntanos por WhatsApp qué te pasa o qué buscas y te decimos si encaja mejor la fisioterapia, el Pilates o las dos cosas.",
    slot: "pilates-2",
    fallback: reformerPhoto,
    action: { label: "Escribir por WhatsApp ↗", href: corpo.whatsappUrl },
    more: { label: `Llamar al ${corpo.phone}`, href: corpo.phoneUrl },
  },
];

const fisioServices: { title: string; text: string; slot?: MediaSlot; area: string }[] = [
  { area: "s1", slot: "fisio-manual", title: "Terapia manual", text: "El trabajo con las manos, en el centro del tratamiento." },
  { area: "s2", slot: "fisio-diatermia", title: "Diatermia", text: "Tecnología que podemos sumar al tratamiento." },
  { area: "s3", slot: "fisio-ondas", title: "Ondas de choque", text: "Otra herramienta disponible en la clínica." },
  { area: "s4", slot: "fisio-presoterapia", title: "Presoterapia", text: "Un recurso más para la recuperación." },
];

const pilatesSteps: { title: string; text: string; slot: MediaSlot }[] = [
  { slot: "pilates-1", title: "Primera clase", text: "Te explicamos cómo funciona el Reformer antes de empezar." },
  { slot: "pilates-2", title: "Grupo reducido", text: "Pocas personas por clase para poder corregirte de cerca." },
  { slot: "pilates-3", title: "Progresión", text: "Ajustamos muelles, apoyos y ejercicios a medida que avanzas." },
];

/** Fotos de la cinta: solo las que existen en src/assets/instagram. */
const ribbon = (
  ["hero-fisio", "pilates-2", "ecografia", "fisio-manual", "pilates-1", "fisio-diatermia", "hero-pilates", "pilates-3", "fisio-ondas"] as MediaSlot[]
).filter(hasInstagramMedia);

const area = (name: string) => ({ gridArea: name }) as CSSProperties;

/**
 * Propuesta «Mosaico»: clara y modular. Todo se ordena en teselas (fotos, vídeos y datos),
 * con un selector que orienta hacia fisioterapia o Pilates según lo que busque cada persona.
 */
const Mosaico = () => {
  const pageRef = useRef<HTMLElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState(0);
  useReveal(pageRef, ".mosaico-reveal");

  // Pestañas accesibles: flechas, Inicio y Fin mueven el foco y la selección.
  const onTabsKey = (event: KeyboardEvent<HTMLDivElement>) => {
    const last = paths.length - 1;
    const next = { ArrowRight: selected + 1, ArrowDown: selected + 1, ArrowLeft: selected - 1, ArrowUp: selected - 1, Home: 0, End: last }[event.key];
    if (next === undefined) return;
    event.preventDefault();
    const index = next < 0 ? last : next > last ? 0 : next;
    setSelected(index);
    tabsRef.current?.querySelectorAll<HTMLButtonElement>("[role='tab']")[index]?.focus();
  };

  const current = paths[selected];

  return (
    <main ref={pageRef} className="mosaico-page" onClick={scrollToHashLink}>
      <header className="mosaico-nav">
        <a href="/mosaico" className="mosaico-logo-link" aria-label="Clínica Corpo, inicio">
          <CorpoLogo className="mosaico-logo" showTagline={false} />
        </a>
        <nav aria-label="Secciones">
          <a href="#empezar">Por dónde empiezo</a>
          <a href="#fisioterapia">Fisioterapia</a>
          <a href="#pilates">Pilates</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <a className="mosaico-button mosaico-button--small" href={corpo.bookingUrl} {...external}>Pedir cita ↗</a>
      </header>

      {/* Portada en teselas */}
      <section className="mosaico-hero" aria-labelledby="mosaico-title">
        <div className="mosaico-tile mosaico-tile--title" style={area("title")}>
          <p className="mosaico-kicker">Ronda Sur · Murcia</p>
          <h1 id="mosaico-title">Fisioterapia <em>y</em> Pilates Máquina, en el mismo sitio.</h1>
          <div className="mosaico-actions">
            <a className="mosaico-button" href={corpo.bookingUrl} {...external}>Pedir cita ↗</a>
            <a className="mosaico-button mosaico-button--ghost" href="#empezar">¿Por dónde empiezo?</a>
          </div>
        </div>

        <a className="mosaico-tile mosaico-tile--media" style={area("pil")} href="#pilates">
          <CorpoMedia slot="pilates" fallback={reformerPhoto} alt="" priority />
          <span className="mosaico-tile-label">Pilates Máquina <span aria-hidden="true">→</span></span>
        </a>

        <a className="mosaico-tile mosaico-tile--media" style={area("fis")} href="#fisioterapia">
          <CorpoMedia slot="hero-fisio" fallback={fisioPhoto} alt="" priority />
          <span className="mosaico-tile-label">Fisioterapia <span aria-hidden="true">→</span></span>
        </a>

        <div className="mosaico-tile mosaico-tile--eco" style={area("eco")}>
          <span className="mosaico-tile-thumb"><CorpoMedia slot="ecografia" alt="" /></span>
          <p><strong>Ecógrafo en consulta</strong>Vemos lo que pasa por dentro durante la valoración.</p>
        </div>

        <div className="mosaico-tile mosaico-tile--group" style={area("grp")}>
          <span className="mosaico-tile-thumb"><CorpoMedia slot="pilates-3" fallback={pilatesPhoto} alt="" /></span>
          <p><strong>Grupos reducidos</strong>Pocas personas por clase de Reformer.</p>
        </div>

        <a className="mosaico-tile mosaico-tile--where" style={area("dir")} href={corpo.directionsUrl} {...external}>
          <p><strong>San Benito - Patiño</strong>{corpo.addressLines[0]}</p>
          <span className="mosaico-tile-label">Cómo llegar ↗</span>
        </a>
      </section>

      {/* Selector */}
      <section id="empezar" className="mosaico-section mosaico-start" aria-labelledby="mosaico-start-title">
        <div className="mosaico-head mosaico-reveal">
          <p className="mosaico-kicker">¿Por dónde empiezo?</p>
          <h2 id="mosaico-start-title">Dinos qué te trae a Corpo.</h2>
        </div>

        <div className="mosaico-start-grid mosaico-reveal">
          <div ref={tabsRef} className="mosaico-tabs" role="tablist" aria-label="Qué te trae a Corpo" aria-orientation="vertical" onKeyDown={onTabsKey}>
            {paths.map((path, index) => (
              <button
                key={path.id}
                type="button"
                role="tab"
                id={`mosaico-tab-${path.id}`}
                aria-selected={index === selected}
                aria-controls="mosaico-panel"
                tabIndex={index === selected ? 0 : -1}
                onClick={() => setSelected(index)}
              >
                <span className="mosaico-tab-index" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                {path.question}
              </button>
            ))}
          </div>

          <div id="mosaico-panel" className="mosaico-panel" role="tabpanel" aria-labelledby={`mosaico-tab-${current.id}`}>
            <figure key={current.id} className="mosaico-panel-media">
              <CorpoMedia slot={current.slot} fallback={current.fallback} alt="" />
            </figure>
            <div key={`${current.id}-copy`} className="mosaico-panel-copy">
              <h3>{current.title}</h3>
              <p>{current.text}</p>
              <div className="mosaico-actions">
                <a className="mosaico-button" href={current.action.href} {...external}>{current.action.label}</a>
                {current.more && <a className="mosaico-link" href={current.more.href}>{current.more.label}</a>}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cinta de fotos */}
      {ribbon.length > 0 && (
        <div className="mosaico-ribbon" aria-hidden="true">
          <div className="mosaico-ribbon-track">
            {[...ribbon, ...ribbon].map((slot, index) => (
              <span key={`${slot}-${index}`} className="mosaico-ribbon-item"><CorpoMedia slot={slot} alt="" /></span>
            ))}
          </div>
        </div>
      )}

      {/* Fisioterapia */}
      <section id="fisioterapia" data-scroll-align="start" className="mosaico-section" aria-labelledby="mosaico-fisio-title">
        <div className="mosaico-bento mosaico-bento--fisio">
          <div className="mosaico-tile mosaico-tile--intro mosaico-reveal" style={area("head")}>
            <p className="mosaico-kicker">01 · Fisioterapia</p>
            <h2 id="mosaico-fisio-title">Fisioterapia avanzada, con ecografía en consulta.</h2>
            <p>Para dolor, lesiones y recuperación. Valoramos, te explicamos lo que vemos y combinamos las manos con la tecnología que necesita cada caso.</p>
            <a className="mosaico-button" href={corpo.bookingUrl} {...external}>Pedir cita de fisioterapia ↗</a>
          </div>

          <figure className="mosaico-tile mosaico-tile--media mosaico-reveal" style={area("video")}>
            <CorpoMedia slot="fisio" fallback={fisioPhoto} alt="Fisioterapeutas de Corpo tratando a pacientes en la clínica" />
          </figure>

          <div className="mosaico-tile mosaico-tile--feature mosaico-reveal" style={area("eco")}>
            <span className="mosaico-feature-media"><CorpoMedia slot="ecografia" alt="" /></span>
            <span className="mosaico-badge">Lo que nos diferencia</span>
            <h3>Ecografía</h3>
            <p>Vemos músculos, tendones y ligamentos en tiempo real durante la valoración.</p>
          </div>

          {fisioServices.map((service) => (
            <div key={service.title} className="mosaico-tile mosaico-tile--service mosaico-reveal" style={area(service.area)}>
              <span className="mosaico-service-thumb">
                {service.slot && hasInstagramMedia(service.slot)
                  ? <CorpoMedia slot={service.slot} alt="" />
                  : <Waves aria-hidden="true" strokeWidth={1.5} />}
              </span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pilates */}
      <section id="pilates" data-scroll-align="start" className="mosaico-section mosaico-section--green" aria-labelledby="mosaico-pilates-title">
        <div className="mosaico-bento mosaico-bento--pilates">
          <figure className="mosaico-tile mosaico-tile--media mosaico-reveal" style={area("video")}>
            <CorpoMedia slot="pilates" fallback={reformerPhoto} alt="Clase de Pilates Máquina en la sala de Corpo" />
          </figure>

          <div className="mosaico-tile mosaico-tile--intro mosaico-tile--on-green mosaico-reveal" style={area("head")}>
            <p className="mosaico-kicker">02 · Pilates Máquina</p>
            <h2 id="mosaico-pilates-title">Fuerza, control y movilidad sobre el Reformer.</h2>
            <p>Clases en grupos reducidos: la máquina te sostiene y te da resistencia a la vez. Puedes empezar aunque nunca hayas hecho Pilates.</p>
            <a className="mosaico-button mosaico-button--light" href={corpo.bookingUrl} {...external}>Reservar clase ↗</a>
          </div>

          {pilatesSteps.map((step, index) => (
            <div key={step.title} className="mosaico-tile mosaico-tile--step mosaico-reveal" style={area(`p${index + 1}`)}>
              <span className="mosaico-step-media"><CorpoMedia slot={step.slot} alt="" /></span>
              <div>
                <span className="mosaico-step-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" data-scroll-align="start" className="mosaico-section" aria-labelledby="mosaico-contact-title">
        <div className="mosaico-bento mosaico-bento--contact">
          <div className="mosaico-tile mosaico-tile--intro mosaico-reveal" style={area("head")}>
            <p className="mosaico-kicker">03 · Contacto</p>
            <h2 id="mosaico-contact-title">Ven a vernos.</h2>
            <address>{corpo.addressLines[0]}<br />{corpo.addressLines[1]}</address>
          </div>

          <div className="mosaico-tile mosaico-tile--map mosaico-reveal" style={area("map")}>
            <CorpoMap variant="mosaico" className="mosaico-map" />
          </div>

          <a className="mosaico-tile mosaico-tile--fact mosaico-reveal" style={area("phone")} href={corpo.phoneUrl}>
            <span>Teléfono y WhatsApp</span><strong>{corpo.phone}</strong>
          </a>
          <a className="mosaico-tile mosaico-tile--fact mosaico-reveal" style={area("mail")} href={corpo.emailUrl}>
            <span>Email</span><strong className="mosaico-mail">{corpo.email.split("@")[0]}<wbr />@{corpo.email.split("@")[1]}</strong>
          </a>
          <a className="mosaico-tile mosaico-tile--cta mosaico-reveal" style={area("book")} href={corpo.bookingUrl} {...external}>
            <span>Reserva online</span><strong>Pedir cita ↗</strong>
          </a>
          <a className="mosaico-tile mosaico-tile--fact mosaico-tile--beige mosaico-reveal" style={area("wa")} href={corpo.whatsappUrl} {...external}>
            <span>¿Dudas?</span><strong>WhatsApp ↗</strong>
          </a>
          <a className="mosaico-tile mosaico-tile--fact mosaico-tile--beige mosaico-reveal" style={area("dir")} href={corpo.directionsUrl} {...external}>
            <span>Google Maps</span><strong>Cómo llegar ↗</strong>
          </a>
        </div>
      </section>

      <footer className="mosaico-footer">
        <CorpoLogo className="mosaico-logo mosaico-logo--footer" />
        <span>Fisioterapia y Pilates Máquina en Ronda Sur, Murcia</span>
        <a href={corpo.instagramUrl} {...external}>@clinicacorpomurcia ↗</a>
      </footer>

      <ProposalBar current="/mosaico" />
    </main>
  );
};

export default Mosaico;
