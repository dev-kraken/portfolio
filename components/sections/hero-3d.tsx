"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import HeroBand from "@/components/sections/hero-band";
import { Environment, Lightformer } from "@react-three/drei";

const Hero3D = () => {
  return (
    <Canvas
      className="absolute inset-0 left-40"
      camera={{ position: [0, 0, 13], fov: 25 }}
      style={{
        position: "absolute",
        top: "-60px",
        right: 0,
        overflow: "hidden",
      }}
    >
      <ambientLight intensity={Math.PI} />
      <Physics interpolate gravity={[0, -40, 0]} timeStep={1 / 60}>
        <HeroBand />
      </Physics>
      <Environment background blur={0.75}>
        <Lightformer
          intensity={2}
          color="white"
          position={[0, -1, 5]}
          rotation={[0, 0, Math.PI / 3]}
          scale={[100, 0.1, 1]}
        />
        <Lightformer
          intensity={3}
          color="white"
          position={[-1, -1, 1]}
          rotation={[0, 0, Math.PI / 3]}
          scale={[100, 0.1, 1]}
        />
        <Lightformer
          intensity={3}
          color="white"
          position={[1, 1, 1]}
          rotation={[0, 0, Math.PI / 3]}
          scale={[100, 0.1, 1]}
        />
        <Lightformer
          intensity={10}
          color="white"
          position={[-10, 0, 14]}
          rotation={[0, Math.PI / 2, Math.PI / 3]}
          scale={[100, 10, 1]}
        />
      </Environment>
    </Canvas>
  );
};

export default Hero3D;
