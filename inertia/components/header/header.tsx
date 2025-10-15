import { Link } from '@inertiajs/react'
import Cookies from 'js-cookie'
import { useTranslation } from '~/hooks/use_translation'
import { useDynamicIslandVisibility } from '~/hooks/use_dynamic_island_visibility'
import { Logo } from '~/components/svgs/logo'
import { tuyau } from '~/core/providers/tuyau'
import { DynamicIsland } from '~/components/header/dynamic_island'
import { DxbTime } from '~/components/header/dxb_time'
import { ExternalLinks } from '~/components/header/external_links'

export const Header = () => {
  const { i18n } = useTranslation()
  const { isHeaderVisible } = useDynamicIslandVisibility()

  function handleChangeLanguage() {
    const newLang = i18n.language === 'ar' ? 'en' : 'ar'
    i18n.changeLanguage(newLang)
    Cookies.set('locale', newLang, { expires: 365 })
  }

  return (
    <header
      dir="ltr"
      className="container  top-0 left-0 right-0 mx-auto z-99 px-5 py-5 lg:py-9 grid grid-cols-2 md:grid-cols-4 items-center text-sm"
    >
      {/* NOTE: left */}
      <div className="col-start-1 col-end-2 lg:col-end-1">
        <Link href={tuyau.$url('home.render')}>
          <Logo />
        </Link>
      </div>

      {/* NOTE: center */}
      <div></div>

      {/* NOTE: right */}
      <div className="col-start-4 flex gap-4 justify-end items-center font-en">
        <div className="flex gap-1">
          <div className="hidden sm:flex">
            <DxbTime />
          </div>
          <span className="flex gap-1">
            <span className="hidden sm:flex">|</span>
            <button
              onClick={handleChangeLanguage}
              className={i18n.language === 'ar' ? 'font-en' : 'font-ar italic'}
            >
              {i18n.language === 'ar' ? 'ENG' : 'عربي'}
            </button>
          </span>
        </div>
      </div>
    </header>
  )
}
