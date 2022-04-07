import { gql } from "@apollo/client";

export const GET_ALL_POKEMON = gql`
    query getAllPokemon {
        pokemons( 
            limit: 10
            offset: 0
        ){
            results{
                id
                name
                image
            }
        }
    }
`