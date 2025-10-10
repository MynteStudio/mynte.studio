import { Head } from '@inertiajs/react'
import { AboutUs } from '~/components/about_us'
import { Hero } from '~/components/hero'
import { InquiryForm } from '~/components/inquiry_form'

export default function Home() {
  return (
    <>
      <Head title="Homepage" />

      <Hero />
      <AboutUs />
      <InquiryForm />
    </>
  )
}
