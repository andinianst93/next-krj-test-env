import React from 'react'
import { SearchBox, HeaderC, BreadCrumb } from '@/components'
import { PageSEO } from '@/components/SEO'
import { fetchAPI } from '../../lib/api'
import { getStrapiMedia } from '../../lib/media'
import ReactMarkdown from 'react-markdown'
import remarkBreaks from 'remark-breaks'
import Image from 'next/image'

const About = ({ about }) => {
  console.log(about)
  const { alternativeText, width, height } = about.attributes.image

  return (
    <>
      <PageSEO
        title='Hello: Tentang Kami'
        description='Platform Informasi yang khusus membahas hal-hal seputar Digital Marketing yakni Search Engine Optimization (SEO), Media Sosial, Digital Ads, dan Web Development.'
      />
      <div>
        <section className='bg-slate-900 pt-12'>
          <BreadCrumb title='Tentang Kami' />
          <HeaderC
            title='Tentang Hello'
            description='Platform Informasi yang khusus membahas hal-hal seputar Digital Marketing yakni Search Engine Optimization (SEO), Media Sosial, Digital Ads, dan Web Development.'
          />
        </section>
        <section className='py-4 px-8 mx-auto max-w-screen-xl '>
          <div className='grid md:grid-cols-2 items-center self-center max-w-[1240px] m-auto'>
            <div className='flex items-center justify-center mb-6'>
              <Image
                width={515}
                height={350}
                src={getStrapiMedia(about.attributes.image)}
                alt={alternativeText || ''}
              />
            </div>
            <div className='prose max-w-none leading-normal md:items-start w-full'>
              <ReactMarkdown
                children={about.attributes.body}
                remarkPlugins={[remarkBreaks]}
              ></ReactMarkdown>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [aboutRes] = await Promise.all([fetchAPI('/about', { populate: '*' })])
  console.log(aboutRes)
  return {
    props: {
      about: aboutRes.data,
    },
    revalidate: 1,
  }
}
export default About
