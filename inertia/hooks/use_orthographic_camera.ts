import { useThree } from '@react-three/fiber'
import { useLayoutEffect } from 'react'
import * as THREE from 'three'

export const useOrthographicCamera = () => {
  const { camera, size } = useThree()

  useLayoutEffect(() => {
    if (camera instanceof THREE.OrthographicCamera) {
      camera.left = -1
      camera.right = 1
      camera.top = 1
      camera.bottom = -1
      camera.near = -10
      camera.far = 10
      camera.position.set(0, 0, 1)
      camera.updateProjectionMatrix()
    }
  }, [camera, size])
}
