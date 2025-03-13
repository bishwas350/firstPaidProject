import React from 'react'
import Flex from './Flex'
import facebook from '/public/facebook_5968764.png'
import insta from '/public/insta.png'
import tiktok from '/public/tiktok.png'
import youtube from '/public/youtube.png'
const SocalPart = () => {
  return (
    <>
    <div className="w-full flex justify-center">
        <Flex className={'items-center flex-wrap justify-center lg:justify-between gap-4 w-full'}>
            <a href="https://www.facebook.com/share/1BVurQpyqG/" target="_blank" rel="noopener noreferrer" className='flex-1 flex justify-center'>
                <img src={facebook} alt="facebook" className='h-[60px] md:h-[80px]' />
            </a>
                <a href="https://www.instagram.com/tu_sagor_sarker?igsh=MW1samFkeWp0OWFjeQ==" target="_blank" rel="noopener noreferrer" className='flex-1 flex justify-center'>
                    <img src={insta} alt="" className='h-[80px] md:h-[100px]'/>
                </a>
                <a href="https://www.tiktok.com/@tusagorsarker?_t=ZS-8uefAfhFpPW&_r=1" target="_blank" rel="noopener noreferrer" className='flex-1 flex justify-center'>
                <img src={tiktok} alt="" className='h-[60px] md:h-[80px]'/>
                </a>
                <a href="https://youtube.com/channel/UCXqo2VMhhyQ3LhQsHgPm92g?si=mGEqRksn-Cm3XQzw" target="_blank" rel="noopener noreferrer" className='flex-1 flex justify-center'>
                    <img src={youtube} alt=""  className='h-[70px] md:h-[90px]'/>
                </a>
        </Flex>
    </div>
    </>
  )
}

export default SocalPart