import { useTranslation } from '~/hooks/use_translation'
import { Header } from '../header/header'
import { Information } from '~/components/information'
import { ReactNode } from 'react'
import { Background } from '~/components/background'
import { SmoothScrollWrapper } from '~/components/smooth_scroll_wrapper'
import { Footer } from '../footer'
import { DynamicIslandProvider } from '~/hooks/use_dynamic_island_visibility'

interface AppLayoutProps {
  children: ReactNode
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  const { t, dir } = useTranslation()

  return (
    <>
      <DynamicIslandProvider>
        <SmoothScrollWrapper>
          <Background />
          <div dir={dir} className="container px-5 min-h-auto mx-auto relative">
            <Header />
            <div className="flex flex-col items-end text-sm absolute right-5 top-30">
              <a href="">AGENCY</a>
              <a href="">WORKS</a>
              <a href="">CONTACT</a>
            </div>
            <main>{children}</main>
            <Footer />
          </div>
        </SmoothScrollWrapper>
      </DynamicIslandProvider>
    </>
  )
}
