import React, { useState } from 'react'
import Link from 'next/link'
import { useGlobalContext } from '@/context/context'
import Submenu from './Submenu'
const Header = () => {
  const { isSidebarOpen, openSidebar } = useGlobalContext()

  return (
    <nav className='md:px-16 px-6 py-4 z-20 top-0 left-0 shadow-sm bg-slate-900'>
      <div className='flex flex-wrap items-center justify-between max-w-screen-xl mx-auto'>
        <Link href='/' className='flex items-center'>
          <span className='self-center text-3xl font-semibold text-white'>
            Hello
          </span>
        </Link>
        <div className='flex items-center md:order-2'>
          <button
            type='button'
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0'
          >
            Register / Login
          </button>
          {/* humberger menu */}
          <button
            type='button'
            className='inline-flex items-center p-2 text-sm text-gray-300 bg-transparent rounded-lg md:hidden'
          >
            <svg
              className='w-6 h-6'
              aria-hidden='true'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'></path>
            </svg>
          </button>
        </div>
        <div className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1"'>
          <Submenu />
        </div>
      </div>
    </nav>
  )
}

export default Header
