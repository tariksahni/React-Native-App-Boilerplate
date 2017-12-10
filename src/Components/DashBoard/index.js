import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import DashBoardElement from '../DashBoardElement';
import { styles } from './styles';

class DashBoard extends Component {
  handlePressMemories = () => {
    Actions.swipper();
  };

  handlePressMessage = () => {
    Actions.messages();
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.sideBarElement}>
            <Text style={styles.titleText}>
              You can Place any random content here like categories 1
            </Text>
            <View style={styles.borderLine} />
          </View>
          <View style={styles.contentContainer}>
            <DashBoardElement title={'Messages'} onPress={this.handlePressMessage} />
            <DashBoardElement title={'Memories'} onPress={this.handlePressMemories} />
            <DashBoardElement title={'Content'} onPress={this.handlePressMessage} />
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.sideBarElement}>
            <Text style={styles.titleText}>
              You can Place any random content here like categories 2
            </Text>
            <View style={styles.borderLine} />
          </View>
          <View style={styles.contentContainer}>
            <DashBoardElement title={'Messages'} onPress={this.handlePressMessage} />
            <DashBoardElement title={'Memories'} onPress={this.handlePressMemories} />
            <DashBoardElement title={'Content'} onPress={this.handlePressMessage} />
          </View>
        </View>
      </View>
    );
  }
}

export default DashBoard;
