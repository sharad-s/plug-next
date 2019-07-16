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
        <style jsx="true">
          {`
            body {
              font-family: 'Poppins', sans-serif !important;
              color: #f3e576 !important;
              background-color: #151513 !important;
            }
          `}
        </style>
      </Html>
    );
  }
}

export default MyDocument;