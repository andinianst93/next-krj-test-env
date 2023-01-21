import React from 'react'
import footerLink from '@/constants/FooterLink'
import Link from 'next/link'
const Footer = () => {
  return (
    <footer>
      <div className='md:px-16 px-6 py-4 bg-slate-900'>
        <div className='mx-auto max-w-screen-xl text-center'>
          <ul className='flex flex-wrap justify-center items-center mb-4 text-white mx-auto'>
            {footerLink.map((f) => {
              const { id, text, url } = f
              return (
                <li key={id} className='mr-4 hover:underline md:mr-6'>
                  <Link href={url}>{text}</Link>
                </li>
              )
            })}
          </ul>
        </div>
        <div className='flex justify-center items-center p-2 flex-col border-t-[1px] border-t-slate-700'>
          <p className='text-sm text-slate-50 sm:text-center'>
            &copy; {new Date().getFullYear()} DigiAdn. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
