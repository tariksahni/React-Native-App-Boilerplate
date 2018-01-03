import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#607d8b'
  },
  imagePart: {
    flex: 8,
    paddingTop: 50,
    marginTop: 10,
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  image: {
    width,
    height: 300
  },
  image3: {
    width,
    height: width * 1.2
  },

  dots: {
    backgroundColor: '#a4a4a4',
    width: 8,
    height: 8,
    borderRadius: 50,
    marginLeft: 3,
    marginRight: 3,
    marginBottom: 10
  },

  activeDot: {
    backgroundColor: '#000',
    width: 8,
    height: 8,
    borderRadius: 50,
    marginLeft: 3,
    marginRight: 3,
    marginBottom: 10
  },

  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#37474f'
  },
  titleText: {
    fontFamily: 'HelveticaNeueThin',
    color: 'white',
    fontSize: 20,
    marginLeft: 12
  },
  titleText2: {
    fontFamily: 'HelveticaNeueThin',
    color: 'white',
    fontSize: 17,
    marginLeft: 5
  },
  buttonText: {
    color: 'white',
    fontFamily: 'HelveticaNeueMedium',
    fontSize: 50
  }
});
