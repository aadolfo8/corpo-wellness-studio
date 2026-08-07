import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { corpo } from "@/lib/corpo";
import "./corpo-map.css";

type CorpoMapProps = {
  variant: "wellness" | "terra";
  className?: string;
};

export const CorpoMap = ({ variant, className = "" }: CorpoMapProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const [ready, setReady] = useState(false);
  const [tileError, setTileError] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (!("IntersectionObserver" in window)) {
      setReady(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setReady(true);
        observer.disconnect();
      },
      { rootMargin: "320px" },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!ready || !container || mapRef.current) return;

    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const map = L.map(container, {
      center: corpo.coordinates,
      zoom: 16,
      scrollWheelZoom: false,
      dragging: !coarsePointer,
      touchZoom: !coarsePointer,
      zoomControl: false,
      attributionControl: false,
    });
    mapRef.current = map;

    const tiles = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    });
    tiles.on("tileerror", () => setTileError(true));
    tiles.addTo(map);

    L.control.zoom({ position: "bottomright" }).addTo(map);
    L.control.attribution({ position: "bottomleft", prefix: false }).addTo(map);

    const icon = L.divIcon({
      className: "corpo-map-marker",
      html: '<span class="corpo-map-marker__dot"></span><span class="corpo-map-marker__label">Corpo</span>',
      iconSize: [88, 38],
      iconAnchor: [15, 19],
    });

    L.marker(corpo.coordinates, {
      icon,
      keyboard: true,
      title: `${corpo.name}, ${corpo.address}`,
    })
      .addTo(map)
      .bindPopup(`<strong>Corpo</strong><br>${corpo.addressLines.join("<br>")}`);

    requestAnimationFrame(() => {
      const zoomIn = container.querySelector<HTMLAnchorElement>(".leaflet-control-zoom-in");
      const zoomOut = container.querySelector<HTMLAnchorElement>(".leaflet-control-zoom-out");
      const close = container.querySelector<HTMLAnchorElement>(".leaflet-popup-close-button");
      if (zoomIn) {
        zoomIn.title = "Acercar el mapa";
        zoomIn.setAttribute("aria-label", "Acercar el mapa");
      }
      if (zoomOut) {
        zoomOut.title = "Alejar el mapa";
        zoomOut.setAttribute("aria-label", "Alejar el mapa");
      }
      if (close) {
        close.title = "Cerrar información";
        close.setAttribute("aria-label", "Cerrar información");
      }
    });

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, [ready]);

  return (
    <div className={`corpo-map-shell corpo-map-shell--${variant} ${className}`}>
      <div
        ref={containerRef}
        className="corpo-map"
        role="region"
        aria-label={`Mapa de la ubicación de Corpo en ${corpo.address}`}
        aria-busy={!ready}
      />
      {!ready && <p className="corpo-map-status">Preparando mapa...</p>}
      {tileError && (
        <p className="corpo-map-status corpo-map-status--error">
          El mapa no ha podido cargarse. Usa el enlace de indicaciones.
        </p>
      )}
    </div>
  );
};
