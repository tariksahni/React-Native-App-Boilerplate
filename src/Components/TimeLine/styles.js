import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 60,
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#e9ebee'
  },
  oneCardItem: {
    marginLeft: 10,
    marginRight: 10,
    padding: 8,
    marginTop: 10,
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'white'
  },
  oneCardItemLast: {
    marginBottom: 8
  },
  description: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  dateContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 3
  },
  grey: {
    fontFamily: 'HelveticaNeueMedium',
    color: '#90949c'
  },
  blue: {
    fontFamily: 'HelveticaNeueMedium',
    color: '#365899'
  },
  date: {
    fontFamily: 'HelveticaNeueMedium',
    color: '#90949c',
    fontSize: 11
  },
  lock: {
    width: 10,
    height: 10,
    marginTop: 2.9,
    marginLeft: 5
  },
  descriptionMain: {
    display: 'flex',
    marginTop: 5,
    alignItems: 'center'
  },
  imagePart: {
    width: width * 0.9,
    height: width * 0.7
  },
  imagePart2: {
    width: width * 0.9,
    height: width * 0.55,
    marginTop: 10
  },
  text: { fontFamily: 'HelveticaNeueThin', color: 'black' },
  textBold: { fontFamily: 'HelveticaNeueBold', color: 'black' }
});

//blue :3C5894
//grey :C5C5C5
