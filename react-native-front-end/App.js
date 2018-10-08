import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from 'react-navigation';

import HomeStack from './components/Home/HomeStack'
import LeaderboardStack from './components/Leaderboard/LeaderboardStack'
import ProfileStack from './components/Profile/ProfileStack'
import ScoreboardStack from './components/Scoreboard/ScoreboardStack'
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "http://localhost:4000/"
});

const TabNavigator = createBottomTabNavigator(
  {
      // Home: HomeStack,
      Home: ProfileStack,
      Scoreboard: ScoreboardStack,
      Leaderboard: LeaderboardStack,
      Profile: ProfileStack
    
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home${focused ? '' : '-outline'}`;
          // iconName = `ios-home`;
        } else if (routeName === 'Scoreboard') {
          iconName = `md-tennisball${focused ? '' : ''}`;
          // iconName = `ios-add-circle${focused ? '' : '-outline'}`;

        } else if (routeName === 'Leaderboard') {
          // iconName = `group${focused ? '' : '-outline'}`;
          iconName = `ios-cloud${focused ? '' : '-outline'}`;

        } else if (routeName === 'Profile') {
          iconName = `ios-person`;
        } 

        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);

export default App = () => (
  <ApolloProvider client={client}>
   <TabNavigator />
   </ApolloProvider>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
