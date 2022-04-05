import { View, Text } from 'react-native'
import React from 'react'
import { useAllPokemon } from '../hooks/useAllPokemon'

const Pokedex = () => {

  const { listPokemon, loading, error } = useAllPokemon()

  console.log(listPokemon)

  return (
    <View>
      <Text>Pokedex</Text>
    </View>
  )
}

export default Pokedex