import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'

import '../styles/globals.css'
import '@aveonline/ui-react/tokens.css'
import '@aveonline/ui-react/tailwind.css'
import '@aveonline/ui-react/index.css'

export default function App ({ Component, pageProps: { session, ...pageProps }
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
