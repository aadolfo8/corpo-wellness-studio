import { instagramMedia, type MediaSlot } from "@/lib/instagram-media";

type CorpoMediaProps = {
  slot: MediaSlot;
  /** Imagen de reserva mientras no haya un archivo de Instagram para este hueco. */
  fallback?: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

/** Foto o vídeo de Instagram para un hueco de la página, con imagen de reserva. */
export const CorpoMedia = ({ slot, fallback, alt, className = "", priority = false }: CorpoMediaProps) => {
  const media = instagramMedia(slot);

  if (media?.kind === "video") {
    return (
      <video
        className={className}
        src={media.src}
        autoPlay
        muted
        loop
        playsInline
        preload={priority ? "auto" : "metadata"}
        aria-label={alt || undefined}
        aria-hidden={alt ? undefined : true}
      />
    );
  }

  const src = media?.src ?? fallback;
  if (!src) return null;

  return (
    <img
      className={className}
      src={src}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={priority ? "high" : undefined}
    />
  );
};
