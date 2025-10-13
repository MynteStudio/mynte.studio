import { Canvas } from '@react-three/fiber'
import { ThreeBackground } from '~/components/three/three_background'
import { useOrthographicCamera } from '~/hooks/use_orthographic_camera'
import type { FC } from 'react'

const Scene: FC = () => {
  useOrthographicCamera()

  return <ThreeBackground />
}

export const TCanvas: FC = () => {
  return (
    <Canvas orthographic dpr={1} style={{ width: '100%', height: '100%' }}>
      <Scene />
    </Canvas>
  )
}
