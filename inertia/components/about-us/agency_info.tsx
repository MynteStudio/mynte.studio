import { LogoSmall } from '../svgs/logo_small'

export const AgencyInfo = () => {
  return (
    <div className="glass mx-auto px-6 pb-6 lg:px-20 pt-2 lg:pb-10 border-light border rounded-3xl max-w-[52.5rem]">
      <h4 className="glass w-fit mx-auto border border-light my-5 px-4 h-10 rounded-full flex gap-2 items-center text-lg">
        <LogoSmall />
        <span className="font-semibold">Wait, who are you?</span>
      </h4>
      <div className="text-lg flex flex-col gap-10 text-justify mt-7">
        <p>
          We're a digital agency based in Dubai, here to bring your projects to reality. Our
          founders hail from Barcelona and Strasbourg, bringing rich European creative heritage to
          the heart of the Middle East. We create websites, apps, graphic designs, advertising, and
          more with passion and creativity.
        </p>
        <p>
          Professionalism is at our core. We're constantly learning and evolving to deliver
          cutting-edge solutions that exceed expectations.
        </p>
      </div>
    </div>
  )
}
