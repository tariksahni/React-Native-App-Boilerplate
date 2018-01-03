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
    width: '72%',
    marginLeft: 88,
    backgroundColor: '#8E8E8E'
  },
  oneMessageContainer: {
    margin: 5,
    flexDirection: 'row',
    flex: 1
  },
  imagePart: {
    marginTop: 13,
    flex: 1,
    alignItems: 'center'
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50
  },

  descriptionPart: {
    flexDirection: 'column',
    flex: 5
  },
  titlePart: {
    marginLeft: 10,
    marginTop: 10
  },

  descriptionTitle: {
    fontSize: 22,
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
    marginLeft: 10,
    paddingLeft: 6,
    paddingRight: 10,
    fontFamily: 'HelveticaNeueThin',
    color: 'black'
  },
  smallDescription: {
    marginLeft: 7,
    fontFamily: 'HelveticaNeueThin',
    color: 'black'
  }
});
