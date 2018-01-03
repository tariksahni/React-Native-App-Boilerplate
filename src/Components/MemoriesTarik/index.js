import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import mt1 from '../../assets/Images/demo.jpg';

import { styles } from './styles';

const data = [
  {
    image: mt1,
    title: 'Demo'
  },
  {
    image: mt1,
    title: 'Demo'
  },
  {
    image: mt1,
    title: 'Demo'
  }
];

export default class extends Component {
  render() {
    return (
      <Swiper
        activeDot={<View style={styles.activeDot} />}
        autoplay
        autoplayTimeout={2.5}
        autoplayDirection
        buttonWrapperStyle={styles.buttonWrapperStyle}
        nextButton={<Text style={styles.buttonText}>›</Text>}
        prevButton={<Text style={styles.buttonText}>‹</Text>}
        dot={<View style={styles.dots} />}
        loop
        showsButtons
        style={styles.wrapper}
      >
        {data.map(element => (
          <View style={styles.slide} key={element.title}>
            <View style={styles.imagePart}>
              <Image style={styles.image} source={element.image} />
            </View>
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>{element.title}</Text>
            </View>
          </View>
        ))}
      </Swiper>
    );
  }
}
