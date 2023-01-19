import React from 'react'
import { PageSEO } from '@/components/SEO'
import {
  Hero,
  Why,
  Cta,
  ResourcesC,
  Review,
  NewsLetter,
  PostList,
} from '@/components'
const index = () => {
  return (
    <>
      <PageSEO title='Hello' description='Testing only' />
      <Hero />
      <PostList />

      <NewsLetter />
    </>
  )
}

export default index
