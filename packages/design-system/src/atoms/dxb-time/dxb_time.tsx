import { useState, useEffect } from 'react'

export const DxbTime = () => {
  const [dxbTime, setDxbTime] = useState<string>('')

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | undefined

    function updateDubaiTime() {
      const now = new Date()
      let dubaiHour = (now.getUTCHours() + 4) % 24
      const minutes = now.getUTCMinutes()
      const formattedMinutes = minutes.toString().padStart(2, '0')
      const period = dubaiHour >= 12 ? 'PM' : 'AM'
      dubaiHour = dubaiHour % 12 || 12
      const formattedHour = dubaiHour.toString().padStart(2, '0')
      setDxbTime(`${formattedHour}:${formattedMinutes} ${period}`)

      const delay = (60 - now.getUTCSeconds()) * 1000
      timeoutId = setTimeout(updateDubaiTime, delay)
    }

    updateDubaiTime()

    return () => clearTimeout(timeoutId)
  }, [])

  return <>{dxbTime}</>
}
