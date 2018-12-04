import React, { Component } from 'react';
import { Container, Header, Body, Left, Right, Text, Button, Icon, Tabs, Tab, TabHeading } from 'native-base';
import FacebookTab from '../../components/Home/Social/FacebookTab';
import TwitterTab from '../../components/Home/Social/TwitterTab';
import InstagramTab from '../../components/Home/Social/InstagramTab';

class SocialScreen extends Component {

  static navigationOptions = {
    header: null
  }

  render(){
    return(
      <Container>
        <Header hasTabs>
          <Left>
            <Button iconLeft transparent dark onPress={() => this.props.navigation.goBack()}>
              <Icon name='ios-arrow-back' />
              <Text>Back</Text>
            </Button>
          </Left>
          <Body>
            <Text>Social</Text>
          </Body>
          <Right></Right>
        </Header>
        <Tabs style={{ paddingTop: 20 }} tabBarUnderlineStyle={{ backgroundColor: 'black' }}>
          <Tab heading={ <TabHeading style={{ backgroundColor: 'white' }}>
            <Text style={{ color: 'black' }}>Facebook</Text></TabHeading>}>
            <FacebookTab/>
          </Tab>
          <Tab heading={ <TabHeading style={{ backgroundColor: 'white' }}>
            <Text style={{ color: 'black' }}>Twitter</Text></TabHeading>}>
            <TwitterTab/>
          </Tab>
          <Tab heading={ <TabHeading style={{ backgroundColor: 'white' }}>
            <Text style={{ color: 'black' }}>Instagram</Text></TabHeading>}>
            <InstagramTab/>
          </Tab>
        </Tabs>
      </Container>
    )
  }
}

export default SocialScreen;
