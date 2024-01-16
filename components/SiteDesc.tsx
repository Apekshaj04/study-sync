import React from 'react'
import BackSite from '../public/images/background_desc.png'
import Image from 'next/image'
export const SiteDesc = () => {
  return (
    <div className='relative'>
      <Image alt='background' src={BackSite} className=' w-full opacity-30 h-96'/>
      <div className=' absolute top-0.5 left-52'>Centered</div>
      
    </div>
  )
}


