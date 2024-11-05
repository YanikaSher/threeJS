import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader";
import HackerRoom from "../components/HackerRoom";
import { Leva, useControls } from "leva"

const Hero = () => {
  const x = useControls("HackerRoom", {
    //postion 
    positionX:{
      value: 2.5,
      min: -10,
      max: 10,
    },
    positionY:{
      value: 2.5,
      min: -10,
      max: 10,
    },
    positionZ:{
      value: 2.5,
      min: -10,
      max: 10,
    },
//rotation
    rotationX:
    {
      value: 0,
      min: -10,
      max: 10,
    },
    rotationY:
    {
      value: 0,
      min: -10,
      max: 10,
    },
    rotationZ:
    {
      value: 0,
      min: -10,
      max: 10,
    },
    //scale
    scale:
    {
      value: 1,
      min: 0.1,
      max: 10,
    },

  })
  return (
    <section className="min-h-screen border-0 w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi, i am Yana <span className="waving-hand"></span>
        </p>
        <p className="hero_tag text-gray_gradient">
          Building Products & Brands
        </p>
        <div className="w-full h-full absolute insert-0">
          <Leva/>
          <Canvas className="w-full h-full">
            <Suspense fallBac={<CanvasLoader />}>

              <PerspectiveCamera makeDefault position={[0, 5, 26]} />
              <HackerRoom
                // scale={0.01} 
                // position={[2.5, 2.5, 2.5]}
                // rotation={[0, 0, 0]}
                position={[x.positionX, x.positionY, x.positionZ]}
                rotation={[x.rotationX, x.rotationY, x.rotationZ]}
                scale={[x.scale, x.scale, x.scale]}
              />

              <ambientLight intensity={1} />
              <directionalLight position={[20, 20, 20]} intensity={0.5} />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Hero;
