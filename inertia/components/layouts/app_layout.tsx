import { useTranslation } from '~/hooks/useTranslation'
import { Header } from '../header/header'
import { Information } from '~/components/information'
import { ReactNode } from 'react'

interface AppLayoutProps {
  children: ReactNode
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  const { t, dir } = useTranslation()

  return (
    <>
      <div dir={dir} className="container px-5 min-h-auto mx-auto">
        <Header />
        <div className="pt-[7.125rem]">
          <Information type={t('information')} message={t('temporary_website')} />
        </div>
        <main>{children}</main>
      </div>
    </>
  )
}
