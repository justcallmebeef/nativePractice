import  React, { Component } from 'react' 
import { Image, ScrollView } from 'react-native'

export default class BananaImage extends Component {
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        }
        return (
            <ScrollView
                maximumZoomScale={1.00001}
                minimumZoomScale={1}
                bouncesZoom={true}
            >
            <Image source={pic} style={{width: 193, height: 110}} />
            </ScrollView>
        )
    }
}