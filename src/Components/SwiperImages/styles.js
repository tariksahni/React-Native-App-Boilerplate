import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#30625a'
  },

  image: {
    width,
    flex: 8
  },

  dots: {
    backgroundColor: '#a4a4a4',
    width: 8,
    height: 8,
    borderRadius: 50,
    marginLeft: 3,
    marginRight: 3,
    marginBottom: 25
  },

  activeDot: {
    backgroundColor: '#000',
    width: 8,
    height: 8,
    borderRadius: 50,
    marginLeft: 3,
    marginRight: 3,
    marginBottom: 25
  },

  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  titleText: {
    fontFamily: 'HelveticaNeueThin',
    color: 'white',
    fontSize: 20,
    marginLeft: 12
  },
  buttonText: {
    color: 'white',
    fontFamily: 'HelveticaNeueMedium',
    fontSize: 50
  }
});
