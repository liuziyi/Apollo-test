import React, { Component } from 'react';
import { Card, CardItem, Left, Body, Text } from 'native-base';

class ResultCard extends Component {

  render(){
    return(
      <Card>
        <CardItem>
          <Left>
            <Body>
              <Text>{this.props.title}</Text>
              <Text note>{this.props.date}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem>
          <Body style={{ paddingLeft: 10 }}>
            <Text>
              {this.props.body}
            </Text>
          </Body>
        </CardItem>
      </Card>
    )
  }
}

export default ResultCard;
