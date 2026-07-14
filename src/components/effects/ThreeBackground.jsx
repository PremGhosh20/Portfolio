import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Float, MeshDistortMaterial } from '@react-three/drei'

function FloatingShape() {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh scale={1.5}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color="#2563EB"
          attach="material"
          distort={0.3}
          speed={2}
          roughness={0.4}
          metalness={0.8}
          transparent
          opacity={0.15}
        />
      </mesh>
    </Float>
  )
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-15">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={0.5} />
        <Suspense fallback={null}>
          <FloatingShape />
        </Suspense>
      </Canvas>
    </div>
  )
}
