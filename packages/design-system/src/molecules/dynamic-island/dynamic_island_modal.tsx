import { Icon } from '../../atoms/icon/icon'
import styles from './dynamic_island.module.css'

interface DynamicIslandModalProps {
  isOpen: boolean
}

export const DynamicIslandModal = ({ isOpen }: DynamicIslandModalProps) => {
  return (
    <>
      {isOpen && (
        <div className={`${styles.modal} glass text-base`}>
          <a
            href=""
            onClick={() => {
              Calendly.initPopupWidget({ url: 'https://calendly.com/admin-mynte/30min' })
              return false
            }}
          >
            <div>
              <Icon name="calendly" />
              <span>Book a call</span>
            </div>

            <span>Calendly</span>
          </a>

          <a href="mailto:hello@mynte.studio">
            <div>
              <Icon name="mail" />
              <span>Send an email</span>
            </div>
            <span>Write us</span>
          </a>
          <a href="https://wa.me/33743624401" target="_blank" rel="noopener noreferrer">
            <div>
              <Icon name="whatsapp" />
              <span>Send a message</span>
            </div>
            <span>WhatsApp</span>
          </a>
        </div>
      )}
    </>
  )
}
