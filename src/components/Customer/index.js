import React from 'react';
import { DrawerNavigator } from 'react-navigation';

import CustomerHomeScreen from './CustomerHomeScreen.js';
import SideBar from '../common/SideBar.js';

const CustomerHomeScreenRouter = DrawerNavigator(
  {
    Menu: { screen: CustomerHomeScreen }
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default CustomerHomeScreenRouter;
