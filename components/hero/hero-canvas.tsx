"use client";

import * as React from "react";
import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  Float,
  Html,
  Preload,
  MeshWobbleMaterial,
  Sparkles,
  Torus,
  AdaptiveDpr,
  AdaptiveEvents,
} from "@react-three/drei";
import * as THREE from "three";

// ------------------------------------------------------------------
// 1. Core Component
// ------------------------------------------------------------------
function Core() {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh>
        <sphereGeometry args={[1.8, 32, 32]} />
        <meshPhysicalMaterial
          transmission={1}
          thickness={1}
          roughness={0.05}
          ior={1.5}
          color="#ffffff"
          clearcoat={1}
          attenuationDistance={1}
          attenuationColor="#ffffff"
        />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.8, 16, 16]} />
        <meshBasicMaterial color="#ffffff" opacity={0.8} transparent />
      </mesh>
    </Float>
  );
}

// ------------------------------------------------------------------
// 2. Software Products Node
// ------------------------------------------------------------------
function SoftwareProductsNode() {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.2;
      ref.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <group
      position={[-4.5, 1.5, 0]}
      ref={ref}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
        if (typeof document !== "undefined") document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        setHovered(false);
        if (typeof document !== "undefined") document.body.style.cursor = "auto";
      }}
    >
      <Float speed={3} rotationIntensity={1} floatIntensity={2}>
        <mesh>
          <boxGeometry args={[1.2, 1.2, 1.2]} />
          <MeshWobbleMaterial
            factor={0.4}
            speed={2}
            color="#06b6d4"
            roughness={0.1}
            metalness={0.8}
          />
        </mesh>
        <mesh>
          <icosahedronGeometry args={[1.6, 1]} />
          <meshStandardMaterial
            color="#3b82f6"
            wireframe
            opacity={0.4}
            transparent
          />
        </mesh>

        {hovered && (
          <Html position={[0, -2, 0]} center style={{ zIndex: 100 }}>
            <div className="bg-black/80 backdrop-blur-md border border-cyan-500/30 p-3 rounded-xl w-48 text-center shadow-[0_0_20px_rgba(6,182,212,0.2)] pointer-events-none transition-opacity duration-300">
              <h3 className="font-bold text-cyan-400 text-xs tracking-widest uppercase mb-1">
                Software
              </h3>
              <p className="text-[10px] text-gray-300 leading-tight">
                Scalable SaaS & Digital Products
              </p>
            </div>
          </Html>
        )}
      </Float>
    </group>
  );
}

// ------------------------------------------------------------------
// 3. Marketing Services Node
// ------------------------------------------------------------------
function MarketingServicesNode() {
  const [hovered, setHovered] = useState(false);
  const outerRingRef = useRef<THREE.Mesh>(null);
  const innerRingRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (outerRingRef.current && innerRingRef.current) {
      outerRingRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      outerRingRef.current.rotation.y = state.clock.elapsedTime * 0.3;

      innerRingRef.current.rotation.x = -state.clock.elapsedTime * 0.4;
      innerRingRef.current.rotation.y = -state.clock.elapsedTime * 0.6;
    }
  });

  return (
    <group
      position={[4.5, -1.5, 0]}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
        if (typeof document !== "undefined") document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        setHovered(false);
        if (typeof document !== "undefined") document.body.style.cursor = "auto";
      }}
    >
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <group>
          <mesh ref={outerRingRef}>
            <torusGeometry args={[1.2, 0.08, 16, 64]} />
            <MeshWobbleMaterial
              factor={0.2}
              speed={2}
              color="#d946ef"
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>
          <mesh ref={innerRingRef}>
            <torusGeometry args={[0.7, 0.06, 16, 64]} />
            <meshStandardMaterial
              color="#f0abfc"
              metalness={0.5}
              roughness={0.2}
            />
          </mesh>
          <mesh>
            <sphereGeometry args={[0.25, 32, 32]} />
            <meshStandardMaterial
              color="#c026d3"
              emissive="#c026d3"
              emissiveIntensity={0.8}
            />
          </mesh>
        </group>

        {hovered && (
          <Html position={[0, -2, 0]} center style={{ zIndex: 100 }}>
            <div className="bg-black/80 backdrop-blur-md border border-fuchsia-500/30 p-3 rounded-xl w-48 text-center shadow-[0_0_20_rgba(217,70,239,0.2)] pointer-events-none transition-opacity duration-300">
              <h3 className="font-bold text-fuchsia-400 text-xs tracking-widest uppercase mb-1">
                Marketing
              </h3>
              <p className="text-[10px] text-gray-300 leading-tight">
                Targeted Growth & Conversions
              </p>
            </div>
          </Html>
        )}
      </Float>
    </group>
  );
}

// ------------------------------------------------------------------
// 4. Scene Wrapper
// ------------------------------------------------------------------
function Scene() {
  const groupRef = useRef<THREE.Group>(null);

  return (
    <>
      <Environment preset="city" resolution={128} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />

      <Sparkles
        count={50}
        scale={15}
        size={1.5}
        speed={0.4}
        opacity={0.2}
        color="#ffffff"
      />

      <group ref={groupRef} rotation={[0.2, 0, 0]}>
        <Core />
        <SoftwareProductsNode />
        <MarketingServicesNode />

        <Torus args={[5.5, 0.008, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
          <meshBasicMaterial color="#ffffff" transparent opacity={0.08} />
        </Torus>
        <Torus
          args={[5.5, 0.008, 16, 100]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.8, 0.8, 1]}
        >
          <meshBasicMaterial color="#ffffff" transparent opacity={0.04} />
        </Torus>
      </group>
    </>
  );
}

// ------------------------------------------------------------------
// 5. Main Canvas Export
// ------------------------------------------------------------------
export default function HeroCanvas() {
  return (
    <div className="relative w-full h-full bg-transparent rounded-2xl z-50">
      <Canvas
        style={{ overflow: "visible" }}
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: "high-performance",
          stencil: false,
          depth: true,
        }}
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 14], fov: 45 }}
      >
        <Suspense
          fallback={
            <Html center>
              <div className="text-sm text-cyan-400 font-mono tracking-widest animate-pulse">
                LOADING 3D...
              </div>
            </Html>
          }
        >
          <OrbitControls enableZoom={false} enablePan={false} makeDefault />
          <Scene />
          <AdaptiveDpr pixelated />
          <AdaptiveEvents />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}
