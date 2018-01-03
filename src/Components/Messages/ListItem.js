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

  truncateTextLength = (title, maxLength = 40) => {
    const titleLength = title.length;

    if (titleLength > maxLength) {
      return `${title.substring(0, maxLength)}...`;
    }
    return title;
  };

  render() {
    const { expanded } = this.props;
    const { title, description, image } = this.props.message;
    return (
      <TouchableOpacity
        onPress={this.handleOnPress}
        style={styles.oneMessageContainer}
      >
        <View style={styles.imagePart}>
          <Image source={image} style={styles.image} />
        </View>
        <View style={styles.descriptionPart}>
          <View style={styles.titlePart}>
            <Text
              style={
                !expanded
                  ? styles.descriptionTitle
                  : styles.descriptionTitleSelected
              }
            >
              {title}
            </Text>
            {!expanded ? (
              <Text style={styles.smallDescription}>
                {this.truncateTextLength(description)}
              </Text>
            ) : null}
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
