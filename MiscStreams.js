import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, AppRegistry, Button } from 'react-native';
import Styles from './styles';


export default class ShowPage extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Misc Streams',
  });

  render() {
    const { params } = this.props.navigation.state;

    return (
      <View style={Styles.container}>
        <Text>Misc Streams Page</Text>
      </View>
    );
  }
}
