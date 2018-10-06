import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
const { width, height } = Dimensions.get("screen");
class ScoreboardScreen extends Component {
  state = {
    leftScore: 0,
    rightScore: 0
  }

//   selectGroup = (gameTitle, img_url) => () => {
//     this.props.navigation.navigate('Game', { title: gameTitle, img_url });
//   }
  // increaseScore = (score) => {
  //   console.log(score);
  //   this.setState(prevState => ({
  //     // [score]: prevState[score] + 1
  //     leftScore: this.state.leftScore + 1
  //   }))
  // }
  render() {
    let { leftScore, rightScore } = this.state;
    let { scoreContainer, leftContainer, rightContainer, scoreText, addButton, scoreButtonContainer } = styles;
    return (
      <View style={{ flex: 1 }}>
        <Text>Welcome to Scoreboard screen</Text> 
        <View style={scoreContainer}>
            <View style={leftContainer}>
                <Text style={scoreText}>{leftScore}</Text>
                <View style={scoreButtonContainer}>
                  <TouchableOpacity style={addButton} onPress={() => this.setState(prevState => ({ leftScore: prevState['leftScore'] - 1 }))}>
                    <Text>-</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={addButton} onPress={() => this.setState(prevState => ({ leftScore: prevState['leftScore'] + 1 }))}>
                    <Text>+</Text>
                  </TouchableOpacity>
                </View>
            </View>
            <View style={rightContainer}>
                <Text style={scoreText}>{rightScore}</Text>
                <View style={scoreButtonContainer}>
                  <TouchableOpacity style={addButton} onPress={() => this.setState(prevState => ({ rightScore: prevState['rightScore'] - 1 }))}>
                    <Text>-</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={addButton} onPress={() => this.setState(prevState => ({ rightScore: prevState['rightScore'] + 1 }))}>
                    <Text>+</Text>
                  </TouchableOpacity>
                </View>
            </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    scoreContainer: {
      flexDirection: "row",
      borderWidth: 1,
      borderColor: 'black'
    },
    leftContainer: {
      backgroundColor: "white",
      borderColor: 'black',
      borderWidth: 1,
      width: width/2,
      height: height/2,
      justifyContent: 'center',
      alignItems: 'center'
    },
    rightContainer: {
      backgroundColor: "white",
      borderColor: 'black',
      borderWidth: 1,
      width: width/2,
      height: height/2,
      justifyContent: 'center',
      alignItems: 'center'
    },
    scoreText: {
      fontSize: 40
    },
    scoreButtonContainer: {
      flexDirection: 'row',
      borderWidth: 1,
      borderColor: 'black'
    },
    addButton: {
      borderWidth: 1,
      borderColor: "black",
      width: 20,
      height: 20,
      justifyContent: 'center',
      alignItems: 'center'
    }
})
export default ScoreboardScreen;