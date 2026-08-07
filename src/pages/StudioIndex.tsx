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
    description: "Un lenguaje editorial, calmado y cercano para presentar el cuidado del cuerpo.",
    image: heroReformer,
    position: "object-center",
  },
  {
    path: "/motion",
    number: "02",
    title: "Motion",
    description: "Una dirección visual intensa, precisa y orientada al movimiento y al rendimiento.",
    image: serviceFisio,
    position: "object-[center_35%]",
  },
  {
    path: "/atelier",
    number: "03",
    title: "Atelier",
    description: "Una galería de movimiento donde conocer el espacio, el método y las personas detrás de Corpo.",
    image: aboutStudio,
    position: "object-[center_60%]",
  },
  {
    path: "/pulse",
    number: "04",
    title: "Pulse",
    description: "Una propuesta directa y enérgica para entender cómo volver a moverte.",
    image: serviceRecovery,
    position: "object-[center_40%]",
  },
  {
    path: "/terra",
    number: "05",
    title: "Terra",
    description: "Una lectura mediterránea de Corpo: luz, ritmo y una forma más humana de empezar.",
    image: servicePilates,
    position: "object-[center_50%]",
  },
  {
    path: "/clinical",
    number: "06",
    title: "Clinical",
    description: "Una interfaz precisa para entender servicios, proceso y formas de contacto.",
    image: serviceFisio,
    position: "object-[center_45%]",
  },
  {
    path: "/nocturne",
    number: "07",
    title: "Nocturne",
    description: "Una escena nocturna de paneles para recorrer Corpo a través de sus estados.",
    image: heroReformer,
    position: "object-[center_55%]",
  },
  {
    path: "/restore",
    number: "08",
    title: "Restore",
    description: "Un mapa de recuperación para entender por dónde volver a moverte.",
    image: serviceRecovery,
    position: "object-[center_45%]",
  },
  {
    path: "/reformer",
    number: "09",
    title: "Reformer",
    description: "Una página específica para descubrir Pilates Máquina desde el aparato y la práctica.",
    image: servicePilates,
    position: "object-[center_48%]",
  },
];

const StudioIndex = () => (
  <main className="min-h-screen bg-[#141513] px-5 py-5 text-[#f3f0e9] sm:px-8 sm:py-8 lg:px-12">
    <header className="mx-auto flex max-w-[1500px] items-center justify-between border-b border-white/20 pb-5 font-medium text-xs uppercase tracking-[0.22em]">
      <span>Corpo / propuestas web</span>
      <span>09 conceptos</span>
    </header>

    <section className="mx-auto max-w-[1500px] pb-12 pt-20 sm:pt-28">
      <p className="mb-5 font-serif text-lg italic text-[#d9d0bb]">Selección de dirección creativa</p>
      <h1 className="max-w-5xl text-5xl font-light leading-[0.92] tracking-[-0.045em] sm:text-7xl lg:text-8xl">
        Dos maneras de contar la misma clínica.
      </h1>
    </section>

    <section className="mx-auto grid max-w-[1500px] gap-5 pb-8 md:grid-cols-2" aria-label="Propuestas de diseño">
      {proposals.map((proposal) => (
        <Link
          key={proposal.path}
          to={proposal.path}
          className="group relative isolate min-h-[520px] overflow-hidden bg-[#262721] sm:min-h-[650px]"
        >
          <img
            src={proposal.image}
            alt=""
            className={`absolute inset-0 -z-10 h-full w-full object-cover opacity-70 transition duration-1000 group-hover:scale-105 group-hover:opacity-90 ${proposal.position}`}
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/10 via-black/10 to-black/80" />
          <div className="flex h-full flex-col justify-between p-6 sm:p-9">
            <div className="flex items-center justify-between text-xs font-medium uppercase tracking-[0.22em]">
              <span>{proposal.number}</span>
              <span className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">Abrir propuesta</span>
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
      Esta portada está preparada para añadir nuevas propuestas sin alterar las existentes.
    </p>
  </main>
);

export default StudioIndex;
