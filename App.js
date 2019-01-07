import React, { Component } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import BananaImage from './components/BananaImage'
import Greeting from './components/Greeting'
import Blink from './components/Blink'
import PizzaTranslator from './components/PizzaTranslator'
import ButtonBasics from './components/ButtonBasics'
import Scroll from './components/Scroll'
import FlatListBasics from './components/FlatListBasics'
import FlexDimensionsBasics from './components/FlexDimensionsBasics'
import SectionListBasics from './components/SectionListBasics'
import FetchExample from './components/FetchExample' 

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
      <ScrollView>
        <Text>Hello World!</Text>
        <PizzaTranslator />
        <FetchExample />
        <BananaImage />
        <Greeting />
        {/* <Blink /> */}
        <Text>I MADE IT WORK!</Text>
        <ButtonBasics />
        <FlatListBasics />
        <SectionListBasics />
      </ScrollView>
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
    top: 30
  },
  words: {
    color: 'white', 
    alignItems: 'center'
  }
});
