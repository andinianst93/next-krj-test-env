import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Hero = () => {
  return (
    <section>
      <div className='grid px-4 py-8 md:px-16 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 bg-slate-900 max-w-full'>
        <div className='mr-auto place-self-center lg:col-span-7 '>
          <h1 className='max-w-2xl text-white mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl'>
            Lorem ipsum dolor sit amet
          </h1>
          <p className='max-w-2xl mb-6 font-light text-gray-300 lg:mb-8 md:text-lg lg:text-xl'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
            voluptas harum placeat quam in quos minima. Veritatis et id
            deleniti!
          </p>
          <Link
            href='/contact'
            className='inline-flex text-white items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center rounded-lg bg-blue-700 hover:bg-blue-900 focus:ring-4 focus:ring-blue-300'
          >
            Get started
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
        <div className='hidden lg:mt-0 lg:col-span-5 lg:flex'></div>
      </div>
    </section>
  )
}

export default Hero
