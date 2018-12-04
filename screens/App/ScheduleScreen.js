import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Header, Body, Left, Right, Button, Text, Icon, Content } from 'native-base';
import DateDropdown from '../../components/DateDropdown';

class ScheduleScreen extends Component {

  static navigationOptions = {
    header: null
  }

  render(){
    return(
      <Container>
        <Header>
          <Left>
            <Button iconLeft transparent dark onPress={() => this.props.navigation.goBack()}>
              <Icon name='ios-arrow-back' />
              <Text>Back</Text>
            </Button>
          </Left>
          <Body>
            <Text>Schedule</Text>
          </Body>
          <Right></Right>
        </Header>
        <Content style={{ paddingHorizontal: 20 }}>
          <View style={{ alignItems: 'center', paddingVertical: 10 }}>
            <DateDropdown/>
          </View>
          <View style={{ paddingVertical: 20 }}>
            <Text style={{ fontWeight: "900" }}>Saturday 24 February 2018</Text>
            <Text></Text>
            <Text>2:00 PM: M65, M66, M67, M69, M70</Text>
            <Text>3:15 PM: M83, M85, M86, M89, M90</Text>
            <Text>4:30 PM: M94, M97, M98, M99, M101</Text>
            <Text></Text>
            <Text style={{ fontWeight: "900" }}>Sunday 25 February 2018</Text>
            <Text></Text>
            <Text>2:00 PM: M32, M33, M34, M35, M36</Text>
            <Text>3:15 PM: M43, M44, M45, M46, M47</Text>
            <Text>4:30 PM: M49, M50, M51, M52, M53</Text>
            <Text></Text>
            <Text style={{ fontWeight: "900" }}>Monday 26 February 2018</Text>
            <Text></Text>
            <Text>6:00 PM: M16, M17, M18, M19, M20</Text>
            <Text>7:15 PM: M21, M22, M23, M24, M25</Text>
            <Text>8:30 PM: M31, L23, L24, L25, L26</Text>
          </View>
        </Content>
      </Container>
    )
  }
}

export default ScheduleScreen;
