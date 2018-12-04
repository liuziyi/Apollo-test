import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Thumbnail } from 'native-base';

class OrganiserTab extends Component {

 render(){

   const images = {
     "atp": require('../../assets/organisers/atp.png'),
     "wta": require('../../assets/organisers/wta.png')
   }

   return(
     <View style={{ padding: 15 }}>
       <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingTop: 10 }}>
         <View style={{ alignItems: 'center' }}>
          <Thumbnail source={images[this.props.image]}/>
         </View>
         <View style={{ flexDirection:'row', flex: 1, flexWrap: 'wrap', paddingLeft: 10 }}>
           <Text style={{ fontWeight: '900' }}>{this.props.organiser}</Text>
         </View>
         <View style={{ alignItems: 'center' }}>
           <Button bordered dark style={{ paddingHorizontal: 10 }}>
             <Text>Follow</Text>
           </Button>
         </View>
       </View>
     </View>
   )
 }
}

export default OrganiserTab;
