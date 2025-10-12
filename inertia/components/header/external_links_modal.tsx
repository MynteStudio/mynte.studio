import { Icon } from '~/components/icon'
import styles from './external_links_modal.module.css'

interface ExternalLinksModalProps {
  isOpen: boolean
}

export const ExternalLinksModal = ({ isOpen }: ExternalLinksModalProps) => {
  return (
    <>
      {isOpen && (
        <div className={`${styles.root} glass font-en`}>
          <a href="https://wa.me/33743624401" target="_blank" rel="noopener noreferrer">
            <Icon name="whatsapp" />
            <span>WhatsApp</span>
          </a>

          <a href="https://be.net/myntestudio" target="_blank" rel="noopener noreferrer">
            <Icon name="behance" />
            <span>Behance</span>
          </a>

          <a
            href="https://www.instagram.com/mynte.studio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="instagram" />
            <span>Instagram</span>
          </a>

          <a href="https://tiktok.com/@mynte.studio" target="_blank" rel="noopener noreferrer">
            <Icon name="tiktok" />
            <span>Tiktok</span>
          </a>

          <a
            href="https://www.linkedin.com/company/mynte-studio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="linkedin" />
            <span>LinkedIn</span>
          </a>

          <a href="https://github.com/MynteStudio" target="_blank" rel="noopener noreferrer">
            <Icon name="github" />
            <span>GitHub</span>
          </a>
        </div>
      )}
    </>
  )
}
