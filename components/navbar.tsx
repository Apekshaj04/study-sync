import { Logo } from '@/components/logo'
import { UserButton } from '@clerk/nextjs'
import React from 'react'
import Link from 'next/link'
import { SiteDesc } from './SiteDesc'
const Navbar = () => {
  return (
    <div className=' bg-slate-600'>
     <header className="text-white body-font">
  <div className="container  flex flex-wrap  flex-col md:flex-row items-left mx-2 h-20">
    < Logo />
    <nav className="md:ml-auto flex flex-wrap items-center text-2xl justify-right font-serif ">
        
      <Link className="mr-5 hover:text-gray-900 flex-row-reverse" href ='/'>Request  Class</Link>
      <Link className="mr-5 hover:text-gray-900 " href ='/'>Schedule Class</Link>
     <div className=' rounded-md bg-white p-2'>
      <UserButton />
     </div>
     
    </nav>

  </div>
</header>
    </div>
  )
}

export default Navbar
