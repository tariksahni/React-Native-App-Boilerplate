import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#37474f'
  },

  imagePart: {
    flex: 8,
    paddingTop: 40
  },
  image: { flex: 1, width },
  dots: {
    backgroundColor: '#a4a4a4',
    width: 8,
    height: 8,
    borderRadius: 50,
    marginLeft: 3,
    marginRight: 3,
    marginBottom: 15
  },

  activeDot: {
    backgroundColor: '#000',
    width: 8,
    height: 8,
    borderRadius: 50,
    marginLeft: 3,
    marginRight: 3,
    marginBottom: 15
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
    marginLeft: 5
  },
  titleText2: {
    fontFamily: 'HelveticaNeueThin',
    color: 'white',
    fontSize: 16
  },
  buttonText: {
    color: 'white',
    fontFamily: 'HelveticaNeueMedium',
    fontSize: 50
  }
});
