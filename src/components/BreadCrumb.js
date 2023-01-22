import Link from 'next/link'
import React from 'react'
Link
const BreadCrumb = ({ title }) => {
  return (
    <div className='flex justify-center items-center pb-4'>
      <ol className='inline-flex items-center space-x-1 md:space-x-3'>
        <li className='inline-flex items-center'>
          <Link
            href='/'
            className='inline-flex items-center text-sm font-extralight hover:text-blue-600 text-slate-200'
          >
            Home
          </Link>
        </li>
        <li>
          <div className='flex items-center'>
            <span className='text-white'>/</span>
            <span className='ml-1 text-sm font-medium  md:ml-2 text-slate-200'>
              {title}
            </span>
          </div>
        </li>
      </ol>
    </div>
  )
}

export default BreadCrumb
