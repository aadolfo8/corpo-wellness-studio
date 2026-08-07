import { corpo } from "@/lib/corpo";

const contactChannels = [
  {
    label: "WhatsApp",
    detail: "Escribir a Corpo",
    href: corpo.whatsappUrl,
    external: true,
  },
  {
    label: "Teléfono",
    detail: corpo.phone,
    href: corpo.phoneUrl,
    external: false,
  },
  {
    label: "Email",
    detail: corpo.email,
    href: corpo.emailUrl,
    external: false,
  },
];

export const Contact = () => {
  return (
    <section id="contacto" className="bg-background py-28 md:py-40">
      <div className="container-editorial grid md:grid-cols-12 gap-16">
        <div className="md:col-span-6">
          <p className="eyebrow mb-6">— Contacto</p>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05] text-balance mb-8">
            Elige cómo
            <span className="font-display-italic text-primary"> continuar la conversación.</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-md mb-12">
            Reserva online o contacta directamente con Corpo por WhatsApp, teléfono o email.
          </p>

          <dl className="space-y-6">
            <div>
              <dt className="eyebrow mb-2">Dirección</dt>
              <dd className="font-display text-xl leading-relaxed">
                {corpo.addressLines.map((line) => <span key={line} className="block">{line}</span>)}
              </dd>
            </div>
            <div>
              <dt className="eyebrow mb-2">Instagram</dt>
              <dd className="font-display text-xl">
                <a
                  href={corpo.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center hover:text-primary transition-colors motion-reduce:transition-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                >
                  @clinicacorpomurcia
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <div className="md:col-span-6 bg-card p-8 md:p-12 shadow-soft">
          <a
            href={corpo.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex min-h-14 items-center justify-between gap-6 bg-primary px-6 py-4 text-sm tracking-wide text-primary-foreground transition-colors hover:bg-ink motion-reduce:transition-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            <span>Reservar online</span>
            <span aria-hidden="true">Abrir</span>
          </a>

          <div className="mt-10 border-t border-border">
            {contactChannels.map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                target={channel.external ? "_blank" : undefined}
                rel={channel.external ? "noopener noreferrer" : undefined}
                className="group flex min-h-20 items-center justify-between gap-6 border-b border-border py-4 transition-colors hover:text-primary motion-reduce:transition-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                <span className="eyebrow text-foreground/70">{channel.label}</span>
                <span className="text-right font-display text-lg break-all sm:break-normal">{channel.detail}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
