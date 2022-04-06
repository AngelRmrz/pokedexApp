import { StyleSheet, Text, FlatList } from 'react-native'
import React from 'react'
import PokemonCard from './PokemonCard'

const PokemonList = ({listPokemon}) => {
    return (
        <FlatList
            data={listPokemon}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => <PokemonCard pokemon={item}/>}
            contentContainerStyle={styles.flatListContainer}
        />
    )
}

const styles = StyleSheet.create({
    flatListContainer: {
        paddingHorizontal: 5,
    },
})

export default PokemonList