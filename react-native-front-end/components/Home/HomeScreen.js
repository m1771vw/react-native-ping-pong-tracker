import React, { Component } from 'react';
import { Text, View, FlatList, StyleSheet} from 'react-native'
import gql from "graphql-tag";
import { Query } from 'react-apollo';

const GAMES_QUERY = gql`
  {
    games {
      id team1Score team2Score winner {
        name
      }   
    }
  }
`

class HomePage extends Component {
  state = {}

//   selectGroup = (gameTitle, img_url) => () => {
//     this.props.navigation.navigate('Game', { title: gameTitle, img_url });
//   }
  renderMatchHistory = ({item}) => (
    <View style={styles.matchHistoryCell}>
      <Text>{item.team1Score}</Text>
    </View>
  )
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>Welcome ot Home Page</Text> 
        <Text>Match History</Text>
        <Query query={GAMES_QUERY}>
          { ({loading, error, data}) => {
            if (loading) {
              return <Text>LOADING...</Text>
            }
            console.log(data);
            return (
              <FlatList
                data={data.games}
                keyExtractor={(item, index) => index + " " + item.id}
                renderItem={this.renderMatchHistory}
              />
            )

          }

          }
        </Query>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  matchHistoryContainer: {
    flex: 1
  },
  matchHistoryCell: {
    borderWidth: 1,
    borderColor: 'black',
    height: 30,
    margin: 10
  }
})
export default HomePage;