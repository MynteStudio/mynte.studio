import './i18n'
import { createInertiaApp } from '@inertiajs/react'
import i18next from 'i18next'
import ReactDOMServer from 'react-dom/server'
import { I18nextProvider } from 'react-i18next'

export default async function render(page: any) {
  const locale = page.props.locale as string
  await i18next.changeLanguage(locale)

  return createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    resolve: (name) => {
      const pages = import.meta.glob('../pages/**/*.tsx', { eager: true })
      return pages[`../pages/${name}.tsx`]
    },
    setup: ({ App, props }) => (
      <I18nextProvider i18n={i18next}>
        <App {...props} />
      </I18nextProvider>
    ),
  })
}
