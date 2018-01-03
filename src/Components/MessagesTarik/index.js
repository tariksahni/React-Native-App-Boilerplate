import React, { Component } from 'react';
import { Text, View, Image, ImageBackground, ScrollView } from 'react-native';
import { styles } from './styles';

export default class extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.backgroundImagePart}>
          <ImageBackground
            source={require('../../assets/Images/demo.jpg')}
            style={styles.backgroundImage}
          />
          <Image
            source={require('../../assets/Images/demo2.png')}
            style={styles.MyImage}
          />
        </View>
        <ScrollView style={styles.lowerContainer}>
          <Text style={styles.textPartBold}>Hey</Text>
          <Text style={styles.textPart1}>
            Text Text Text Text Text Text Text Text Text Text Text Text
          </Text>
          <Text style={styles.textPart}>
            Text Text Text Text Text Text Text Text Text Text Text Text Text
            Text Text Text Text Text Text Text Text Text Text Text
          </Text>

          <Text style={styles.textPartBoldCenter}>Text Text</Text>
        </ScrollView>
      </View>
    );
  }
}
