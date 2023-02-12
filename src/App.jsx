import { useEffect } from 'react'
import * as THREE from 'three'

import './App.css'

function App() {
  useEffect(() => {
    const scene = new THREE.Scene()

    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      1, 1000
    )
    camera.position.z = 96

    const canvas = document.getElementById('myThreeJsCanvas')
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement)

    const ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.5)
    ambientLight.castShadow = true
    scene.add(ambientLight)

    const spotLight = THREE.SpotLight(0xFFFFFF, 1)
    spotLight.castShadow = true
    spotLight.position.set(0, 64, 32)
    scene.add(spotLight)

    const animate = () => {
      renderer.render(scene, camera)
      window.requestAnimationFrame(animate)
    }
    animate()

  },[])

  return (
    <div>
      <canvas id='myThreeJsCanvas' />
    </div>
  )
}

export default App
