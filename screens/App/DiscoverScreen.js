import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Header, Tabs, Tab, TabHeading, Text } from 'native-base';
import EventTab from '../../components/Discover/EventTab';
import OrganiserTab from '../../components/Discover/OrganiserTab';

class DiscoverScreen extends Component {

  static navigationOptions = {
    header: null
  }

  render(){
    return(
      <Container>
        <Tabs style={{ paddingTop: 20 }} tabBarUnderlineStyle={{ backgroundColor: 'black' }}>
          <Tab heading={ <TabHeading style={{ backgroundColor: 'white' }}>
            <Text style={{ color: 'black' }}>Events</Text></TabHeading>}>
            <EventTab month="JAN" date="15" title="Australian Open 2018" duration="15 Jan - 28 Jan 2018" country="Australia"/>
            <EventTab month="MAY" date="27" title="French Open 2018" duration="May 27-June 10 2018" country="France"/>
            <EventTab month="JULY" date="2" title="Wimbledon Championships 2018" duration="2 July – 15 July 2018" country="UK"/>
            <EventTab month="AUG" date="27" title="US Open 2018" duration="August 27 - September 9 2018" country="US"/>
          </Tab>
          <Tab heading={ <TabHeading style={{ backgroundColor: 'white' }}>
            <Text style={{ color: 'black' }}>Organisers</Text></TabHeading>}>
            <OrganiserTab image="atp" organiser="Association of Tennis Professionals"/>
            <OrganiserTab image="wta" organiser="Women’s Tennis Association"/>
          </Tab>
        </Tabs>
      </Container>
    )
  }
}

export default DiscoverScreen;
