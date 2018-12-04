import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Container, Header, Body, Left, Right, Button, Text, Icon, Content, Thumbnail } from 'native-base';

class AboutScreen extends Component {

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
            <Text>About</Text>
          </Body>
          <Right></Right>
        </Header>
        <Content style={{ padding: 20 }}>
          <View style={{ paddingVertical: 20 }}>
            <Text style={{ fontWeight: "900" }}>STA Open I 2018</Text>
            <Text style={{ color: 'grey', marginBottom: 20 }}>Singapore Tennis Association</Text>
            <Text>Date: 24 Feb - 04 Mar 2018</Text>
            <Text>Time: 2:00pm</Text>
            <Text>Location: Kallang Tennis Center</Text>
            <Text>Price: $58.00 (Singles), $53.50 per pair (Doubles)</Text>
            <Text>Category: Tennis</Text>
          </View>
          <View style={{ paddingVertical: 20 }}>
            <Text style={{ fontWeight: "900" }}>Description</Text>
            <Text>Official Time of Matches</Text>
            <Text>(i) Weekdays: 6.00pm - 11.00pm</Text>
            <Text>(ii) Saturday: 2.00pm - 11.00pm</Text>
            <Text>(iii) Sunday: 9.00am onwards</Text>
            <Text></Text>
            <Text>Tournament Referee: Mr Stanley Cheong</Text>
          </View>
          <View style={{ paddingVertical: 20, height: 200 }}>
            <View style={{ flex: 1 }}>
              <Text style={{ fontWeight: "900" }}>Followers</Text>
            </View>
            <View style={{ flex: 3 }}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <Thumbnail
                  style={{ marginHorizontal: 5, borderColor: 'grey', borderWidth: 2 }}
                  source={require('../../assets/users/user1.png')}
                />
                <Thumbnail
                  style={{ marginHorizontal: 5, borderColor: 'grey', borderWidth: 2 }}
                  source={require('../../assets/users/user2.png')}
                />
                <Thumbnail
                  style={{ marginHorizontal: 5, borderColor: 'grey', borderWidth: 2 }}
                  source={require('../../assets/users/user3.png')}
                />
                <Thumbnail
                  style={{ marginHorizontal: 5, borderColor: 'grey', borderWidth: 2 }}
                  source={require('../../assets/users/user4.png')}
                />
                <Thumbnail
                  style={{ marginHorizontal: 5, borderColor: 'grey', borderWidth: 2 }}
                  source={require('../../assets/users/user5.png')}
                />
              </ScrollView>
            </View>
          </View>
        </Content>
      </Container>
    )
  }
}

export default AboutScreen;
