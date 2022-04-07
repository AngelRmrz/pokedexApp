import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'

const PokemonCard = ({pokemon}) => {

    const goToPokemonDetail = () => {
        console.log('Go to pokemon detail '+pokemon.name)
    }

    return (
        <TouchableWithoutFeedback onPress={goToPokemonDetail}>
            <View style={styles.container}>
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
      },
      card_template:{
        width: 150,
        height: 150,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
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
        width: 150,
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
      }
})

export default PokemonCard