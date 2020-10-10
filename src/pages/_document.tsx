import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta charSet='utf-8' />
          <meta name='application-name' content='Sydney News' />
          <meta name='twitter:card' content='summary' />
          <meta name='twitter:creator' content='@psimondodson' />
          <meta property='og:type' content='website' />
          <meta name='author' content='sydneysnews' />
          <meta property='og:site_name' content='Sydney News' />
          <meta name='theme-color' content='#d03801' />
          <meta
            name='description'
            content='A Sydney News client to view stories from news.ycombinator.com.'
          />
          <meta property='og:title' content='Sydney News' />
          <meta
            property='og:description'
            content='A Sydney News client to view stories from news.ycombinator.com.'
          />
          <meta property='og:url' content='https://twitter.com/simondodson' />
          <meta property='twitter:title' content='Sydney News' />
          <meta
            property='twitter:description'
            content='A Sydney News client to view stories from news.ycombinator.com.'
          />
          <meta property='twitter:url' content='https://twitter.com/simondodson' />
          <meta property='og:image' content='/preview.png' />
          <meta property='twitter:image' content='/preview.png' />
          <link rel='shortcut icon' href='/favicon.ico' />
          <script
            src='https://cdn.usefathom.com/script.js'
            // @ts-ignore
            site='BBOGJGAJ'
            defer
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
