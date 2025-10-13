import { useTranslation } from 'react-i18next'

interface InformationProps {
  type?: string
  message: string
}

export const Information = ({ type, message }: InformationProps) => {
  const { t } = useTranslation()

  return (
    <>
      <div className="py-4 flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center items-center border-y border-light">
        <span className="glass rounded-full px-3 py-[0.1rem] text-white/50">
          {type ?? t('information')}
        </span>
        <span className="text-white/50 text-center sm:text-left">{message}</span>
      </div>
    </>
  )
}
