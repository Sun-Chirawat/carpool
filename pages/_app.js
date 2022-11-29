import '../styles/globals.css'
import Layout from './components/layout'

// pages/_app.js
import { Inter } from '@next/font/google'

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['Noto Sans Thai'] })

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={inter.className}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </main>
  )
}