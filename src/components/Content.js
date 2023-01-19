import React from 'react'
import featureLink from '../constants/FeatureLink'
import Link from 'next/link'

const Content = () => {
  return (
    <section className='py-8 px-12 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
      <div className='space-y-8 md:mx-16 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0'>
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
    </section>
  )
}

export default Content
