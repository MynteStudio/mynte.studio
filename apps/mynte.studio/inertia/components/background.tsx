import { TCanvas } from './three/t_canvas'

export const Background = () => {
  return (
    <div style={{ position: 'fixed', inset: 0, width: '100vw', height: '100vh', zIndex: -2 }}>
      <TCanvas />
    </div>
  )
}
