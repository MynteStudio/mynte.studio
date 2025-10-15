import { Head } from '@inertiajs/react'
import { AboutUs } from '~/components/about-us/about_us'
import { Expertise } from '~/components/expertise/expertise'
import { Hero } from '~/components/hero/hero'
import { SelectedWorks } from '~/components/selected-works/selected_works'

export default function Home() {
  return (
    <>
      <Head title="Homepage" />
      <Hero />
      <SelectedWorks />
      <Expertise />
      <AboutUs />
    </>
  )
}
