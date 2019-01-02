import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import BananaImage from './components/BananaImage'
import Greeting from './components/Greeting'
import Blink from './components/Blink'
import PizzaTranslator from './components/PizzaTranslator'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <PizzaTranslator />
        <Text>Hello World!</Text>
        <BananaImage />
        <Greeting />
        <Blink />
        <Text>I MADE IT WORK!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'limegreen',
    alignItems: 'center',
    justifyContent: 'center',
  },
  words: {
    color: 'white', 
    alignItems: 'center'
  }
});
