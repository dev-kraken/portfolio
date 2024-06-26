"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import HeroBand from "@/components/sections/hero-band";

const Hero3D = () => {
  return (
    <Canvas
      className="hidden sm:block"
      camera={{ position: [0, 0, 13], fov: 25 }}
    >
      <ambientLight intensity={Math.PI} />
      <Physics interpolate gravity={[0, -40, 0]} timeStep={1 / 60}>
        <HeroBand />
      </Physics>
    </Canvas>
  );
};

export default Hero3D;
