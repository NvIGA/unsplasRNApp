import React from 'react';
import { ScrollView } from 'react-native';
import PicturesItem from '../pictures-item';

const PicturesList = ({ pictures, navigation }) => {
  return (
    <ScrollView>
      {pictures.data.map((item, index) => {
        const { user, urls } = item;
        return (
          <PicturesItem
            user={user}
            urls={urls}
            key={index}
            navigation={navigation}
          />
        );
      })}
    </ScrollView>
  );
};

export default PicturesList;
