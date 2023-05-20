import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => (
  <Html>
    <Head>
      <link
        href="/assets/png/favicon-light.png"
        rel="icon"
        media="(prefers-color-scheme: light)"
      />
      <link
        href="/assets/png/favicon-dark.png"
        rel="icon"
        media="(prefers-color-scheme: dark)"
      />
    </Head>
    <body>
      <Main />
      <div id="modal" />
      <NextScript />
    </body>
  </Html>
)

export default Document
