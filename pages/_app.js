import '../styles/globals.css'
import Layout from './components/layout'
import {SessionProvider} from 'next-auth/react'
// pages/_app.js
import { Inter } from '@next/font/google'

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['Noto Sans Thai'] })

export default function MyApp({ Component, pageProps, session }) {
  return (
    <SessionProvider session={session}>
      <main className={inter.className}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </main>
    </SessionProvider>
  )
}