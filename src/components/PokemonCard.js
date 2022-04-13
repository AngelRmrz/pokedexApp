import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { useInfoPokemonByName } from '../hooks/useInfoPokemonByName'
import { useColorByPokemonType } from '../hooks/useColorByPokemonType'
import { useNavigation } from '@react-navigation/native'

const PokemonCard = ({pokemon}) => {

    const navigation = useNavigation()
    const { pokemonInfo, loading, error } = useInfoPokemonByName(pokemon.name)
    const pokemonColor = useColorByPokemonType(pokemonInfo)
    const bgStyles = {
        backgroundColor: pokemonColor !== undefined ? pokemonColor : '#fff',
        ...styles.container
    }
    const goToPokemonDetail = () => {
        // console.log(pokemon)
        navigation.navigate('Pokemon',{
            pokemon: pokemon.name
        })
    }

    if(loading) return <Text>Loading...</Text>
    if(error) return <Text>Error...</Text>

    return (
        <TouchableWithoutFeedback onPress={goToPokemonDetail}>
            <View style={bgStyles}>
                <View style={styles.card_template}>
                    <Image source={{uri: pokemon.image}} style={styles.card_image}/>
                </View>
                <View style={styles.text_container}>
                    <Text style={styles.card_title}>{pokemon.name.toUpperCase()}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        margin: 5,
        borderRadius: 15,
      },
      card_template:{
        width: 132,
        height: 132,
        borderRadius: 50,
        shadowColor: "#b3b3b3",
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        // },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      card_image: {
        width: 150,
        height: 150,
        borderRadius : 10
      },
      text_container:{
        position: "absolute",
        width: '100%',
        height: 30,
        bottom:0,
        padding: 5,
        backgroundColor: "rgba(0,0,0, 0.3)",
        borderBottomLeftRadius : 10,
        borderBottomRightRadius: 10
      },
      card_title: {
        color: "white",
        textAlign: "center",
        fontWeight: "bold",
    }
})

export default PokemonCard