import React, { Component } from 'react';
import { Text, View } from 'react-native'

class ProfileScreen extends Component {
  state = {}

//   selectGroup = (gameTitle, img_url) => () => {
//     this.props.navigation.navigate('Game', { title: gameTitle, img_url });
//   }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>Welcome ot Profile screen</Text> 
      </View>
    );
  }
}

export default ProfileScreen;