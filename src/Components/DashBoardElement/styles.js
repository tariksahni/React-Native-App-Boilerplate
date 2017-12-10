import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#30625a',
    margin: 5,
    width: width * 0.26,
    height: width * 0.26,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyle: {
    fontFamily: 'HelveticaNeueLight',
    color: 'white'
  }
});
