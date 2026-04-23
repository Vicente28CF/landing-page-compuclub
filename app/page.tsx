import { About } from "@/components/about"
import { AdultEmotionalHook } from "@/components/adult-emotional-hook"
import { Courses } from "@/components/courses"
import { DayAtCompuClub } from "@/components/day-at-compuclub"
import { EnrollmentSteps } from "@/components/enrollment-steps"
import { Faq } from "@/components/faq"
import { Flyers } from "@/components/flyers"
import { Hero } from "@/components/hero"
import { SiteFooter } from "@/components/site-footer"
import { SocialLocation } from "@/components/social-location"
import { SocialProofBar } from "@/components/social-proof-bar"
import { Testimonials } from "@/components/testimonials"
import { UrgencyBanner } from "@/components/urgency-banner"
import { ValueProps } from "@/components/value-props"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function HomePage() {
  return (
    <main className="min-h-dvh bg-background">
      <UrgencyBanner />
      <Hero />
      <SocialProofBar />
      <ValueProps />
      <Courses />
      <Testimonials />
      <EnrollmentSteps />
      <AdultEmotionalHook />
      <DayAtCompuClub />
      <About />
      <Faq />
      <Flyers />
      <SocialLocation />
      <SiteFooter />
      <WhatsAppButton />
    </main>
  )
}
