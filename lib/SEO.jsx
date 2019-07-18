import React from 'react';
import NextSeo from 'next-seo';

// let's create a configuration for next-seo
const DEFAULT_SEO = {
  title: 'Plug. Discover and share music in under 60 seconds.',
  description:
    'Create, share and swipe through 15 second snippets of your music with Plug.',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    // url: 'https://plug.af',
    title:
      'Plug. Discover and share music in under 60 seconds.',
    description:
      'Create, share and swipe through 15 second snippets of your music with Plug.',
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
    handle: '@plugwithus',
    cardType: 'summary_large_image',
  },
};

const SEO = ({ config = DEFAULT_SEO }) => {
  return <NextSeo config={config} />;
};

export default SEO;
