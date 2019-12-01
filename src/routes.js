import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import User from './pages/User';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const Routes = createAppContainer(
  createSwitchNavigator({
    SignIn,
    SignUp,
  })

  // createStackNavigator(
  //   {
  //     Main,
  //     User,
  //   },
  //   {
  //     headerLayoutPreset: 'center',
  //     headerBackTitleVisible: false,
  //     defaultNavigationOptions: {
  //       headerStyle: {
  //         backgroundColor: '#7159c1',
  //       },
  //       headerTintColor: '#FFF',
  //     },
  //   }
  // )
);

export default Routes;
