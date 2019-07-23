// ./pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    console.log('_document.jsx: getInitialProps:');
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    console.log('_document.jsx: render');

    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Poppins"
            rel="stylesheet"
          />
          <link rel="manifest" href="/static/manifest.json" />
          <meta name="theme-color" content="#F3E576" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="https://kit.fontawesome.com/572bf705e8.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
