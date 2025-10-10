/// <reference path="../../adonisrc.ts" />
/// <reference path="../../config/inertia.ts" />

import '@mynte/design-system/reset'
import '@mynte/design-system/fonts'
import 'virtual:uno.css'
import { resolvePageComponent } from '@adonisjs/inertia/helpers'
import { createInertiaApp } from '@inertiajs/react'
import { hydrateRoot } from 'react-dom/client'
import { AppLayout } from '~/components/layouts/app_layout'

createInertiaApp({
  progress: { color: '#ffffff' },

  title: (title) => `${title} - Mynte Studio`,

  resolve: async (name) => {
    const page = await resolvePageComponent(
      `../pages/${name}.tsx`,
      import.meta.glob('../pages/**/*.tsx'),
    )
    page.default.layout = page.default.layout || ((page) => <AppLayout children={page} />)

    return page
  },

  setup({ el, App, props }) {
    hydrateRoot(el, <App {...props} />)
  },
})
