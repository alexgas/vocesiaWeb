import '../styles/scss/style.scss'
import type { AppProps } from 'next/app'
import {appWithTranslation} from 'next-i18next'
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }: AppProps) {
  return(
      <>
        <NextNProgress />
        <Component {...pageProps} />
      </>
  )
}
export default appWithTranslation(MyApp)
