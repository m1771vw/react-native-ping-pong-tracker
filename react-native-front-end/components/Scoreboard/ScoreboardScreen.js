import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import Button from '../Utilities/Button';
import gql from "graphql-tag";
import { Mutation } from 'react-apollo';
const { width, height } = Dimensions.get("screen");

const ADD_GAME = gql`
  mutation addGame($game: GameInput) {
    addGame(game: $game) {
      type team1Score team2Score winner {
        name
      }
    }
  }
`

class ScoreboardScreen extends Component {
  state = {
    leftScore: 0,
    rightScore: 0
  }
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Scoreboard"
    };
  };
  submitGame = async (addGame) => {
  //   editEmployee({ variables: { 
  //     id: this.props.editEmployee.id, 
  //     edit: {
  //             ...this.state,
  //             age: parseInt(this.state.age, 10),
  //             projectsIDs: this.state.projectsIDs.split(", ")
  //         } 
  //     }
  // })
  let response = await addGame({
    variables: {
      game: {
        player1 : "5bb828842a4f297c17986d47",
        player2 : "5bb9ceb3c21fc87e20f0aaf7",
        player3 : "5bb9ceb4c21fc87e20f0aaf8",
        player4 : "5bb9ceb5c21fc87e20f0aaf9",
        type: "Doubles",
        team1Score: 10,
        team2Score: 21,
        winner: ["5bb82d8e9633d104992d9f92", "5bb82d8f9633d104992d9f93" ],
        specialNotes: "Testing this"
      }
    }
  })
    console.log(response);
  }
  render() {
    let { leftScore, rightScore } = this.state;
    let { titleText, scoreContainer, leftContainer, rightContainer, scoreText, addButton, scoreButtonContainer, submitButton } = styles;
    return (
      <View style={{ flex: 1, alignItems: "center" }}>
        {/* <Text style={titleText}>Scoreboard</Text>  */}
        <View style={scoreContainer}>
            <View style={leftContainer}>
                <Text style={scoreText}>{leftScore}</Text>
                <View style={scoreButtonContainer}>
                  <Button text={"-"} style={addButton} onPress={() => this.setState(prevState => ({ leftScore:prevState['leftScore'] - 1}))}/>
                  <Button text={"+"} style={addButton} onPress={() => this.setState(prevState => ({ leftScore:prevState['leftScore'] + 1}))}/>
                </View>
            </View>
            <View style={rightContainer}>
                <Text style={scoreText}>{rightScore}</Text>
                <View style={scoreButtonContainer}>                  
                  <Button text={"-"} style={addButton} onPress={() => this.setState(prevState => ({ rightScore:prevState['rightScore'] - 1}))}/>
                  <Button text={"+"} style={addButton} onPress={() => this.setState(prevState => ({ rightScore:prevState['rightScore'] + 1}))}/>
                </View>
            </View>
        </View>
          <Mutation mutation={ADD_GAME}>
            {addGame => <Button text={"Submit"} style={submitButton} onPress={() =>this.submitGame(addGame)}/>}
          </Mutation>
            {/* <Button text={"Submit"} style={submitButton} onPress={this.submitGame}/> */}
      </View>
    );
  }
}
const styles = StyleSheet.create({
    titleText: {
      fontSize: 40
    },
    scoreContainer: {
      flexDirection: "row",
      borderWidth: 1,
      borderColor: 'black',
      marginTop: 50,
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
    },
    addButton: {
      borderWidth: 2,
      borderColor: "black",
      borderRadius: 5,
      width: 40,
      height: 40,
      margin: 10,
      justifyContent: 'center',
      alignItems: 'center'
    },
    submitButton: {
      borderWidth: 2,
      borderColor: "black",
      borderRadius: 5,
      width: 80,
      height: 40,
      margin: 10,
      justifyContent: 'center',
      alignItems: 'center'
    }
})
export default ScoreboardScreen;