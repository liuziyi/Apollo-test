import React, { Component } from 'react';
import { Container, Content, Form, Picker, Icon } from 'native-base';

class DateDropdown extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: "key0"
    };
  }
  onValueChange(value: string) {
    this.setState({
      selected: value
    });
  }

  render(){
    return(
      <Form>
        <Picker
            mode="dropdown"
            iosHeader="Select your SIM"
            iosIcon={<Icon name="ios-arrow-dropdown-circle" style={{ color: "black", fontSize: 25 }} />}
            style={{ width: undefined }}
            selectedValue={this.state.selected}
            onValueChange={this.onValueChange.bind(this)}
          >
          <Picker.Item label="All" value="key0" />
          <Picker.Item label="Saturday 24 February 2018" value="key1" />
          <Picker.Item label="Sunday 25 February 2018" value="key2" />
          <Picker.Item label="Monday 26 February 2018" value="key3" />
        </Picker>
      </Form>
    )
  }
}

export default DateDropdown;
