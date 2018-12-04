import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'native-base';

class EventTab extends Component {

  render(){
    return(
      <View style={{ padding: 15 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingTop: 10 }}>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontWeight: '900', fontSize: 20 }}>{this.props.month}</Text>
            <Text style={{ fontWeight: '900', fontSize: 20 }}>{this.props.date}</Text>
          </View>
          <View style={{ flexDirection:'row', flex: 1, flexWrap: 'wrap', paddingLeft: 10 }}>
            <Text style={{ fontWeight: '900' }}>{this.props.title}</Text>
            <Text>{this.props.duration}</Text>
            <Text>, </Text>
            <Text>{this.props.country}</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Button bordered dark style={{ paddingHorizontal: 10 }}>
              <Text>Follow</Text>
            </Button>
          </View>
        </View>
      </View>
    )
  }
}

export default EventTab;
