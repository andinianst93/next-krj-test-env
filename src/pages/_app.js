import '../styles/globals.css'
import { Layout } from '@/components'
import { AppProvider } from '@/context/context'
import { fetchAPI } from '../../lib/api'
import { getStrapiMedia } from '../../lib/media'
import { createContext } from 'react'

export const GlobalContext = createContext({})

const MyApp = ({ Component, pageProps }) => {
  const { about } = pageProps

  return (
    <>
      <AppProvider>
        <Layout>
          <Component {...pageProps}></Component>
        </Layout>
      </AppProvider>
    </>
  )
}

export default MyApp
