import React, { Component } from 'react';
import { Text, View, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';
import DashBoardElement from '../DashBoardElement';
import { styles } from './styles';

class DashBoard extends Component {
  // componentDidMount() {
  //   BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressed);
  // }

  // componentWillUnmount() {
  //   BackHandler.removeEventListener(
  //     'hardwareBackPress',
  //     this.onBackButtonPressed
  //   );
  // }

  // onBackButtonPressed() {
  //   return true;
  // }
  handlePressMemoriesFriends = () => {
    Actions.swipper();
  };

  handlePressMessageFriends = () => {
    Actions.messages();
  };
  handlePressMemories = () => {
    Actions.memory();
  };

  handlePressMessage = () => {
    Actions.message();
  };
  handlePressTimeline = () => {
    Actions.timeline();
  };

  render() {
    return (
      <ImageBackground
        style={styles.container}
        source={require('../../assets/Images/intersection.png')}
      >
        <View style={styles.topContainer}>
          <View style={styles.sideBarElement}>
            <Text style={styles.titleText}>Text Here !!!</Text>
            <Text style={styles.titleText}>Text Here !!!</Text>
            <Text style={styles.titleText}>Text Here !!!</Text>
            <View style={styles.borderLine} />
          </View>
          <View style={styles.contentContainer}>
            <DashBoardElement
              id={1}
              title={'Message'}
              onPress={this.handlePressMessage}
            />
            <DashBoardElement
              id={2}
              title={'Images'}
              onPress={this.handlePressMemories}
            />
            <DashBoardElement
              id={3}
              title={'Facebook'}
              onPress={this.handlePressTimeline}
            />
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.sideBarElement}>
            <Text style={styles.titleText}>Text Here !!!</Text>
            <Text style={styles.titleText}>Text Here !!!</Text>
            <Text style={styles.titleText}>Text Here !!!</Text>
            <View style={styles.borderLine} />
          </View>
          <View style={styles.contentContainerLower}>
            <DashBoardElement
              id={1}
              title={'Message List'}
              onPress={this.handlePressMessageFriends}
            />
            <DashBoardElement
              id={2}
              title={'Images'}
              onPress={this.handlePressMemoriesFriends}
            />
          </View>
        </View>
      </ImageBackground>
    );
  }
}

export default DashBoard;
