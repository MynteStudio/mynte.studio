import { useState } from 'react'
import styles from './dynamic_island.module.css'
import { useTranslation } from '~/hooks/useTranslation'
import { DynamicIslandModal } from './dynamic_island_modal'

export const DynamicIsland = () => {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative w-[31.25rem] mx-auto">
      <div className="glass h-10 flex items-center justify-between rounded-3xl">
        {/* NOTE: available */}
        <div className="flex items-center gap-3">
          <div className="ml-4">
            <div
              className={`${styles.root} rounded-full bg-[#84cc16] h-[0.56rem] w-[0.56rem]`}
            ></div>
          </div>
          <span>{t('header.available_now')}</span>
        </div>

        {/* NOTE: contact */}
        <button
          className="glass h-[1.35rem] w-[5.5rem] flex items-center justify-center mr-3 rounded-xl bg-[rgba(0,0,0,0.9)] lowercase"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? t('header.close') : t('header.contact')}
        </button>
      </div>
      {/* NOTE: modale */}
      <DynamicIslandModal isOpen={isOpen} />
    </div>
  )
}
