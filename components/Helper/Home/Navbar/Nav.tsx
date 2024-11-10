"use client"
import { navLinks } from '@/constants/constant'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { HiBars3BottomRight } from 'react-icons/hi2'

// Define Props Types
type Props = {
  openNav: () => void
}

const Nav = ({ openNav }: Props) => {

  const [navBg, setnavBg] = useState(false)

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setnavBg(true)
      }
      if (window.scrollY < 90) {
        setnavBg(false)
      }
    }

    window.addEventListener('scroll', handler)

    return () => {
      window.removeEventListener('scroll', handler)
    }
  }, [])

  // Smooth scroll function
  const scrollToSection = (event: React.MouseEvent) => {
    event.preventDefault(); // Prevent default anchor behavior

    // Extract the target ID from the link
    const targetId = (event.target as HTMLElement).getAttribute("href")?.substring(1);

    // Find the target element by ID
    const targetElement = document.getElementById(targetId as string);
    
    // If the element exists, scroll to it with smooth behavior
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",  // Smooth scroll behavior
        block: "start",      // Align to the top of the element
      });
    }
  };

  return (
    <div className={`fixed ${navBg ? 'bg-[#0c1a42]' : 'bg-transparent'} h-[12vh] z-[10] w-full transition-all duration-200`}>

      {/* LOGO */}
      <div className='flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto'>
        <Image src='/images/logo.png' alt='LOGO' width={170} height={170} className='ml-[-0.5rem] sm:ml-0' />

        {/* NAV LINKS */}
<div className='hidden lg:flex items-center space-x-8'>
  {navLinks.map((navLink) => (
    <a
      key={navLink.id}
      href={navLink.url}
      onClick={scrollToSection} // Trigger smooth scroll
      className='nav___link block' // Ensure the link covers the full area
    >
      {navLink.label}
    </a>
  ))}
</div>


        {/* BUTTONS */}
        <div className='flex items-center space-x-4'>
        <a href="https://www.linkedin.com/in/abdulqadeerpor/" target='_blank'>
          <button className='md:px-10 md:py-3 px-8 py-3 text-blue-800 font-semibold sm:text-base text-sm bg-white
            hover:bg-gray-200 transition-all duration-200 rounded-lg'>
            Hire Me
          </button>
          </a>
          {/* BURGER */}
          <HiBars3BottomRight onClick={openNav} className='w-8 h-8 cursor-pointer text-white lg:hidden' />
        </div>
      </div>
    </div>
  );
}

export default Nav;
