import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const ErrorInndicator = ({ children }) => (
  <View style={[styles.container, styles.horizontal]}>
    <Text>{children}</Text>
  </View>
);

export default ErrorInndicator;
