

import { Logo } from '@/components/logo'
import { UserButton, auth, useAuth } from '@clerk/nextjs'
import React from 'react'
import Link from 'next/link'
import { SiteDesc } from './SiteDesc'
import { useModal } from '@/hooks/use-modal-store';
import { Button } from './ui/button';
import getTutorById from '@/actions/getTutorById';
import { useRouter } from 'next/navigation';
const Navbar = async () => {
  const {userId} = auth();
  const {onOpen} = useModal();
  if(!userId) {
    return null;
  }
  const tutor = await getTutorById(userId);
  const handleClick = () => {
    if(tutor) {
      window.location.assign(`/tutor/${tutor.id}`)
    }

    onOpen()
  }
  return (
    <div className=' bg-slate-600'>
     <header className="text-white body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    < Logo />
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center font-serif">
        
      <Link className="mr-5 hover:text-gray-900" href ='/'>Request  Class</Link>
      <Button className="mr-5 " variant="ghost" onClick={handleClick}>Schedule Class</Button>
     <div className=' rounded-md border-white'>
      <UserButton />
     </div>
     
    </nav>

  </div>
</header>
    </div>
  )
}

export default Navbar
