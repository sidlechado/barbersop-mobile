import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from '~/pages/SignIn';
import SignUp from './pages/SignUp';

import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import About from './pages/About';

import Products from './pages/Products';
import NewProduct from './pages/NewProduct';
import UpdateProduct from './pages/UpdateProduct';

import SelectProvider from './pages/NewAppointment/SelectProvider';
import SelectDateTime from './pages/NewAppointment/SelectDateTime';
import ConfirmAppointment from './pages/NewAppointment/ConfirmAppointment';

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Authentication: createSwitchNavigator({
          SignIn,
          SignUp,
        }),
        App: createBottomTabNavigator(
          {
            Dashboard,
            NewAppointment: {
              screen: createStackNavigator(
                { SelectProvider, SelectDateTime, ConfirmAppointment },
                {
                  defaultNavigationOptions: {
                    headerTransparent: true,
                    headerTintColor: '#fff',
                    headerLeftContainerStyle: { marginLeft: 20 },
                  },
                }
              ),
              navigationOptions: {
                tabBarVisible: false,
                tabBarLabel: 'New Appointment',
                tabBarIcon: (
                  <Icon
                    name="add-circle-outline"
                    size={20}
                    color="rgba(255, 255, 255, 0.6)"
                  />
                ),
              },
            },
            Products: {
              screen: createStackNavigator(
                { Products, NewProduct, UpdateProduct },
                {
                  defaultNavigationOptions: {
                    headerTransparent: true,
                    headerTintColor: '#fff',
                    headerLeftContainerStyle: { marginLeft: 20 },
                  },
                }
              ),
              navigationOptions: {
                tabBarVisible: false,
                tabBarLabel: 'Products',
                tabBarIcon: (
                  <Icon
                    name="redeem"
                    size={20}
                    color="rgba(255, 255, 255, 0.6)"
                  />
                ),
              },
            },
            Profile,
            About,
          },
          {
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#fff',
              inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
              style: { backgroundColor: '#8c1007' },
            },
          }
        ),
      },
      { initialRouteName: isSigned ? 'App' : 'Authentication' }
    )
  );
