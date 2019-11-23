import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  cardWrapper: {
    marginVertical: 20,
    marginHorizontal: 15,
    borderRadius: 10,
    backgroundColor: '#ecf0f1',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  imageContent: {
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  descriptionWrapper: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  profileImage: {
    height: 40,
    width: 40,
    borderRadius: 50,
  },
  container: {
    margin: 10,
    flexDirection: 'row',
  },
  descriptionText: { fontSize: 16, fontWeight: 'bold' },
});

export default styles;
