import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  Platform,
  UIManager,
  LayoutAnimation,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { selectMessage } from '../../Actions/Messages';
import { styles } from './styles';

class ListItem extends Component {
  constructor() {
    super();
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    this.state = {
      isDescriptionShown: true
    };
  }
  componentWillUpdate() {
    LayoutAnimation.linear();
  }

  handleOnPress = () => {
    this.setState({ isDescriptionShown: true });
    const { id } = this.props.message;
    this.props.selectMessage(id);
    if (this.props.expanded) {
      this.setState({ isDescriptionShown: !this.state.isDescriptionShown });
    }
  };

  render() {
    const { expanded } = this.props;
    const { title, description } = this.props.message;
    return (
      <TouchableOpacity
        onPress={this.handleOnPress}
        style={styles.oneMessageContainer}
      >
        <View style={styles.imagePart}>
          <Image
            source={require('../../assets/Images/bg.jpg')} // eslint-disable-line global-require
            style={styles.image}
          />
        </View>
        <View style={styles.descriptionPart}>
          <View>
            <Text
              style={
                !expanded
                  ? styles.descriptionTitle
                  : styles.descriptionTitleSelected
              }
            >
              {title}
            </Text>
          </View>
          {expanded && this.state.isDescriptionShown ? (
            <View>
              <Text style={styles.descriptionText}>{description}</Text>
            </View>
          ) : (
            <View />
          )}
        </View>
      </TouchableOpacity>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedMessage === ownProps.message.id;
  return { expanded };
};

const mapDispatchToProps = { selectMessage };
export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
