import React from 'react'
import ParticlesBackground from './ParticlesBackground'

const Footer = () => {
  return (
    <footer className='relative min-h-[200px] bg-black'>
      <ParticlesBackground />
      <div className="container mx-auto text-white text-center relative z-10 py-12">
        <h1 className='text-white text-center text-2xl font-mas font-semibold'>
          Sagor <br /> on fire.
        </h1>
      </div>
    </footer>
  )
}

export default Footer
