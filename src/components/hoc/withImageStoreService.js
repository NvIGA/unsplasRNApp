import React from 'react';
import { PicturesStoreServiceConsumer } from '../pictures-store-service-context';

const withPicturesStoreService = () => Wrapped => {
  return props => {
    return (
      <PicturesStoreServiceConsumer>
        {picturesStoreService => {
          return (
            <Wrapped {...props} picturesStoreService={picturesStoreService} />
          );
        }}
      </PicturesStoreServiceConsumer>
    );
  };
};

export default withPicturesStoreService;
