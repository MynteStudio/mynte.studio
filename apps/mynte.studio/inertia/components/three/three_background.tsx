import { Plane } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef, useMemo } from 'react'
import * as THREE from 'three'
import { fragmentShader } from '~/components/three/glsl/fragment_shader'
import { vertexShader } from '~/components/three/glsl/vertex_shader'
import { useGlobalMouse } from '~/hooks/use_global_mouse'
import type { FC } from 'react'

export const ThreeBackground: FC = () => {
  const materialRef = useRef<THREE.ShaderMaterial>(null)
  const { target } = useGlobalMouse()

  const uniforms = useMemo(
    () => ({
      u_time: { value: 0 },
      u_mouse: { value: new THREE.Vector2() },
    }),
    [],
  )

  useFrame(() => {
    if (materialRef.current) {
      materialRef.current.uniforms.u_time.value += 0.005
      const normalizedTarget = new THREE.Vector2((target.x + 1) * 0.5, (target.y + 1) * 0.5)
      materialRef.current.uniforms.u_mouse.value.lerp(normalizedTarget, 0.2)
    }
  })

  return (
    <Plane args={[2, 2]}>
      <shaderMaterial
        ref={materialRef}
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </Plane>
  )
}
