/// <reference path="../../adonisrc.ts" />
/// <reference path="../../config/inertia.ts" />

import '../css/reset.css'
import 'virtual:uno.css'
import { createSSRApp, h } from 'vue'
import type { DefineComponent } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import { resolvePageComponent } from '@adonisjs/inertia/helpers'
import { i18n } from './i18n'
import AppLayout from '~/components/layouts/app_layout.vue'

createInertiaApp({
  progress: { color: '#ffffff' },

  title: (title) => `${title} - Mynte Studio`,

  resolve: async (name) => {
    const page = await resolvePageComponent(
      `../pages/${name}.vue`,
      import.meta.glob<DefineComponent>('../pages/**/*.vue')
    )
    page.default.layout = page.default.layout || AppLayout

    return page
  },

  setup({ el, App, props, plugin }) {
    const locale = props.initialPage.props.locale as 'en' | 'ar'
    i18n.global.locale.value = locale

    createSSRApp({ render: () => h(App, props) })
      .use(plugin)
      .use(i18n)
      .mount(el)
  },
})
