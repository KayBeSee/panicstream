import React from 'react';
import { StyleSheet, Text, View, AppRegistry, Button,  } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Styles from './styles';
import PanicStreams from './PanicStreams';
import MiscStreams from './MiscStreams';
import Merch from './Merch';
import Resources from './Resources';
import ShowPage from './ShowPage';

class App extends React.Component {
  render() {
    return (
      <View style={Styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const MainScreenNavigator = TabNavigator({
  PanicStreams: { screen: PanicStreams },
  MiscStreams: { screen: MiscStreams },
  Merch: { screen: Merch },
  Resources: { screen: Resources },
});

const SimpleStack = StackNavigator({
  Home: {
    screen: MainScreenNavigator,
  },
  ShowPage: {
    path: 'show/:date',
    screen: ShowPage
  },
});

export default SimpleStack;
