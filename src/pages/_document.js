import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Any web fonts to import: */}
        <link
          href={'https://fonts.googleapis.com/css2?family=Open+Sans&display=swap'}
          rel={'stylesheet'}/>
          <link
            href={'https://fonts.googleapis.com/css2?family=El+Messiri&display=swap'}
            rel={'stylesheet'}/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
