import { useEffect } from 'react'
import * as THREE from 'three'
import SceneInit from './lib/SceneInit'

import './App.css'

function App() {
  useEffect(() => {
    const test = new SceneInit('myThreeJsCanvas');
    test.initialize();
    test.animate();

    // ADD BOX
    const boxGeometry = new THREE.BoxGeometry(16, 16, 16)
    const boxMaterial = new THREE.MeshNormalMaterial()
    const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial)
    test.scene.add(boxMesh)

  },[])

  return (
    <div>
      <canvas id="myThreeJsCanvas" />
    </div>
  )
}

export default App
