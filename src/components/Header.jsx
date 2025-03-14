import React, { useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import logo from '/public/nadir-on-the-go-footer-logo.png'
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import 'animate.css';
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);
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
              <div className=" text-center ml-5">
                <button className='lg:hidden' onClick={() => (open ? handleClose() : setOpen(true))}>
                  {open ? <IoMdClose className='text-white  ' onClick={handleClose} />
                    : <FaBars className='text-white' />

                  }
                </button>
              </div>
              {open && (
                <div className={`absolute lg:hidden  top-11  animate__animated ${animateOut ? "animate__fadeOutLeft" : "animate__fadeInLeft"}`}>
                  <div className="bg-gray-600 h-screen w-40  ">
                    <ul className='ml-10  pt-3'>
                      <Link to={"/"}>
                        <li className='font-mas text-black text-[12px] mb-5 leading-4  hover:font-semibold hover:text-white  hover:duration-200 cursor-pointer'>Home</li>
                      </Link>
                      <li className='font-mas mb-5 text-black text-[12px] leading-4 hover:font-semibold hover:text-white hover:duration-200 cursor-pointer'>Blog</li>
                      <Link to={"/ContactPart"}>
                        <li className='font-mas  hover:font-semibold hover:text-white  hover:duration-200 cursor-pointer text-black text-[12px] leading-4'>Contact</li>
                      </Link>
                    </ul>
                  </div>
                </div>
              )}
              <div className="text-center lg:hidden ">
                <a href="/"><span className='text-white'>Sagor on fire</span></a>
              </div>
              <div className=""></div>
              {/* mobile part */}

            </Flex>
            <div className="hidden lg:block">
              <Flex className={'justify-between items-center'}>
                <div  className="w-1/3">
                  <a href="/"><span className='text-white '>Sagor on fire</span></a>
                </div>
                <div className="w-1/3 ">
                <ul className='ml-10  pt-3  flex gap-20'>
                      <Link to={"/"}>
                        <li className='text-white font-mas  text-[12px]  leading-4  hover:font-semibold hover:text-white hover:duration-200 cursor-pointer'>Home</li>
                      </Link>
                      <li className='font-mas  text-white text-[12px] leading-4 hover:font-semibold hover:text-white hover:duration-200 cursor-pointer'>Blog</li>
                      <Link to={"/ContactPart"}>
                        <li className='font-mas  hover:font-semibold hover:text-white hover:duration-200 cursor-pointer text-white text-[12px] leading-4'>Contact</li>
                      </Link>
                    </ul>
                </div>
                <div className="w-1/3 flex justify-end lg:mr-10">
                <FaSearch  className='text-white'/>

                </div>
              </Flex>
            </div>
          </Container>
        </div>
      </main>
    </>
  )
}

export default Header