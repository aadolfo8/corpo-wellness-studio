/**
 * Fotos y vídeos sacados del Instagram de Corpo.
 * Basta con dejar un archivo en src/assets/instagram con uno de estos nombres
 * (por ejemplo `pilates.mp4` o `fisio.jpg`) para que sustituya a la imagen de reserva.
 */
export type MediaSlot =
  | "hero-pilates"
  | "hero-fisio"
  | "pilates"
  | "pilates-1"
  | "pilates-2"
  | "pilates-3"
  | "fisio"
  | "fisio-manual"
  | "fisio-diatermia"
  | "fisio-ondas"
  | "ecografia"
  | "clinica";

export type Media = { kind: "image" | "video"; src: string };

const files = import.meta.glob<string>("/src/assets/instagram/*.{jpg,jpeg,png,webp,avif,mp4,webm}", {
  eager: true,
  import: "default",
});

const bySlot = new Map<string, Media>();
for (const [path, src] of Object.entries(files)) {
  const name = path.split("/").pop()!;
  const slot = name.slice(0, name.lastIndexOf("."));
  const kind = /\.(mp4|webm)$/i.test(name) ? "video" : "image";
  // Si hay foto y vídeo para el mismo hueco, gana el vídeo.
  if (bySlot.get(slot)?.kind === "video") continue;
  bySlot.set(slot, { kind, src });
}

export const instagramMedia = (slot: MediaSlot): Media | undefined => bySlot.get(slot);

export const hasInstagramMedia = (slot: MediaSlot) => bySlot.has(slot);
