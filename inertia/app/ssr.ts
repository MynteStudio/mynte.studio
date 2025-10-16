import { createInertiaApp } from '@inertiajs/vue3'
import { renderToString } from '@vue/server-renderer'
import { createSSRApp, h, type DefineComponent } from 'vue'
import { i18n } from './i18n'

export default function render(page: any) {
  return createInertiaApp({
    page,
    render: renderToString,
    resolve: (name) => {
      const pages = import.meta.glob<DefineComponent>('../pages/**/*.vue', { eager: true })
      return pages[`../pages/${name}.vue`]
    },

    setup({ App, props, plugin }) {
      const locale = props.initialPage.props.locale as 'en' | 'ar'
      i18n.global.locale.value = locale

      return createSSRApp({ render: () => h(App, props) })
        .use(plugin)
        .use(i18n)
    },
  })
}
