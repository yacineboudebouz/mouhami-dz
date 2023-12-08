import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'



const Judge = () => {

  const judge = useGLTF('./../../../../../public/judge/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={10} />
      <spotLight position={[-20, 50, 30]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={2048}
      />
      <primitive object={judge.scene} scale={3}
        position={[0, 0, 0]}

      />
    </mesh>
  )
}

const JudgeCanva = () => {
  // const [isMobile, setIsMobile] = useState(false)
  // // useEffect(() => {
  // //   const mediaQuery = window.matchMedia('(max-width: 600px)')
  // //   setIsMobile(mediaQuery.matches);

  // //   const hendleMediaQuery = (e) => {
  // //     setIsMobile(e.matches);
  // //   }
  // //   mediaQuery.addEventListener('change', hendleMediaQuery)

  // //   return () => {
  // //     mediaQuery.removeEventListener('change', hendleMediaQuery)
  // //   }

  // // }, [])
  return (
    <Canvas frameloop='demand'
      shadows camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense >
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Judge />

      </Suspense>
      <Preload all />

    </Canvas>
  )
}

export default JudgeCanva