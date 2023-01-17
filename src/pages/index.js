import React from 'react'
import { PageSEO } from '@/components/SEO'
import { Hero, Why, Cta, ResourcesC, Review, NewsLetter } from '@/components'
const index = () => {
  return (
    <>
      <PageSEO title='Hello' description='Testing only' />
      <Hero />
      <Why />
      <Cta />
      <ResourcesC />

      <NewsLetter />
    </>
  )
}

export default index
