import type { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>My app</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="A simple project starter to work with Typescript, React, NextJS and Styled Component"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
