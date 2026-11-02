import { Link } from "react-router-dom";
import aboutStudio from "@/assets/about-studio.jpg";
import serviceRecovery from "@/assets/service-recovery.jpg";
import servicePilates from "@/assets/service-pilates.jpg";
import serviceFisio from "@/assets/service-fisio.jpg";
import heroReformer from "@/assets/hero-reformer.jpg";

const proposals = [
  {
    path: "/duo",
    number: "A",
    title: "Dúo",
    tag: "Dos servicios, una cita",
    description: "La portada partida en dos: fisioterapia a un lado, Pilates al otro y el botón de cita en el centro.",
    image: servicePilates,
    position: "object-[center_45%]",
  },
  {
    path: "/uniforme",
    number: "B",
    title: "Uniforme",
    tag: "El verde de la camiseta",
    description: "Inspirada en el uniforme del equipo: verde y beige, costuras como detalle y la cita siempre a mano.",
    image: heroReformer,
    position: "object-[center_52%]",
  },
  {
    path: "/consulta",
    number: "C",
    title: "Consulta",
    tag: "Clara y directa",
    description: "Fichas de servicio desde el primer vistazo, el ecógrafo como protagonista y contacto sobre el mapa.",
    image: serviceFisio,
    position: "object-[center_40%]",
  },
];

const discarded = [
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
    description: "Una galería editorial para conocer los servicios, las modalidades de Pilates y el contacto de Corpo.",
    image: aboutStudio,
    position: "object-[center_60%]",
  },
  {
    path: "/pulse",
    number: "04",
    title: "Pulse",
    tag: "Orientación interactiva",
    description: "Un índice interactivo de servicios y recursos publicados, sin recomendaciones clínicas.",
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
    description: "Una interfaz precisa para distinguir servicios, modalidades, recursos y formas de contacto.",
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
    description: "Un mapa de preguntas sobre movimiento para conversar con la clínica sin elegir un tratamiento.",
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
  <main className="min-h-screen bg-[#18211b] px-5 py-5 text-[#f1e9da] sm:px-8 sm:py-8 lg:px-12">
    <header className="mx-auto flex max-w-[1500px] items-center justify-between border-b border-white/20 pb-5 font-medium text-xs uppercase tracking-[0.22em]">
      <span>Corpo / propuestas web</span>
      <span>{String(proposals.length).padStart(2, "0")} nuevas · {discarded.length} descartes</span>
    </header>

    <section className="mx-auto max-w-[1500px] pb-12 pt-20 sm:pt-28">
      <p className="mb-5 font-serif text-lg italic text-[#d9cba8]">Segunda ronda · beige y verde</p>
      <h1 className="max-w-5xl text-5xl font-light leading-[0.92] tracking-[-0.045em] sm:text-7xl lg:text-8xl">
        Fisioterapia y Pilates, a primera vista.
      </h1>
      <div className="mt-10 grid max-w-4xl grid-cols-2 gap-x-6 gap-y-3 border-t border-white/20 pt-5 text-[11px] uppercase tracking-[0.18em] text-white/55 sm:grid-cols-4">
        <span>Los dos servicios</span><span>Pedir cita visible</span><span>Ecógrafo</span><span>Contacto y mapa</span>
      </div>
    </section>

    <section className="mx-auto grid max-w-[1500px] gap-5 pb-8 lg:grid-cols-3" aria-label="Propuestas de diseño">
      {proposals.map((proposal) => (
        <Link
          key={proposal.path}
          to={proposal.path}
          id={`proposal-${proposal.path.slice(1)}`}
          className="group relative isolate min-h-[480px] overflow-hidden bg-[#2f4a3a] outline-none ring-[#d9cba8] focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:ring-offset-[#18211b] sm:min-h-[600px]"
        >
          <img
            src={proposal.image}
            alt=""
            loading="eager"
            decoding="async"
            className={`absolute inset-0 -z-10 h-full w-full object-cover opacity-70 transition duration-1000 group-hover:scale-105 group-hover:opacity-90 ${proposal.position}`}
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/10 via-black/10 to-black/80" />
          <div className="flex h-full flex-col justify-between p-6 sm:p-9">
            <div className="flex items-center justify-between text-xs font-medium uppercase tracking-[0.22em]">
              <span>{proposal.number} / {proposal.tag}</span>
              <span className="opacity-70 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100 md:group-focus-visible:opacity-100">Abrir</span>
            </div>
            <div>
              <h2 className="font-serif text-6xl font-light tracking-[-0.05em] sm:text-7xl">{proposal.title}</h2>
              <p className="mt-4 max-w-sm text-base leading-7 text-white/80">{proposal.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </section>

    <section className="mx-auto max-w-[1500px] border-t border-white/20 pb-10 pt-16" aria-labelledby="discarded-title">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <h2 id="discarded-title" className="text-3xl font-light tracking-[-0.03em] sm:text-4xl">Descartes</h2>
        <p className="max-w-md text-sm text-white/55">Primera ronda de direcciones. Se quedan como referencia, pero no siguen adelante.</p>
      </div>
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {discarded.map((proposal) => (
          <li key={proposal.path}>
            <Link
              to={proposal.path}
              id={`proposal-${proposal.path.slice(1)}`}
              className="group flex items-center gap-4 border border-white/15 p-3 opacity-70 outline-none ring-[#d9cba8] transition hover:border-white/40 hover:opacity-100 focus-visible:opacity-100 focus-visible:ring-2"
            >
              <img src={proposal.image} alt="" loading="lazy" decoding="async" className={`h-16 w-16 flex-none object-cover grayscale transition group-hover:grayscale-0 ${proposal.position}`} />
              <span className="min-w-0">
                <span className="block text-[11px] uppercase tracking-[0.18em] text-white/50">{proposal.number} / {proposal.tag}</span>
                <span className="block font-serif text-2xl font-light tracking-[-0.03em]">{proposal.title}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  </main>
);

export default StudioIndex;
