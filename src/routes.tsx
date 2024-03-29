import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Import Screens
import HomeScreen from './screens/HomeScreen';
import CameraScreen from './screens/CameraScreen';
import LocationScreen from './screens/LocationScreen';
import FormScreen from './screens/FormScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerTitle: 'HOME | Get Random Jokes',
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="CameraScreen"
        component={CameraScreen}
        options={{
          headerTitle: 'Camera',
          tabBarLabel: 'Camera',
          tabBarIcon: ({color, size}) => (
            <Icon name="camera" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="LocationScreen"
        component={LocationScreen}
        options={{
          headerTitle: 'Location',
          tabBarLabel: 'Location',
          tabBarIcon: ({color, size}) => (
            <Icon name="google-maps" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="FormScreen"
        component={FormScreen}
        options={{
          headerTitle: 'Form Wilayah',
          tabBarLabel: 'Form Wilayah',
          tabBarIcon: ({color, size}) => (
            <Icon name="form-select" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="BottomTabs"
          component={Tabs}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
