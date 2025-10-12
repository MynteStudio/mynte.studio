import './i18n'
import { createInertiaApp } from '@inertiajs/react'
import i18next from 'i18next'
import ReactDOMServer from 'react-dom/server'
import { I18nextProvider } from 'react-i18next'
import { AppLayout } from '~/components/layouts/app_layout'

export default async function render(page: any) {
  const locale = page.props.locale as string
  await i18next.changeLanguage(locale)

  return createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    resolve: (name) => {
      const pages = import.meta.glob('../pages/**/*.tsx', { eager: true })
      const page = pages[`../pages/${name}.tsx`]

      page.default.layout = page.default.layout || ((page) => <AppLayout children={page} />)

      return page
    },
    setup: ({ App, props }) => (
      <I18nextProvider i18n={i18next}>
        <App {...props} />
      </I18nextProvider>
    ),
  })
}
