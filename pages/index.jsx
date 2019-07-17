import React, { Component, Fragment } from 'react';
import NextSeo from 'next-seo';

// Next

// CSS
import "../static/app.css"

// Page Container
import Layout from '../src/components/Layout';

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

    state = {
      query: {}
    }

  componentDidMount() {
    console.log('index.jsx: getInitialProps:');

    const query = {
      shortID: 'b00bies',
      imageURL:
        'https://i1.sndcdn.com/avatars-000462285696-xfmenv-t500x500.jpg',
      plugTitle: 'title',
      artistName: 'artist',
    };

    // Set SEO params
    setDefaultSEO(query);
    return this.setState({query});
  }

  // Use props from getInitialProps to populate meta tags on render
  render() {
    const { shortID, imageURL, plugTitle, artistName } = this.state.query;

    return (
      <Fragment>
        <NextSeo config={SEO} />
        <Layout>
          <div className="body-container">
           
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
