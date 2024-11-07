'use client';

import dynamic from 'next/dynamic';

const Gallery = dynamic(() => import('./Gallery'), { ssr: false });

const ClientGallery = () => {
  return <Gallery />;
};

export default ClientGallery;