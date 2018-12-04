import React from 'react';
import { Text } from 'native-base';

const NotificationIcon = props => (
  <Text style={{  color: 'white',
                  position:'absolute',
                  top:5,
                  right:-9,
                  margin: -5,
                  minWidth:15,
                  height:13,
                  borderRadius:7,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#FF0000',
                  textAlign: "center",
                  fontSize: 9 }}>
    2
  </Text>
);

export default NotificationIcon;
