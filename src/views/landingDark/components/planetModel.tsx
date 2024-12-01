import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF } from '@react-three/drei';
import './styles.scss'; 
export const PlanetModel = () => {
  const { scene } = useGLTF('/planet/hd_149026_b.glb');

  return (
    <div className="planet-container">
      <Canvas camera={{ position: [0, 0, 1400], fov: 40 }}>
        <OrbitControls enableZoom={false} />
        <Environment preset="sunset" />
        <primitive object={scene} scale={0.5} />
      </Canvas>
    </div>
  );
};
