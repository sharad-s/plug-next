import React from 'react';
import dynamic from 'next/dynamic';

// SubComponents
import Layout from '../src/components/Layout';
const CreatePage = dynamic(() => import('../src/pages/HomePage'), {
	ssr: false,
  });

export default () => (
	<Layout>
		<CreatePage />
	</Layout>
);
