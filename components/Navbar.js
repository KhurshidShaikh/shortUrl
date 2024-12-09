"use client"
import React, { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
    const[isMobile,setIsMobile]=useState(true)
  
  
  return (
    <>
    <nav className="bg-green-500 border-b border-gray-200 shadow-xl py-1 sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-gray-900">shortURL</h1>
          </div>
          <div className="hidden sm:flex sm:space-x-8">
            <Link href="/" className="text-gray-900 hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-900 hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
              About
            </Link>
          </div>
          <div className="sm:hidden">
            <button type="button" className="text-gray-500 hover:text-gray-600" onClick={()=>{setIsMobile(!isMobile)}}>
                {isMobile?(
                       <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M4 6h16M4 12h16M4 18h16" />
                     </svg>
                ):(
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )
                }
            </button>
          </div>

        </div>
      </div>
    </nav>
      
    <div className={`bg-gray-200  flex justify-start ${isMobile && 'hidden'}`}>
     <ul className=' flex flex-col gap-2 mx-3 py-2'>
       <Link href={"/"}><li>Home</li></Link> 
       <Link href={"/about"}><li>About</li></Link> 
     </ul>
 </div>
    </>
  )
}

export default Navbar


