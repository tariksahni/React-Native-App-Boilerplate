import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from './styles';

const propTypes = {
  addedStyle: PropTypes.object
};
const CardSection = props => (
  <View style={[styles.containerStyle, props.addedStyle]}>
    {props.children}
  </View>
);

CardSection.propTypes = propTypes;
export default CardSection;
