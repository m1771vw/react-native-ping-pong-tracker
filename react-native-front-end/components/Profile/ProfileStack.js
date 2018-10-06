import { createStackNavigator } from 'react-navigation'
import ProfileScreen from './ProfileScreen';

const ProfileStack = createStackNavigator({
  ProfileHome: ProfileScreen
},
{
  initialRouteName: 'ProfileHome'
});

export default ProfileStack;