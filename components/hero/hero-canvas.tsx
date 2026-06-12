'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment, ContactShadows, Html, Float } from '@react-three/drei'
import { useState, useRef } from 'react'
import * as THREE from 'three'

function Core() {
  const ref = useRef()
  
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.001
      ref.current.rotation.y += 0.002
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={ref} position={[0, 0, 0]}>
        <icosahedronGeometry args={[0.8, 4]} />
        <meshStandardMaterial 
          color="#3b82f6"
          wireframe
          emissive="#3b82f6"
          emissiveIntensity={0.3}
        />
      </mesh>
    </Float>
  )
}

function SoftwareProductsNode({ isHovered, onHover, orbitAngle }) {
  const ref = useRef()
  const scale = isHovered ? 1.3 : 1
  
  useFrame(() => {
    if (ref.current) {
      ref.current.position.x = Math.cos(orbitAngle) * 3
      ref.current.position.z = Math.sin(orbitAngle) * 3
    }
  })

  return (
    <group ref={ref} onPointerOver={() => onHover(true)} onPointerOut={() => onHover(false)}>
      {/* Cube cluster for software structure */}
      <mesh scale={scale} position={[-0.3, 0, 0]}>
        <boxGeometry args={[0.6, 0.6, 0.6]} />
        <meshStandardMaterial 
          color={isHovered ? '#00ffff' : '#3b82f6'}
          metalness={0.9}
          roughness={0.1}
          emissive={isHovered ? '#00ffff' : '#3b82f6'}
          emissiveIntensity={isHovered ? 0.8 : 0.3}
        />
      </mesh>
      
      <mesh scale={scale} position={[0.3, 0, 0]}>
        <boxGeometry args={[0.6, 0.6, 0.6]} />
        <meshStandardMaterial 
          color={isHovered ? '#00ffff' : '#3b82f6'}
          metalness={0.9}
          roughness={0.1}
          emissive={isHovered ? '#00ffff' : '#3b82f6'}
          emissiveIntensity={isHovered ? 0.8 : 0.3}
        />
      </mesh>

      {isHovered && (
        <Html position={[0, -1.5, 0]} center distanceFactor={1.2} sprite>
          <div className="bg-slate-900 border border-cyan-400 rounded-lg p-3 w-40 shadow-lg">
            <h3 className="text-cyan-400 font-bold text-sm">Software Products</h3>
            <p className="text-gray-300 text-xs mt-1">Custom applications built with modern tech stack</p>
          </div>
        </Html>
      )}
    </group>
  )
}

function MarketingServicesNode({ isHovered, onHover, orbitAngle }) {
  const ref = useRef()
  const scale = isHovered ? 1.3 : 1
  
  useFrame(() => {
    if (ref.current) {
      ref.current.position.x = Math.cos(orbitAngle + Math.PI) * 3
      ref.current.position.z = Math.sin(orbitAngle + Math.PI) * 3
    }
  })

  return (
    <group ref={ref} onPointerOver={() => onHover(true)} onPointerOut={() => onHover(false)}>
      {/* Torus knot for marketing growth */}
      <mesh scale={scale}>
        <torusKnotGeometry args={[0.5, 0.15, 100, 16]} />
        <meshStandardMaterial 
          color={isHovered ? '#ff00ff' : '#ec4899'}
          metalness={0.8}
          roughness={0.15}
          emissive={isHovered ? '#ff00ff' : '#ec4899'}
          emissiveIntensity={isHovered ? 0.8 : 0.3}
        />
      </mesh>

      {isHovered && (
        <Html position={[0, -1.5, 0]} center distanceFactor={1.2} sprite>
          <div className="bg-slate-900 border border-pink-500 rounded-lg p-3 w-40 shadow-lg">
            <h3 className="text-pink-500 font-bold text-sm">Marketing Services</h3>
            <p className="text-gray-300 text-xs mt-1">Data-driven strategies for growth</p>
          </div>
        </Html>
      )}
    </group>
  )
}

function Scene() {
  const [hoveredNode, setHoveredNode] = useState(null)
  const [rotationPaused, setRotationPaused] = useState(false)
  const orbitRef = useRef(0)

  useFrame(() => {
    if (!rotationPaused) {
      orbitRef.current += 0.01
    }
  })

  const handleNodeHover = (node, hovered) => {
    setHoveredNode(hovered ? node : null)
    setRotationPaused(hovered)
  }

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 8, 5]} intensity={0.8} />
      <pointLight position={[0, 2, 3]} intensity={0.4} color="#3b82f6" />
      
      <Environment preset="city" background={false} />
      <ContactShadows opacity={0.4} scale={10} blur={2.5} far={10} />

      <Core />
      <SoftwareProductsNode 
        isHovered={hoveredNode === 'software'}
        onHover={(hovered) => handleNodeHover('software', hovered)}
        orbitAngle={orbitRef.current}
      />
      <MarketingServicesNode 
        isHovered={hoveredNode === 'marketing'}
        onHover={(hovered) => handleNodeHover('marketing', hovered)}
        orbitAngle={orbitRef.current}
      />

      {/* Orbit rings */}
      <mesh rotation={[Math.PI / 2.5, 0, 0]}>
        <torusGeometry args={[3, 0.04, 8, 32]} />
        <meshStandardMaterial 
          color="#3b82f6" 
          emissive="#3b82f6"
          emissiveIntensity={0.2}
          transparent
          opacity={0.3}
        />
      </mesh>

      <OrbitControls
        autoRotate={!rotationPaused}
        autoRotateSpeed={2}
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.5}
      />
    </>
  )
}

export function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 2, 5], fov: 50 }}
      className="w-full h-full"
      gl={{ 
        antialias: false, 
        alpha: true,
        powerPreference: 'high-performance',
        precision: 'lowp'
      }}
      dpr={[1, 1.5]}
      performance={{ min: 0.5, max: 1 }}
    >
      <Scene />
    </Canvas>
  )
}
