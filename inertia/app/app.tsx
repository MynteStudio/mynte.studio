/// <reference path="../../adonisrc.ts" />
/// <reference path="../../config/inertia.ts" />

import '../css/reset.css'
import '../css/fonts.css'
import 'virtual:uno.css'
import './i18n'
import { hydrateRoot } from 'react-dom/client'
import { createInertiaApp } from '@inertiajs/react'
import i18next from 'i18next'
import { I18nextProvider } from 'react-i18next'
import { resolvePageComponent } from '@adonisjs/inertia/helpers'

createInertiaApp({
  progress: { color: '#ffffff' },

  title: (title) => `${title} - Mynte Studio`,

  resolve: (name) => {
    return resolvePageComponent(`../pages/${name}.tsx`, import.meta.glob('../pages/**/*.tsx'))
  },

  setup({ el, App, props }) {
    const locale = props.initialPage.props.locale as string
    i18next.changeLanguage(locale)

    hydrateRoot(
      el,
      <I18nextProvider i18n={i18next}>
        <App {...props} />
      </I18nextProvider>
    )
  },
})
