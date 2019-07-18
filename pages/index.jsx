import React from 'react';
import dynamic from 'next/dynamic';

// Page Container
import Layout from '../src/components/Layout';

// SubComponents
const AudioPage = dynamic(() => import('../src/pages/AudioPage'), {
  ssr: false,
  loading: () => (
    <h1>
      <b>LOADING..</b>
    </h1>
  ),
});

const RootPage = () => {
  return (
    <Layout>
      <AudioPage shortID={null} />
    </Layout>
  );
};

export default RootPage;
