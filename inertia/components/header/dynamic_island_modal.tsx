import { useTranslation } from '~/hooks/use_translation'
import styles from './dynamic_island_modal.module.css'
import { Icon } from '~/components/icon'

interface DynamicIslandModalProps {
  isOpen: boolean
}

export const DynamicIslandModal = ({ isOpen }: DynamicIslandModalProps) => {
  const { t, dir } = useTranslation()

  return (
    <>
      {isOpen && (
        <div dir={dir} className={`${styles.root} glass text-base`}>
          <button
            onClick={() => {
              // @ts-expect-error - loaded in layout globally
              Calendly.initPopupWidget({ url: 'https://calendly.com/admin-mynte/30min' })
              return false
            }}
          >
            <div>
              <Icon name="calendly" />
              <span>{t('book_a_call')}</span>
            </div>

            <span>Calendly</span>
          </button>

          <a href="mailto:hello@mynte.studio">
            <div>
              <Icon name="mail" />
              <span>{t('write_us')}</span>
            </div>
            <span>Email</span>
          </a>
          <a href="https://wa.me/33743624401" target="_blank" rel="noopener noreferrer">
            <div>
              <Icon name="whatsapp" />
              <span>{t('send_a_message')}</span>
            </div>
            <span>WhatsApp</span>
          </a>
        </div>
      )}
    </>
  )
}
