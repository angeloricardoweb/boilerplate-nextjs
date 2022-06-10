import type { AppProps } from 'next/app'
import SEO from '../components/Seo'
import { GlobalStyle } from '../styles/GlobalStyle'

function MyApp({ Component, pageProps }: AppProps) {
  return (<>
    <SEO />
    <GlobalStyle />
    <Component {...pageProps} />
  </>)
}

export default MyApp
