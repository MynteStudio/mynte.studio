import { Link } from '@inertiajs/react'
import { useEffect, useRef } from 'react'
import { DynamicIsland } from './header/dynamic_island'
import { SectionTitle } from './section_title'
import { useDynamicIslandVisibility } from '~/hooks/use_dynamic_island_visibility'
import { useLocomotiveScroll } from './smooth_scroll_wrapper'

export const Footer = () => {
  const { isHeaderVisible, setIsHeaderVisible } = useDynamicIslandVisibility()
  const { scroll } = useLocomotiveScroll()
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!scroll || !footerRef.current) return

    const handleScroll = () => {
      if (!footerRef.current) return

      const footerTop = footerRef.current.getBoundingClientRect().top
      const windowHeight = window.innerHeight

      if (footerTop < windowHeight * 0.8) {
        setIsHeaderVisible(false)
      } else {
        setIsHeaderVisible(true)
      }
    }

    scroll.on('scroll', handleScroll)
    handleScroll()

    return () => {
      scroll.off('scroll', handleScroll)
    }
  }, [scroll, setIsHeaderVisible])

  return (
    <footer ref={footerRef} data-scroll-section>
      <SectionTitle>let's collaborate :)</SectionTitle>

      <div className="grid grid-cols-4 py-20 border-light border-b-1 font-en">
        <div
          className={`col-start-1 col-span-2 justify-self-start transition-opacity duration-500 ${
            !isHeaderVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <DynamicIsland />
        </div>
        <div className="flex flex-col items-end">
          <p>Building A1, Dubai Digital Park</p>
          <p>Dubai Silicon Oasis</p>
          <p>Dubai, UAE</p>
        </div>
        <div className="flex flex-col items-end">
          <a dir="ltr" href="" className="hover:underline">
            + 33 7 43 62 44 01
          </a>
          <a dir="ltr" href="" className="hover:underline">
            hello@mynte.studio
          </a>
        </div>
      </div>

      <div className="flex justify-between py-4">
        {/* TODO: */}
        <span className="font-semibold">C MYNTE STUDIO. All right reserved.</span>
        <div className="flex gap-2">
          <Link href="" className="hover:underline">
            Legal disclaimer
          </Link>
          <Link href="" className="hover:underline">
            Terms of service
          </Link>
        </div>
      </div>
    </footer>
  )
}
