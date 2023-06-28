import React from "react"
import * as THREE from "three"
import { useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"


const NotFound = () => { 
  const canvasRef = useRef(null)
  const mouseRef = useRef({x: 0, y: 0})
  const rotationRef = useRef({x: 0, y:0})
  
  useEffect(() => {
    const canvas = canvasRef.current
    const renderer = new THREE.WebGLRenderer({canvas})

    const pixelRatio = window.devicePixelRatio || 1
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(pixelRatio)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.set(0,0,0)

    const geometry = new THREE.SphereGeometry(500,60,40)
    geometry.scale(-1,1,1)
    const loader = new THREE.TextureLoader()
    const texture = loader.load("/people-dancing.jpg")
    texture.minFilter = THREE.LinearFilter

    const material = new THREE.MeshBasicMaterial({ map: texture })
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    const handleMouseMove = (e) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouseRef.current.y = (e.clientY / window.innerHeight) * 2 - 1
    }

    const animate = () => {
      requestAnimationFrame(animate)

      const targetRotationX = mouseRef.current.y * 0.5
      const targetRotationY = mouseRef.current.x * 0.5

      rotationRef.current.x += (targetRotationX - rotationRef.current.x) * 0.05
      rotationRef.current.y += (targetRotationY - rotationRef.current.y) * 0.05

      camera.rotation.x = rotationRef.current.x
      camera.rotation.y = -rotationRef.current.y

      scene.rotation.y += 0.002

      renderer.render(scene,camera)
    } 

    animate()
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])
 
  const navigate = useNavigate()
  
  const handleGoBack = () => {
    navigate(-1)
  }

  const handleGoHome = () => {
    navigate("/")
  }

  return(
    <>
      <canvas ref={canvasRef}  className="sticky left-auto top-auto mb-4 flex h-auto justify-self-center align-middle shadow-xl shadow-learnpurple"/>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
        }}
      >
        <h1 className="rounded-lg text-4xl font-bold text-white">404</h1>
        <p className="py-2 font-medium text-white">Sorry Anime Not Found...</p>
        <button
          onClick={() => handleGoBack()}
          className="rounded-lg bg-learngreen py-2 px-4 font-semibold text-white shadow-md transition-all duration-500 ease-in-out hover:scale-110 hover:bg-purple-500"
        >
          Go Back
        </button>

        <button
          onClick={() => handleGoHome()}
          className="rounded-lg bg-learnpurple py-2 px-4 font-semibold text-white shadow-md transition-all duration-500 ease-in-out hover:bg-pink-500 hover:from-pink-500 hover:to-purple-500"
        >
          Go Home
        </button>
      </div>
    </>
  )
}

export { NotFound }