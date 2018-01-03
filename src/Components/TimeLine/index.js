import React, { Component } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { styles } from './styles';

export default class extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.mainContainer}>
          <View style={styles.oneCardItem}>
            <View style={styles.description}>
              <Text style={styles.blue}>Tarik Sahni</Text>
              <Text style={styles.grey}> and </Text>
              <Text style={styles.blue}>Tarik Sahni</Text>
              <Text style={styles.grey}> are now friends.</Text>
            </View>
            <View style={styles.dateContainer}>
              <Text style={styles.date}>January 1, 2018 at 12:00pm</Text>
              <Image
                source={require('../../assets/Images/lock.png')}
                style={styles.lock}
              />
            </View>
          </View>
          <View style={styles.oneCardItem}>
            <View style={styles.description}>
              <Text style={styles.blue}>Tarik Sahni</Text>
              <Text style={styles.grey}> and </Text>
              <Text style={styles.blue}>Tarik Sahni</Text>
              <Text style={styles.grey}> "Some lifeEvent"</Text>
              <Text style={styles.grey}> on </Text>
              <Text style={styles.blue}>facebook.</Text>
            </View>
            <View style={styles.dateContainer}>
              <Text style={styles.date}>January 1, 2018 at 12:00pm</Text>
              <Image
                source={require('../../assets/Images/lock.png')}
                style={styles.lock}
              />
            </View>
            <View style={styles.descriptionMain}>
              <Image
                source={require('../../assets/Images/demo.jpg')}
                style={styles.imagePart}
              />
            </View>
          </View>

          <View style={styles.oneCardItem}>
            <View style={styles.description}>
              <Text style={styles.blue}>Tarik Sahni</Text>
              <Text style={styles.grey}> was with </Text>
              <Text style={styles.blue}>Tarik Sahni</Text>
              <Text style={styles.grey}> at</Text>
              <Text style={styles.blue}>"Some Place"</Text>
            </View>
            <View style={styles.dateContainer}>
              <Text style={styles.date}>January 1, 2018 at 12:00pm</Text>
              <Image
                source={require('../../assets/Images/lock.png')}
                style={styles.lock}
              />
            </View>
            <View style={styles.descriptionMain}>
              <Text style={styles.text}>Some Text</Text>
              <Image
                source={require('../../assets/Images/demo.jpg')}
                style={styles.imagePart2}
              />
            </View>
          </View>

          <View style={styles.oneCardItemLast}>
            <View style={styles.descriptionMain}>
              <Text style={styles.textBold}>Some TagLine</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
