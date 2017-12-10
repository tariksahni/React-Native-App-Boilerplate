import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

class DashBoardElement extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
        <Text style={styles.textStyle}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

export default DashBoardElement;
