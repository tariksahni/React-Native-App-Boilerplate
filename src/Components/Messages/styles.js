import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  mainImageContainer: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  },
  messageContainer: {
    marginTop: 60,
    backgroundColor: '#EAEAEA'
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    width: '75%',
    marginLeft: 75,
    backgroundColor: '#8E8E8E'
  },
  oneMessageContainer: {
    margin: 5,
    marginTop: 13,
    marginBottom: 15,
    flexDirection: 'row',
    flex: 1
  },
  imagePart: {
    flex: 1,
    alignItems: 'center'
  },
  image: {
    width: 35,
    height: 35,
    borderRadius: 50
  },
  descriptionPart: {
    flexDirection: 'column',
    flex: 5
  },
  descriptionTitle: {
    fontSize: 18,
    paddingLeft: 6,
    fontFamily: 'HelveticaNeueMedium'
  },
  descriptionTitleSelected: {
    fontSize: 18,
    paddingLeft: 6,
    fontFamily: 'HelveticaNeueBold',
    color: 'black'
  },
  descriptionText: {
    fontSize: 14,
    paddingLeft: 6,
    paddingRight: 6,
    fontFamily: 'HelveticaNeueThin'
  }
});
