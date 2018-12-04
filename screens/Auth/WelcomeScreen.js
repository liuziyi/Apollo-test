import React, { Component } from 'react';
import { Container, Content, H1, Text, Button } from 'native-base';

class WelcomeScreen extends Component {

  static navigationOptions = {
    header: null
  }

  render(){
    return(
      <Container style={{ padding: 10 }}>
        <Content style={{ marginTop: 50 }}>
          <H1 style={{ textAlign: 'center', paddingTop: 60, fontWeight: '900', fontSize: 40 }}>APOLLO</H1>
          <Text style={{ textAlign: 'center', paddingLeft: 80, fontSize: 15 }}>(Test)</Text>
          <Button
            block dark
            onPress={() => this.props.navigation.navigate('Register')}
            style={{ marginTop: 150, marginBottom: 10 }}
          >
            <Text>Register</Text>
          </Button>
          <Button block bordered dark onPress={() => this.props.navigation.navigate('Login')}>
            <Text>Login</Text>
          </Button>
          <Text style={{ textAlign: 'center', marginTop: 180 }}>Made with ☕ and ♥️ by Liu Ziyi</Text>
        </Content>
      </Container>
    )
  }
}

export default WelcomeScreen;
