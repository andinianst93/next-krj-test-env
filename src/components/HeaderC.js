import React from 'react'

const HeaderC = ({ title, description }) => {
  return (
    <div className='pb-4 px-4 mx-auto max-w-screen-xl lg:py-4 lg:px-6'>
      <div className='mx-auto max-w-screen-md text-center mb-8 lg:mb-12'>
        <h1 className='mb-4 text-6xl tracking-tight font-extrabold text-slate-100'>
          {title}
        </h1>
        <p className='mb-5 font-light text-slate-300 sm:text-xl'>
          {description}
        </p>
      </div>
    </div>
  )
}

export default HeaderC
