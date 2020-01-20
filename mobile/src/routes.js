import { createAppContainer } from 'react-navigation';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import Main from '~/pages/Main';
import Profile from '~/pages/Profile';

const Routes = (userLogged = false) =>
  createAppContainer(
    createStackNavigator(
      {
        Main: {
          screen: Main,
          navigationOptions: {
            title: 'DevRadar',
          },
        },
        Profile: {
          screen: Profile,
          navigationOptions: {
            title: 'Perfil no GitHub',
          },
        },
      },
      {
        initialRouteName: userLogged ? 'Main' : 'Main',
        defaultNavigationOptions: {
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#7D40E7',
          },
        },
      }
    )
  );

export default Routes;
