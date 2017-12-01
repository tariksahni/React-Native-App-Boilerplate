import React from 'react';
import { TextInput, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from './styles';

const propTypes = {
  addedStyle: PropTypes.object
};

const InputField = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  addedStyle
}) => (
  <View style={[styles.containerStyle, addedStyle]}>
    <Text style={styles.labelStyle}>{label}</Text>
    <TextInput
      secureTextEntry={secureTextEntry}
      placeholder={placeholder}
      autoCorrect={false}
      style={styles.inputStyle}
      placeholderTextColor="#d3d3d3"
      value={value}
      onChangeText={onChangeText}
      underlineColorAndroid="transparent"
    />
  </View>
);

InputField.propTypes = propTypes;
export default InputField;
