import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import store from '../images/appstore.png'
import google from '../images/googleplay.svg'
const Projects = () => {
  return (
    <section className='bg-slate-900'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6'>
        <div className='mx-auto max-w-screen-sm text-center'>
          <h2 className='mb-4 text-4xl tracking-tight font-extrabold leading-tight text-white'>
            Get Started with Hello
          </h2>
          <p class='mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg'>
            Try Hello Platform for 30 days. No credit card required.
          </p>
          <div className='flex items-center justify-center'>
            <Link
              href='#'
              class='text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800'
            >
              <Image src={store} width={150}></Image>
            </Link>
            <Link
              href='#'
              class='text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800'
            >
              <Image src={google} width={150}></Image>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
