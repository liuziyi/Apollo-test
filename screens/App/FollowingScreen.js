import React, { Component } from 'react';
import { Container, Header, Tabs, Tab, TabHeading, Text } from 'native-base';
import EventTab from '../../components/Following/EventTab';
import OrganiserTab from '../../components/Following/OrganiserTab';

class FollowingScreen extends Component {

  static navigationOptions = {
    header: null
  }

  render(){
    return(
      <Container>
        <Tabs style={{ paddingTop: 20 }} tabBarUnderlineStyle={{ backgroundColor: 'black' }}>
          <Tab heading={ <TabHeading style={{ backgroundColor: 'white' }}>
            <Text style={{ color: 'black' }}>Events</Text></TabHeading>}>
            <EventTab month="JAN" date="01" title="Chandigarh ITF Juniors" duration="01 Jan - 06 Jan 2018" country="India"/>
            <EventTab month="JAN" date="01" title="China Junior 1 Grade 4" duration="01 Jan - 07 Jan 2018" country="China"/>
            <EventTab month="JAN" date="03" title="SALK Open" duration="03 Jan - 07 Jan 2018" country="Sweden"/>
            <EventTab month="JAN" date="20" title="STA Intermediate I 2018" duration="20 Jan - 28 Jan 2018" country="Singapore"/>
            <EventTab month="FEB" date="24" title="STA Open I 2018" duration="24 Feb - 04 Mar 2018" country="Singapore"/>
          </Tab>
          <Tab heading={ <TabHeading style={{ backgroundColor: 'white' }}>
            <Text style={{ color: 'black' }}>Organisers</Text></TabHeading>}>
            <OrganiserTab image="sta" organiser="Singapore Tennis Association"/>
            <OrganiserTab image="itf" organiser="International Tennis Federation"/>
          </Tab>
        </Tabs>
      </Container>
    )
  }
}

export default FollowingScreen;
