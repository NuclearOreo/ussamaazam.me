/* eslint-disable @typescript-eslint/no-non-null-assertion */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useFrame } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    Donut: THREE.Mesh
    Icing: THREE.Mesh
    SurfSphere001: THREE.Mesh
    SurfSphere002: THREE.Mesh
    SurfSphere003: THREE.Mesh
    SurfSphere004: THREE.Mesh
    SurfSphere005: THREE.Mesh
    SurfSphere006: THREE.Mesh
    SurfSphere007: THREE.Mesh
    SurfSphere008: THREE.Mesh
    SurfSphere009: THREE.Mesh
    SurfSphere010: THREE.Mesh
    SurfSphere011: THREE.Mesh
    SurfSphere012: THREE.Mesh
    SurfSphere013: THREE.Mesh
    SurfSphere014: THREE.Mesh
    SurfSphere015: THREE.Mesh
    SurfSphere016: THREE.Mesh
    SurfSphere017: THREE.Mesh
    SurfSphere018: THREE.Mesh
    SurfSphere019: THREE.Mesh
    SurfSphere020: THREE.Mesh
    SurfSphere021: THREE.Mesh
    Sphere006: THREE.Mesh
    Sphere008: THREE.Mesh
    Sphere009: THREE.Mesh
    Sphere015: THREE.Mesh
    Sphere016: THREE.Mesh
    Sphere021: THREE.Mesh
    Sphere022: THREE.Mesh
    Sphere023: THREE.Mesh
    Sphere025: THREE.Mesh
    Sphere030: THREE.Mesh
    Sphere031: THREE.Mesh
    Sphere007: THREE.Mesh
    Sphere011: THREE.Mesh
    Sphere012: THREE.Mesh
    Sphere018: THREE.Mesh
    Sphere019: THREE.Mesh
    Sphere024: THREE.Mesh
    Sphere028: THREE.Mesh
    Sphere010: THREE.Mesh
    Sphere020: THREE.Mesh
    Sphere027: THREE.Mesh
    Sphere032: THREE.Mesh
    Sphere013: THREE.Mesh
    Sphere026: THREE.Mesh
    Sphere014: THREE.Mesh
    Sphere017: THREE.Mesh
    Sphere029: THREE.Mesh
  }
  materials: {
    ['Material.002']: THREE.MeshStandardMaterial
    ['Material.001']: THREE.MeshStandardMaterial
    ['Material.005']: THREE.MeshStandardMaterial
    ['Material.007']: THREE.MeshStandardMaterial
    ['Material.010']: THREE.MeshStandardMaterial
    ['Material.008']: THREE.MeshStandardMaterial
    ['Material.004']: THREE.MeshStandardMaterial
    ['Material.009']: THREE.MeshStandardMaterial
  }
}

export default function Model({ ...props }: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('/donut48.glb') as GLTFResult

  useEffect(() => {
    const getSign = () => (Math.random() < 0.5 ? -1 : 1)
    const getRandom = () => Math.random() * getSign()
    const [randomX, randomY, randomZ] = [getRandom(), getRandom(), getRandom()]

    group.current!.rotation.x = randomX
    group.current!.rotation.y = randomY
    group.current!.rotation.z = randomZ
  }, [])

  useFrame(() => {
    group.current!.rotation.x += 0.002
    group.current!.rotation.y += 0.001
    group.current!.rotation.z += 0.007
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Donut.geometry}
        material={materials['Material.002']}
        position={[-0.0037273846, 0.0251417495, -0.0048261699]}
      >
        <mesh geometry={nodes.Icing.geometry} material={materials['Material.001']} />
      </mesh>
      <mesh
        geometry={nodes.SurfSphere001.geometry}
        material={nodes.SurfSphere001.material}
        position={[0.0618830845, 0.046325326, -0.0139775071]}
        rotation={[0.8887751982, -0.8480326473, 2.0698016447]}
        scale={[0.2261177152, 0.2591602206, 0.2496156394]}
      />
      <mesh
        geometry={nodes.SurfSphere002.geometry}
        material={nodes.SurfSphere002.material}
        position={[0.0454681627, 0.0488541462, -0.0474228039]}
        rotation={[1.2365735117, -0.8422079955, 0.2755110228]}
        scale={[0.2261176705, 0.259160161, 0.2496155947]}
      />
      <mesh
        geometry={nodes.SurfSphere003.geometry}
        material={nodes.SurfSphere003.material}
        position={[-0.0369052477, 0.0577586927, -0.0000189692]}
        rotation={[1.5418944523, 0.0934769409, -1.6735732634]}
        scale={[0.2261176854, 0.2591601312, 0.2496156096]}
      />
      <mesh
        geometry={nodes.SurfSphere004.geometry}
        material={nodes.SurfSphere004.material}
        position={[-0.0168144777, 0.0444056988, 0.0192450806]}
        rotation={[0.4798117103, -0.6610789974, -2.680413274]}
        scale={[0.2261176556, 0.2591601312, 0.2496155798]}
      />
      <mesh
        geometry={nodes.SurfSphere005.geometry}
        material={nodes.SurfSphere005.material}
        position={[0.005962546, 0.0463504083, 0.063118048]}
        rotation={[2.1717006212, -0.3311724346, 2.6560277692]}
        scale={[0.2261176109, 0.2591601014, 0.24961555]}
      />
      <mesh
        geometry={nodes.SurfSphere006.geometry}
        material={nodes.SurfSphere006.material}
        position={[0.0451430231, 0.0527529418, 0.0187830627]}
        rotation={[1.5569640428, 0.0816389874, 1.6277159574]}
        scale={[0.2261176407, 0.2591601312, 0.2496156096]}
      />
      <mesh
        geometry={nodes.SurfSphere007.geometry}
        material={nodes.SurfSphere007.material}
        position={[0.0331169106, 0.0497728586, -0.0046782386]}
        rotation={[2.1411143604, 0.9975011856, -0.7130293884]}
        scale={[0.2261177301, 0.2591601908, 0.2496156842]}
      />
      <mesh
        geometry={nodes.SurfSphere008.geometry}
        material={nodes.SurfSphere008.material}
        position={[0.0577006452, 0.0500017293, -0.0008624471]}
        rotation={[1.7974759102, -0.3591816834, 1.8932688931]}
        scale={[0.2261176407, 0.259160161, 0.2496155947]}
      />
      <mesh
        geometry={nodes.SurfSphere009.geometry}
        material={nodes.SurfSphere009.material}
        position={[0.0481372774, 0.051838804, 0.0159364473]}
        rotation={[1.605633439, -0.1125786122, -0.9562393873]}
        scale={[0.2261177003, 0.259160161, 0.2496156394]}
      />
      <mesh
        geometry={nodes.SurfSphere010.geometry}
        material={nodes.SurfSphere010.material}
        position={[-0.0049984609, 0.0579703562, 0.0397695974]}
        rotation={[1.4318192171, 0.3727969235, -0.3625570067]}
        scale={[0.2261177152, 0.2591601908, 0.2496156693]}
      />
      <mesh
        geometry={nodes.SurfSphere011.geometry}
        material={nodes.SurfSphere011.material}
        position={[-0.0271100327, 0.053338442, 0.0210915357]}
        rotation={[1.2658039474, -0.5339779897, -3.063713314]}
        scale={[0.2261176705, 0.2591601312, 0.2496156245]}
      />
      <mesh
        geometry={nodes.SurfSphere012.geometry}
        material={nodes.SurfSphere012.material}
        position={[-0.0278901272, 0.0518625565, 0.0161619969]}
        rotation={[1.1489222868, -1.0094884788, 2.0954744484]}
        scale={[0.2261176407, 0.2591601014, 0.24961555]}
      />
      <mesh
        geometry={nodes.SurfSphere013.geometry}
        material={nodes.SurfSphere013.material}
        position={[-0.0584196188, 0.044321727, 0.0322697572]}
        rotation={[2.0354141993, 1.1291835688, 0.1726855226]}
        scale={[0.2261176407, 0.259160161, 0.2496156245]}
      />
      <mesh
        geometry={nodes.SurfSphere014.geometry}
        material={nodes.SurfSphere014.material}
        position={[-0.061003074, 0.0517752618, 0.0063489783]}
        rotation={[1.4441966871, 0.479821104, 3.0001129668]}
        scale={[0.2261176407, 0.2591601312, 0.2496155947]}
      />
      <mesh
        geometry={nodes.SurfSphere015.geometry}
        material={nodes.SurfSphere015.material}
        position={[-0.0435884632, 0.0587133951, -0.017359497]}
        rotation={[1.6857617561, -0.1431271511, -1.9136497511]}
        scale={[0.2261177301, 0.2591601908, 0.2496156394]}
      />
      <mesh
        geometry={nodes.SurfSphere016.geometry}
        material={nodes.SurfSphere016.material}
        position={[-0.0408704802, 0.0593042523, -0.0205871705]}
        rotation={[1.7013180502, 0.2829844463, -0.861264006]}
        scale={[0.2261176854, 0.259160161, 0.2496156096]}
      />
      <mesh
        geometry={nodes.SurfSphere017.geometry}
        material={nodes.SurfSphere017.material}
        position={[-0.0214477107, 0.060390275, -0.0224687718]}
        rotation={[2.4188634996, -0.4316128004, -2.4597097297]}
        scale={[0.2261176705, 0.2591601312, 0.2496155798]}
      />
      <mesh
        geometry={nodes.SurfSphere018.geometry}
        material={nodes.SurfSphere018.material}
        position={[-0.043447651, 0.052930899, -0.0418833233]}
        rotation={[0.6430712042, 0.9769075, -0.1616280238]}
        scale={[0.2261176109, 0.2591601014, 0.2496155649]}
      />
      <mesh
        geometry={nodes.SurfSphere019.geometry}
        material={nodes.SurfSphere019.material}
        position={[-0.0107277315, 0.0597884543, -0.043014586]}
        rotation={[1.2729033403, -0.6547926488, -0.1075182227]}
        scale={[0.2261176407, 0.2591601014, 0.24961555]}
      />
      <mesh
        geometry={nodes.SurfSphere020.geometry}
        material={nodes.SurfSphere020.material}
        position={[0.0185010135, 0.0535101555, -0.059914954]}
        rotation={[1.2265455335, -0.0845334857, 1.6709834445]}
        scale={[0.2261176705, 0.259160161, 0.2496156394]}
      />
      <mesh
        geometry={nodes.SurfSphere021.geometry}
        material={nodes.SurfSphere021.material}
        position={[0.0419208109, 0.0544505417, -0.0462728292]}
        rotation={[0.7906980293, -0.1910386724, 0.7246995522]}
        scale={[0.2261176556, 0.2591601014, 0.2496155798]}
      />
      <mesh
        geometry={nodes.Sphere006.geometry}
        material={nodes.Sphere006.material}
        position={[0.0235797837, 0.052181311, -0.0609123446]}
        rotation={[0.7624995303, 0.1131654797, -2.6462447044]}
        scale={[0.0454165265, 0.1002233103, 0.0491485521]}
      />
      <mesh
        geometry={nodes.Sphere008.geometry}
        material={nodes.Sphere008.material}
        position={[-0.0366607606, 0.0508873314, -0.051560659]}
        rotation={[0.3878250624, 0.3157869134, 0.2268740987]}
        scale={[0.0454165265, 0.1002232954, 0.0491485633]}
      />
      <mesh
        geometry={nodes.Sphere009.geometry}
        material={nodes.Sphere009.material}
        position={[-0.0536368079, 0.0509770922, -0.0306112878]}
        rotation={[1.5261411418, 0.8997499148, 2.2640980276]}
        scale={[0.0454165153, 0.1002233028, 0.0491485521]}
      />
      <mesh
        geometry={nodes.Sphere015.geometry}
        material={nodes.Sphere015.material}
        position={[0.0280314498, 0.0542635769, 0.0464362986]}
        rotation={[1.3496543395, -0.266043347, 0.0830256116]}
        scale={[0.0454165116, 0.1002232879, 0.0491485447]}
      />
      <mesh
        geometry={nodes.Sphere016.geometry}
        material={nodes.Sphere016.material}
        position={[0.0143269924, 0.0572294071, 0.039137736]}
        rotation={[1.6085367828, -0.0477371485, 1.9059716855]}
        scale={[0.0454165153, 0.1002232805, 0.0491485447]}
      />
      <mesh
        geometry={nodes.Sphere021.geometry}
        material={nodes.Sphere021.material}
        position={[-0.031753391, 0.0555290058, 0.0397468694]}
        rotation={[1.2648785006, -0.0357766098, 1.9143945023]}
        scale={[0.045416519, 0.1002233028, 0.0491485521]}
      />
      <mesh
        geometry={nodes.Sphere022.geometry}
        material={nodes.Sphere022.material}
        position={[-0.0537032858, 0.0534317419, 0.0204553716]}
        rotation={[1.7279216551, 0.4067825871, -1.5662736525]}
        scale={[0.0454165377, 0.1002233252, 0.0491485707]}
      />
      <mesh
        geometry={nodes.Sphere023.geometry}
        material={nodes.Sphere023.material}
        position={[-0.0613455921, 0.0509865433, -0.0096417703]}
        rotation={[2.0709407986, 0.8564187878, 2.3877549476]}
        scale={[0.0454165228, 0.1002233103, 0.0491485558]}
      />
      <mesh
        geometry={nodes.Sphere025.geometry}
        material={nodes.Sphere025.material}
        position={[-0.0195033774, 0.0514445007, -0.0615302287]}
        rotation={[0.7125516399, 0.8440550952, -2.1581723865]}
        scale={[0.0454165079, 0.100223273, 0.0491485372]}
      />
      <mesh
        geometry={nodes.Sphere030.geometry}
        material={nodes.Sphere030.material}
        position={[0.0464576371, 0.0568658262, -0.0333187021]}
        rotation={[1.8666955772, -0.3319518617, -0.2064993922]}
        scale={[0.0454165265, 0.1002233103, 0.0491485484]}
      />
      <mesh
        geometry={nodes.Sphere031.geometry}
        material={nodes.Sphere031.material}
        position={[0.0385733545, 0.0575713813, -0.0257738885]}
        rotation={[1.6935025065, 0.0033069747, -0.7035005135]}
        scale={[0.045416519, 0.1002232954, 0.0491485521]}
      />
      <mesh
        geometry={nodes.Sphere007.geometry}
        material={nodes.Sphere007.material}
        position={[0.0024613498, 0.0557409376, -0.037967816]}
        rotation={[1.9411575893, -0.225116049, -1.2617118568]}
        scale={[0.0496227071, 0.0689596236, 0.0537003689]}
      />
      <mesh
        geometry={nodes.Sphere011.geometry}
        material={nodes.Sphere011.material}
        position={[0.0369773358, 0.0483788885, 0.0489758886]}
        rotation={[2.6273562627, -0.2251379265, -0.0351756586]}
        scale={[0.0496226884, 0.0689596087, 0.053700354]}
      />
      <mesh
        geometry={nodes.Sphere012.geometry}
        material={nodes.Sphere012.material}
        position={[0.0370922461, 0.0523521155, 0.0142684374]}
        rotation={[0.9401559267, -0.2927314128, -1.635067333]}
        scale={[0.0496227257, 0.0689596385, 0.0537003763]}
      />
      <mesh
        geometry={nodes.Sphere018.geometry}
        material={nodes.Sphere018.material}
        position={[-0.0007344719, 0.0552034639, 0.0524262227]}
        rotation={[1.9281382273, 0.591849141, 1.5601490644]}
        scale={[0.0496226959, 0.0689596161, 0.0537003689]}
      />
      <mesh
        geometry={nodes.Sphere019.geometry}
        material={nodes.Sphere019.material}
        position={[-0.0130028808, 0.0513988361, 0.0269589163]}
        rotation={[1.3168849396, -0.5258717159, -0.6054903887]}
        scale={[0.0496226996, 0.0689596087, 0.0537003577]}
      />
      <mesh
        geometry={nodes.Sphere024.geometry}
        material={nodes.Sphere024.material}
        position={[-0.0273085441, 0.057695169, -0.0467346609]}
        rotation={[1.2685239753, 0.3567726913, 1.5190441612]}
        scale={[0.0496226959, 0.0689596161, 0.0537003689]}
      />
      <mesh
        geometry={nodes.Sphere028.geometry}
        material={nodes.Sphere028.material}
        position={[0.0206311923, 0.0571646467, -0.0456833951]}
        rotation={[1.7250854402, 0.0520929496, -1.0499244041]}
        scale={[0.0496226959, 0.0689596087, 0.0537003614]}
      />
      <mesh
        geometry={nodes.Sphere010.geometry}
        material={nodes.Sphere010.material}
        position={[-0.0413193367, 0.0559275635, 0.0262497514]}
        rotation={[1.6770211322, -0.0881540014, 0.5543414992]}
        scale={[0.0466671586, 0.1029831693, 0.0505019613]}
      />
      <mesh
        geometry={nodes.Sphere020.geometry}
        material={nodes.Sphere020.material}
        position={[-0.0203695763, 0.0518136844, 0.0565808974]}
        rotation={[2.1480672403, 0.1266310207, -0.8957657623]}
        scale={[0.0466671661, 0.1029831693, 0.0505019613]}
      />
      <mesh
        geometry={nodes.Sphere027.geometry}
        material={nodes.Sphere027.material}
        position={[-0.0007358475, 0.0519689173, -0.0637775883]}
        rotation={[0.6670823268, 0.2834683006, -2.0978963745]}
        scale={[0.0466671735, 0.1029831916, 0.0505019724]}
      />
      <mesh
        geometry={nodes.Sphere032.geometry}
        material={nodes.Sphere032.material}
        position={[0.0439122282, 0.0534856468, -0.0061027263]}
        rotation={[1.2292459858, -0.0211800024, -2.1821218323]}
        scale={[0.0466671735, 0.1029831991, 0.0505019762]}
      />
      <mesh
        geometry={nodes.Sphere013.geometry}
        material={nodes.Sphere013.material}
        position={[0.0250881948, 0.0557861626, 0.0273682289]}
        rotation={[1.4824603957, -0.4129671426, -1.4442980596]}
        scale={[0.0408274271, 0.0577103347, 0.0441823564]}
      />
      <mesh
        geometry={nodes.Sphere026.geometry}
        material={nodes.Sphere026.material}
        position={[-0.0128443316, 0.0533042997, -0.0608728565]}
        rotation={[1.2045300975, -0.1071648423, 0.5589623925]}
        scale={[0.0408274308, 0.0577103421, 0.0441823602]}
      />
      <mesh
        geometry={nodes.Sphere014.geometry}
        material={nodes.Sphere014.material}
        position={[0.013643763, 0.0506249219, 0.0236927327]}
        rotation={[0.9256021392, -0.0846646208, 1.0406537926]}
        scale={[0.0499068946, 0.0862256959, 0.0540079139]}
      />
      <mesh
        geometry={nodes.Sphere017.geometry}
        material={nodes.Sphere017.material}
        position={[-0.0022981754, 0.0531859286, 0.0297143459]}
        rotation={[1.2670441998, 0.224089558, 0.0784940921]}
        scale={[0.0499068983, 0.0862256959, 0.0540079176]}
      />
      <mesh
        geometry={nodes.Sphere029.geometry}
        material={nodes.Sphere029.material}
        position={[0.0239814389, 0.0554049313, -0.0316595733]}
        rotation={[1.502427563, 0.7731012206, -2.1985436394]}
        scale={[0.0499068871, 0.0862256736, 0.0540079027]}
      />
    </group>
  )
}

useGLTF.preload('/donut48.glb')
