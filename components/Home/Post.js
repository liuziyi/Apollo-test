import React, { Component } from 'react';
import { View } from 'react-native';
import { Card, CardItem, Thumbnail, Body, Left, Text, Button, Icon } from 'native-base';
import PostDetails from './PostDetails';

class Post extends Component {
  render(){
    return(
      <View>
        <PostDetails
          image="sta"
          name="Singapore Tennis Association"
          date="Feb 24, 2018"
          body="The following matches have been postponed to 6pm: M65, M66, M67, M69, M70"
          likes="10"
          comments="4"
        />
        <PostDetails
          image="user1"
          name="Jess Lee"
          date="Feb 24, 2018"
          body="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          likes="2"
          comments="4"
        />
      </View>
    )
  }
}

export default Post;
