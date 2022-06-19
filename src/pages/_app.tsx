import type { AppProps } from 'next/app'
import SEO from '../components/Seo'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (<>
    <SEO />
    <Component {...pageProps} />
  </>)
}

export default MyApp
