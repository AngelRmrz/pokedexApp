import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Account from '../screens/Account'

const Stack = createStackNavigator()

const AccountNavigation = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="AccountScreen" component={Account} options={{headerShown:false}}/>
      </Stack.Navigator>
    )
}

export default AccountNavigation