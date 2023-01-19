import React from 'react'
import HeaderC from '@/components/HeaderC'
import { Content, NewsLetter, SearchBox } from '@/components'
import { PageSEO } from '@/components/SEO'

const Resources = () => {
  return (
    <>
      <PageSEO title='SEO' description='Testing only' />

      <HeaderC />
      <SearchBox />
      <Content />
      <NewsLetter />
    </>
  )
}

export default Resources
