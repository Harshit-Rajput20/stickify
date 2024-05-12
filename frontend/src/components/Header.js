import React from 'react'
import Logo from './Logo'
import { GoSearch } from "react-icons/go";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";



function Header() {
  return (
    <header className='h-16 shadow-md bg-white'>
       <div className='h-full container mx-auto flex items-center px-4  justify-between '>
        <div className=''>
          <Logo w={90} h={60}/>
        </div>
        <div className=' hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow-md'>
          <input type='text' placeholder='search items here' className='w-full outline-none pl-2'/>
          <div className=' text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white'>
            <GoSearch/>
          </div>
        </div>
        <div className=' flex item-center gap-6'>
         
        <div className=' text-3xl cursor-pointer'>
          <FaRegCircleUser/>
        </div>

        <div className='text-3xl  relative'>
          <span> <FaCartShopping /></span>
          <div className='bg-red-600 text-white w-5 h-5 rounded-full p-0 flex items-center justify-center absolute -top-2 left-5' >
            <p className=' text-sm'>0</p>
          </div>
        </div>
          
          <div>
            <button className='px-3 py-1 rounded-full text-white bg-red-600 hover:bg-red-700'>Login</button>
          </div>

        </div>
       </div>
    </header>
  )
}

export default Header