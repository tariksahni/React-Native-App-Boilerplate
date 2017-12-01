import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  imageContainer: {
    flex: 8,
    width: null,
    height: null,
    resizeMode: 'cover'
  },
  cardContainer: {
    flex: 3,
    backgroundColor: 'black',
    paddingHorizontal: 30,
    paddingVertical: 10
    // marginLeft: 40
  },
  errorTextStyle: {
    fontSize: 12,
    fontFamily: 'HelveticaNeueLight',
    alignSelf: 'center',
    color: 'white'
  }
});
