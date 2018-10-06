import { createStackNavigator } from 'react-navigation'
import ScoreboardScreen from './ScoreboardScreen';

const ScoreboardStack = createStackNavigator({
  ScoreboardHome: ScoreboardScreen
},
{
  initialRouteName: 'ScoreboardHome'
});

export default ScoreboardStack;