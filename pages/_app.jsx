import App, { Container } from 'next/app';

// Redux
import { Provider } from 'react-redux';
import withReduxStore from '../lib/with-redux-store';

// SEO
import SEO from '../lib/SEO';

// CSS
import '../static/css/app.css';
import '../static/css/pure-buttons.css';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    console.log('_app.jsx: getInitialProps');
    // console.log('_app.jsx: getInitialProps: ctx:', ctx);
    return { pageProps };
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props;

    console.log('_app.jsx: render');

    return (
      <Container>
        <Provider store={reduxStore}>
          <SEO />
          <div id="APP-WRAPPER">
            <Component {...pageProps} />
          </div>
        </Provider>
      </Container>
    );
  }
}

export default withReduxStore(MyApp);
