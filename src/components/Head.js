import React, { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'

function Header() {

  const[toggle,setToggle]=useState(false)

  return (

   <header className='flex justify-between px-5 py-5 w-full  '>
    <a href='#' className='font-bold text-brown    '>Varshaa Pandiyan</a>
    <nav className='hidden md:block'>
    <ul className='flex font-semibold '>
      <li><a href='/'>Home</a></li>
      <li><a href='#about'>About</a></li>
      <li><a href='#project'>Projects</a></li>
      <li><a href='#resume'>Resume</a></li>
      <li><a href='#contact'>Contact Me</a></li>
    </ul>
    </nav>

    { toggle && <nav className='block md:hidden'>
    < ul onClick={()=>setToggle(!toggle)} className='flex font-semibold flex-col mobile-nav '>
      <li><a href='/'>Home</a></li>
      <li><a href='#about'>About</a></li>
      <li><a href='#project'>Projects</a></li>
      <li><a href='#resume'>Resume</a></li>
      <li><a href='#contact'>Contact Me</a></li>
    </ul>
    </nav>}

    <button onClick={()=> setToggle(!toggle)} className='block md:hidden  '><Bars3Icon className='text-white h-6 '/></button>
   </header>
  )
}

export default Header