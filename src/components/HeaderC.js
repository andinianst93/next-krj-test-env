import React, { useState } from 'react'
import BreadCrumb from './BreadCrumb'
const HeaderC = () => {
  return (
    <section className='bg-slate-900 pt-12'>
      <BreadCrumb />
      <div className='pb-4 px-4 mx-auto max-w-screen-xl lg:py-4 lg:px-6'>
        <div class='mx-auto max-w-screen-md text-center mb-8 lg:mb-12'>
          <h1 class='mb-4 text-6xl tracking-tight font-extrabold text-slate-100'>
            Resources
          </h1>
          <p class='mb-5 font-light text-slate-300 sm:text-xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            eius incidunt aliquam animi in iure?
          </p>
        </div>
      </div>
    </section>
  )
}

export default HeaderC
