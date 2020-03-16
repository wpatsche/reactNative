import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  TextInput,
  Button,
  // TextEncoder,
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <>
        <StatusBar barStyle="light-content" />
        <View style={styles.view}>
          <Button color={'#1567d8'} style={styles.btn} title="Fazer Login" />
          {/* <Button title="Fazer Login" /> */}
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#00d871',
    alignItems: 'center',
    padding: 10,
    // width: 200,
    height: 200,
    borderRadius: 20,
  },
  btn: {
    padding: 20,
    width: 200,
    height: 200,
    alignItems: 'center',
    borderWidth: 0.5,
    opacity: 0.6,
  },
});
