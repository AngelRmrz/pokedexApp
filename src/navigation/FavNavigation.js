import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import Favorite from '../screens/Favorite';

const Stack = createStackNavigator();

const FavNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false
      }}
    >
        <Stack.Screen name="Favorite" component={Favorite}/>
    </Stack.Navigator>
  )
}

export default FavNavigation