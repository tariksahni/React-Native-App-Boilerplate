import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#607d8b',
    margin: 5,
    width: width * 0.26,
    height: width * 0.26,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container1: {
    backgroundColor: '#90a4ae',
    margin: 5,
    width: width * 0.26,
    height: width * 0.26,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyle: {
    fontFamily: 'HelveticaNeueMedium',
    color: 'white'
  }
});
