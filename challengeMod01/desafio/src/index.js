import React, { Component } from 'react';

import { StatusBar, StyleSheet, ScrollView, View, Text } from 'react-native';
import Post from './components/Post';

export default class App extends Component {
  render() {
    return <>
      <StatusBar barStyle="light-content" />

      <View style={style.viewHeader}>
        <Text style={style.textHeader}>GoNative App</Text>
      </View>
      <ScrollView style={style.scroll}>
        <Post />
        <Post />
        <Post />
      </ScrollView>
    </>;
  }
}

const style = StyleSheet.create({
  scroll: {
    backgroundColor: '#FA8072',
  },

  viewHeader: {
    padding: 15,
  },

  textHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },

});
