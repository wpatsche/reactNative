import React from 'react';
import PropTypes from 'prop-types';

import { View, Text, StyleSheet, Button } from 'react-native';


const Todo = ({ title }) => (
  <View>
    <Text> {title}</Text>
  </View>
);

//componente, propriedade e estado

Todo.defaultProps = {
  title: 'Padrao pae',
}

Todo.propTypes = {
  title: PropTypes.string,
};


const styles = StyleSheet.create({

});

export default Todo;