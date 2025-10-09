import { DxbTime } from '../../atoms/dxb-time/dxb_time'
import { Logo } from '../../atoms/logo/logo'
import { DynamicIsland } from '../../molecules/dynamic-island/dynamic_island'
import { ExternalLinks } from '../../molecules/external-links/external_links'

export const Header = () => {
  return (
    <>
      <header className="z-99 px-5 py-5 lg:py-9 gap-5 grid grid-cols-4 items-center fixed container top-0 left-0 right-0 mx-auto text-sm">
        <div className="col-start-1 col-end-2 lg:col-end-1">
          <Logo />
        </div>
        <div className="col-start-2 col-end-4 hidden lg:flex">
          <DynamicIsland />
        </div>
        <div className="col-start-4 flex gap-4 justify-end items-center">
          <DxbTime />
          <ExternalLinks />
        </div>
      </header>
    </>
  )
}
