import React, { useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import logo from '/public/nadir-on-the-go-footer-logo.png'
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import 'animate.css';

const Header = () => {
  const [open, setOpen] =useState(false);
  const [animateOut,setAnimateOut] =useState(false);
  const handleClose = () => {
    setAnimateOut(true);  // Start fade-out animation
    setTimeout(() => {
      setOpen(false);  // Hide the menu after animation
      setAnimateOut(false); // Reset animation state
    }, 500); // 500ms (match Animate.css animation duration)
  };
  return (
    <>
      <main>
        <div className="bg-black py-5">
          <Container>
            <Flex className={'justify-between items-center relative '}>
              {/* mobile part */}
              <div className="text-center ml-5">
              <button className='lg:hidden' onClick={() => (open ? handleClose() : setOpen(true))}>
                {open ? <IoMdClose className='text-white  ' onClick={handleClose}/>
                  : <FaBars className='text-white'/>

                }
              </button>
              </div>
              {open && (
                <div className={`absolute  top-11  animate__animated ${animateOut ? "animate__fadeOutLeft" : "animate__fadeInLeft"}`}>
                  <div className="bg-gray-600 h-screen w-40 ">
                    <ul className='ml-10 space-y-5 pt-3'>
                      <li className='font-mas text-black text-[12px] leading-4  hover:font-semibold hover:text-white hover:delay-300 hover:duration-200 cursor-pointer'>Home</li>
                      <li className='font-mas text-black text-[12px] leading-4 hover:font-semibold hover:text-white hover:delay-300 hover:duration-200 cursor-pointer'>Blog</li>
                      <li className='font-mas  hover:font-semibold hover:text-white hover:delay-300 hover:duration-200 cursor-pointer text-black text-[12px] leading-4'>Contact</li>
                    </ul>
                  </div>
                </div>
              )}
              <div className="text-center ">
                <a href="/"><span className='text-white'>Sagor on fire</span></a>
              </div>
              <div className=""></div>
            </Flex>
          </Container>
        </div>
      </main>
      {/* mobile part */}
    </>
  )
}

export default Header