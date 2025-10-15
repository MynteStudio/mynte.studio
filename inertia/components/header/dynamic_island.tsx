import { useState } from 'react'
import { useTranslation } from '~/hooks/use_translation'
import { AvailabilityStatus } from '~/components/availability_status'
import { Icon } from '~/components/icon'

export const DynamicIsland = () => {
  const { t, dir } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  const contactOptions = [
    {
      icon: 'calendly',
      label: t('book_a_call'),
      sublabel: 'Calendly',
      onClick: () => {
        // @ts-expect-error - loaded in layout globally
        Calendly.initPopupWidget({ url: 'https://calendly.com/admin-mynte/30min' })
        return false
      },
    },
    {
      icon: 'mail',
      label: t('write_us'),
      sublabel: 'Email',
      href: 'mailto:hello@mynte.studio',
    },
    {
      icon: 'whatsapp',
      label: t('send_a_message'),
      sublabel: 'WhatsApp',
      href: 'https://wa.me/33743624401',
    },
  ]

  return (
    <div dir={dir} className="relative w-[31.25rem] mx-auto h-10 text-sm">
      {/* NOTE: Base Dynamic Island (visible only when closed) */}
      <div
        className={`glass h-10 flex items-center justify-between rounded-3xl px-4 transition-opacity duration-300 ${
          isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
        style={{
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
          border: 'none',
          outline: 'none',
        }}
      >
        {/* NOTE: available */}
        <div className="flex items-center gap-3">
          <AvailabilityStatus color="green" />
          <span>{t('header.available_now')}</span>
        </div>

        {/* NOTE: contact */}
        <button
          className="glass h-[1.35rem] w-[5.5rem] flex items-center justify-center rounded-xl bg-[rgba(0,0,0,0.9)] lowercase"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? t('header.close') : t('header.contact')}
        </button>
      </div>

      {/* NOTE: Expanded content (absolute positioned) */}
      <div
        className={`absolute top-0 left-0 right-0 glass rounded-3xl overflow-hidden transition-all duration-500 ease-out ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        style={{
          height: isOpen ? 'auto' : '2.5rem',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
          border: 'none',
          outline: 'none',
        }}
      >
        {/* NOTE: Header bar (replicate inside expanded) */}
        <div
          className="h-10 flex items-center justify-between px-4"
          style={{ minHeight: '2.5rem' }}
        >
          {/* NOTE: available */}
          <div className="flex items-center gap-3">
            <AvailabilityStatus color="green" />
            <span>{t('header.available_now')}</span>
          </div>

          {/* NOTE: contact */}
          <button
            className="glass h-[1.35rem] w-[5.5rem] flex items-center justify-center rounded-xl bg-[rgba(0,0,0,0.9)] lowercase"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? t('header.close') : t('header.contact')}
          </button>
        </div>

        {/* NOTE: Contact options */}
        {isOpen && (
          <div className="px-2 pt-1 pb-2 flex flex-col gap-1">
            {contactOptions.map((option, index) => {
              const Component = option.href ? 'a' : 'button'
              return (
                <Component
                  key={index}
                  href={option.href}
                  target={option.href?.startsWith('http') ? '_blank' : undefined}
                  rel={option.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                  onClick={option.onClick}
                  className="px-3 py-2.5 flex justify-between items-center rounded-lg border border-transparent hover:glass transition-all duration-200"
                  style={{
                    animation: `slideIn 0.3s ease-out ${index * 0.1}s both`,
                  }}
                >
                  <div className="flex gap-3 items-center">
                    <Icon name={option.icon} />
                    <span>{option.label}</span>
                  </div>
                  <span className="opacity-60 text-sm">{option.sublabel}</span>
                </Component>
              )
            })}
          </div>
        )}
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
