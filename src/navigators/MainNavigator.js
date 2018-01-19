import React from 'react'
import { DrawerNavigator } from 'react-navigation'

import * as colors from '../constants/colors';

import HomeContainer from '../containers/Home/HomeContainer';
import PromosContainer from '../containers/Promos/PromosContainer';
import RoadsideAssistanceContainer from '../containers/RoadsideAssistance/RoadsideAssistanceContainer';

const navigatorOptions = {
  navigationOptions: {
  },
};

export default (MainNavigator = DrawerNavigator(
  {
    Home: {
      screen: HomeContainer,
      navigationOptions: {
        drawerLabel: 'Home',
      },
    },
    Promos: {
      path: 'promos',
      screen: PromosContainer,
      navigationOptions: {
        drawerLabel: 'Promos and Deals',
      },
    },
    RoadsideAssistance: {
      path: 'roadside-assistance',
      screen: RoadsideAssistanceContainer,
      navigationOptions: {
        drawerLabel: 'Roadside Assistance',
      },
    },
  },
  navigatorOptions
));