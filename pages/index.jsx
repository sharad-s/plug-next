import React from 'react';
import dynamic from 'next/dynamic';

// SubComponents
const AudioPage = dynamic(() => import('../src/pages/AudioPage'), {
  ssr: false,
});

// Page Container
import Layout from '../src/components/Layout';

const RootPage = () => {
  return (
    <Layout>
      <AudioPage shortID={null} />
    </Layout>

  );
};

export default RootPage;
