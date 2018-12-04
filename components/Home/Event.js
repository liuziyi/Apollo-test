import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Text, Button } from 'native-base';

class Event extends Component {
  render(){

    const images = {
      "open2": require('../../assets/organisers/sta.png'),
      "int2": require('../../assets/organisers/sta.png')
    }

    return(
      <View style={{ height: 100, width: 200, borderWidth: 0.5, borderColor: '#787878', marginLeft: 10 }}>
        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 14, textAlign: 'center' }}>{this.props.title}</Text>
          <View style={{ flex: 1, flexDirection: "row", justifyContent: "center", paddingTop: 10 }}>
            <Button bordered small dark>
              <Text>Follow</Text>
            </Button>
          </View>
        </View>
      </View>
    )
  }
}

export default Event;
