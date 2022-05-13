import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components' 
import GlobalStyles from '../global/GlobalStyles'
import theme from '../global/Theme'
import { Header } from '../patterns/Header'

import { PrismicProvider } from '@prismicio/react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <PrismicProvider>
          <Header />
          <Component {...pageProps} />
        <GlobalStyles />
      </PrismicProvider>
    </ThemeProvider>
  )
}

export default MyApp
