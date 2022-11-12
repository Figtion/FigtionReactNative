import {useState, useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {WebView} from 'react-native-webview';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import CollectionView from './CollectionView';
import AuthenticationView from './AuthenticationView';
import SettingsView from './SettingsView';

const Tab = createBottomTabNavigator();

function AutenticatedTabView() {
  return (
    <Tab.Navigator
      initialRouteName="Authentication"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: 'black',
        },
      }}
      barStyle={{backgroundColor: 'black'}}>
      <Tab.Screen
        name="Collection"
        component={CollectionView}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="box" size={25} color="white" />
          ),
        }}
      />
      <Tab.Screen
        name="Authentication"
        component={AuthenticationView}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="shield" size={25} color="white" />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsView}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="share-2" size={25} color="white" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default AutenticatedTabView;
