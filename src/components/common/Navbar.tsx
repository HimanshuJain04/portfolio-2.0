'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import logo from '../../../public/images/hjLogo.png'
import Image from 'next/image'
import ThemeSwitch from './ThemeSwitch'
import { useRouter } from 'next/navigation'

const NavLinks = [
  {
    label: 'Home',
    path: '/'
  },
  {
    label: 'About',
    path: '/about'
  },
  {
    label: 'Projects',
    path: '/projects'
  },
  {
    label: 'Contact',
    path: '/contact'
  }
]

export function Navbar () {
  const [scrollTop, setScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Check if the scroll position is at the top
      if (window.scrollY > 0) {
        setScrollTop(true)
      } else {
        setScrollTop(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    // Cleanup the event listener when the component unmounts
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-[200] mx-auto mt-4 flex w-[95%] max-w-[50rem] items-center justify-between rounded-2xl px-4 py-2 antialiased md:w-full md:px-10 bg-white/[0.5] backdrop-blur-xl  transition-all ease-in-out duration-100   ${
        scrollTop
          ? 'shadow-2xl shadow-black/25 dark:bg-white/[6%]'
          : 'shadow-none dark:bg-black'
      } 
`}
    >
      {/* logo part */}
      <div>
        <Link href='/'>
          <Image src={logo} alt='logo' height={70} width={50} />
        </Link>
      </div>

      {/* links | theme*/}
      <div className='flex flex-row items-center gap-5'>
        {/* links */}
        <div className='flex flex-row items-center'>
          {NavLinks.map((link, index) => (
            <div key={index}>
              <div className='font-semibold px-3 py-2'>
                <Link href={link.path}>
                  <span className='p-1 hover:text-blue-400 transition-all duration-200'>
                    {link.label}
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* theme */}
        <ThemeSwitch />
      </div>
    </nav>
  )
}
