import Image from "next/image"
import Link from "next/link"
import { Facebook, Mail, MapPin, Phone } from "lucide-react"

function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.02 0C5.41 0 .04 5.37.04 11.98c0 2.11.55 4.17 1.6 5.99L0 24l6.2-1.62a11.94 11.94 0 0 0 5.82 1.49h.01c6.61 0 11.98-5.37 11.98-11.98 0-3.2-1.25-6.21-3.49-8.41ZM12.03 21.3h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.22-3.68.96.98-3.59-.24-.37a9.89 9.89 0 0 1-1.52-5.27c0-5.47 4.45-9.92 9.93-9.92 2.65 0 5.14 1.04 7.01 2.91a9.85 9.85 0 0 1 2.9 7.02c0 5.48-4.45 9.86-9.96 9.86Zm5.47-7.42c-.3-.15-1.77-.88-2.05-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.95 1.18-.18.2-.35.23-.65.08-.3-.15-1.26-.47-2.4-1.49-.89-.79-1.49-1.77-1.66-2.07-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.68-1.64-.93-2.24-.24-.58-.49-.5-.68-.51l-.58-.01c-.2 0-.53.08-.8.38-.28.3-1.05 1.03-1.05 2.52s1.08 2.92 1.23 3.12c.15.2 2.13 3.25 5.15 4.56 3.02 1.3 3.02.87 3.57.82.55-.05 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.12-.28-.2-.58-.35Z" />
    </svg>
  )
}

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-brand-navy text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:28px_28px]"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-2 shadow-lg ring-1 ring-white/10">
            <Image
              src="/logo.png"
              alt="CompuClub logo"
              width={160}
              height={44}
              className="h-10 w-auto"
            />
          </div>
          <p className="mt-5 max-w-md font-heading text-lg leading-snug text-white text-balance sm:text-xl">
            Transformando el futuro digital de nuestra comunidad
          </p>
        </div>

        <nav
          aria-label="Enlaces rápidos"
          className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-semibold"
        >
          <Link href="#" className="text-white/85 transition-colors hover:text-brand-orange">
            Inicio
          </Link>
          <span aria-hidden="true" className="text-white/25">•</span>
          <Link href="#cursos" className="text-white/85 transition-colors hover:text-brand-orange">
            Cursos
          </Link>
          <span aria-hidden="true" className="text-white/25">•</span>
          <Link
            href="#encuentranos"
            className="text-white/85 transition-colors hover:text-brand-orange"
          >
            Contacto
          </Link>
        </nav>

        <div className="mt-10 grid grid-cols-1 gap-4 text-sm text-white/80 sm:grid-cols-3">
          <div className="flex items-center justify-center gap-2 sm:justify-start">
            <Phone className="h-4 w-4 text-brand-orange" aria-hidden="true" />
            <span>{"[Teléfono]"}</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Mail className="h-4 w-4 text-brand-orange" aria-hidden="true" />
            <span>{"[Email]"}</span>
          </div>
          <div className="flex items-center justify-center gap-2 sm:justify-end">
            <MapPin className="h-4 w-4 text-brand-orange" aria-hidden="true" />
            <span>{"[Dirección]"}</span>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-3">
          <Link
            href="https://www.facebook.com/people/CompuClub/61579701570982/"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-all hover:scale-110 hover:border-brand-orange hover:bg-brand-orange"
          >
            <Facebook className="h-5 w-5" aria-hidden="true" />
          </Link>
          <Link
            href="https://wa.me/523321916387?text=Hola%20CompuClub%2C%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20cursos"
            aria-label="WhatsApp"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-all hover:scale-110 hover:border-brand-orange hover:bg-brand-orange"
          >
            <WhatsAppGlyph className="h-5 w-5" />
          </Link>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/60">
          © 2025 CompuClub. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}
