import React, { useEffect, useState } from 'react';
import { View, Image, Text, Animated, Easing } from 'react-native';
import styles from './styles';
import { w, h } from '../../constants';

const ImageItem = props => {
  const { name, picture, profileImage } = props.params;
  const [position] = useState(new Animated.Value(-300));
  const [opacityValue] = useState(new Animated.Value(0));
  const [opacityImage] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(opacityImage, {
      toValue: 1,
      duration: 1500,
      easing: Easing.cubic,
    }).start();

    Animated.sequence([
      Animated.timing(position, {
        toValue: 0,
        duration: 1500,
        easing: Easing.cubic,
      }),
      Animated.timing(opacityValue, {
        toValue: 1,
        duration: 1500,
        easing: Easing.cubic,
      }),
    ]).start();
  }, [position, opacityValue, opacityImage]);

  return (
    <View style={styles.container}>
      <View style={[styles.pictureWrapper]}>
        <Animated.Image
          source={{ uri: picture }}
          style={[styles.picture, { top: position, opacity: opacityImage }]}
        />
      </View>

      <Animated.View
        style={[styles.descriptionWrapper, { opacity: opacityValue }]}
      >
        <View>
          <Image source={{ uri: profileImage }} style={styles.profileImage} />
        </View>
        <Text style={styles.authorName}>{name}</Text>
      </Animated.View>
    </View>
  );
};

export default ImageItem;
