import React, { useEffect, useState } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  Animated,
  Easing,
} from 'react-native';
import { h, w } from '../../constants';
import { IMAGE_SCREEN } from '../../routes';
import styles from './styles';

const PicturesItem = ({ user, urls, navigation }) => {
  const { name, profile_image } = user;

  const [marginContent] = useState(new Animated.Value(-h));

  useEffect(() => {
    Animated.timing(marginContent, {
      toValue: 0,
      duration: 2500,
      easing: Easing.quad,
    }).start();
  });

  return (
    <Animated.View
      style={[styles.mainContainer, { marginBottom: marginContent }]}
    >
      <TouchableOpacity
        style={styles.cardWrapper}
        onPress={() =>
          navigation.navigate(IMAGE_SCREEN, {
            name: name,
            profileImage: profile_image.large,
            picture: urls.regular,
          })
        }
      >
        <View>
          <Image source={{ uri: urls.regular }} style={styles.imageContent} />
        </View>
        <View style={styles.container}>
          <View>
            <Image
              source={{ uri: profile_image.large }}
              style={styles.profileImage}
            />
          </View>
          <View style={styles.descriptionWrapper}>
            <Text style={styles.descriptionText}>{name}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default PicturesItem;
