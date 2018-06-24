import React from 'react';
import { DrawerNavigator } from 'react-navigation';

import BusinessOwnerHomeScreen from './BusinessOwnerHomeScreen.js';
import SideBar from '../common/SideBar.js';

const BusinessOwnerHomeScreenRouter = DrawerNavigator(
  {
    Menu: { screen: BusinessOwnerHomeScreen }
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default BusinessOwnerHomeScreenRouter;
