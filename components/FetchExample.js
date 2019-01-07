import React, { Component } from 'react';
import { FlatList, ActivityIndicator, Text, View  } from 'react-native';

export default class FetchExample extends Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('https://movie-db-project.herokuapp.com/')
      .then((response) => response.json())
      .then((movieList) => {

        this.setState({
          isLoading: false,
          dataSource: movieList,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text>Title:{item.title}, Director:{item.director}</Text>}
          keyExtractor={({id}, index) => id.toString()}
        />
      </View>
    );
  }
}