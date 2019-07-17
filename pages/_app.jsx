import App, { Container } from 'next/app';

// CSS
import '../static/app.css';

// let's create a configuration for next-seo
const DEFAULT_SEO = {
  title: '_app: title: Next.js SEO Plugin',
  description: '_app: description: SEO made easy for Next.js projects',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    // url: 'https://plug.af',
    title: '_app: opengraph.title: Next.js Seo',
    description:
      '_app: openGraph.description: Listen to music in under 60 seconds with Plug.',
    images: [
      {
        url: 'https://i.imgur.com/LJfeZRs.jpg',
        width: 1200,
        height: 1200,
        alt: 'Og Image Alt',
      },
    ],
    // site_name: 'plug.af',
  },
  twitter: {
    handle: '@brownsvgar',
    cardType: 'summary_large_image',
  },
};



class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx, router);
    }

    console.log('_app.jsx: getInitialProps');


    // const { shortID, imageURL, plugTitle, artistName } = router.query;
    // setDefaultSEO({ shortID, imageURL, plugTitle, artistName });

    // if (shortID) {
    //   // Use axios to get Plug from API
    //   const res = await axios.get(`api/plugs/shortID/${shortID}`).catch(e => console.log(e.message));
    //   // const plug = res.data;
    //   console.log('GOT PLUG', res);
    // }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    console.log('_app.jsx: render');

    return (
      <Container>
        {/* <NextSeo config={DEFAULT_SEO} /> */}
        <div id="APP-WRAPPER">
          <Component {...pageProps} />
        </div>
        <style jsx={"true"}>
          {`
            /* APP WRAPPER */
            #APP-WRAPPER {
              margin-right: auto;
              margin-left: auto;
              width: 100%;
              height: 100vh;
              flex-direction: column;
              /*justify-content: center;*/
              align-items: center;
              display: grid;
              grid-template-rows: 10% 1fr 15% 15%;

              font-family: 'Poppins', sans-serif !important;
              color: #f3e576 !important;
              background-color: #151513 !important;
            }
          `}
        </style>
      </Container>
    );
  }
}

export default MyApp;
