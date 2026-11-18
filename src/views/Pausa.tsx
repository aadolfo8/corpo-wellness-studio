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

type Chapter = { act: "Fisioterapia" | "Pilates Máquina"; title: string; text: string; slot: MediaSlot; anchor?: string };

const chapters: Chapter[] = [
  {
    act: "Fisioterapia",
    anchor: "fisioterapia",
    slot: "ecografia",
    title: "Ecografía en consulta",
    text: "Vemos músculos, tendones y ligamentos en tiempo real durante la valoración. Es lo que nos diferencia.",
  },
  {
    act: "Fisioterapia",
    slot: "fisio-manual",
    title: "Terapia manual",
    text: "El trabajo con las manos, en el centro del tratamiento. Valoramos, te explicamos lo que vemos y combinamos las manos con la tecnología que necesita cada caso.",
  },
  {
    act: "Fisioterapia",
    slot: "fisio-ondas",
    title: "Diatermia, ondas de choque y presoterapia",
    text: "Herramientas que podemos sumar al tratamiento cuando tu caso lo pide.",
  },
  {
    act: "Pilates Máquina",
    anchor: "pilates",
    slot: "pilates-1",
    title: "Primera clase",
    text: "Te explicamos cómo funciona el Reformer antes de empezar. Puedes venir aunque nunca hayas hecho Pilates.",
  },
  {
    act: "Pilates Máquina",
    slot: "pilates-2",
    title: "Grupo reducido",
    text: "Pocas personas por clase para poder corregirte de cerca.",
  },
  {
    act: "Pilates Máquina",
    slot: "pilates-3",
    title: "Progresión",
    text: "Ajustamos muelles, apoyos y ejercicios a medida que avanzas. La máquina te sostiene y te da resistencia a la vez.",
  },
];

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * Propuesta «Pausa»: cinematográfica y lenta. Vídeo a pantalla completa en la portada,
 * capítulos con una imagen fija que cambia al avanzar y un cierre con el logotipo a todo lo ancho.
 */
const Pausa = () => {
  const pageRef = useRef<HTMLElement>(null);
  const [heroFocus, setHeroFocus] = useState<Focus>("fisio");
  const [autoplay, setAutoplay] = useState(true);
  const [activeChapter, setActiveChapter] = useState(0);
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

  // El capítulo que cruza el centro de la pantalla decide qué imagen se ve en el escenario.
  useEffect(() => {
    const page = pageRef.current;
    if (!page || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveChapter(Number((entry.target as HTMLElement).dataset.index));
      }),
      { rootMargin: "-50% 0px -50% 0px" },
    );
    page.querySelectorAll(".pausa-chapter").forEach((chapter) => observer.observe(chapter));
    return () => observer.disconnect();
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

      <section className="pausa-chapters" aria-label="Fisioterapia y Pilates, paso a paso">
        <div className="pausa-stage" aria-hidden="true">
          {chapters.map((chapter, index) => (
            <div key={chapter.title} className={`pausa-stage-layer${index === activeChapter ? " is-active" : ""}`}>
              <CorpoMedia slot={chapter.slot} alt="" />
            </div>
          ))}
          <p className="pausa-stage-counter">
            <span>{chapters[activeChapter].act}</span>
            <span>{pad(activeChapter + 1)} / {pad(chapters.length)}</span>
          </p>
        </div>

        <ol className="pausa-chapter-list">
          {chapters.map((chapter, index) => {
            const lastOfAct = chapters[index + 1]?.act !== chapter.act;
            return (
              <li
                key={chapter.title}
                id={chapter.anchor}
                data-index={index}
                data-scroll-align="start"
                className={`pausa-chapter${index === activeChapter ? " is-active" : ""}`}
              >
                <figure className="pausa-chapter-media">
                  <CorpoMedia slot={chapter.slot} alt="" />
                </figure>
                <p className="pausa-chapter-act">{pad(index + 1)} · {chapter.act}</p>
                <h2>{chapter.title}</h2>
                <p className="pausa-chapter-text">{chapter.text}</p>
                {lastOfAct && (
                  <a className="pausa-button" href={corpo.bookingUrl} target="_blank" rel="noopener noreferrer">
                    {chapter.act === "Fisioterapia" ? "Pedir cita de fisioterapia ↗" : "Reservar clase de Pilates ↗"}
                  </a>
                )}
              </li>
            );
          })}
        </ol>
      </section>

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
