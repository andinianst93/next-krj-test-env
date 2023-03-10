import React from 'react'
import featureLink from '../constants/FeatureLink'
import Link from 'next/link'

const ResourcesC = () => {
  return (
    <section className='bg-white'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl md:py-16 md:px-6'>
        <div className='space-y-8 mx-auto lg:grid lg:grid-cols-3 sm:gap-6 md:gap-10 md:space-y-0'>
          {featureLink.map((f, index) => {
            const { image, title, desc } = f
            return (
              <div
                className='bg-white shadow-md border border-gray-200 max-w-sm mb-5 rounded-2xl'
                key={index}
              >
                <Link href='#'>
                  <img src={image} alt={title} className='rounded-2xl' />
                </Link>
                <div className='p-5'>
                  <Link href='#'>
                    <h3 className='text-slate-900 font-medium text-xl tracking-tight mb-2'>
                      {title}
                    </h3>
                  </Link>
                  <p className='font-normal text-slate-700 mb-3'>{desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ResourcesC
