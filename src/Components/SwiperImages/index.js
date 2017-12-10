import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import image from '../../assets/Images/bg.jpg';
import { styles } from './styles';

const data = [
  {
    image,
    title: 'Hi title1, ide aap aaoge '
  },
  {
    image,
    title: 'Hi title2, '
  },
  {
    image,
    title: 'Hi title3, ide aap aaoge '
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
          <View style={styles.slide}>
            <Image style={styles.image} source={element.image} />
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>{element.title}</Text>
            </View>
          </View>
        ))}
      </Swiper>
    );
  }
}
