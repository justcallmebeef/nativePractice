import React, { Component } from 'react' 
import { AppRegistry, Text, View } from 'react-native' 

class Greeting extends Component {
    render() {
        return (
            <View>
                <Text>Hello {this.props.name}</Text>
            </View>
        )
    }
}

export default class LotsOfGreetings extends Component {
    render() {
        return (
            <View>
                <Greeting name="Rex"/>
                <Greeting name="Hannah"/>
                <Greeting name="Megan"/>
            </View>
        )
    }
}