import React, { Fragment } from 'react';
import { StatusBar } from 'react-native';

import PicturesListContainer from '../containers/pictures-list';

const HomeScreen = props => {
  const { navigation } = props;
  return (
    <Fragment>
      <StatusBar backgroundColor="#34495e" barStyle="light-content" />
      <PicturesListContainer navigation={navigation} />
    </Fragment>
  );
};

HomeScreen.navigationOptions = {
  title: 'Unsplash',
};

export default HomeScreen;
