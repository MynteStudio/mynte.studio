import { Link } from '@inertiajs/react'
import { Logo } from '@mynte/design-system/logo'
import styles from '~/components/css/footer.module.css'
import { tuyau } from '~/core/providers/tuyau'

export const Footer = () => {
  return (
    <footer
      className={`${styles.root} px-5 pb-7 sm:pb-10 mt-12 sm:mt-20 flex flex-col gap-7 sm:gap-10`}
    >
      <div className="separator"></div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="flex gap-2 items-start col-start-1 col-end-4 justify-start lg:col-end-2">
          <Logo size="small" />

          <h2 className="font-bold text-2xl">MYNTE STUDIO</h2>
        </div>

        <p className="lg:text-right hidden sm:flex lg:justify-end justify-start">
          Building A1, Dubai Digital Park,
          <br />
          Dubai Silicon Oasis,
          <br />
          Dubai, UAE
        </p>

        <div className="hidden lg:flex flex-col items-end">
          <a href="tel:+33743624401">+33 43 62 44 01</a>

          <a href="mailto:hello@mynte.studio">hello@mynte.studio</a>
        </div>

        <div className="flex flex-col sm:items-end col-start-1 items-start sm:col-start-3 lg:col-start-4 underline lg:no-underline">
          <a href="https://blog.mynte.studio"> Visit our blog </a>

          {/* TODO: */}
          <a href="">Book a call</a>

          <a href="https://wa.me/33743624401" target="_blank" rel="noopener noreferrer">
            Send a message
          </a>
        </div>

        <div className="flex sm:hidden flex-col items-end justify-end">
          {/* TODO: */}
          <Link href={''} className="underline lg:no-underline">
            Legal disclaimer
          </Link>

          {/* TODO: */}
          <Link href={''} className="underline lg:no-underline">
            Terms of service
          </Link>
        </div>
      </div>

      <div className="flex justify-center sm:justify-between">
        {/* TODO: */}
        <Link href={''} className="underline lg:no-underline hidden sm:flex">
          Legal disclaimer
        </Link>

        <span className="flex gap-2 items-center">
          {/* TODO: */}
          {/* <CopyrightIcon /> */}
          MYNTE STUDIO 2025
        </span>

        {/* TODO: */}
        <Link href={''} className="underline lg:no-underline hidden sm:flex">
          Terms of service
        </Link>
      </div>
    </footer>
  )
}
