import { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import birdScene from '../assets/3d/bird.glb';

export default function Birds() {
  const birdRef = useRef();
  const { scene, animations } = useGLTF(birdScene);
  const { actions } = useAnimations(animations, birdRef);

  useEffect(() => {
    actions[Object.keys(actions)[0]]?.play();
  }, [actions]);

  const pointA = new THREE.Vector3(-5, 2, 2);   // near left
  const pointB = new THREE.Vector3(5, 3, -6);   // far right
  const journeyTime = 8;                        // seconds one way
  const bobAmp = 0.25;

  useFrame(({ clock }) => {
    const bird = birdRef.current;
    if (!bird) return;

    const totalTime = clock.getElapsedTime();
    const loopTime = totalTime / journeyTime;
    const direction = Math.floor(loopTime) % 2 === 0 ? 1 : -1;
    const t = (loopTime % 1); // 0 → 1 within current leg

    const from = direction === 1 ? pointA : pointB;
    const to   = direction === 1 ? pointB : pointA;

    const pos = from.clone().lerp(to, t);
    pos.y += Math.sin(t * Math.PI * 2) * bobAmp;

    bird.position.copy(pos);

    // Rotation
    const yaw = Math.atan2(to.x - from.x, to.z - from.z);
    bird.rotation.set(0, yaw + Math.PI, 0); // add 180° to correct facing

    // Shrink as it flies away, grow as it returns
    const scale = (direction === -1 && t === 0)
    ? 0.001
    : THREE.MathUtils.lerp(0.0035, 0.001, t);
  bird.scale.setScalar(scale);
  });

  return (
    <mesh ref={birdRef} frustumCulled={false}>
      <primitive object={scene} />
    </mesh>
  );
}
