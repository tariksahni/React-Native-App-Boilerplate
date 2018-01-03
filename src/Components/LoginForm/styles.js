import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  imageContainer: {
    flex: 3,
    width: null,
    height: null,
    resizeMode: 'cover'
  },
  cardContainer: {
    flex: 1,
    marginTop: 10,
    backgroundColor: 'black',
    paddingHorizontal: 30,
    paddingBottom: 10
  },
  errorTextStyle: {
    fontSize: 12,
    fontFamily: 'HelveticaNeueLight',
    alignSelf: 'center',
    color: 'white'
  },
  text: {
    fontSize: 16,
    fontFamily: 'HelveticaNeueLight',
    alignSelf: 'center',
    color: 'white'
  }
});
