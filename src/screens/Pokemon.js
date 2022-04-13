import { View, Text } from 'react-native'
import React from 'react'

const Pokemon = (props) => {
  const {navigation, route: {params}} = props

  console.log(params.pokemon)

  return (
    <View>
      <Text>Pokemon</Text>
    </View>
  )
}

export default Pokemon