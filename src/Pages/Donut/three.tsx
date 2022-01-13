import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Mesh } from 'three'

function Box(props: any) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef(Mesh)
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  //@ts-ignore
  useFrame((state, delta) => (ref.current.rotation.x += 0.01))
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

const Torus = (props: any) => {
  const torusRef = useRef();

  // useFrame(({ clock }) => {
  //   //@ts-ignore
  //   torusRef.current.material.uniforms.u_time.value = clock.oldTime * 0.0001;
  // });

  return (
    <mesh ref={torusRef} {...props}>
      <torusGeometry args={[1.8, 1.2, 48, 64]} />
    </mesh>
  );
};

export default function Three() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      {/* <Box position={[0, 0, 0]} /> */}
      <Torus />
    </Canvas>
  )
}
