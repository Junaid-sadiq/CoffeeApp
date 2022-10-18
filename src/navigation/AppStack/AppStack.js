import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../../screens/App/HomeScreen';
import ProductDetailsScreen from '../../screens/App/ProductDetailsScreen';
import ProfileScreen from '../../screens/App/ProfileScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Feather, FontAwesome5 } from '@expo/vector-icons';
import SettingsScreen from '../../screens/App/SettingsScreen';
import colors from '../../config/colors';
import BasketScreen from '../../screens/App/BasketScreen';
import FavoritesScreen from '../../screens/App/FavoritesScreen';
import SPACING from '../../config/SPACING';

const Tab = createBottomTabNavigator();
export default function AppStack() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          elevation: SPACING * 2,
          /*   height: '8%', */
          opacity: 0.9,
          backgroundColor: colors['dark'],
          borderTopWidth: 0,
          /*   borderTopRightRadius: SPACING * 2,
          borderTopLeftRadius: SPACING * 2, */
        },
        tabBarInactiveTintColor: colors['white-smoke'],
        tabBarActiveTintColor: colors.primary,
      }}
    >
      <Tab.Screen
        name='Tab_Home'
        component={HomeStack}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name='home' size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Tab_Basket'
        component={BasketScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name='coffee' size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Tab_Favorites'
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name='heart' size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Tab_Settings'
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name='setting' size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();
function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Product' component={ProductDetailsScreen} />
      <Stack.Screen name='Profile' component={ProfileScreen} />
    </Stack.Navigator>
  );
}
