import { createStackNavigator } from 'react-navigation'
import LeaderboardScreen from './LeaderboardScreen';

const LeaderboardStack = createStackNavigator({
  LeaderboardHome: LeaderboardScreen
},
{
  initialRouteName: 'LeaderboardHome'
});

export default LeaderboardStack;