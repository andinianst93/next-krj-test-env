import React from 'react'
import featureLink from '../constants/FeatureLink'
import Link from 'next/link'

const Content = () => {
  return (
    <section className='py-8 px-12 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
      <div className='space-y-8 md:mx-16 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0'>
        {featureLink.map((f) => {
          const { image, title, desc } = f
          return (
            <div className='bg-white mx-auto shadow-md border border-gray-200 max-w-sm mb-5 rounded-2xl'>
              <Link href='/resources'>
                <img src={image} alt={title} className='rounded-2xl' />
              </Link>
              <div className='p-5 mx-auto'>
                <Link href='/resources'>
                  <h3 className='text-slate-900 font-medium text-xl mb-2'>
                    {title}
                  </h3>
                </Link>
                <p className='font-normal text-slate-700 mb-3'>{desc}</p>
                <div className='mx-auto'>
                  <button
                    type='button'
                    className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0'
                  >
                    Free Download
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Content
