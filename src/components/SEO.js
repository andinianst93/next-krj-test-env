import Head from 'next/head'
import { useRouter } from 'next/router'

const CommonSEO = ({
  title,
  description,
  ogType,
  ogImage,
  twImage,
  canonicalUrl,
}) => {
  const router = useRouter()
  return (
    <Head>
      <title>Hello: Testing a New Site</title>
      <meta name='robots' content='follow, index' />
      <meta name='description' content='This is for testing only' />
    </Head>
  )
}
export const PageSEO = ({ title, description }) => {
  return (
    <CommonSEO
      title='Hello: Web For Testing Only'
      description='Testing only website by Andini.'
    />
  )
}
