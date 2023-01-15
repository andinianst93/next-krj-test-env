import React from 'react'
import quotes from '../images/quotes.svg'
import Image from 'next/image'
const FeedbackCard = ({ content, name, title, img }) => {
  return (
    <div className='bg-white max-w-sm'>
      <Image
        src={quotes}
        alt='quotes'
        className='w-[42px] h-[27px] object-contain'
      />
      <p className='font-normal text-[18px] leading-[32px] text-slate-900 my-10'>
        {content}
      </p>
      <div className='flex flex-row'>
        <Image src={img} alt={name} className='rounded-full' />
        <div className='flex flex-col ml-4'>
          <h4 className='font-semibold text-[20px] leading-[32px] text-slate-900'>
            {name}
          </h4>
          <p className='font-semibold text-[16px] leading-[24px] text-slate-900'>
            {title}
          </p>
        </div>
      </div>
    </div>
  )
}

export default FeedbackCard
