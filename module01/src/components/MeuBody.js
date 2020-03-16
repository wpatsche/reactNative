import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image, ScrollView } from 'react-native';

export default class MeuBody extends Component {
  render() {
    return (
      <>
        <ScrollView
          style={{
            flex: 1, backgroundColor: 'pink',
            marginHorizontal: 20,
          }}
          source={{ uri: 'https://i.pinimg.com/564x/e1/22/b1/e122b1924ed2d7d02d358baddc4dd165.jpg' }}>





          <View style={styles.container}>
            <Image
              style={styles.image}
              source={{ uri: 'https://e-rural.app/assets/uploads/2020/01/erural_logo_oficial.png' }}
            />

            {/* <View style={styles.view}> */}

            {/* </View> */}
            {/* <Image
              style={styles.imagebod}
              source={{}}>


            </Image> */}
          </View>
        </ScrollView>
      </>


    );
  }

}

const styles = StyleSheet.create({
  container: {
    // flex: 1,

  },
  image: {
    width: 375,
    height: 175,
  },
  view: {
    // flex: 1,
    backgroundColor: '#e4e4e4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  vBod: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f00',
  },
  imagebod: {
    // flex: 1,
    width: 400,
    height: 464.5,
  },

});