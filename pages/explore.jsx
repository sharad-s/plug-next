import React, { Component, Fragment } from 'react';
import NextSeo from 'next-seo';
import dynamic from 'next/dynamic';

// Page Container
import Layout from '../src/components/Layout';

// SubComponents
const ExplorePage = dynamic(() => import('../src/pages/ExplorePage'), {
  ssr: false,
  loading: () => (
    <h1>
      <b>LOADING EXPLORE..</b>
    </h1>
  ),
});
// Class Component
class RootPage extends Component {
  // Make initial request to server and populate initial props from URL Query
  static async getInitialProps({ req }) {
    console.log('RootPage: getInitialProps:');
    // Get user agent
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
    // Get Query Params from URL
    // console.log('RootPage: getInitialProps: req:', queryString.parse(req.url));

    // console.log("Object.keys(req.url))
    // const { shortID, imageURL, plugTitle, artistName } = req.query;
    const query = {
      shortID: 'b191bc',
      imageURL:
        'https://i1.sndcdn.com/avatars-000647146938-rg99mi-t500x500.jpg',
      plugTitle: 'Gas Station',
      artistName: 'Kamas',
    };
    return { userAgent, ...query };
  }

  // Use props from getInitialProps to populate meta tags on render
  render() {
    const { userAgent } = this.props;
    const { shortID, imageURL, plugTitle, artistName } = this.props;

    const SEO = {
      title: `Explore: ${shortID}`,
      description: 'Explore: description: SEO made easy for Next.js projects',
      openGraph: {
        type: 'website',
        locale: 'en_IE',
        // url: `https://plug.af/${shortID}`,
        title: `Listen to ${plugTitle} by ${artistName} in under 60 seconds on Plug`,
        description: `Create, share, and listen to swipable 15 second snippets of your music with Plug.`,
        images: [
          {
            url: imageURL,
            width: 1200,
            height: 1200,
            alt: `Explore: alt: ${plugTitle} by ${artistName}`,
          },
          {
            url:
              'https://i1.sndcdn.com/artworks-000054671709-g1jtnm-t500x500.jpg',
            width: 1200,
            height: 1200,
            alt: `Explore: alt: ${plugTitle} by ${artistName}`,
          },
        ],
        //   site_name: 'plug.af',
      },
      twitter: {
        handle: '@brownsvgar',
        cardType: 'summary_large_image',
      },
    };

    return (
      <Layout>
        <NextSeo config={SEO} />
        <h1> Welcome to Explore!</h1>
      </Layout>
    );
  }
}

export default RootPage;
