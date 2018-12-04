import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Header, Body, Text, Content, Thumbnail } from 'native-base';

class NotificationScreen extends Component {
  render(){
    return(
      <Container>
        <Header>
          <Body>
            <Text>Notifications</Text>
          </Body>
        </Header>
        <Content>
          <View style={{ padding: 15 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingTop: 20 }}>
              <View style={{ alignItems: 'center' }}>
               <Thumbnail source={require('../../assets/organisers/sta.png')}/>
              </View>
              <View style={{ flexDirection:'row', flex: 1, flexWrap: 'wrap', paddingLeft: 10 }}>
                <Text>
                  <Text style={{ fontWeight: '900' }}>Singapore Tennis Association</Text>{' '}
                  created a new event:{' '}
                  <Text style={{ fontWeight: '900' }}>STA Intermediate II 2018</Text>
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingTop: 20 }}>
              <View style={{ alignItems: 'center' }}>
               <Thumbnail source={require('../../assets/organisers/sta.png')}/>
              </View>
              <View style={{ flexDirection:'row', flex: 1, flexWrap: 'wrap', paddingLeft: 10 }}>
                <Text>
                  <Text style={{ fontWeight: '900' }}>Reminder:</Text>{' '}
                  The deadline for{' '}
                  <Text style={{ fontWeight: '900' }}>STA Open II 2018</Text>{' '}
                  is this week:{' '}
                  <Text style={{ fontWeight: '900' }}>12 March 2018</Text>
                </Text>
              </View>
            </View>
          </View>
        </Content>
      </Container>
    )
  }
}

export default NotificationScreen;
