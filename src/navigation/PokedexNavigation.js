import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Pokedex from '../screens/Pokedex'
import Pokemon from '../screens/Pokemon'

const Stack = createStackNavigator()

const PokedexNavigation = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name="PokedexScreen" component={Pokedex} options={{headerShown: false}}/>
            <Stack.Screen name="Pokemon" component={Pokemon} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}

export default PokedexNavigation