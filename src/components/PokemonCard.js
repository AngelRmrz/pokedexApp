import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'

const PokemonCard = ({pokemon}) => {

    const goToPokemonDetail = () => {
        console.log('Go to pokemon detail '+pokemon.name)
    }

    return (
        <TouchableWithoutFeedback onPress={goToPokemonDetail}>
            <View style={styles.card}>
                <Text>{pokemon.name}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        height: 150,
    }
})

export default PokemonCard