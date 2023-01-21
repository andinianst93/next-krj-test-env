import React, { useState } from 'react'
import subLinks from '@/constants/NavLink'
import Link from 'next/link'
import { useGlobalContext } from '@/context/context'
import { FaTimes, FaAngleDown } from 'react-icons/fa'

const Sidebar = () => {
  const { toggleLinks, isSidebarOpen } = useGlobalContext()

  return (
    <aside
      className={
        isSidebarOpen
          ? 'fixed z-10 left-0 top-0 w-[100%] mx-auto h-[100%] border-r px-6 py-4 border-r-slate-900 bg-slate-900 ease-in duration-300 md:hidden'
          : 'ease-out duration-300 fixed left-[-100%] '
      }
    >
      <div className='flex justify-end'>
        <button onClick={toggleLinks}>
          <FaTimes className='text-3xl text-blue-600' />
        </button>
      </div>
      {subLinks.map((item, index) => {
        const { name, submenu } = item
        return (
          <div
            className='items-center justify-between w-full group'
            key={index}
          >
            <ul key={index} className='flex flex-col mt-4'>
              <li className='px-6 py-4 text-xl font-bold text-gray-100 hover:text-blue-500'>
                <button className='flex items-center justify-between'>
                  {name}
                </button>
              </li>
            </ul>
            {item.submenu && (
              <div>
                {item.sublinks.map((i, index) => {
                  return (
                    <div key={index}>
                      <ul className='grid grid-cols-2 items-center px-6'>
                        {i.sublink.map((tautan, index) => {
                          return (
                            <li key={index} className='text-base'>
                              <Link
                                href={tautan.link}
                                className='flex items-center gap-x-2 text-gray-100 hover:text-blue-500 group pb-2'
                              >
                                {tautan.icon}
                                {tautan.name}
                              </Link>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        )
      })}
    </aside>
  )
}

export default Sidebar
