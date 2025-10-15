import { useEffect, useRef, ReactNode, useState, createContext, useContext } from 'react'

interface SmoothScrollWrapperProps {
  children: ReactNode
}

interface LocomotiveScrollContextType {
  scroll: any | null
}

const LocomotiveScrollContext = createContext<LocomotiveScrollContextType>({ scroll: null })

export const useLocomotiveScroll = () => useContext(LocomotiveScrollContext)

export const SmoothScrollWrapper = ({ children }: SmoothScrollWrapperProps) => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const locomotiveScrollRef = useRef<any>(null)
  const [isClient, setIsClient] = useState(false)
  const [scrollInstance, setScrollInstance] = useState<any>(null)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient || !scrollRef.current) return

    let resizeObserver: ResizeObserver

    // Import dynamique de Locomotive Scroll côté client uniquement
    import('locomotive-scroll').then((LocomotiveScrollModule) => {
      import('locomotive-scroll/dist/locomotive-scroll.css')

      const LocomotiveScroll = LocomotiveScrollModule.default

      locomotiveScrollRef.current = new LocomotiveScroll({
        el: scrollRef.current!,
        smooth: true,
        smoothMobile: false,
        resetNativeScroll: true,
        lerp: 0.05,
      })

      setScrollInstance(locomotiveScrollRef.current)

      // Update après initialisation
      setTimeout(() => {
        locomotiveScrollRef.current?.update()
      }, 100)

      // ResizeObserver pour gérer les changements de taille
      resizeObserver = new ResizeObserver(() => {
        locomotiveScrollRef.current?.update()
      })

      if (scrollRef.current) {
        resizeObserver.observe(scrollRef.current)
      }
    })

    return () => {
      if (resizeObserver) {
        resizeObserver.disconnect()
      }
      locomotiveScrollRef.current?.destroy()
    }
  }, [isClient])

  return (
    <LocomotiveScrollContext.Provider value={{ scroll: scrollInstance }}>
      <div ref={scrollRef} data-scroll-container>
        {children}
      </div>
    </LocomotiveScrollContext.Provider>
  )
}
