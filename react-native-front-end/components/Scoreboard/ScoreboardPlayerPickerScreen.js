import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList, Dimensions } from 'react-native'
import Button from '../Utilities/Button';
import gql from "graphql-tag";
import { Query } from 'react-apollo';

const PLAYERS_QUERY = gql`
  {
    players {
        id, name
    }
  }
`


class ScoreboardPlayerPickerScreen extends Component {

    renderPlayerList = ({item}) => {
        let { id, name } = item;
        let { playerList } = styles;
        console.log("Item: ", item);
        return (
          <View style={playerList}>
            <Text>Name: {name}</Text>
          </View>
        )
      }
    submitPlayers = () => {
        let players = { player1: "William", player2: "Pat" };
        this.props.navigation.navigate('ScoreboardScreen', { title: 'Scoreboard', player1: "William", player2: "Pat" });

    }
    render() {
        let { submitButton } = styles;
        return (
            <View>
               <Text>Player Picker Screen</Text> 
               <Query query={PLAYERS_QUERY}>
                { ({loading, error, data}) => {
                        if (loading) {
                        return <Text>LOADING...</Text>
                        }
                        console.log("Players: ", data);
                        return (
                        <View>
                            <FlatList
                            data={data.players}
                            keyExtractor={(item, index) => index + " " + item.id}
                            renderItem={this.renderPlayerList}
                            />
                             <FlatList
                            data={data.players}
                            keyExtractor={(item, index) => index + " " + item.id}
                            renderItem={this.renderPlayerList}
                            />
                            <Button text={"Submit"} style={submitButton} onPress={this.submitPlayers}/>
                        </View>

                        )
                    }
                }
                </Query>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    playerList: {

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

export default ScoreboardPlayerPickerScreen;