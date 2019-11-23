import React from 'react';

const {
  Provider: PicturesStoreServiceProvider,
  Consumer: PicturesStoreServiceConsumer,
} = React.createContext();

export { PicturesStoreServiceConsumer, PicturesStoreServiceProvider };
