import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Container, Header, Body, Form, Picker, Left, Right, Button, Text, Icon, Content } from 'native-base';
import Event from '../../components/Home/Event';
import PostInput from '../../components/Home/PostInput';
import Post from '../../components/Home/Post';

class HomeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: "key4"
    };
  }

  onValueChange(value: string) {
    this.setState({
      selected: value
    });
  }

  render(){
    return(
      <Container>
        <Header>
          <Left>
            <Icon
              name="md-menu"
              style={{ color: 'black', paddingLeft: 10 }}
              onPress={() => this.props.navigation.toggleDrawer()}
            />
          </Left>
          <Body>
            <Form>
              <Picker
                mode="dropdown"
                iosHeader="Your Events"
                iosIcon={<Icon name="ios-arrow-down" />}
                style={{ width: undefined }}
                selectedValue={this.state.selected}
                onValueChange={this.onValueChange.bind(this)}
              >
                <Picker.Item label="Chandigarh ITF Juniors" value="key0" />
                <Picker.Item label="China Junior 1 Grade 4" value="key1" />
                <Picker.Item label="SALK Open" value="key2" />
                <Picker.Item label="STA Intermediate I 2018" value="key3" />
                <Picker.Item label="STA Open I 2018" value="key4" />
              </Picker>
            </Form>
          </Body>
          <Right></Right>
        </Header>
        <Content style={{ padding: 10 }}>
          <ScrollView scrollEventThrottle={16}>
            <View>
              <Text style={{ color: 'grey', paddingLeft: 5 }}>Suggestions</Text>
            </View>
            <View style={{ height: 130, marginTop: 10 }}>
              <ScrollView horizontal={true}>
                <Event image="open2" title="STA Open II 2018"/>
                <Event image="int2" title="STA Intermediate II 2018"/>
              </ScrollView>
            </View>
          </ScrollView>
          <View style={{ borderBottomColor: '#D3D3D3', borderBottomWidth: 1 }}/>
          <PostInput/>
          <Post/>
        </Content>
      </Container>
    )
  }
}

export default HomeScreen;
