import type { AppProps } from 'next/app'
import { ThemeBackgroundProvider, ThemeColorProvider } from '../common/context/themes'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <ThemeBackgroundProvider>
      <ThemeColorProvider>
        <Component {...pageProps} />
      </ThemeColorProvider>
    </ThemeBackgroundProvider>

  )
}

export default MyApp
