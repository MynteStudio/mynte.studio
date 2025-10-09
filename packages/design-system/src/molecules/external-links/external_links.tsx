import { useState } from 'react'
import { ExternalLinksIcon } from './svg/external_link_icon'
import { ExternalLinksModal } from './external_links_modal'

export const ExternalLinks = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <>
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="glass relative h-[2.625rem] w-[2.625rem] flex items-center justify-center rounded-full"
        >
          <ExternalLinksIcon />
        </button>

        <ExternalLinksModal isOpen={isOpen} />
      </div>
    </>
  )
}
