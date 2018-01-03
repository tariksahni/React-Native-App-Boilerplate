import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 60,
    height: undefined,
    width: undefined
  },
  topContainer: {
    flex: 1,
    flexDirection: 'column',
    // marginTop: 10,
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
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 1,
    borderColor: 'white',
    elevation: 3,
    borderRadius: 3
  },
  sideBarElement: {
    flex: 3,
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
    fontFamily: 'HelveticaNeueThin',
    color: 'black',
    fontSize: 17
  },
  contentContainer: {
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  contentContainerLower: {
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});
