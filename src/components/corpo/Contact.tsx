export const Contact = () => {
  return (
    <section id="contacto" className="bg-background py-28 md:py-40">
      <div className="container-editorial grid md:grid-cols-12 gap-16">
        <div className="md:col-span-6">
          <p className="eyebrow mb-6">— Contacto</p>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05] text-balance mb-8">
            Empieza hoy. Tu cuerpo
            <span className="font-display-italic text-primary"> te lo agradecerá.</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-md mb-12">
            Reserva tu primera valoración gratuita. Te llamamos para entender
            qué necesitas y diseñar contigo el plan adecuado.
          </p>

          <dl className="space-y-6">
            <div>
              <dt className="eyebrow mb-2">Estudio</dt>
              <dd className="font-display text-xl">Calle ejemplo 12, bajo · Murcia</dd>
            </div>
            <div>
              <dt className="eyebrow mb-2">Horario</dt>
              <dd className="font-display text-xl">Lun – Vie · 8:00 – 21:00</dd>
            </div>
            <div>
              <dt className="eyebrow mb-2">Teléfono</dt>
              <dd className="font-display text-xl">
                <a href="tel:+34968000000" className="hover:text-primary transition-colors">+34 968 00 00 00</a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow mb-2">Instagram</dt>
              <dd className="font-display text-xl">
                <a
                  href="https://www.instagram.com/clinicacorpomurcia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  @clinicacorpomurcia
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <form
          className="md:col-span-6 bg-card p-8 md:p-12 shadow-soft space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            alert("¡Gracias! Te contactaremos en breve.");
          }}
        >
          <div>
            <label htmlFor="name" className="eyebrow block mb-2">Nombre</label>
            <input
              id="name"
              required
              className="w-full bg-transparent border-b border-border py-3 focus:border-primary focus:outline-none transition-colors"
            />
          </div>
          <div>
            <label htmlFor="email" className="eyebrow block mb-2">Email</label>
            <input
              id="email"
              type="email"
              required
              className="w-full bg-transparent border-b border-border py-3 focus:border-primary focus:outline-none transition-colors"
            />
          </div>
          <div>
            <label htmlFor="phone" className="eyebrow block mb-2">Teléfono</label>
            <input
              id="phone"
              type="tel"
              className="w-full bg-transparent border-b border-border py-3 focus:border-primary focus:outline-none transition-colors"
            />
          </div>
          <div>
            <label htmlFor="msg" className="eyebrow block mb-2">¿En qué podemos ayudarte?</label>
            <textarea
              id="msg"
              rows={4}
              className="w-full bg-transparent border-b border-border py-3 focus:border-primary focus:outline-none transition-colors resize-none"
            />
          </div>
          <button
            type="submit"
            className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-sm tracking-wide hover:bg-ink transition-colors"
          >
            Enviar solicitud
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </button>
        </form>
      </div>
    </section>
  );
};
