import { Mail, Github, Linkedin, Instagram } from 'lucide-react';

export default function Contact() {
  return (
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Contacto</h2>

        {/* FORMULARIO */}
        <form
            action="https://formspree.io/f/mdkerabp"
            method="POST"
            className="mx-auto max-w-xl"
        >
          <input
              type="hidden"
              name="_redirect"
              value="https://portfolio-fedebarriosd.vercel.app/#gracias"
          />

          <label className="text-sm block mb-3">
            Tu nombre
            <input
                type="text"
                name="name"
                required
                className="mt-1 w-full rounded-xl bg-white/10 border border-white/20 px-3 py-2 ring-accent"
            />
          </label>

          <label className="text-sm block mb-3">
            Tu correo
            <input
                type="email"
                name="email"
                required
                className="mt-1 w-full rounded-xl bg-white/10 border border-white/20 px-3 py-2 ring-accent"
            />
          </label>

          <label className="text-sm block mb-4">
            Mensaje
            <textarea
                name="message"
                rows={4}
                required
                className="mt-1 w-full rounded-xl bg-white/10 border border-white/20 px-3 py-2 ring-accent"
            />
          </label>

          <button
              type="submit"
              className="w-full btn-primary"
          >
            Enviar
          </button>
        </form>

        {/* REDES */}
        <div className="text-center mt-6">
          <p className="text-white/80">También podés encontrarme en:</p>
          <div className="mt-3 flex items-center justify-center gap-3">
            <a
                href="mailto:fedebarriosd@gmail.com"
                className="p-2 rounded-lg bg-white/10 border border-white/20 hover:bg-white/15 transition"
                aria-label="Email"
            >
              <Mail size={24} />
            </a>

            <a
                href="https://github.com/Fedebarriosd"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white/10 border border-white/20 hover:bg-white/15 transition"
                aria-label="GitHub"
            >
              <Github size={24} />
            </a>

            <a
                href="https://www.linkedin.com/in/federico-barrios-b29620321"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white/10 border border-white/20 hover:bg-white/15 transition"
                aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>

            <a
                href="https://www.instagram.com/fedebarriosd"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white/10 border border-white/20 hover:bg-white/15 transition"
                aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>
  );
}
