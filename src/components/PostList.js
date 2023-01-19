import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import MainContent from '../constants/MainContent'
import featureLink from '../constants/FeatureLink'
const Header2 = () => {
  return (
    <section className='px-8 py-6 lg:py-6 mx-auto xl:px-5 max-w-screen-xl'>
      <div className='grid gap-10 lg:gap-10 md:grid-cols-2'>
        {MainContent.map((f, index) => {
          const { image, title, desc, category, authorName } = f
          return (
            <div
              className='bg-white border border-gray-200 max-w-screen-xl rounded-2xl relative overflow-hidden transition-all'
              key={index}
            >
              <Link href='#'>
                <img src={image} alt={title} className='rounded-2xl w-full' />
              </Link>
              <Link href='#'>
                <span className='inline-block mx-5 mt-5 text-base font-medium uppercase'>
                  {category}
                </span>
              </Link>
              <div className='p-5'>
                <Link href='#'>
                  <h3 className='text-slate-900 font-medium text-xl tracking-tight mb-2'>
                    {title}
                  </h3>
                </Link>
                <p className='font-normal text-slate-700 mb-3'>{desc}</p>
                <div className='flex items-center mt-3 space-x-3 text-gray-500'>
                  <div className='flex items-center gap-3'>
                    <span className='text-sm'>{authorName}</span>
                  </div>
                  <span className='text-xs text-gray-300 dark:text-gray-600'>
                    &bull;
                  </span>
                  <p className='text-sm'>24 January 2022</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className='py-6 max-w-screen-xl mx-auto'>
        <div className='grid gap-6 lg:gap-6 md:grid-cols-3'>
          {featureLink.map((f, index) => {
            const { image, title, desc, category, authorImg, authorName } = f
            return (
              <div
                className='bg-white border border-gray-200 max-w-screen-xl mb-5 rounded-2xl'
                key={index}
              >
                <Link href='#'>
                  <img src={image} alt={title} className='rounded-2xl' />
                </Link>
                <Link href='#'>
                  <span className='inline-block mx-5 mt-5 text-base font-medium uppercase'>
                    {category}
                  </span>
                </Link>
                <div className='px-5 py-4'>
                  <Link href='/resources'>
                    <h3 className='text-slate-900 font-medium text-xl tracking-tight mb-2'>
                      {title}
                    </h3>
                  </Link>
                  <p className='font-normal text-slate-700 mb-3'>{desc}</p>
                  <div className='flex items-center mt-3 space-x-3 text-gray-500'>
                    <div className='flex items-center gap-3'>
                      <span className='text-sm'>{authorName}</span>
                    </div>
                    <span className='text-xs text-gray-300 dark:text-gray-600'>
                      &bull;
                    </span>
                    <p className='text-sm'>24 January 2022</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Header2
