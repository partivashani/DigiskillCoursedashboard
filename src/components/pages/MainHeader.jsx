// import Link from 'next/link';
import React from 'react'
import { CiSearch } from "react-icons/ci";
import { NavLink } from 'react-router-dom'
import LoginStudent from './LoginStudent'

const MainHeader = () => {
  
  return (
    <>

      <section className='bg-blue-100 overflow-hidden text-white font-serif'>
    
    <div className=' w-[92%] mx-auto'>
    <div className='flex justify-between mx-5'>
         <div className=' h-20 w-28 text-center '><img src="/logo.png" alt="" className='w-[100%] h-[100%]'/></div>
         {/*  */}
         <div className='flex gap-5 items-center '>
          <NavLink to="/MainHeader.jsx" className={({isActive})=>isActive ? "text-blue-500": "text-black"}> Home</NavLink>
          <NavLink to="/Coursecard.jsx" className={({isActive})=>isActive ? "text-blue-500": "text-black"}>About</NavLink>
          <NavLink to="/Yourgols.jsx" className={({isActive})=>isActive ? "text-blue-500": "text-black"}>Blog</NavLink>
          <NavLink to="/MainFooter.jsx" className={({isActive})=>isActive ? "text-blue-500": "text-black"}>Contact</NavLink>
          <NavLink to="/LoginStudent" className={({isActive})=>isActive ? "text-blue-500": "text-black"}>Login/Signup</NavLink>

          

         </div>
       
       </div>
    </div>

      </section>
    </>
  )
}

export default MainHeader;
