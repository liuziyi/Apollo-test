import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PastEventsDetails from './PastEventsDetails';

class PastEvents extends Component {
  render(){
    return(
      <View>
        <PastEventsDetails
          month="JAN"
          date="20"
          title="STA Intermediate I 2018"
          duration="20 Jan - 28 Jan 2018"
          country="Singapore"
        />
        <PastEventsDetails
          month="JAN"
          date="03"
          title="SALK Open"
          duration="03 Jan - 07 Jan 2018"
          country="Sweden"
        />
        <PastEventsDetails
          month="JAN"
          date="01"
          title="China Junior 1 Grade 4"
          duration="01 Jan - 07 Jan 2018"
          country="China"
        />
        <PastEventsDetails
          month="JAN"
          date="01"
          title="Chandigarh ITF Juniors"
          duration="01 Jan - 06 Jan 2018"
          country="India"
        />
      </View>
    )
  }
}

export default PastEvents;
