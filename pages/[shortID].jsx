import React, { Component, Fragment } from 'react';
import dynamic from 'next/dynamic';

// API
import axios from '../src/utils/axios';

// Custom SEO
import SEO from '../lib/SEO';

// Page Container
import Layout from '../src/components/Layout';

// SubComponents
const AudioPage = dynamic(() => import('../src/pages/AudioPage'), {
  ssr: false,
  loading: () => (
    // <h1>
    //   <b>LOADING..</b>
    // </h1>
    null
  ),
});

const setSEO = ({ shortID, imageURL, title, artistName }) => {
  let SEO = {
    openGraph: {}
  };
  SEO.title = shortID;
  SEO.openGraph.title = `Listen to ${title} in under 60 seconds on Plug.`;
  SEO.description = `${title} by ${artistName}`;
  SEO.openGraph.description = `Create, share and discover swipable 15 second snippets of your music with Plug.`;
  SEO.openGraph.images = [
    {
      url: imageURL,
      width: 1200,
      height: 1200,
      alt: `index: alt: ${title} by ${artistName}`,
    },
  ];
  return SEO;
};

// Class Component
class RootPage extends Component {
  // Make initial request to server and populate initial props from URL Query
  static async getInitialProps({ req, query }) {
    console.log('index.jsx: getInitialProps:');

    // Get user agent
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;

    // Get Query Params from URL
    console.log('index.jsx : ctx.query:', query);

    try {
      // Make API call
      const res = await axios.get(`/api/plugs/shortID/${query.shortID}`);

      // Extract data from res
      const { shortID, imageURL, title, artistName } = res.data;

      // Log returned Query
      // console.log('index: api: returnedQuery:', returnedQuery);

      // Set SEO Params and return query as props
      const customSEO = setSEO({ shortID, imageURL, title, artistName });
      return { userAgent, customSEO, shortID };
    } catch (err) {
      // If error in API call, log it and throw
      console.log('index: api: Error:', err.message);
      return {
        userAgent,
        ...{
          shortID: 'DEFAULT',
        },
      };
    }
  }

  // Use props from getInitialProps to populate meta tags on render
  render() {
    const { shortID, customSEO } = this.props;

    return (
      <Fragment>
        <SEO config={customSEO} />
        <Layout>
          <AudioPage shortID={shortID} />
        </Layout>
      </Fragment>
    );
  }
}

export default RootPage;
