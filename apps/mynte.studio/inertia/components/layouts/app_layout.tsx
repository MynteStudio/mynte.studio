import { Header } from '@mynte/design-system/header'
import { Toast } from '@mynte/design-system/toast'
import { ReactNode } from 'react'
import { Footer } from '~/components/footer'
import { Information } from '@mynte/design-system/information'

type AppLayoutProps = {
  children: ReactNode
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="mt-[7.125rem] container mx-auto">
          <Information
            message={
              'You’re browsing on our temporary website! We’re currently working on the new version.'
            }
          />
        </div>

        <main className="mx-auto container">
          {children}
          <Footer />
        </main>
      </div>
      <Toast />
    </>
  )
}
