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
      <title>{title}</title>
      <meta name='robots' content='follow, index' />
      <meta name='description' content={description} />
    </Head>
  )
}
export const PageSEO = ({ title, description }) => {
  return <CommonSEO title={title} description={description} />
}
