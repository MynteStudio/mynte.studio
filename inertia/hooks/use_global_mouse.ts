import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export const useGlobalMouse = () => {
  const mouseRef = useRef(new THREE.Vector2(0, 0))
  const targetRef = useRef(new THREE.Vector2(0, 0))

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      targetRef.current.x = (event.clientX / window.innerWidth) * 2 - 1
      targetRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return { mouse: mouseRef.current, target: targetRef.current }
}
