import { Gallery } from '@/components/gallery'
import { Hero } from '@/components/hero'
import { Intro } from '@/components/intro'
import { Principles } from '@/components/principles'
import { Process } from '@/components/process'
import { Services } from '@/components/services'
import { FinalCta } from '@/components/final-cta'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <Services />
      <Gallery />
      <Principles />
      <Process />
      <FinalCta />
    </>
  )
}
