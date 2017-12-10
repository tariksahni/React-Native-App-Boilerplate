import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 60,
    backgroundColor: '#c4c4c4'
  },
  topContainer: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 20,
    backgroundColor: '#ffffff',
    margin: 10,
    borderWidth: 1,
    borderColor: 'white',
    elevation: 3,
    borderRadius: 3
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    margin: 10,
    borderWidth: 1,
    borderColor: 'white',
    elevation: 3,
    borderRadius: 3
  },
  sideBarElement: {
    flex: 2,
    borderRadius: 2,
    justifyContent: 'center'
  },
  borderLine: {
    borderBottomWidth: 1,
    width: '80%',
    marginTop: 10,
    marginLeft: 34,
    borderColor: '#c4c4c4'
  },
  titleText: {
    textAlign: 'center',
    fontFamily: 'HelveticaNeueBold'
  },
  contentContainer: {
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
