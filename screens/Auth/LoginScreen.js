import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { Container, Header, Left, Button, Text, Icon, Content, H1 } from 'native-base';

class LoginScreen extends Component {

  static navigationOptions = {
    header: null
  }

  login = async() => {
    await AsyncStorage.setItem('userToken', 'ziyi')
    this.props.navigation.navigate('App')
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
        </Header>
        <Content style={{ padding: 20 }}>
          <H1 style={{ textAlign: 'center', marginTop: 50 }}>Login</H1>
          <Button
            style={{ marginTop: 50 }}
            block dark
            onPress={this.login}
          >
            <Text style={{ color: 'white' }}>Login</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}

export default LoginScreen;
