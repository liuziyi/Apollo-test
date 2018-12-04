import React, { Component } from 'react';
import { Form, Textarea, Button, Text } from 'native-base';

class PostInput extends Component {
  render(){
    return(
      <Form style={{ padding: 10 }}>
        <Textarea rowSpan={5} bordered placeholder="Any interesting to add?"/>
        <Button dark small full style={{ margin: 10, borderRadius: 5 }}>
          <Text>Post</Text>
        </Button>
      </Form>
    )
  }
}

export default PostInput;
