import React from 'react'
import BackSite from '../public/images/background_desc.jpeg'
import Image from 'next/image'
export const SiteDesc = () => {
  return (
    <div className='relative'>
      <Image alt='background' src={BackSite} className=' w-full opacity-90 h-96 rounded-sm'/>
      <div className=' absolute top-10 left-40  border-black bg-amber-200 font-serif text-4xl w-1/4 pd rounded-sm'>Having Doubt , get it cleared with peer
      </div>
      
    </div>
  )
}


