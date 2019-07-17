// ./pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    console.log("_document.jsx: getInitialProps:");
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {

    console.log("_document.jsx: render");

    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;