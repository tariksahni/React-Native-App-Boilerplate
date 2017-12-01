import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';
import { styles } from './styles';

class Messages extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.props.messages);
  }

  renderRow(message) {
    return <ListItem message={message} />;
  }

  render() {
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
        style={styles.messageContainer}
      />
    );
  }
}

const mapStateToProps = ({ messages }) => {
  return { messages };
};
export default connect(mapStateToProps, null)(Messages);
