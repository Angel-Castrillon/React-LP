import React from 'react'
import { heroImage1, heroImage2 } from '../assets/images/index.js'

const HeroSection = () => {
  return (
   <div className="flex flex-col items-center mt-6 lg:mt-20">
   <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        virtualR build tools
        <span className="bg-gradient-to-r from-blue-300 to-blue-800 text-transparent bg-clip-text">
            {" "}for developers
        </span>
   </h1>
   <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
   </p>
    <div className="flex justify-center my-10">
        <a href="#" className="bg-gradient-to-r from-blue-300 to-blue-800 py-3 px-4 mx-3 rounded-md">
            Get started
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border">
            Documentation
        </a>
    </div>
    <div className="flex mt-10 justify-center">
        <img src={heroImage1} alt="hero-image-1" className="rounded-lg w-1/2 border border-blue-300 shadow-blue-800 mx-2 my-4" />
        <img src={heroImage2} alt="hero-image-2" className="rounded-lg w-1/2 border border-blue-300 shadow-blue-800 mx-2 my-4" />
    </div>
   </div>
  )
}

export default HeroSection

