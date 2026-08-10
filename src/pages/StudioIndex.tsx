import { Link } from "react-router-dom";
import aboutStudio from "@/assets/about-studio.jpg";
import serviceRecovery from "@/assets/service-recovery.jpg";
import servicePilates from "@/assets/service-pilates.jpg";
import serviceFisio from "@/assets/service-fisio.jpg";
import heroReformer from "@/assets/hero-reformer.jpg";

const proposals = [
  {
    path: "/wellness",
    number: "01",
    title: "Wellness",
    tag: "Editorial cálida",
    description: "Un lenguaje editorial, calmado y cercano para presentar el cuidado del cuerpo.",
    image: heroReformer,
    position: "object-center",
  },
  {
    path: "/motion",
    number: "02",
    title: "Motion",
    tag: "Ritmo deportivo",
    description: "Una dirección visual intensa, precisa y orientada al movimiento y al rendimiento.",
    image: serviceFisio,
    position: "object-[center_35%]",
  },
  {
    path: "/atelier",
    number: "03",
    title: "Atelier",
    tag: "Galería editorial",
    description: "Una galería de movimiento donde conocer el espacio, el método y las personas detrás de Corpo.",
    image: aboutStudio,
    position: "object-[center_60%]",
  },
  {
    path: "/pulse",
    number: "04",
    title: "Pulse",
    tag: "Orientación interactiva",
    description: "Una propuesta directa y enérgica para entender cómo volver a moverte.",
    image: serviceRecovery,
    position: "object-[center_40%]",
  },
  {
    path: "/terra",
    number: "05",
    title: "Terra",
    tag: "Mediterránea y local",
    description: "Una lectura mediterránea de Corpo: luz, ritmo y una forma más humana de empezar.",
    image: servicePilates,
    position: "object-[center_50%]",
  },
  {
    path: "/clinical",
    number: "06",
    title: "Clinical",
    tag: "Precisión clínica",
    description: "Una interfaz precisa para entender servicios, proceso y formas de contacto.",
    image: serviceFisio,
    position: "object-[center_45%]",
  },
  {
    path: "/nocturne",
    number: "07",
    title: "Nocturne",
    tag: "Escena nocturna",
    description: "Una escena nocturna de paneles para recorrer Corpo a través de sus estados.",
    image: heroReformer,
    position: "object-[center_55%]",
  },
  {
    path: "/restore",
    number: "08",
    title: "Restore",
    tag: "Recuperación guiada",
    description: "Un mapa de recuperación para entender por dónde volver a moverte.",
    image: serviceRecovery,
    position: "object-[center_45%]",
  },
  {
    path: "/reformer",
    number: "09",
    title: "Reformer",
    tag: "Pilates Máquina",
    description: "Una página específica para descubrir Pilates Máquina desde el aparato y la práctica.",
    image: servicePilates,
    position: "object-[center_48%]",
  },
  {
    path: "/trama",
    number: "10",
    title: "Trama",
    tag: "Recorrido guiado",
    description: "Una propuesta de señalización visual para empezar a recuperar el movimiento desde donde estás.",
    image: aboutStudio,
    position: "object-[center_58%]",
  },
  {
    path: "/linea",
    number: "11",
    title: "Línea",
    tag: "Minimalismo editorial",
    description: "Una propuesta clara y serena para empezar a cuidar el cuerpo sin añadir más ruido.",
    image: heroReformer,
    position: "object-[center_52%]",
  },
  {
    path: "/eje",
    number: "12",
    title: "Eje",
    tag: "Brutalismo industrial",
    description: "Una propuesta de señalización precisa que presenta el movimiento como un sistema en marcha.",
    image: serviceFisio,
    position: "object-[center_48%]",
  },
];

const StudioIndex = () => (
  <main className="min-h-screen bg-[#141513] px-5 py-5 text-[#f3f0e9] sm:px-8 sm:py-8 lg:px-12">
    <header className="mx-auto flex max-w-[1500px] items-center justify-between border-b border-white/20 pb-5 font-medium text-xs uppercase tracking-[0.22em]">
      <span>Corpo / propuestas web</span>
      <span>{String(proposals.length).padStart(2, "0")} conceptos</span>
    </header>

    <section className="mx-auto max-w-[1500px] pb-12 pt-20 sm:pt-28">
      <p className="mb-5 font-serif text-lg italic text-[#d9d0bb]">Selección de dirección creativa</p>
      <h1 className="max-w-5xl text-5xl font-light leading-[0.92] tracking-[-0.045em] sm:text-7xl lg:text-8xl">
        Doce direcciones para contar la misma clínica.
      </h1>
      <div className="mt-10 grid max-w-4xl grid-cols-2 gap-x-6 gap-y-3 border-t border-white/20 pt-5 text-[11px] uppercase tracking-[0.18em] text-white/55 sm:grid-cols-4">
        <span>Claridad</span><span>Confianza</span><span>Diferenciación</span><span>Contacto</span>
      </div>
    </section>

    <section className="mx-auto grid max-w-[1500px] gap-5 pb-8 md:grid-cols-2" aria-label="Propuestas de diseño">
      {proposals.map((proposal, index) => (
        <Link
          key={proposal.path}
          to={proposal.path}
          id={`proposal-${proposal.path.slice(1)}`}
          className="group relative isolate min-h-[480px] overflow-hidden bg-[#262721] outline-none ring-[#d9d0bb] focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:ring-offset-[#141513] sm:min-h-[610px]"
        >
          <img
            src={proposal.image}
            alt=""
            loading={index < 2 ? "eager" : "lazy"}
            decoding="async"
            className={`absolute inset-0 -z-10 h-full w-full object-cover opacity-70 transition duration-1000 group-hover:scale-105 group-hover:opacity-90 ${proposal.position}`}
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/10 via-black/10 to-black/80" />
          <div className="flex h-full flex-col justify-between p-6 sm:p-9">
            <div className="flex items-center justify-between text-xs font-medium uppercase tracking-[0.22em]">
              <span>{proposal.number} / {proposal.tag}</span>
              <span className="opacity-70 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100 md:group-focus-visible:opacity-100">Abrir propuesta</span>
            </div>
            <div>
              <h2 className="font-serif text-6xl font-light tracking-[-0.05em] sm:text-7xl">{proposal.title}</h2>
              <p className="mt-4 max-w-sm text-base leading-7 text-white/80">{proposal.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </section>

    <p className="mx-auto max-w-[1500px] border-t border-white/20 pt-5 text-sm text-white/55">
      Abre cada propuesta y compárala por claridad, personalidad, información y facilidad de contacto.
    </p>
  </main>
);

export default StudioIndex;
