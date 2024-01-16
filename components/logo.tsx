import React from 'react'
import Image from 'next/image'
import LogoSync  from '../public/images/Logo.png'
import Link from 'next/link'
export const Logo = () => {
  return (
      <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href="/">
        <Image alt='Logo' src ={LogoSync} height={45} />
        <span className="ml-3 text-white text-2xl">STUDYSYNC</span>
      </Link>
  )
}


