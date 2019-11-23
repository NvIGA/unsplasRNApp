import React, { useState, useEffect } from 'react';
import { View, Image, Animated, Easing } from 'react-native';
import styles from './styles';

const Spinner = () => {
  const [sizeMargin] = useState(new Animated.Value(0));
  const [animatedValue] = useState(new Animated.Value(0));
  const [marginValue] = useState(new Animated.Value(30));
  // const [opacityCarousel] = useState(new Animated.Value(0));

  const interpolateRotation = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const animatedStyle = {
    transform: [{ rotate: interpolateRotation }],
  };

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(sizeMargin, {
          toValue: 500,
          duration: 3000,
          easing: Easing.linear(),
        }),
        Animated.timing(sizeMargin, {
          toValue: 0,
          duration: 3000,
          easing: Easing.linear(),
        }),
      ]),
    ).start();

    Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 3000,
        easing: Easing.bounce,
      }),
    ).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(marginValue, {
          delay: 300,
          toValue: 100,
          duration: 1500,
          easing: Easing.linear(),
        }),
        Animated.timing(marginValue, {
          toValue: 30,
          duration: 1500,
          easing: Easing.bounce,
        }),
      ]),
    ).start();
  }, [sizeMargin, animatedValue, marginValue]);

  return (
    <View style={styles.horizontal}>
      <View style={styles.vertical}>
        <Animated.Image
          style={[
            styles.spinner,
            { marginBottom: sizeMargin },
            animatedStyle,
            { margin: marginValue },
          ]}
          source={{
            uri:
              'https://cdn4.iconfinder.com/data/icons/logos-3/426/react_js-512.png',
          }}
        />
      </View>
    </View>
  );
};

export default Spinner;
