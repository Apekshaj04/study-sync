import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ProfilePic from '@/public/images/profilepic.png'
export const  Tutor_desc=()=> {
  return (
   
<a href="#" className="
    flex flex-col items-center bg-white border
    border-gray-200 rounded-lg
    shadow md:flex-row md:max-w-3xl
    hover:bg-gray-100 dark:border-gray-700
    dark:bg-gray-800 dark:hover:bg-gray-700 ">
    <Image className="object-cover w-fit rounded-t-lg h-32 md:h-auto  md:rounded-none md:rounded-s-lg" src={ProfilePic} alt=""/>
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> Name</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gr<ray-400">Age : <br/>Year : <br/>CGPA:<br/>Description:<br/>
        <b>List Of Available Slots of the Tutor</b>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Class Name
                </th>
                <th scope="col" className="px-6 py-3">
                   Time
                </th>
                <th scope="col" className="px-6 py-3">
                   Date
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4">
                    Silver
                </td>
                <td className="px-6 py-4">
                    Laptop
                </td>
               
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Microsoft Surface Pro
                </th>
                <td className="px-6 py-4">
                    White
                </td>
                <td className="px-6 py-4">
                    Laptop PC
                </td>
               
            </tr>
            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Mouse 2
                </th>
                <td className="px-6 py-4">
                    Black
                </td>
                <td className="px-6 py-4">
                    Accessories
                </td>
                
            </tr>
        </tbody>
    </table>
</div>

        
        </p>

    </div>
   
</a>
  )
}
