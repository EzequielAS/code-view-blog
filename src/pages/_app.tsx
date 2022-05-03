import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components' 
import GlobalStyles from '../global/GlobalStyles'
import theme from '../global/Theme'
import { Header } from '../patterns/Header'
import { QueryClientProvider } from 'react-query'
import { queryClient } from '../services/queryClient'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Component {...pageProps} />
        <GlobalStyles />
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default MyApp
