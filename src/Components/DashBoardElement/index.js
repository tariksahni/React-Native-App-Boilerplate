import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

class DashBoardElement extends Component {
  render() {
    const addedStyle =
      this.props.id === 1
        ? styles.container
        : this.props.id === 2 ? styles.container1 : styles.container;
    return (
      <TouchableOpacity style={addedStyle} onPress={this.props.onPress}>
        <Text style={styles.textStyle}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

export default DashBoardElement;
