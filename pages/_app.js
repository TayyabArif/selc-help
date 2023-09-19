import '@/styles/globals.css'
import { LanguageProvider} from '@/contexts/LanguageContext'
import { TourProvider} from '@/contexts/TourContext'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
     <Head>
        <link rel="icon" href="favlogo.png" />
      </Head>
    <LanguageProvider>
    <TourProvider>
      <Component {...pageProps} />
    </TourProvider>
  </LanguageProvider>
    </>
  )
}
