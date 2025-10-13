import { useTranslation } from '~/hooks/use_translation'
import { Header } from '../header/header'
import { Information } from '~/components/information'
import { ReactNode } from 'react'
import { Background } from '~/components/background'
import { SmoothScrollWrapper } from '~/components/smooth_scroll_wrapper'

interface AppLayoutProps {
  children: ReactNode
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  const { t, dir } = useTranslation()

  return (
    <>
      <SmoothScrollWrapper>
        <Background />
        <div dir={dir} className="container px-5 min-h-auto mx-auto">
          <Header />
          <div className="pt-[7.125rem]" data-scroll-section>
            <Information type={t('information')} message={t('temporary_website')} />
          </div>
          <main>{children}</main>
        </div>
      </SmoothScrollWrapper>
    </>
  )
}
