import React, { Component } from 'react';
import { Card, CardItem, Thumbnail, Body, Left, Text, Button, Icon } from 'native-base';

class PostDetails extends Component {
  render(){

    const images = {
      "sta": require('../../assets/organisers/sta.png'),
      "user1": require('../../assets/users/user1.png')
    }

    return(
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={images[this.props.image]}/>
            <Body>
              <Text style={{ fontWeight: '900' }}>{this.props.name}</Text>
              <Text note>{this.props.date}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Body style={{ padding: 10 }}>
            <Text>{this.props.body}</Text>
          </Body>
        </CardItem>
        <CardItem>
          <Left>
            <Button iconLeft transparent dark>
              <Icon name="ios-heart" style={{ color: 'black'  }}/>
              <Text>{this.props.likes}</Text>
            </Button>
            <Button iconLeft transparent dark>
              <Icon name="ios-chatbubbles" style={{ color: 'black' }}/>
              <Text>{this.props.comments}</Text>
            </Button>
          </Left>
        </CardItem>
      </Card>
    )
  }
}

export default PostDetails;
