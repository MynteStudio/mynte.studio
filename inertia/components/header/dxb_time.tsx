import { useState, useEffect } from 'react'
import { useTranslation } from '~/hooks/useTranslation'

const toArabicNumerals = (num: string) => {
  const arabicNumerals = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩']
  return num.replace(/\d/g, (digit) => arabicNumerals[Number.parseInt(digit)])
}

export const DxbTime = () => {
  const { dir } = useTranslation()
  const [dxbTime, setDxbTime] = useState<string>('')

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | undefined

    function updateDubaiTime() {
      const now = new Date()
      let dubaiHour = (now.getUTCHours() + 4) % 24
      const minutes = now.getUTCMinutes()
      const formattedMinutes = minutes.toString().padStart(2, '0')
      const period = dubaiHour >= 12 ? 'PM' : 'AM'
      const periodAr = dubaiHour >= 12 ? 'م' : 'ص'
      dubaiHour = dubaiHour % 12 || 12
      const formattedHour = dubaiHour.toString().padStart(2, '0')

      if (dir === 'rtl') {
        const arabicTime = toArabicNumerals(`${formattedHour}:${formattedMinutes}`)
        setDxbTime(`${arabicTime} ${periodAr}`)
      } else {
        setDxbTime(`${formattedHour}:${formattedMinutes} ${period}`)
      }

      const delay = (60 - now.getUTCSeconds()) * 1000
      timeoutId = setTimeout(updateDubaiTime, delay)
    }

    updateDubaiTime()

    return () => clearTimeout(timeoutId)
  }, [dir])

  return <span>{dxbTime}</span>
}
