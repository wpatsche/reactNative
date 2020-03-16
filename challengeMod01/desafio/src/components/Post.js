import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Post extends Component {
  render() {
    return (
      <>
        <View style={style.view}>
          <Text style={style.title}>Aprendendo React Native</Text>
          <Text style={style.sub}>Willian Patsche Machry</Text>
          <Text style={style.hr}>
            -----------------------------------------------------------------------------
            </Text>

          <Text style={style.body}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas maecenas
            pharetra convallis posuere morbi leo urna molestie.
          </Text>


        </View>

      </>
      // {/* <Text style={styles.thead}> {this.props.title} </Text> */ }



    );
  }
}

const style = StyleSheet.create({
  view: {
    flex: 1, //o elemento ocupa todo o espaço possivel
    backgroundColor: '#fff', // define a cor de fundo do elemento
    // flexDirection: 'row', //faz com que os elementos se alinhem entre as linhas podendo alinhar por colunas

    justifyContent: 'center', // controla o alinhamento de acordo com o flexDirection
    borderRadius: 8,
    padding: 20,
    margin: 20,

  },

  hr: {
    opacity: 0.1,
  },

  title: {
    fontFamily: 'serif',
    fontSize: 16,
    fontWeight: 'bold',

  },

  sub: {
    fontFamily: 'serif',
    fontSize: 14,
    opacity: 0.6,
  },

  body: {
    fontFamily: 'serif',
    textAlign: 'left',
    opacity: 0.8,
  },


});