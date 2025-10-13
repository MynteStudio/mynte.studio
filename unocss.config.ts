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
  shortcuts: {
    'border-light': 'border-white border-opacity-[15%]',
    'glass':
      'bg-[radial-gradient(circle,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.24)_100%)] bg-opacity-[0.6] border-[1px] border-[rgba(255,255,255,0.16)] backdrop-blur-[20px] backdrop-saturate-[160%] shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_10px_30px_rgba(0,0,0,0.6)] transition-all duration-200 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_4px_6px_rgba(0,0,0,0.7)] focus:(border-[#fff]/60 ring-[0_0_0_3px_rgba(255,255,255,0.15)])',
  },
})
