import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

class ThreeExperience {
  container = null
  camera = null
  renderer = null

  controls = null

  constructor() {
    this.container = document.createElement('div')

    // CAMERA
    this.camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    )
    this.camera.position.set(0, 1, 8)
    this.scene = new THREE.Scene()
    this.scene.add(this.camer)

    // RENDERER
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true
    })
    this.renderer.setPixelsRatio(window.devicePixelRatio)
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.renderer.setAnimationLoop(this.render.bind(this))
    this.container.appendChild(this.renderer.domElement)

    // INITIAL MESH
    const box = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshBasicMaterial({color: 0xff0000})
    )
    this.scene.add(box)

    // CONTROLS
    this.controls = new OrbitControls(this.camera, this.renderer.domElement)
    this.controls.enableDamping = true

    // RESIZE
    window.addEventListener('resize', this.resize.bind(this))

  }

  initScene() {}

  render() {}

  resize() {}

  cleanUp() {}
}

export { ThreeExperience }