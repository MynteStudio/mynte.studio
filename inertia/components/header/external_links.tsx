import { useState } from 'react'
import { useTranslation } from '~/hooks/useTranslation'
import { ExternalLinksIcon } from '~/components/svgs/external_links_icon'
import { ExternalLinksModal } from '~/components/header/external_links_modal'

export const ExternalLinks = () => {
  const { dir } = useTranslation()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <>
      <div dir={dir} className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="font-en glass relative h-[2.625rem] w-[2.625rem] flex items-center justify-center rounded-full"
        >
          <ExternalLinksIcon />
        </button>

        <ExternalLinksModal isOpen={isOpen} />
      </div>
    </>
  )
}
