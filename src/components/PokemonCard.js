import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'

const PokemonCard = ({pokemon}) => {

    const goToPokemonDetail = () => {
        console.log('Go to pokemon detail '+pokemon.name)
    }

    return (
        <TouchableWithoutFeedback onPress={goToPokemonDetail}>
            <Text>{pokemon.name}                </Text>
        </TouchableWithoutFeedback>
    )
}

export default PokemonCard