import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import mf1 from '../../assets/Images/demo.jpg';

import { styles } from './styles';

const data = [
  {
    image: mf1,
    title: 'Demo'
  },
  {
    image: mf1,
    title: 'Demo'
  },
  {
    image: mf1,
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
        {data.map((element, index) => (
          <View style={styles.slide} key={element.title}>
            <View style={styles.imagePart}>
              <Image
                style={index === 4 ? styles.image3 : styles.image} // image3 for landscape
                source={element.image}
              />
            </View>
            <View style={styles.titleContainer}>
              <Text
                style={index === 2 ? styles.titleText2 : styles.titleText} // titletext2 for bigger text
              >
                {element.title}
              </Text>
            </View>
          </View>
        ))}
      </Swiper>
    );
  }
}
