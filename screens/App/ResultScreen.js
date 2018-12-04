import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Header, Body, Left, Right, Button, Text, Icon, Content, Card, CardItem } from 'native-base';
import DateDropdown from '../../components/DateDropdown';
import ResultCard from '../../components/Home/Result/ResultCard';

class ResultScreen extends Component {

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
            <Text>Results</Text>
          </Body>
          <Right></Right>
        </Header>
        <Content style={{ margin: 20 }}>
          <View style={{ alignItems: 'center', paddingVertical: 10 }}>
            <DateDropdown/>
          </View>
          <ResultCard title="Men's Singles: M65" date="24 Feb 2018" body="Chum Gabriel: 6-0, 6-2"/>
          <ResultCard title="Men's Singles: M66" date="24 Feb 2018" body="Lai Michael: Walkover"/>
          <ResultCard title="Men's Singles: M67" date="24 Feb 2018" body="Keh Andre: 6-3, 6-2"/>
          <ResultCard title="Men's Singles: M69" date="24 Feb 2018" body="Sitepu Randel: Walkover"/>
        </Content>
      </Container>
    )
  }
}

export default ResultScreen;
