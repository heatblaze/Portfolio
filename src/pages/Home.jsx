import {Suspense} from 'react'
import { useState } from 'react';
import { Canvas, useThree } from '@react-three/fiber'
import { useRef, useEffect } from 'react';
import Loader from '../components/Loader'
import Island from '../models/Island';

import { OrbitControls } from '@react-three/drei';

import Birds from '../models/Bird';
import Plane from '../models/Plane';
import Sky from '../models/Sky';
import HomeInfo from '../components/HomeInfo';




        function Controls({ target = [0, 0, 0] }) {
            const controls = useRef();
            const { camera, gl } = useThree();
          
            useEffect(() => {
              controls.current.target.set(...target);
              controls.current.update();
            }, [target]);
          
            return <OrbitControls ref={controls} args={[camera, gl.domElement]} />;
          }

const Home = () => {
    const [isRotating, setIsRotating] = useState(false)
    const [currentStage, setCurrentStage] = useState(1);
    const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];

    if(window.innerWidth < 480){
        screenScale = [0.6, 0.6, 0.6];
        screenPosition = [0, -4, -30];
    }
    else if(window.innerWidth < 768){
        screenScale = [0.75, 0.75, 0.75];
        screenPosition = [0, -5, -35];
    }
    else{
        screenScale = [1, 1, 1];
    }
    return [screenScale, screenPosition, rotation];
   }


   const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;
    
    if(window.innerWidth < 480){
        screenScale = [1, 1, 1];
        screenPosition = [0, -1, 0];
    }
    else if(window.innerWidth < 768){
        screenScale = [1.2, 1.2, 1.2];
        screenPosition = [0, -1.2, 0];
    }
    else{
        screenScale = [3, 3, 3];
        screenPosition = [0, -4, -4];
    }
    return [screenScale, screenPosition];
   }

   const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
   const [planeScale, planePosition] = adjustPlaneForScreenSize();

  return (
    <section className="w-full h-screen relative">
        <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && !isRotating && <HomeInfo currentStage={currentStage} />}
        </div>
        <Canvas 
          linear={false}
          className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
          style={{ touchAction: 'none' }}
          camera={{ near: 0.1, far: 1000 }}        
        >
            <Suspense fallback={<Loader />}>
                <directionalLight position={[1,1,1]} intensity={2}/>
                <ambientLight intensity={0.5}/>
                <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1}/>
                <Birds />
                <Sky isRotating={isRotating}/>
                <Island
                
                    scale={islandScale}/* 0.01*/
                    position={islandPosition}/*0,0,0*/
                    rotation={islandRotation}/*0,0,0*/
                    isRotating={isRotating}
                    setIsRotating = {setIsRotating}
                    setCurrentStage={setCurrentStage}
                />
                <Plane 
                    isRotating = {isRotating}
                    scale = {planeScale}
                    position = {planePosition}
                    rotation = {[0, 20, 0]} 
                />
                {/*<Controls target={islandPosition} />*/}
            </Suspense>
            
        </Canvas>
        
    </section>
  ) 
}

export default Home
