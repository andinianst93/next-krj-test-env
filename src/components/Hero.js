import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Hero = () => {
  return (
    <section className='bg-slate-900 max-w-full md:flex md:justify-center md:items-center'>
      <div className='px-4 py-8 md:px-16 lg:py-16'>
        <h1 className='max-w-2xl text-white mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl md:text-center'>
          Let’s Collab!
        </h1>
        <p className='max-w-2xl mb-6 font-light text-gray-300 lg:mb-8 md:text-lg md:text-center'>
          Kamu dapat mengirimkan artikel berupa tips, studi kasus, atau opini
          seputar dunia digital marketing di sini. Ayo, daftar sekarang juga!
        </p>
        <div className='md:flex md:items-center md:justify-center'>
          <Link
            href='/contact'
            className='text-white inline-flex justify-center items-center px-5 py-3 mr-3 text-base font-medium text-center rounded-lg bg-blue-700 hover:bg-blue-900 focus:ring-4 focus:ring-blue-300'
          >
            Mulai Sekarang
            <svg
              className='w-5 h-5 ml-2 -mr-1'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                clipRule='evenodd'
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
