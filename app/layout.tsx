import type { Metadata, Viewport } from "next"
import { Nunito, DM_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LazyMotionProvider } from "@/components/lazy-motion-provider"
import "./globals.css"

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-heading",
  display: "swap",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
})

export const metadata: Metadata = {
  title: "CompuClub · Cursos de computación para niños y adultos",
  description:
    "CompuClub: centro de educación en computación para niños y adultos en México. Clases prácticas, grupos pequeños y un enfoque académico que mejora tu rendimiento escolar.",
  generator: "v0.app",
  keywords: [
    "CompuClub",
    "cursos de computación",
    "computación para niños",
    "computación para adultos",
    "clases de computación México",
  ],
  openGraph: {
    title: "CompuClub · Aprende computación y transforma tu futuro",
    description:
      "Cursos de computación para niños y adultos con enfoque práctico y académico.",
    type: "website",
    locale: "es_MX",
  },
}

export const viewport: Viewport = {
  themeColor: "#1B3A6B",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${nunito.variable} ${dmSans.variable} bg-background`}>
      <body className="font-sans antialiased">
        <LazyMotionProvider>{children}</LazyMotionProvider>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
