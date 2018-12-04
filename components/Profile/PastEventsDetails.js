import React, { Component } from 'react';
import { View, Text } from 'react-native';

class PastEventsDetails extends Component {
  render(){
    return(
      <View style={{ padding: 15 }}>
        <View style={{ flexDirection: 'row', paddingTop: 10 }}>
          <View style={{ alignItems: 'center', paddingHorizontal: 20 }}>
            <Text style={{ fontWeight: '900', fontSize: 20 }}>{this.props.month}</Text>
            <Text style={{ fontWeight: '900', fontSize: 20 }}>{this.props.date}</Text>
          </View>
          <View>
            <Text style={{ fontWeight: '900' }}>{this.props.title}</Text>
            <Text>{this.props.duration}</Text>
            <Text>{this.props.country}</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default PastEventsDetails;
