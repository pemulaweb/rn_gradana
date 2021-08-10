import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Import Screens
import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerTitle: 'Home'}}
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
