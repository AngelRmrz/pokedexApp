import { View, Text } from 'react-native'
import React from 'react'
import { useAllPokemon } from '../hooks/useAllPokemon'
import PokemonList from '../components/PokemonList'

const Pokedex = () => {

  const { listPokemon, loading, error } = useAllPokemon()

  if (loading) return <Text>Loading...</Text>

  return (
    <View>
        <PokemonList listPokemon={listPokemon}/>
    </View>
  )
}

export default Pokedex