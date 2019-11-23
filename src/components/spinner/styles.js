import { StyleSheet } from 'react-native';
import { w, h } from '../../constants';

const styles = StyleSheet.create({
  spinner: {
    width: 75,
    height: 75,
    padding: 30,
  },
  vertical: {
    flexDirection: 'column',
    justifyContent: 'center',

    height: h,
    backgroundColor: '#e5e5e5',
  },
  horizontal: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default styles;
