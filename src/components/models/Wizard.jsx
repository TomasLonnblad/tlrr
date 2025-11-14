"use client";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Wizard = React.memo(function Wizard(props) {
  // Use React.memo for performance optimization
  const { nodes, materials } = useGLTF("/models/wizard-transformed.glb");

  const modelRef = useRef();

  useFrame((state) => {
    modelRef.current =
      -5 + Math.sin(state.clock.elapsedTime) * 10.15;
  });

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.02}>
          <group rotation={[Math.PI, 0, 0]} scale={110.41}>




        <mesh
              castShadow
              receiveShadow
              geometry={nodes.Bench_BenchConcreteBase_0.geometry}
              material={materials.BenchConcreteBase}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Bench_BenchWood_0.geometry}
              material={materials.BenchWood}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Lamp_Emissive_0.geometry}
              material={materials.Emissive}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.PaitingsInside_Painting_0.geometry}
            material={materials.Painting}
            rotation={[-Math.PI / 2, 0, 0.099]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.PaitingsInside001_Painting_0.geometry}
            material={materials.Painting}
            rotation={[-Math.PI / 2, 0, 0.099]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.PaitingsOutside_Painting_0.geometry}
            material={materials.Painting}
            rotation={[-Math.PI / 2, 0, 0.099]}
            scale={100}
          />
        </group>
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group rotation={[Math.PI, 0, 0]} scale={110.41}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Bench_BenchConcreteBase_0001.geometry}
              material={materials['BenchConcreteBase.001']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Bench_BenchWood_0001.geometry}
              material={materials['BenchWood.001']}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Lamp_Emissive_0001.geometry}
              material={materials['Emissive.001']}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.PaitingsInside_Painting_0001.geometry}
            material={materials['Painting.001']}
            rotation={[-Math.PI / 2, 0, 0.099]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.PaitingsInside001_Painting_0001.geometry}
            material={materials['Painting.001']}
            rotation={[-Math.PI / 2, 0, 0.099]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.PaitingsOutside_Painting_0001.geometry}
            material={materials['Painting.001']}
            rotation={[-Math.PI / 2, 0, 0.099]}
            scale={100}
          />
        </group>
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group rotation={[Math.PI, 0, 0]} scale={110.41}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Bench_BenchConcreteBase_0002.geometry}
              material={materials['BenchConcreteBase.002']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Bench_BenchWood_0002.geometry}
              material={materials['BenchWood.002']}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Lamp_Emissive_0002.geometry}
              material={materials['Emissive.002']}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.PaitingsInside_Painting_0002.geometry}
            material={materials['Painting.002']}
            rotation={[-Math.PI / 2, 0, 0.099]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.PaitingsInside001_Painting_0002.geometry}
            material={materials['Painting.002']}
            rotation={[-Math.PI / 2, 0, 0.099]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.PaitingsOutside_Painting_0002.geometry}
            material={materials['Painting.002']}
            rotation={[-Math.PI / 2, 0, 0.099]}
            scale={100}
          />
  </group>
  </group>

    </group>
  );
});

export default Wizard;
useGLTF.preload("/models/wizard-transformed.glb");
