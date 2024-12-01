import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF } from '@react-three/drei';

export const PlanetModel = () => {
  // Cargar el archivo GLB con la función useGLTF
  const { scene } = useGLTF('/planet/hd_149026_b.glb'); // Cambia esto con la ruta de tu archivo GLB

  return (
    <div style={{ width: '25%', height: '45vh' }}> {/* Ajusta la altura aquí */}
      <Canvas
        camera={{ position: [0, 0, 1400], fov: 40 }} // Aumentamos la distancia de la cámara
      >
        {/* Permite la rotación del modelo con el mouse, pero desactiva el zoom */}
        <OrbitControls enableZoom={false} />
        {/* Establece el entorno de iluminación */}
        <Environment preset="sunset" />
        {/* Renderiza el modelo GLB */}
        <primitive object={scene} scale={0.5} />
      </Canvas>
    </div>
  );
};
