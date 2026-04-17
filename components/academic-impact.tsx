import { BookText, Calculator, FlaskConical, Globe2 } from "lucide-react"
import { Reveal } from "@/components/reveal"

const subjects = [
  {
    icon: BookText,
    title: "Español & Redacción",
    description: "Documentos, ortografía digital, presentaciones.",
  },
  {
    icon: Calculator,
    title: "Matemáticas",
    description: "Hojas de cálculo, gráficas, resolución de problemas.",
  },
  {
    icon: Globe2,
    title: "Ciencias Sociales",
    description: "Búsqueda de información confiable, mapas digitales.",
  },
  {
    icon: FlaskConical,
    title: "Ciencias",
    description: "Simuladores online, presentaciones visuales, investigación.",
  },
]

export function AcademicImpact() {
  return (
    <section className="relative overflow-hidden bg-brand-navy py-16 text-white sm:py-20 lg:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:28px_28px]"
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-heading text-sm font-bold tracking-wide text-brand-orange uppercase">
              Más que computación
            </p>
            <h2 className="mt-3 text-3xl text-white text-balance sm:text-4xl lg:text-5xl">
              La tecnología mejora el rendimiento en{" "}
              <span className="text-brand-orange">TODAS</span> las materias
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/75 sm:text-lg">
              No enseñamos solo computación: damos herramientas que se usan en toda la vida escolar.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {subjects.map((subject, i) => (
            <Reveal key={subject.title} delay={i * 100}>
              <div className="group h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-orange/40 hover:bg-white/10">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-orange/15 text-brand-orange ring-1 ring-brand-orange/30 transition-colors group-hover:bg-brand-orange group-hover:text-white">
                  <subject.icon className="h-6 w-6" strokeWidth={2} aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-heading text-lg text-white sm:text-xl">
                  {subject.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">
                  {subject.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
