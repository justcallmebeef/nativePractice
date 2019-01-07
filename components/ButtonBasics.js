import React, { Component } from 'react' 
import { Alert, Button, StyleSheet, View } from 'react-native'

export default class ButtonBasics extends Component {
    _onPressButton() {
        Alert.alert('A thing happened')
    }

    _onPressButton2() {
        Alert.alert('A different alert!')
    }

    render() {
        return (
            <View style={styles.container}>
                <View styles={styles.buttonContainer}>
                    <Button 
                        onPress={this._onPressButton}
                        title="Press Me"
                    />
                </View>
                <View>
                    <Button 
                        onPress={this._onPressButton2}
                        title="Press Me"
                        color="#841584"
                    />
                </View>
                <View styles={styles.alternativeLayoutButtonContainer}>
                    <Button 
                        onPress={this._onPressButton2}
                        title="This looks great!"
                    />
                    <Button 
                        onPress={this._onPressButton}
                        title="Ok!"
                        color="#841584"
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})