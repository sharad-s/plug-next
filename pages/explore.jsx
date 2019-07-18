import React, { Component } from 'react';
import dynamic from 'next/dynamic';

// Page Container
import Layout from '../src/components/Layout';

// SubComponents
const ExplorePage = dynamic(() => import('../src/pages/ExplorePage'), {
  ssr: false,
  loading: () => (
    // <h1>
    //   <b>LOADING EXPLORE..</b>
    // </h1>
    null
  ),
});
// Class Component
class RootPage extends Component {
  // Make initial request to server and populate initial props from URL Query
  render() {
    return (
      <Layout>
        <ExplorePage />
      </Layout>
    );
  }
}

export default RootPage;
