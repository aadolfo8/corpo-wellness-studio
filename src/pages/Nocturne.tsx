import { useState, type KeyboardEvent } from "react";
import { Link } from "react-router-dom";
import aboutStudio from "@/assets/about-studio.jpg";
import fisio from "@/assets/service-fisio.jpg";
import pilates from "@/assets/service-pilates.jpg";
import { corpo } from "@/lib/corpo";
import "./nocturne.css";

const panes = [
  {
    id: "space",
    label: "Ronda Sur",
    code: "CORPO / 01",
    title: "Fisioterapia y Pilates Máquina.",
    text: "Corpo combina fisioterapia y Pilates Máquina en un estudio de Ronda Sur con atención personalizada.",
    image: aboutStudio,
    alt: "Sala luminosa con camilla y plantas",
    accent: "amber",
  },
  {
    id: "fisio",
    label: "Fisioterapia",
    code: "FISIO / 02",
    title: "Fisioterapia, de cerca.",
    text: "Fisioterapia avanzada, terapia manual, ondas de choque, diatermia, presoterapia y recuperación.",
    image: fisio,
    alt: "Manos apoyadas sobre el hombro de una persona",
    accent: "cobalt",
  },
  {
    id: "pilates",
    label: "Pilates Máquina",
    code: "PILATES / 03",
    title: "Movimiento con atención.",
    text: "Pilates Máquina con atención personalizada y una progresión adaptada a cada persona.",
    image: pilates,
    alt: "Persona sentada en un aparato Reformer",
    accent: "oxblood",
  },
  {
    id: "visit",
    label: "Contacto",
    code: "R. SUR / 04",
    title: "Corpo en Ronda Sur.",
    text: corpo.address,
    image: aboutStudio,
    alt: "Sala luminosa con camilla y plantas",
    accent: "amber",
  },
];

const Nocturne = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activePane = panes[activeIndex];

  const selectPane = (index: number) => {
    setActiveIndex(index);
    document.getElementById(`nocturne-tab-${panes[index].id}`)?.focus();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (!["ArrowRight", "ArrowDown", "ArrowLeft", "ArrowUp", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    const next = event.key === "Home"
      ? 0
      : event.key === "End"
        ? panes.length - 1
        : (activeIndex + (event.key === "ArrowRight" || event.key === "ArrowDown" ? 1 : -1) + panes.length) % panes.length;
    selectPane(next);
  };

  return (
    <main className={`nocturne-page nocturne-${activePane.accent}`}>
      <header className="nocturne-header">
        <Link to="/#proposal-nocturne" className="nocturne-logo" aria-label="Volver a la propuesta Nocturne">CORPO<span>·</span></Link>
        <p><span aria-hidden="true" /> Fisioterapia + Pilates Máquina / Ronda Sur</p>
        <a href={corpo.bookingUrl} target="_blank" rel="noopener noreferrer" aria-label="Reservar online (nueva pestaña)">Reservar <b aria-hidden="true">↗</b></a>
      </header>

      <section className="nocturne-scene" aria-labelledby="nocturne-title">
        <div className="nocturne-scene-caption"><span>Una clínica para</span><strong>cuidar tu movimiento.</strong></div>
        <div className="nocturne-title-lockup"><p>Corpo / Fisioterapia + Pilates Máquina</p><h1 id="nocturne-title" aria-label="Moverte"><span aria-hidden="true">MOV<br />ER<br />TE</span></h1></div>
        <div className="nocturne-wall">
          <div id="nocturne-tabs" className="nocturne-pane-tabs" role="tablist" aria-orientation="vertical" aria-label="Recorrido por Corpo">
            {panes.map((pane, index) => (
              <button
                key={pane.id}
                id={`nocturne-tab-${pane.id}`}
                type="button"
                role="tab"
                aria-selected={activeIndex === index}
                aria-controls="nocturne-panel"
                tabIndex={activeIndex === index ? 0 : -1}
                onClick={() => selectPane(index)}
                onKeyDown={handleKeyDown}
              >
                <span>0{index + 1}</span>{pane.label}<b aria-hidden="true">+</b>
              </button>
            ))}
          </div>
          <article id="nocturne-panel" className="nocturne-active-pane" role="tabpanel" aria-labelledby={`nocturne-tab-${activePane.id}`}>
            <div className="nocturne-pane-image"><img src={activePane.image} alt={activePane.alt} /><span>{activePane.code}</span></div>
            <div className="nocturne-pane-copy">
              <p className="nocturne-code">{activePane.code}</p>
              <h2>{activePane.title}</h2>
              <p>{activePane.text}</p>
              <div className="nocturne-actions">
                <a href={corpo.whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Escribir a Corpo por WhatsApp (nueva pestaña)">Cuéntanos por WhatsApp <span aria-hidden="true">↗</span></a>
                {activePane.id === "visit" && <a href={corpo.directionsUrl} target="_blank" rel="noopener noreferrer" aria-label="Cómo llegar a Corpo en Google Maps (nueva pestaña)">Cómo llegar <span aria-hidden="true">↗</span></a>}
              </div>
            </div>
          </article>
        </div>
        <div className="nocturne-wall-footer"><span>Fisioterapia + Pilates Máquina</span><span>Ronda Sur</span></div>
      </section>

      <footer className="nocturne-footer"><Link to="/#proposal-nocturne" className="nocturne-logo" aria-label="Volver a la propuesta Nocturne">CORPO<span>·</span></Link><span><a href={corpo.phoneUrl}>{corpo.phone}</a> · <a href={corpo.emailUrl}>{corpo.email}</a></span><a href={corpo.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram de Corpo (nueva pestaña)">Instagram <span aria-hidden="true">↗</span></a></footer>
    </main>
  );
};

export default Nocturne;
