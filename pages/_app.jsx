import App, { Container } from 'next/app';

// Redux
import { Provider } from 'react-redux';
import withReduxStore from '../lib/with-redux-store';

// CSS
import '../static/css/app.css';
import '../static/css/pure-buttons.css';

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
    return { pageProps };
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props;

    console.log('_app.jsx: render');

    return (
      <Container>
        {/* <NextSeo config={DEFAULT_SEO} /> */}
        <Provider store={reduxStore}>
          <div id="APP-WRAPPER">
            <Component {...pageProps} />
          </div>
        </Provider>
      </Container>
    );
  }
}

export default withReduxStore(MyApp);
