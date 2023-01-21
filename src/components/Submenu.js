import React, { useContext, useState } from 'react'
import Link from 'next/link'
import { FaAngleDown } from 'react-icons/fa'
import subLinks from '@/constants/NavLink'
const Submenu = () => {
  return (
    <>
      {subLinks.map((item, index) => {
        const { name, submenu } = item
        return (
          <div className='md:cursor-pointer group' key={index}>
            <ul
              className='flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0'
              key={index}
            >
              <li className='p-4 relative'>
                <button className='relative w-[100%] py-[10px] px-[20px] text-white text-lg rounded md:bg-transparent md:p-0 md:flex md:items-center md:justify-between '>
                  {name} <FaAngleDown className='pl-2' />
                </button>
              </li>
            </ul>
            {item.submenu && (
              <div>
                <div className='absolute top-16 hidden group-hover:md:block hover:md:block'>
                  <div className='border-gray-700 bg-gray-700 p-4 grid grid-cols-1 gap-10 w-max text-sm rounded-lg shadow-md'>
                    {item.sublinks.map((i, index) => {
                      return (
                        <div
                          className='p-2 pb-0 md:pb-4 text-gray-200'
                          key={index}
                        >
                          <ul className='space-y-4'>
                            {i.sublink.map((tautan, index) => {
                              return (
                                <li key={index}>
                                  <Link
                                    href={tautan.link}
                                    className='flex items-center text-gray-200 hover:text-blue-500 group gap-2'
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
                </div>
              </div>
            )}
          </div>
        )
      })}
    </>
  )
}

export default Submenu
