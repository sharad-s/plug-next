import React, { Component, Fragment } from 'react';
import NextSeo from 'next-seo';
// Next
import Head from 'next/head';

// API
import axios from '../utils/axios';

// Page Container
import Layout from '../components/Layout';

const SEO = {
  title: `index: Default title`,
  description: 'index: Default Description',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    //   url: 'https://plug.af',
    title: `index: opengraph.title`,
    description: `index: opengraph.description`,
    images: [
      {
        url: 'https://i.imgur.com/LJfeZRs.jpg',
        width: 1200,
        height: 1200,
        alt: 'index: default image Alt',
      },
    ],
  },
  twitter: {
    handle: '@brownsvgar',
    cardType: 'summary_large_image',
  },
};

const setDefaultSEO = ({ shortID, imageURL, plugTitle, artistName }) => {
  SEO.title = 'index: title: ' + shortID;
  SEO.openGraph.title = `index: opengraph.title: Listen to ${plugTitle} by ${artistName}`;
  SEO.description = `index: description: ${plugTitle} by ${artistName}`;
  SEO.openGraph.description = `index: openGraph.description: ${plugTitle} by ${artistName} shortID ${shortID}`;
  SEO.openGraph.images = [
    {
      url: imageURL,
      width: 1200,
      height: 1200,
      alt: `index: alt: ${plugTitle} by ${artistName}`,
    },
  ];
  return;
};

// Class Component
class RootPage extends Component {
  // Make initial request to server and populate initial props from URL Query
  static async getInitialProps({ req }, router) {
    console.log('index.jsx: getInitialProps:');

    // Get user agent
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;

    // Get Query Params from URL
    console.log('index.jsx : router.query:', router.query);
    console.log('index.jsx : req.query:', req.query);

    try {
      // Make API call
      const res = await axios.get(`/api/plugs/shortID/0ba590`);

      // Log Result
      // console.log('index: api: res:', res.data);

      // Extract data from res
      const { shortID, imageURL, title, artistName = 'CREATOR' } = res.data;
      const returnedQuery = { shortID, imageURL, title, artistName };

      // Log returned Query
      console.log('index: api: returnedQuery:', returnedQuery);

      // Set SEO Params and return query as props
      setDefaultSEO(returnedQuery);
      return { userAgent, ...returnedQuery };
    } catch (err) {
      // If error in API call, log it and throw
      console.log('index: api: Error:', err.message);
      throw err.message;
    }
  }

  // Use props from getInitialProps to populate meta tags on render
  render() {
    const { userAgent } = this.props;
    const { shortID, imageURL, title, artistName } = this.props;

    return (
      <Fragment>
        <NextSeo config={SEO} />
        <Layout>
          <div className="body-container">
            <h1> Welcome to [${shortID}]!</h1>
            <p>User Agent: {userAgent}</p>
            <p>Short ID: {shortID}</p>
            <p>Image URL: {imageURL}</p>
            <p>Plug Title: {title}</p>
            <p>Artist Name: {artistName}</p>
          </div>
        </Layout>
        <style jsx="true">
          {`
            /* APP WRAPPER */
            .body-container {
              grid-row-start: 2;
              grid-column-start: 2;
              text-align: center;
              background-color: salmon;
            }
          `}
        </style>
      </Fragment>
    );
  }
}

export default RootPage;
