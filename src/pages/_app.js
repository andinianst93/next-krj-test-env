import '../styles/globals.css'
import { Layout } from '@/components'
import { AppProvider } from '@/context/context'
export default function App({ Component, pageProps }) {
  return (
    <AppProvider>
      <Layout>
        <Component {...pageProps}></Component>
      </Layout>
    </AppProvider>
  )
}
