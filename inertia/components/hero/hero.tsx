import { useTranslation } from '~/hooks/use_translation'
import { Cta } from '~/components/cta'
import { TrustedBy } from './trusted_by'

export const Hero = () => {
  const { t, i18n } = useTranslation()

  return (
    <section
      className="min-h-[calc(100vh_-_120px)] mx-5 flex flex-col items-center justify-between text-center"
      data-scroll-section
    >
      <div></div>
      <div className="flex flex-col items-center">
        <h1 className="pt-6 lg:pt-0 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold text-center max-w-[20ch] line-height-[120%]">
          <span
            className={
              (i18n.language === 'en'
                ? 'font-serif italic font-normal mr-3 md:mr-5 '
                : 'font-ar-serif ') + 'mix-blend-difference'
            }
          >
            {t('home.hero.keyword')}
          </span>
          {t('home.hero.title')}
        </h1>
      </div>

      <TrustedBy />
    </section>
  )
}
