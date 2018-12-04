import React, { Component } from 'react';
import { View, Text } from 'react-native';
import UpcomingEventsDetails from './UpcomingEventsDetails';

class UpcomingEvents extends Component {
  render(){
    return(
      <View>
        <UpcomingEventsDetails
          month="FEB"
          date="24"
          title="STA Open I 2018"
          duration="24 Feb - 04 Mar 2018"
          country="Singapore"
        />
      </View>
    )
  }
}

export default UpcomingEvents;
