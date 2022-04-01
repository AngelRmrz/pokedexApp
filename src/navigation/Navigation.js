import React from 'react'
import { Image} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Account from '../screens/Account';
import Pokedex from '../screens/Pokedex';
import FavNavigation from './FavNavigation';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Account" component={Account} options={{
            tabBarLabel: 'Cuenta',
            tabBarIcon: ({color, size}) => (<Ionicons name="ios-person" size={size} color={color} />)
        }}/>
        <Tab.Screen name="Pokedex" component={Pokedex} options={{
            tabBarLabel: '',
            tabBarIcon: () => (renderPokeball())
        }}/>
        <Tab.Screen name="Favoritos" component={FavNavigation} options={{
            tabBarLabel: 'Favoritos',
            tabBarIcon: ({color, size}) => (<Ionicons name="ios-heart" size={size} color={color} />)
        }}/>
    </Tab.Navigator>
  )
}

const renderPokeball = () => {
    return(
        <Image 
            source={require('../../assets/pokeball.png')}
            style={{width: 70, height: 70}}
        />
    )
}

export default Navigation