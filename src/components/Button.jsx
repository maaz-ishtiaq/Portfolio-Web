import React from 'react'
import { IoArrowForwardSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
function Button() {
  return (
    <Link to='/Projects' onClick={() => window.scrollTo(0, 0)} className='bg-orange-500 text-white px-4 py-2 rounded-full text-center active:scale-95 cursor-pointer relative top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transition-all duration-100 mt-8 inline-flex items-center gap-2'>
      View all Projects
      <span className='text-2xl font-bold'><IoArrowForwardSharp className='inline' /> </span>
    </Link>
  )
}

export default Button