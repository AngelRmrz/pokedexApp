import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import Favorite from '../screens/Favorite';

const Stack = createStackNavigator();

const FavNavigation = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="FavoriteScreen" component={Favorite} options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}

export default FavNavigation