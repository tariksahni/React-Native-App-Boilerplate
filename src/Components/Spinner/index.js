import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { styles } from './styles';

const Spinner = ({ size }) => (
  <View style={styles.spinnerStyle}>
    <ActivityIndicator size={size || 'large'} />
  </View>
);

export default Spinner;
