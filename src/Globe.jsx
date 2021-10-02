import React, { Suspense } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import earth from "./img/earth1.png";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Model = () => {
  const gltf = new GLTFLoader("/earth2.blend", true);
  return <primitive object={gltf.scene} dispose={null} />;
};

function Globe(props) {
  return (
    <div className="core col-sm-3 col-md-6 col-lg-12">
      <div className="planet">
        {/* <span>
          <img src={earth} alt='' className='img1' />
              </span>  */}
        <Canvas camera={{ position: [0, 0, 120], fov: 70 }}>
          <Suspense fallback={null}>
            <mesh position={[0, -35, 0]}>
              <Model />
            </mesh>
          </Suspense>
        </Canvas>
      </div>
      <div className="planet-info">
        <div className="title">
          <h1>Earth</h1>
        </div>
        <div className="para py-2 px-4">
          <h3>
            Earth is the third planet from the Sun and the only astronomical
            object known to harbor.The remaining 70.8% is covered with water,
            mostly by oceans, seas, gulfs, and other salt-water bodies, but also
            by lakes, rivers, and other freshwater, which together constitute
            the hydrosphere.
          </h3>
        </div>
        <div className="overview">
          <div className="over1">Overview</div>
          <div className="over">Internal structure</div>
          <div className="over">Surface Geology</div>
        </div>
      </div>
    </div>
  );
}

export default Globe;
