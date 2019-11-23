import React from 'react';
import { View, Text } from 'react-native';
import ImageItem from '../components/image-item';

const ImageScreen = props => {
  return <ImageItem params={props.navigation.state.params} />;
};

export default ImageScreen;
