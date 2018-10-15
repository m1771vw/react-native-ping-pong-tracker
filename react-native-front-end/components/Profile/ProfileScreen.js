import React, { Component } from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native'
import gql from "graphql-tag";
import { Query } from 'react-apollo';

const PLAYER_QUERY = gql`
  {
    players {
      id name team 
      singleWins singleLosses singlesElo doublesWins doublesLosses doublesElo 
      description weaknesses strengths style hand img_url   
    }
  }
`

class ProfileScreen extends Component {
  state = {}

//   selectGroup = (gameTitle, img_url) => () => {
//     this.props.navigation.navigate('Game', { title: gameTitle, img_url });
//   }
renderAllPlayers = ({item}) => (
  <View style={styles.profileCell}>
    <Text>{item.name}</Text>
    <Text>{item.singleWins}W - {item.singleLosses}L</Text>
    <Text>ELO: {item.singlesElo}</Text>
  </View>
)
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>Welcome ot Profile screen</Text> 
        <Query query={PLAYER_QUERY}>
          { ({loading, error, data}) => {
            if (loading) {
              return <Text>LOADING...</Text>
            }
            {/* console.log(data); */}
            return (
              <FlatList
                data={data.players}
                keyExtractor={(item, index) => index + " " + item.id}
                renderItem={this.renderAllPlayers}
              />
            )

          }

          }
        </Query>
      </View>
    );
  }
}

const styles= StyleSheet.create({
  profileContainer:{
    flex: 1
  },
  profileCell: {
    borderWidth: 1,
    borderColor: 'black',
    // height: 30,
    margin: 10
  }

})
export default ProfileScreen;