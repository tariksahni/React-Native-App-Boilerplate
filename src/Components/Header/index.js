import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

const Header = props => (
  <View style={styles.viewStyle}>
    <Text style={styles.textStyle}>{props.headerText}</Text>
  </View>
);

export default Header;
