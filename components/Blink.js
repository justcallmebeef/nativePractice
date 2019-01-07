import React, { Component } from 'react'
import { Text, View } from 'react-native'

class Blink extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            isShowingText: true 
        }


        setInterval(() => (
            this.setState(previousState => ({
                isShowingText: !previousState.isShowingText
            }))
        ), 5000)
    }
    render() {
        if(!this.state.isShowingText) {
            return null 
        }
        return (
            <Text>{this.props.text}</Text>
        )
    }
}

export default class BlinkApp extends Component {
    render() {
        return (
            <View>
                <Blink text='I love to blink' />
                <Blink text='Yes, blinking is so great' />
                <Blink text='React Native Pro here...' />
                <Blink text='Look Look Look!' />
            </View>
        )
    }
}