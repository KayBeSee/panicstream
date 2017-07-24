import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, AppRegistry, Button, FlatList } from 'react-native';
import Styles from './styles';
import Shows from './ShowList';


export default class ShowPage extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Panic Streams',
  });

  render() {
    console.log('this.props: ', this.props);
    const { params } = this.props.navigation.state;

    return (
      <View style={Styles.container}>
        <Text>Panic Streams Page</Text>
        <FlatList
          data={Shows}
          renderItem={({item}) =>
          <Button onPress={() => { this.props.navigation.navigate('ShowPage', item) }}
            title={`${item.key} - ${item.venue}`}
            style={Styles.item}>
              {item.key}
          </Button>}
        />


        <Button
          onPress={() => this.props.navigation.navigate('ShowPage', { date: '06/24/2017' })}
          title="Red Rocks (06/24/2017)"
        />
      </View>
    );
  }
}
