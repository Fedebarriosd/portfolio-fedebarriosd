import React from 'react';
import { Mail, Github, Linkedin, Instagram, MessageCircle } from 'lucide-react';
import { Reveal } from './Reveal';

const socials = [
  {
    href: 'mailto:fedebarriosd@proton.me',
    Icon: Mail,
    label: 'Email',
  },
  {
    href: 'https://wa.me/595981598367?text=Hola%20Fede%2C%20vi%20tu%20portfolio%20y%20quiero%20contactarte',
    Icon: MessageCircle,
    label: 'WhatsApp',
  },
  {
    href: 'https://github.com/Fedebarriosd',
    Icon: Github,
    label: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/federico-barrios-b29620321',
    Icon: Linkedin,
    label: 'LinkedIn',
  },
  {
    href: 'https://www.instagram.com/fedebarriosd',
    Icon: Instagram,
    label: 'Instagram',
  },
];

export default function Contact() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      {/* Page header */}
      <Reveal>
        <div className="flex items-baseline gap-4 mb-12">
          <span className="text-orange-500 font-bold text-sm uppercase tracking-widest">04</span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight">Hablemos</h1>
        </div>
      </Reveal>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Left: info */}
        <Reveal delay={0.05}>
          <p className="text-lg text-zinc-500 leading-relaxed max-w-md">
            Si tenés un proyecto en mente, una propuesta laboral o simplemente querés saludar, escribime.
            Respondo rápido.
          </p>

          <a
            href="mailto:fedebarriosd@proton.me"
            className="mt-8 block text-xl font-bold text-zinc-900 hover:text-orange-500 transition-colors break-all"
          >
            fedebarriosd@proton.me
          </a>

          <div className="mt-8">
            <p className="text-sm font-semibold text-zinc-400 uppercase tracking-widest mb-4">
              También en
            </p>
            <div className="flex gap-3">
              {socials.map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noreferrer"
                  aria-label={label}
                  className="p-2.5 rounded-xl border border-stone-200 text-zinc-500
                             hover:border-orange-400 hover:text-orange-500 transition-colors"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Right: form */}
        <Reveal delay={0.1}>
          <form
            action="https://formspree.io/f/mdkerabp"
            method="POST"
            className="flex flex-col gap-4"
          >
            <input
              type="hidden"
              name="_redirect"
              value={`${window.location.origin}/gracias`}
            />

            <label className="flex flex-col gap-1.5 text-sm font-medium text-zinc-700">
              Tu nombre
              <input
                type="text"
                name="name"
                required
                placeholder="Federico Barrios"
                className="rounded-xl border border-stone-200 bg-white px-4 py-2.5 text-zinc-900
                           placeholder:text-zinc-400 ring-accent transition-colors
                           hover:border-stone-300 focus:border-orange-400"
              />
            </label>

            <label className="flex flex-col gap-1.5 text-sm font-medium text-zinc-700">
              Tu correo
              <input
                type="email"
                name="email"
                required
                placeholder="tu@email.com"
                className="rounded-xl border border-stone-200 bg-white px-4 py-2.5 text-zinc-900
                           placeholder:text-zinc-400 ring-accent transition-colors
                           hover:border-stone-300 focus:border-orange-400"
              />
            </label>

            <label className="flex flex-col gap-1.5 text-sm font-medium text-zinc-700">
              Mensaje
              <textarea
                name="message"
                rows={5}
                required
                placeholder="Hola Fede, quería consultarte sobre..."
                className="rounded-xl border border-stone-200 bg-white px-4 py-2.5 text-zinc-900
                           placeholder:text-zinc-400 ring-accent transition-colors resize-none
                           hover:border-stone-300 focus:border-orange-400"
              />
            </label>

            <button type="submit" className="btn-primary justify-center mt-1">
              Enviar
            </button>
          </form>
        </Reveal>
      </div>
    </div>
  );
}
