import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, Image, View, AppRegistry, Button, SectionList, ScrollView } from 'react-native';
import Styles from './styles';
import Shows from './ShowList';


export default class ShowPage extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { state, setParams } = navigation;
    const isInfo = state.params.mode === 'info';
    return {
      title: isInfo ? `${navigation.state.params.date}'s Info` : `${navigation.state.params.date} - ${navigation.state.params.venue}`,
      headerRight: (
        <Button
           title={isInfo ? 'Done' : 'Details'}
          onPress={() => { setParams({mode: isInfo ? 'none' : 'info'}) }}/>
      )
    }
  };

  render() {
    console.log('this.props: ', this.props);
    const { params } = this.props.navigation.state;
    let show = Shows.filter((show) => {
      return show.date === params.date;
    })[0];
    console.log('show: ', show);

    return (
      <ScrollView style={Styles.container}>
        <View style={Styles.container}>
          <Image style={Styles.headerImage} source={{uri:show.image}} />
          <Text style={Styles.headerMainText}>{show.artist}</Text>
          <Text style={Styles.headerMainText}>{show.date}</Text>
          <Text style={Styles.headerSubText}>{show.venue}</Text>
          <Text style={Styles.headerSubText}>{show.city}, {show.state}</Text>
        </View>
        <View style={Styles.container}>
          <SectionList
            sections={show.setlist}
            renderItem={({item}) => <Text style={Styles.item}>{item.title}</Text>}
            renderSectionHeader={({section}) => <Text style={Styles.sectionHeader}>{section.title}</Text>}
          />
        </View>
      </ScrollView>
    );
  }
}
