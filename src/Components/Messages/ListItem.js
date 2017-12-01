import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  Platform,
  UIManager,
  LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import CardSection from '../CardSection';
import { selectMessage } from '../../Actions/Messages';
import { styles } from './styles';

class ListItem extends Component {
  constructor() {
    super();
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }
  componentWillUpdate() {
    LayoutAnimation.linear();
  }

  render() {
    const { expanded } = this.props;
    const { id, title, description } = this.props.message;
    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectMessage(id)}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>{title}</Text>
          </CardSection>
          {expanded ? (
            <CardSection>
              <Text style={{ flex: 1 }}>{description}</Text>
            </CardSection>
          ) : null}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedMessage === ownProps.message.id;
  return { expanded };
};

const mapDispatchToProps = { selectMessage };
export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
