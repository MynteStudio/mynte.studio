import { Cta } from '@mynte/design-system/cta'
import { MouseIcon } from '~/components/svg/mouse_icon'

export const Hero = () => {
  return (
    <section className="min-h-screen mx-5 flex flex-col items-center justify-around">
      <div className="flex flex-col items-center">
        <h1 className="text-principal font-semibold text-center max-w-[20ch] line-height-[120%]">
          <span className="font-serif italic mr-3 md:mr-5 font-normal">Refreshing</span>
          Digital experiences with creative design for every brand
        </h1>

        <p className="max-w-[50ch] text-center text-medium sm:text-lg md:text-xl lg:text-2xl mt-6">
          Websites, apps, e-commerce, graphic identities, graphic design, and advertising ; all
          crafted for a distinct digital presence
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-5 p-5 pt-10 text-center">
          <Cta as="a" href="https://blog.mynte.studio" variant="secondary">
            visit our blog
          </Cta>

          <Cta
            as="button"
            onClick={() => {
              Calendly.initPopupWidget({ url: 'https://calendly.com/admin-mynte/30min' })
              return false
            }}
          >
            book a call
          </Cta>
        </div>
      </div>

      <span className="flex gap-2 mb-4">
        <MouseIcon />
        Scroll down
      </span>
    </section>
  )
}
