import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, TextInput } from 'react-native'
import Button from '../Utilities/Button';
import gql from "graphql-tag";
import { Mutation } from 'react-apollo';
import Autocomplete from 'react-native-autocomplete-input';
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
const SUBMIT_GAME = gql`
  mutation submitGame($game: SubmitGameInput) {
    prepareToAddToGame(game: $game) {
      type team1Score team2Score winner 
    }
  }
`

class ScoreboardScreen extends Component {
  state = {
    leftScore: 0,
    rightScore: 0,
    player1: this.props.navigation.getParam('player1', "Player 1 Not Found"),
    player2: this.props.navigation.getParam('player2', "Player 2 Not Found")
  }
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Scoreboard"
    };
  };

  onSubmitGame = async (prepareToAddToGame) => {
  //   editEmployee({ variables: { 
  //     id: this.props.editEmployee.id, 
  //     edit: {
  //             ...this.state,
  //             age: parseInt(this.state.age, 10),
  //             projectsIDs: this.state.projectsIDs.split(", ")
  //         } 
  //     }
  // })
  let response = await prepareToAddToGame({
    variables: {
      game: {
        player1 : "William Yang",
        player2 : "Pat Truong",
        player3 : null,
        player4 : null,
        // player3 : "5bb9ceb4c21fc87e20f0aaf8",
        // player4 : "5bb9ceb5c21fc87e20f0aaf9",
        // type: "Doubles",
        type: "Singles",
        team1Score: 10,
        team2Score: 21,
        // winner: ["5bb828842a4f297c17986d47", "5bb9ceb3c21fc87e20f0aaf7" ],
        winner: ["Pat Truong"],
        specialNotes: "Testing this"
      }
    }
  })
    // console.log(response);
  }
  render() {
    let { leftScore, rightScore, player1 } = this.state;
    let { titleText, scoreOptionContainer, scoreContainer, leftContainer, rightContainer, 
          leftOptionContainer, rightOptionContainer, scoreText, addButton, scoreButtonContainer, submitButton } = styles;
    return (
      <View style={{ flex: 1, alignItems: "center" }}>
        {/* <Text style={titleText}>Scoreboard</Text>  */}
        <View style={scoreOptionContainer}>
          <View style={leftOptionContainer}>
            <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              onChangeText={(player1) => this.setState({player1})}
              value={this.state.player1}
            />
          </View>
          <View style={rightOptionContainer}>
          <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              onChangeText={(player2) => this.setState({player2})}
              value={this.state.player2}
            />
          </View>
        </View>
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
          <Mutation mutation={SUBMIT_GAME}>
            {prepareToAddToGame => <Button text={"Submit"} style={submitButton} onPress={() =>this.onSubmitGame(prepareToAddToGame)}/>}
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
    scoreOptionContainer: {
      flexDirection: 'row',
      borderWidth: 1,
      borderColor: 'black',
      width: width,
      justifyContent: "space-evenly"
    },
    leftOptionContainer: {

    },
    rightOptionContainer: {

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