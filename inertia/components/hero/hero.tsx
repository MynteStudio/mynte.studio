import { useTranslation } from '~/hooks/use_translation'
import { Cta } from '~/components/cta'
import { TrustedBy } from './trusted_by'

export const Hero = () => {
  const { t, i18n } = useTranslation()

  return (
    <section
      className="min-h-[calc(100vh_-_175px)] mx-5 flex flex-col items-center justify-between text-center"
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

        <p
          className={
            (i18n.language === 'en' ? 'mt-6' : 'italic mt-10') +
            ' max-w-[50ch] text-center text-medium sm:text-lg md:text-xl lg:text-2xl'
          }
        >
          {t('home.hero.text')}
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-5 p-5 pt-10 text-center">
          <Cta as="a" href="https://blog.mynte.studio" variant="secondary">
            {t('visit_our_blog')}
          </Cta>

          <Cta
            as="button"
            onClick={() => {
              // @ts-expect-error - loaded in layout globally
              Calendly.initPopupWidget({ url: 'https://calendly.com/admin-mynte/30min' })
              return false
            }}
          >
            {t('book_a_call')}
          </Cta>
        </div>
      </div>

      <TrustedBy />
    </section>
  )
}
