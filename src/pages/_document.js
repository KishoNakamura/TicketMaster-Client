import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <link rel='stylesheet' href='https://necolas.github.io/normalize.css/8.0.1/normalize.css'/>
        <link rel="icon" href="//uk.tmconst.com/production-10-2-0-6497339/images/favicon.ico" type="image/x-icon"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
