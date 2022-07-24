// Canvas
const canvas = document.querySelector('canvas.webgl')

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Scene
// Scene is like a container for you to place your objects, models, particles, lights
const scene = new THREE.Scene()

// Object
// Object can be geometries, models, particles, lights etc.
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1)
const cubeMaterial = new THREE.MeshBasicMaterial({
    // colours can be specified in different ways
    color: '#ff0000'
})
const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial)
// Mesh is a combination of geometry (shape) and material (how it looks)
scene.add(cubeMesh)

// Camera
// Camera is like a theoretical point of view
// Field of view is expressed n degree and correspond to vertical vision angle
// Aspect ratio is the width of cavas divided by height
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
camera.position.x = 2
camera.position.y = 2
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    // Create the canvas
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)