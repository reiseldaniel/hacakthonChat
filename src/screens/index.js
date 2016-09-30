import {Navigation} from 'react-native-navigation';

import MainScreen from './MainScreen';


import LoginScreen from './LoginScreen';
import FirstTabScreen from './FirstTabScreen';
import SecondTabScreen from './SecondTabScreen';
import PushedScreen from './PushedScreen';
import ListScreen from './ListScreen';
import SideMenu from './SideMenu';
import BottomTabsSideMenu from './BottomTabsSideMenu';
import TopTabsScreen from './TopTabsScreen';
import Campaign from './Campaign';


// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('Main', () => MainScreen);
  Navigation.registerComponent('Campaign', () => Campaign);
  Navigation.registerComponent('Login', () => LoginScreen);
}


