import { createStackNavigator } from 'react-navigation'
import ScoreboardScreen from './ScoreboardScreen';
import ScoreboardPlayerPickerScreen from './ScoreboardPlayerPickerScreen';

const ScoreboardStack = createStackNavigator({
  ScoreboardHome: ScoreboardPlayerPickerScreen,
  ScoreboardScreen: ScoreboardScreen
},
{
  initialRouteName: 'ScoreboardHome'
});

export default ScoreboardStack;