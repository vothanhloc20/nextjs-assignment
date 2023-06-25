import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link
          href='https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic'
          rel='stylesheet'
          type='text/css'
        />
        <link
          href='https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800'
          rel='stylesheet'
          type='text/css'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
