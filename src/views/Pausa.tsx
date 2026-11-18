import { useEffect, useRef, useState, type CSSProperties } from "react";
import fisioPhoto from "@/assets/service-fisio.jpg";
import reformerPhoto from "@/assets/hero-reformer.jpg";
import { CorpoLogo } from "@/components/corpo/CorpoLogo";
import { CorpoMap } from "@/components/corpo/CorpoMap";
import { CorpoMedia } from "@/components/corpo/CorpoMedia";
import { ProposalBar } from "@/components/corpo/ProposalBar";
import { useReveal } from "@/hooks/use-reveal";
import { corpo } from "@/lib/corpo";
import type { MediaSlot } from "@/lib/instagram-media";
import { prefersReducedMotion, scrollToHashLink } from "@/lib/smooth-scroll";
import "./pausa.css";

type Focus = "fisio" | "pilates";

/** Cada cuánto cambia sola la portada entre fisioterapia y Pilates. */
const ROTATE_MS = 7000;

const heroItems: { id: Focus; index: string; title: string; text: string; href: string }[] = [
  { id: "fisio", index: "01", title: "Fisioterapia", text: "Con ecógrafo en consulta", href: "#fisioterapia" },
  { id: "pilates", index: "02", title: "Pilates Máquina", text: "Reformer en grupos reducidos", href: "#pilates" },
];

type Chapter = { title: string; text: string; slot: MediaSlot };

type Act = {
  id: Focus;
  anchor: string;
  index: string;
  title: string;
  lead: string;
  cta: string;
  chapters: Chapter[];
};

/** Dos actos: cada uno con su color y su lado, para que al bajar se note el cambio de servicio. */
const acts: Act[] = [
  {
    id: "fisio",
    anchor: "fisioterapia",
    index: "01",
    title: "Fisioterapia",
    lead: "Para dolor, lesiones y recuperación. Valoramos, te explicamos lo que vemos y tratamos.",
    cta: "Pedir cita de fisioterapia ↗",
    chapters: [
      {
        slot: "ecografia",
        title: "Ecografía en consulta",
        text: "Vemos músculos, tendones y ligamentos en tiempo real durante la valoración. Es lo que nos diferencia.",
      },
      {
        slot: "fisio-manual",
        title: "Terapia manual",
        text: "El trabajo con las manos, en el centro del tratamiento, combinado con la tecnología que necesita cada caso.",
      },
      {
        slot: "fisio-ondas",
        title: "Diatermia, ondas de choque y presoterapia",
        text: "Herramientas que podemos sumar al tratamiento cuando tu caso lo pide.",
      },
    ],
  },
  {
    id: "pilates",
    anchor: "pilates",
    index: "02",
    title: "Pilates Máquina",
    lead: "Fuerza, control y movilidad sobre el Reformer, en grupos reducidos. No hace falta experiencia.",
    cta: "Reservar clase de Pilates ↗",
    chapters: [
      {
        slot: "pilates-1",
        title: "Primera clase",
        text: "Te explicamos cómo funciona el Reformer antes de empezar. Puedes venir aunque nunca hayas hecho Pilates.",
      },
      {
        slot: "pilates-2",
        title: "Grupo reducido",
        text: "Pocas personas por clase para poder corregirte de cerca.",
      },
      {
        slot: "pilates-3",
        title: "Progresión",
        text: "Ajustamos muelles, apoyos y ejercicios a medida que avanzas. La máquina te sostiene y te da resistencia a la vez.",
      },
    ],
  },
];

const pad = (n: number) => String(n).padStart(2, "0");

/** Un acto: cabecera, lista de capítulos y un escenario fijo cuya imagen cambia con el capítulo que cruza el centro. */
const ActSection = ({ act }: { act: Act }) => {
  const listRef = useRef<HTMLOListElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const list = listRef.current;
    if (!list || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.index));
      }),
      { rootMargin: "-50% 0px -50% 0px" },
    );
    list.querySelectorAll(".pausa-chapter").forEach((chapter) => observer.observe(chapter));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={act.anchor}
      data-scroll-align="start"
      className={`pausa-act pausa-act--${act.id}`}
      aria-labelledby={`pausa-act-${act.id}`}
    >
      <header className="pausa-act-head pausa-reveal">
        <span className="pausa-act-index">{act.index}</span>
        <h2 id={`pausa-act-${act.id}`}>{act.title}</h2>
        <p>{act.lead}</p>
      </header>

      <div className="pausa-act-body">
        <div className="pausa-stage" aria-hidden="true">
          {act.chapters.map((chapter, index) => (
            <div key={chapter.title} className={`pausa-stage-layer${index === active ? " is-active" : ""}`}>
              <CorpoMedia slot={chapter.slot} alt="" />
            </div>
          ))}
          <p className="pausa-stage-counter">
            <span>{act.title}</span>
            <span>{pad(active + 1)} / {pad(act.chapters.length)}</span>
          </p>
        </div>

        <ol ref={listRef} className="pausa-chapter-list">
          {act.chapters.map((chapter, index) => (
            <li key={chapter.title} data-index={index} className={`pausa-chapter${index === active ? " is-active" : ""}`}>
              <figure className="pausa-chapter-media">
                <CorpoMedia slot={chapter.slot} alt="" />
              </figure>
              <p className="pausa-chapter-act">{act.index}.{index + 1} · {act.title}</p>
              <h3>{chapter.title}</h3>
              <p className="pausa-chapter-text">{chapter.text}</p>
              {index === act.chapters.length - 1 && (
                <a
                  className={`pausa-button${act.id === "pilates" ? " pausa-button--dark" : ""}`}
                  href={corpo.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {act.cta}
                </a>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

/**
 * Propuesta «Pausa»: cinematográfica y lenta. Reels verticales en la portada, un acto por servicio
 * (cada uno con su color y su lado) con una imagen fija que cambia al bajar, y un cierre con el logotipo a todo lo ancho.
 */
const Pausa = () => {
  const pageRef = useRef<HTMLElement>(null);
  const [heroFocus, setHeroFocus] = useState<Focus>("fisio");
  const [autoplay, setAutoplay] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  useReveal(pageRef, ".pausa-reveal");

  // La portada alterna sola entre los dos servicios hasta que la persona elige uno.
  useEffect(() => {
    if (prefersReducedMotion()) setAutoplay(false);
  }, []);

  useEffect(() => {
    if (!autoplay) return;
    const timer = window.setTimeout(() => setHeroFocus((focus) => (focus === "fisio" ? "pilates" : "fisio")), ROTATE_MS);
    return () => window.clearTimeout(timer);
  }, [heroFocus, autoplay]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const chooseHero = (focus: Focus) => {
    setHeroFocus(focus);
    setAutoplay(false);
  };

  return (
    <main ref={pageRef} className="pausa-page" onClick={scrollToHashLink}>
      <header className={`pausa-nav${scrolled ? " is-solid" : ""}`}>
        <a href="/pausa" className="pausa-logo-link" aria-label="Clínica Corpo, inicio">
          <CorpoLogo className="pausa-logo" showTagline={false} />
        </a>
        <nav aria-label="Secciones">
          <a href="#fisioterapia">Fisioterapia</a>
          <a href="#pilates">Pilates</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <a className="pausa-button pausa-button--small" href={corpo.bookingUrl} target="_blank" rel="noopener noreferrer">Pedir cita ↗</a>
      </header>

      <section className="pausa-hero" aria-labelledby="pausa-title">
        <div className="pausa-hero-content">
          <p className="pausa-eyebrow">Clínica Corpo · Ronda Sur, Murcia</p>
          <h1 id="pausa-title">Cuidar el cuerpo, <em>y moverlo.</em></h1>

          <ul className="pausa-hero-switch" style={{ "--rotate": `${ROTATE_MS}ms` } as CSSProperties}>
            {heroItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={`${heroFocus === item.id ? "is-active" : ""}${autoplay ? " is-timed" : ""}`}
                  onMouseEnter={() => chooseHero(item.id)}
                  onFocus={() => chooseHero(item.id)}
                >
                  <span className="pausa-hero-index">{item.index}</span>
                  <strong>{item.title}</strong>
                  <span>{item.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Los vídeos son reels verticales: se muestran en su formato, como dos fotos de pie, para no perder calidad. */}
        <div className="pausa-reels" aria-hidden="true">
          {heroItems.map((item) => (
            <div
              key={item.id}
              className={`pausa-reel pausa-reel--${item.id}${heroFocus === item.id ? " is-active" : ""}`}
              onMouseEnter={() => chooseHero(item.id)}
            >
              <CorpoMedia slot={item.id} fallback={item.id === "fisio" ? fisioPhoto : reformerPhoto} alt="" priority />
              <span className="pausa-reel-label">{item.title}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="pausa-intro" aria-labelledby="pausa-intro-title">
        <h2 id="pausa-intro-title" className="pausa-reveal">Dos maneras de cuidar el cuerpo, <em>en el mismo sitio.</em></h2>
        <ul className="pausa-intro-list pausa-reveal">
          <li>
            <a href="#fisioterapia">
              <span className="pausa-intro-index">01</span>
              <strong>Fisioterapia</strong>
              <span className="pausa-intro-text">Cuando algo duele: valoración con ecógrafo, terapia manual y la tecnología que pida cada caso.</span>
              <span className="pausa-intro-arrow" aria-hidden="true">↓</span>
            </a>
          </li>
          <li>
            <a href="#pilates">
              <span className="pausa-intro-index">02</span>
              <strong>Pilates Máquina</strong>
              <span className="pausa-intro-text">Para ganar fuerza, control y movilidad sobre el Reformer, en grupos reducidos.</span>
              <span className="pausa-intro-arrow" aria-hidden="true">↓</span>
            </a>
          </li>
        </ul>
      </section>

      {acts.map((act) => <ActSection key={act.id} act={act} />)}

      <section id="contacto" data-scroll-align="start" className="pausa-contact" aria-labelledby="pausa-contact-title">
        <div className="pausa-contact-copy pausa-reveal">
          <p className="pausa-eyebrow">Contacto</p>
          <h2 id="pausa-contact-title">Ven a vernos.</h2>
          <a className="pausa-phone" href={corpo.phoneUrl}>{corpo.phone}</a>
          <address>{corpo.addressLines[0]}<br />{corpo.addressLines[1]}</address>
          <a className="pausa-mail" href={corpo.emailUrl}>{corpo.email}</a>
          <div className="pausa-contact-actions">
            <a className="pausa-button pausa-button--dark" href={corpo.bookingUrl} target="_blank" rel="noopener noreferrer">Pedir cita ↗</a>
            <a className="pausa-button pausa-button--ghost" href={corpo.whatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <a className="pausa-button pausa-button--ghost" href={corpo.directionsUrl} target="_blank" rel="noopener noreferrer">Cómo llegar</a>
          </div>
        </div>
        <CorpoMap variant="pausa" className="pausa-map" />
      </section>

      <footer className="pausa-footer">
        <CorpoLogo className="pausa-footer-logo" showTagline={false} />
        <div>
          <span>Fisioterapia y Pilates Máquina en Ronda Sur, Murcia</span>
          <a href={corpo.instagramUrl} target="_blank" rel="noopener noreferrer">@clinicacorpomurcia ↗</a>
        </div>
      </footer>

      <ProposalBar current="/pausa" />
    </main>
  );
};

export default Pausa;
