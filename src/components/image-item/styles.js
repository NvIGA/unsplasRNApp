import { StyleSheet } from 'react-native';
import { w, h } from '../../constants';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    padding: 0,
  },
  pictureWrapper: {},
  picture: {
    width: w,
    maxHeight: h,
    height: h / 2.6,
  },
  descriptionWrapper: {
    margin: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  profileImage: {
    height: 40,
    width: 40,
    borderRadius: 50,
  },
  authorName: {
    paddingLeft: 10,
    fontSize: 18,
    lineHeight: 40,
  },
});

export default styles;
