import { Head } from '@inertiajs/react'
import { Expertise } from '~/components/expertise/expertise'
import { Hero } from '~/components/hero/hero'

export default function Home() {
  return (
    <>
      <Head title="Homepage" />

      <Hero />
      <Expertise />

      <div className="flex py-300"></div>
    </>
  )
}
