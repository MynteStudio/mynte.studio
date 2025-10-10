import { TextSection } from '@mynte/design-system/text-section'

export const AboutUs = () => {
  return (
    <>
      <section className="container px-5">
        <h2 className="text-principal font-semibold">let's have a chat :)</h2>

        <div className="flex flex-col lg:flex-row gap-15 lg:gap-10 mt-20 lg:mt-26">
          <TextSection
            title="wait, who are you?"
            text="We’re a digital agency based in Dubai, here to bring your projects to reality. We
              create websites, apps, graphic designs, advertising, and more with passion and
              creativity."
          />

          <TextSection
            title="not sure where to start?"
            text="Share your project goals, vision, and any creative ideas you have. We’re here to help
              bring them to life."
          />
        </div>

        <div className="separator pb-15 lg:pb-10"></div>
      </section>
    </>
  )
}
