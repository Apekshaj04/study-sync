import React from 'react'
import BackSite from '../public/images/background_desc.png'
import Image from 'next/image'
export const SiteDesc = () => {
  return (
    <div className='relative'>
      <Image alt='background' src={BackSite} className=' w-full opacity-50 h-96'/>
      <div className=' absolute top-32 left-80  border-black bg-amber-200 font-serif text-4xl'>StudySync is Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, similique.
      </div>
      
    </div>
  )
}


