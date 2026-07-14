import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Float, MeshDistortMaterial, RoundedBox } from '@react-three/drei'

function Workspace() {
  return (
    <group>
      <Float speed={1.8} rotationIntensity={0.35} floatIntensity={0.6}>
        <RoundedBox args={[2.8, 0.12, 1.8]} radius={0.04} position={[0, -0.5, 0]}>
          <meshStandardMaterial color="#1e293b" metalness={0.6} roughness={0.35} />
        </RoundedBox>
      </Float>
      <Float speed={2.2} rotationIntensity={0.5} floatIntensity={0.8}>
        <RoundedBox args={[2.2, 1.4, 0.08]} radius={0.06} position={[0, 0.35, -0.2]}>
          <meshStandardMaterial color="#0f172a" metalness={0.7} roughness={0.25} emissive="#2563eb" emissiveIntensity={0.15} />
        </RoundedBox>
      </Float>
      <Float speed={2.5} rotationIntensity={0.8} floatIntensity={1.2}>
        <mesh position={[1.4, 0.8, 0.3]} scale={0.45}>
          <icosahedronGeometry args={[1, 1]} />
          <MeshDistortMaterial color="#3b82f6" distort={0.25} speed={2} roughness={0.2} metalness={0.85} transparent opacity={0.85} />
        </mesh>
      </Float>
    </group>
  )
}

export default function HeroScene() {
  return (
    <div className="hero-scene" aria-hidden="true">
      <Canvas camera={{ position: [0, 0.5, 4.5], fov: 42 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[4, 6, 4]} intensity={1.2} color="#93c5fd" />
        <pointLight position={[-3, 2, 2]} intensity={0.6} color="#6366f1" />
        <Suspense fallback={null}>
          <Workspace />
        </Suspense>
      </Canvas>
    </div>
  )
}
