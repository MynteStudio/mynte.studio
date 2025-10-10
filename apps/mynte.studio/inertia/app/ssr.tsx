import { createInertiaApp } from '@inertiajs/react'
import ReactDOMServer from 'react-dom/server'
import { AppLayout } from '~/components/layouts/app_layout'

export default function render(page: any) {
  return createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    resolve: (name) => {
      const pages = import.meta.glob('../pages/**/*.tsx', { eager: true })
      const page = pages[`../pages/${name}.tsx`]

      page.default.layout = page.default.layout || ((page) => <AppLayout children={page} />)

      return page
    },
    setup: ({ App, props }) => <App {...props} />,
  })
}
