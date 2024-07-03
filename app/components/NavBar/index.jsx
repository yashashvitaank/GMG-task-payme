import React, { Children } from 'react'
import BrandLogo from '../BrandLogo'

function NavBar() {
    const navLinks =["About", "Services", "Visit Us", "Contacts"];
  return (
    <div className='h-[80px] px-8 md:flex md:gap-4 md:items-center md:justify-center fixed top-[8px] m-auto w-[95%] left-[50%] translate-x-[-50%] backdrop-blur-sm'>
        <BrandLogo />
        <div className='w-full h-[0.5px] bg-black'></div>
        <ul className='flex md:justify-around md:min-w-[40%] cursor-pointer'>
        {Children.toArray(navLinks.map(link => <li className='hover:font-semibold'>{link}</li>))}
        </ul>
    </div>
  )
}

export default NavBar