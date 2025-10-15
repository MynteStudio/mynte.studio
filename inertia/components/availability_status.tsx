import styles from './availability_status.module.css'

type AvailabilityStatusColor = 'green' | 'orange' | 'red'

interface AvailabilityStatusProps {
  color: AvailabilityStatusColor
}

function getBackgroundClass(color: AvailabilityStatusColor) {
  if (color === 'green') return 'bg-[#84cc16]'
  if (color === 'orange') return 'bg-[#ff9500]'

  return 'bg-[#ff0000]'
}

export const AvailabilityStatus = ({ color }: AvailabilityStatusProps) => {
  return (
    <div
      className={`${styles.root} ${getBackgroundClass(color)} rounded-full bg-[#84cc16] h-[0.56rem] w-[0.56rem]`}
    ></div>
  )
}
