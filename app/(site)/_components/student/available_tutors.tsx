import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ProfilePic from '@/public/images/profilepic.png'
export const  Available_tutors=()=> {
  return (
    <div>
      <h1>Available Tutors</h1>

<a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <Image className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={ProfilePic} alt=""/>
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> Name</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Age : <br/>Year : <br/>CGPA:<br/>Description:</p>
    
<Link href="#">View More</Link>
    </div>
   
</a>

    </div>
  )
}
