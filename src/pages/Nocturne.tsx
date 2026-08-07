import { useState, type KeyboardEvent } from "react";
import { Link } from "react-router-dom";
import aboutStudio from "@/assets/about-studio.jpg";
import fisio from "@/assets/service-fisio.jpg";
import pilates from "@/assets/service-pilates.jpg";
import "./nocturne.css";

const bookingUrl = "https://appclinicacorpo.viday.es/";
const whatsappUrl = "https://api.whatsapp.com/send?phone=34624060340&text=Hola%20Corpo%2C%20me%20gustar%C3%ADa%20pedir%20cita.";
const mapsUrl = "https://www.google.com/maps/place/?q=place_id:ChIJCd3Qckl5Yw0R4g0ilsJ_AZ4";

const panes = [
  {
    id: "space",
    label: "El espacio",
    code: "ROOM / 01",
    title: "Deja el ruido fuera.",
    text: "Corpo es un estudio de fisioterapia y Pilates Máquina en Ronda Sur. Un lugar para mirar de cerca lo que necesita tu cuerpo.",
    image: aboutStudio,
    accent: "amber",
  },
  {
    id: "method",
    label: "El método",
    code: "METHOD / 02",
    title: "Primero entender.",
    text: "Escuchar, valorar y elegir el tratamiento, el ejercicio o la práctica que tiene sentido para ti.",
    image: fisio,
    accent: "cobalt",
  },
  {
    id: "sessions",
    label: "Las sesiones",
    code: "WORK / 03",
    title: "Movimiento con atención.",
    text: "Fisioterapia avanzada, Pilates Máquina, terapia manual y tecnología de apoyo cuando la valoración lo indica.",
    image: pilates,
    accent: "oxblood",
  },
  {
    id: "visit",
    label: "La visita",
    code: "DOOR / 04",
    title: "Ven a conocernos.",
    text: "Estamos en C. Pedáneo José Sánchez Mompeán, 16, Bajo, 30010 San Benito - Patiño, Murcia.",
    image: aboutStudio,
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
        <Link to="/" className="nocturne-logo" aria-label="Volver a propuestas">CORPO<span>·</span></Link>
        <p><span aria-hidden="true" /> Estudio abierto / Ronda Sur</p>
        <a href={bookingUrl} target="_blank" rel="noopener noreferrer" aria-label="Reservar online (nueva pestaña)">Reservar <b aria-hidden="true">↗</b></a>
      </header>

      <section className="nocturne-scene" aria-labelledby="nocturne-title">
        <div className="nocturne-scene-caption"><span>Una clínica para</span><strong>moverte mejor.</strong></div>
        <div className="nocturne-title-lockup"><p>Corpo / Murcia / 2026</p><h1 id="nocturne-title">NOC<br />TUR<br />NE</h1></div>
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
            <div className="nocturne-pane-image"><img src={activePane.image} alt={activePane.id === "visit" ? "Interior de Clínica Corpo en Murcia" : ""} /><span>{activePane.code}</span></div>
            <div className="nocturne-pane-copy">
              <p className="nocturne-code">{activePane.code}</p>
              <h2>{activePane.title}</h2>
              <p>{activePane.text}</p>
              {activePane.id === "visit" ? (
                <div className="nocturne-actions"><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Escribir por WhatsApp (nueva pestaña)">WhatsApp <span aria-hidden="true">↗</span></a><a href={mapsUrl} target="_blank" rel="noopener noreferrer" aria-label="Ver ubicación en Google Maps (nueva pestaña)">Cómo llegar <span aria-hidden="true">↗</span></a></div>
              ) : <a className="nocturne-pane-link" href="#nocturne-tabs">Cambiar de panel <span aria-hidden="true">↓</span></a>}
            </div>
          </article>
        </div>
        <div className="nocturne-wall-footer"><span>Cuatro formas de entrar</span><span>01 — 04</span></div>
      </section>

      <footer className="nocturne-footer"><Link to="/" className="nocturne-logo">CORPO<span>·</span></Link><span><a href="tel:+34624060340">624 06 03 40</a> · <a href="mailto:clinicacorporondasur@gmail.com">clinicacorporondasur@gmail.com</a></span><a href="https://www.instagram.com/clinicacorpomurcia/" target="_blank" rel="noopener noreferrer" aria-label="Instagram de Corpo (nueva pestaña)">Instagram <span aria-hidden="true">↗</span></a></footer>
    </main>
  );
};

export default Nocturne;
