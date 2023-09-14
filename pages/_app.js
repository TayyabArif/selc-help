import '@/styles/globals.css'
import { LanguageProvider} from '@/contexts/LanguageContext'
import { TourProvider} from '@/contexts/TourContext'

export default function App({ Component, pageProps }) {
  return (
    <LanguageProvider>
    <TourProvider>
      <Component {...pageProps} />
    </TourProvider>
  </LanguageProvider>
  )
}
