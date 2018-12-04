import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  createSwitchNavigator,
  createStackNavigator,
  createDrawerNavigator,
  createBottomTabNavigator
} from 'react-navigation';
import LandingScreen from './screens/LandingScreen';
import WelcomeScreen from './screens/Auth/WelcomeScreen';
import RegisterScreen from './screens/Auth/RegisterScreen';
import LoginScreen from './screens/Auth/LoginScreen';
import HomeScreen from './screens/App/HomeScreen';
import DiscoverScreen from './screens/App/DiscoverScreen';
import FollowingScreen from './screens/App/FollowingScreen';
import NotificationScreen from './screens/App/NotificationScreen';
import ProfileScreen from './screens/App/ProfileScreen';
import SocialScreen from './screens/App/SocialScreen';
import ResultScreen from './screens/App/ResultScreen';
import ScheduleScreen from './screens/App/ScheduleScreen';
import AboutScreen from './screens/App/AboutScreen';
import NotificationIcon from './components/Notification/NotificationIcon';

const AppTabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => (
        <Icon name="ios-home" color={tintColor} size={24}/>
      )
    }
  },
  Discover: {
    screen: DiscoverScreen,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => (
        <Icon name="ios-search" color={tintColor} size={24}/>
      )
    }
  },
  Following: {
    screen: FollowingScreen,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => (
        <Icon name="ios-star" color={tintColor} size={24}/>
      )
    }
  },
  Notifications: {
    screen: NotificationScreen,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => (
        <View>
          <Icon name="ios-notifications-outline" color={tintColor} size={24}/>
          <NotificationIcon/>
        </View>
      )
    }
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => (
        <Icon name="ios-person" color={tintColor} size={24}/>
      )
    }
  }
},{
  tabBarOptions: {
    activeTintColor: 'black',
    inactiveTintColor: '#acacac',
    labelStyle: {
      fontSize: 8
    }
  }
});

const AppDrawerNavigator = createDrawerNavigator({
  Homepage: {
    screen: AppTabNavigator,
    navigationOptions: {
      drawerLabel: 'Home',
      drawerIcon: ({tintColor}) => (
        <Icon name="ios-home" color={tintColor} size={24}/>
      )
    }
  },
  Social: {
    screen: SocialScreen,
    navigationOptions: {
      drawerIcon: ({tintColor}) => (
        <Icon name="ios-person" color={tintColor} size={24}/>
      )
    }
  },
  Results: {
    screen: ResultScreen,
    navigationOptions: {
      drawerLabel: 'Results',
      drawerIcon: ({tintColor}) => (
        <Icon name="ios-stats" color={tintColor} size={24}/>
      )
    }
  },
  Schedule: {
    screen: ScheduleScreen,
    navigationOptions: {
      drawerLabel: 'Schedule',
      drawerIcon: ({tintColor}) => (
        <Icon name="ios-calendar" color={tintColor} size={24}/>
      )
    }
  },
  About: {
    screen: AboutScreen,
    navigationOptions: {
      drawerLabel: 'About',
      drawerIcon: ({tintColor}) => (
        <Icon name="ios-information-circle" color={tintColor} size={24}/>
      )
    }
  }
},{
  contentOptions: {
    activeTintColor: 'black',
    inactiveTintColor: '#acacac',
    labelStyle: {
      fontSize: 12
    }
  }
});

const AuthStackNavigator = createStackNavigator({
  Welcome: WelcomeScreen,
  Register: RegisterScreen,
  Login: LoginScreen
});

export default createSwitchNavigator({
  AuthLoading: LandingScreen,
  Auth: AuthStackNavigator,
  App: AppDrawerNavigator
});
