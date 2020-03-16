import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import './config/reactotron';

import Todo from '~/components/Todo';
import MeuHead from './components/MeuHead';
import MeuBody from './components/MeuBody';

// const App: () => React$Node = () => {
export default class App extends Component {
  state = {
    counter: 0,
  };

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({ text: "hello word" });
    // }, 3000);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return { text: nextProps.text };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.counter < 5;
  }

  handleAddCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  state = {
    todos: [
      { id: 0, text: 'Fazer coffe break' },
      { id: 1, text: 'Fazer coffe break 1' },
      { id: 2, text: 'Fazer coffe break 2' },
    ],
  };

  addTodo = () => {
    this.setState({
      todos: [
        ...this.state.todos,
        { id: Math.random(), text: `novo todu ${id}` },
      ],
    });
  };

  render() {
    return (
      <>
        <StatusBar barStyle="light-content" />

        {/* {this.state.todos.map(todo => <Todo key={todo.id} title={todo.text} />)} */}
        {/* <Text> dasdasda </Text> */}
        {/* {this.state.todos.map(todo => <Todo title={todo} />)} */}
        {/* <Text>{this.props.title}</Text>  utilizando o props, pegando a propriedade title enviada no index.js*/}

        <View style={styles.container}>
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //o elemento ocupa todo o espaço possivel
    backgroundColor: '#61ce70', // define a cor de fundo do elemento
    flexDirection: 'row', //faz com que os elementos se alinhem entre as linhas podendo alinhar por colunas
    flexWrap: 'wrap', //faz com que os elementos não fiquem escondidos e apareçam todos na tela
    justifyContent: 'space-around', // controla o alinhamento de acordo com o flexDirection
    alignContent: 'space-around', // faz o alinhamento contrario ao justifyContent
  },

  box: {
    width: 80,
    height: 80,
    backgroundColor: '#f00',
    margin: 20,
    transform: [{ rotateZ: '20deg' }],
  },
});

// export default App;
