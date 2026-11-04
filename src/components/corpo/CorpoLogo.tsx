/**
 * Logotipo de Corpo reconstruido en vector a partir de su perfil de Instagram. Hereda el color del texto.
 * El viewBox cubre desde la x-height (y≈66) hasta el final del trazo de la «p» (y≈195) para no cortarla.
 */
export const CorpoLogo = ({ className = "", showTagline = true }: { className?: string; showTagline?: boolean }) => (
  <svg
    className={className}
    viewBox="-4 58 478 144"
    fill="currentColor"
    role="img"
    aria-label="Corpo, clínica de fisioterapia y Pilates"
  >
    <text x="0" y="150" fontFamily="Prata, serif" fontSize="160" letterSpacing="3">corpo</text>
    {showTagline && (
      <g fontFamily="'DM Sans', sans-serif" fontSize="10.5" fontWeight="400">
        <text x="206" y="173" textLength="62" lengthAdjust="spacing">CLINICA</text>
        <text x="300" y="173" textLength="166" lengthAdjust="spacing">FISIO &amp; PILATES</text>
      </g>
    )}
  </svg>
);
