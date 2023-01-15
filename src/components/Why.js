import React from 'react'
import Image from 'next/image'
import why from '../images/why.jpg'
import whyLink from '../constants/whyLink'
const Why = () => {
  return (
    <section className='bg-white md:py-12 md:px-32 p-8'>
      <div className=' m-auto max-w-full md:w-[95vw] md:grid md:grid-flow-col md:grid-cols-2'>
        <article className='self-center max-w-lg mx-auto'>
          <Image
            src={why}
            alt='why'
            width={450}
            height={75}
            className='rounded-md'
          />
        </article>
        <article className='mt-4'>
          <div className='md:text-left text-center'>
            <h2 className='text-lg font-semibold leading-8 text-blue-600'>
              Crawler
            </h2>
            <p className='mt-2 text-3xl md:text-left text-center font-bold tracking-tight text-gray-900 sm:text-4xl'>
              A better way to gain money
            </p>
            <p className='mt-6 md:text-left text-center max-w-2xl text-lg leading-8 text-gray-600'>
              Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
              magnam voluptatum cupiditate veritatis in accusamus quisquam.
            </p>
          </div>
          <div className='mt-6 grid grid-cols-1 gap-y-8 md:gap-x-6 md:gap-y-8'>
            {whyLink.map((w) => {
              const { name, description } = w
              return (
                <div
                  key={name}
                  className='relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row'
                >
                  <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-blue-700 text-white sm:shrink-0'>
                    <w.icon className='h-8 w-8' aria-hidden='true' />
                  </div>
                  <div className='sm:min-w-0 sm:flex-1'>
                    <p className='text-lg font-semibold leading-8 text-gray-900'>
                      {name}
                    </p>
                    <p className='mt-2 text-base leading-7 text-gray-600'>
                      {description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </article>
      </div>
    </section>
  )
}

export default Why
