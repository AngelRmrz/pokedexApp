import { StyleSheet, ActivityIndicator, FlatList } from 'react-native'
import React from 'react'
import PokemonCard from './PokemonCard'

const PokemonList = ({listPokemon}) => {
    
    // const loadMore = () => {
    //     console.log('load more')
    // }

    return (
        <FlatList
            data={listPokemon}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => <PokemonCard pokemon={item}/>}
            contentContainerStyle={styles.flatListContainer}
            // onEndReached={loadMore}
            // onEndReachedThreshold={0.1}
            // ListFooterComponent={() => <ActivityIndicator size="large" color="#AEAEAE" />}
        />
    )
}

const styles = StyleSheet.create({
    flatListContainer: {
        paddingHorizontal: 5,
    },
})

export default PokemonList