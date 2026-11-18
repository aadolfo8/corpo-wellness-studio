import "./proposal-bar.css";

const proposals = [
  { path: "/", label: "Dúo" },
  { path: "/pausa", label: "Pausa" },
  { path: "/mosaico", label: "Mosaico" },
];

/**
 * Selector flotante para comparar las propuestas de diseño. Solo aparece en las rutas alternativas;
 * esas páginas llevan noindex desde el layout para no competir con la portada.
 */
export const ProposalBar = ({ current }: { current: string }) => (
  <nav className="proposal-bar" aria-label="Propuestas de diseño">
    <span className="proposal-bar-label">Propuesta</span>
    {proposals.map((proposal) => (
      <a key={proposal.path} href={proposal.path} aria-current={current === proposal.path ? "page" : undefined}>
        {proposal.label}
      </a>
    ))}
  </nav>
);
