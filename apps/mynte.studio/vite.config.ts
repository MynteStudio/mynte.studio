import { getDirname } from '@adonisjs/core/helpers'
import Inertia from '@adonisjs/inertia/client'
import Adonisjs from '@adonisjs/vite/client'
import React from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    Inertia({ ssr: { enabled: true, entrypoint: 'inertia/app/ssr.tsx' } }),
    React(),
    Adonisjs({ entrypoints: ['inertia/app/app.tsx'], reload: ['resources/views/**/*.edge'] }),
    UnoCSS(),
  ],

  /**
   * Define aliases for importing modules from
   * your frontend code
   */
  resolve: {
    alias: {
      '~/': `${getDirname(import.meta.url)}/inertia/`,
    },
  },
})
