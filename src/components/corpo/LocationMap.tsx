import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Murcia centro aprox.
const POSITION: [number, number] = [37.9847, -1.1281];

export const LocationMap = () => {
  const ref = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!ref.current || mapRef.current) return;

    const map = L.map(ref.current, {
      center: POSITION,
      zoom: 15,
      scrollWheelZoom: false,
      zoomControl: false,
      attributionControl: false,
    });
    mapRef.current = map;

    // Stadia "Stamen Toner Lite" — minimal monochrome, fits our editorial palette
    L.tileLayer(
      "https://tiles.stadiamaps.com/tiles/stamen_toner_lite/{z}/{x}/{y}{r}.png",
      {
        maxZoom: 20,
        attribution:
          '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    ).addTo(map);

    L.control.zoom({ position: "bottomright" }).addTo(map);
    L.control.attribution({ position: "bottomleft", prefix: false }).addTo(map);

    const icon = L.divIcon({
      className: "corpo-marker",
      html: `
        <div class="relative flex items-center justify-center">
          <span class="absolute inline-flex h-12 w-12 rounded-full bg-[hsl(var(--primary))] opacity-30 animate-ping"></span>
          <span class="relative inline-flex h-5 w-5 rounded-full bg-[hsl(var(--primary))] ring-4 ring-[hsl(var(--background))] shadow-lg"></span>
        </div>`,
      iconSize: [24, 24],
      iconAnchor: [12, 12],
    });

    L.marker(POSITION, { icon })
      .addTo(map)
      .bindPopup(
        `<div style="font-family: 'Fraunces', serif; padding: 4px 6px;">
           <strong style="font-size:15px;">CORPO Murcia</strong><br/>
           <span style="font-family:'Inter',sans-serif;font-size:12px;color:#6b6357;">Calle ejemplo 12, bajo</span>
         </div>`
      );

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  return (
    <section id="ubicacion" className="bg-card py-28 md:py-40">
      <div className="container-editorial">
        <div className="grid md:grid-cols-12 gap-10 items-end mb-16">
          <div className="md:col-span-3">
            <p className="eyebrow">— Ubicación</p>
          </div>
          <h2 className="md:col-span-9 font-display text-4xl md:text-6xl leading-[1.05] text-balance">
            En el corazón de Murcia,
            <span className="font-display-italic text-primary"> fácil de encontrar.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-12 gap-8 lg:gap-12">
          <div className="md:col-span-8 group relative overflow-hidden shadow-soft">
            <div
              ref={ref}
              className="h-[460px] md:h-[560px] w-full transition-all duration-700 [filter:saturate(0.85)_contrast(0.95)] group-hover:[filter:saturate(1)_contrast(1)]"
              aria-label="Mapa de la ubicación de CORPO en Murcia"
            />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-foreground/5" />
          </div>

          <aside className="md:col-span-4 bg-background p-8 md:p-10 shadow-soft flex flex-col justify-between">
            <div>
              <p className="eyebrow mb-3">Visítanos</p>
              <h3 className="font-display text-3xl mb-6 leading-tight">
                Estudio CORPO<br />
                <span className="font-display-italic text-primary">Murcia centro</span>
              </h3>
              <dl className="space-y-5 text-sm leading-relaxed">
                <div>
                  <dt className="eyebrow mb-1">Dirección</dt>
                  <dd className="text-foreground/85">Calle ejemplo 12, bajo<br />30001 Murcia</dd>
                </div>
                <div>
                  <dt className="eyebrow mb-1">Horario</dt>
                  <dd className="text-foreground/85">Lun – Vie · 8:00 – 21:00</dd>
                </div>
                <div>
                  <dt className="eyebrow mb-1">Cómo llegar</dt>
                  <dd className="text-foreground/85">2 min andando del Jardín de Floridablanca · parking cercano</dd>
                </div>
              </dl>
            </div>
            <a
              href={`https://www.openstreetmap.org/?mlat=${POSITION[0]}&mlon=${POSITION[1]}#map=17/${POSITION[0]}/${POSITION[1]}`}
              target="_blank"
              rel="noopener noreferrer"
              className="story-link mt-10 inline-flex items-center gap-2 text-sm tracking-wide text-primary self-start"
            >
              Abrir en el mapa
              <span aria-hidden>→</span>
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
};
