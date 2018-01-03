import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 60,
    display: 'flex',
    flex: 1,
    flexDirection: 'column'
  },
  backgroundImagePart: {
    display: 'flex',
    flex: 1
  },
  backgroundImage: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    width,
    height: height * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  },
  MyImage: {
    flex: 1,
    width,
    height: height * 0.6,
    opacity: 0.6,
    position: 'absolute'
  },
  lowerContainer: {
    backgroundColor: '#c4c4c4'
  },
  textPart: {
    fontFamily: 'HelveticaNeueThin',
    color: 'black',
    paddingLeft: 10,
    paddingBottom: 8,
    paddingRight: 10
  },
  textPart1: {
    fontFamily: 'HelveticaNeueThin',
    color: 'black',
    paddingBottom: 8,
    paddingRight: 10,
    paddingLeft: 10
  },
  textPartBoldCenter: {
    fontFamily: 'HelveticaNeueMedium',
    color: 'black',
    padding: 2,
    textAlign: 'center'
  },
  textPartBold: {
    fontFamily: 'HelveticaNeueBold',
    color: 'black',
    padding: 2,
    fontSize: 18,
    textAlign: 'center'
  }
});
