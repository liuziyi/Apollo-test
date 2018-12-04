import React, { Component } from 'react';
import { View, Text, ActivityIndicator, AsyncStorage } from 'react-native';

class LandingScreen extends Component {

  constructor(){
    super()
    this.loadApp()
  }

  loadApp = async() => {
    const userToken = await AsyncStorage.getItem('userToken');
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  }

  render(){
    return(
      <View>
        <Text>LandingScreen</Text>
      </View>
    )
  }
}

export default LandingScreen;
