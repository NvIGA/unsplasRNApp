/**
 * @format
 */
import React from 'react';
import { Provider } from 'react-redux';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';

import App from './src/components/app';

import ErrorBoundary from './src/containers/error-boundary';
import { PicturesStoreServiceProvider } from './src/components/pictures-store-service-context';
import PicturesStoreService from './src/services';

import store from './src/store';

const picturesStoreService = new PicturesStoreService();

const app = () => (
  <Provider store={store}>
    <ErrorBoundary>
      <PicturesStoreServiceProvider value={picturesStoreService}>
        <App />
      </PicturesStoreServiceProvider>
    </ErrorBoundary>
  </Provider>
);

AppRegistry.registerComponent(appName, () => app);
