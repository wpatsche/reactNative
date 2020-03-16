import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default class MeuHead extends Component {
  render() {
    return (

      <View style={styles.head} >
        <Text style={styles.thead}> {this.props.title} </Text>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  head: {
    paddingBottom: 25,
    backgroundColor: '#61CE70',
  },

  thead: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 25,
    marginTop: 15,
    fontFamily: 'serif',
    fontWeight: 'bold',
    color: '#fff',
  },

});