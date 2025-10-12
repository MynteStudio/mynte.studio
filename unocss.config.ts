import presetWebFonts from '@unocss/preset-web-fonts'
import { defineConfig, presetWind4, transformerDirectives } from 'unocss'

export default defineConfig({
  theme: {},
  presets: [
    presetWind4(),
    presetWebFonts({
      provider: 'none',
      fonts: {
        'serif': 'Instrument Serif',
        'sans': [
          {
            name: 'MynteFont',
            provider: 'none',
          },
          {
            name: 'sans-serif',
            provider: 'none',
          },
        ],
        'title-ar': 'Saudi',
        'text-ar': 'Honor',
      },
    }),
  ],
  transformers: [transformerDirectives()],
})
