import { createStackNavigator } from 'react-navigation'
import HomeScreen from './HomeScreen'
// import GameScreen from './GameScreen'

const HomeStack = createStackNavigator({
  HomePage: HomeScreen,
//   Game: GameScreen
},
{
  initialRouteName: 'HomePage'
});

export default HomeStack;