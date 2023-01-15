import React from 'react'
import feedback from '../constants/ReviewLink'
import FeedbackCard from './FeedbackCard'
const Review = () => {
  return (
    <section className='bg-white'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
        <div class='mx-auto max-w-screen-md text-center mb-8 lg:mb-12'>
          <h2 class='mb-4 text-4xl tracking-tight font-extrabold text-slate-900'>
            What Our Customer Say?
          </h2>
          <p class='mb-5 font-light text-slate-500 sm:text-xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            eius incidunt aliquam animi in iure?
          </p>
        </div>
        <div className='space-y-8 md:grid md:grid-cols-3 sm:gap-6 lg:space-y-0 pt-0 pb-8 px-4 mx-auto max-w-screen-xl'>
          {feedback.map((feed) => {
            return <FeedbackCard key={feed.id} {...feed}></FeedbackCard>
          })}
        </div>
      </div>
    </section>
  )
}

export default Review
