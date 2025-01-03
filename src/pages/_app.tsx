import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthProvider } from '@/contexts/AuthContext'
import Layout from './layout'
import { LayoutProvider } from './layout/LayoutContext'

export default function App({ Component, pageProps }: AppProps) {
  if (Component.name === 'SignIn' || Component.name === 'SignUp') {
    return <Component {...pageProps} />
  }
  return (
    <AuthProvider>
      <LayoutProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </LayoutProvider>
    </AuthProvider>
  )
}
