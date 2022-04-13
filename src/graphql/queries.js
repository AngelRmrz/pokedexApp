import { gql } from "@apollo/client";

export const GET_ALL_POKEMON = gql`
    query getAllPokemon {
        pokemons( 
            limit: 30
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
export const GET_POKEMON_COLOR_BY_NAME = gql`
    query getPokemonInfoByName($name: String!) {
        pokemon(name: $name) {
            types{
                type{
                    name
                }
            }
        }
    }
`

export const GET_POKEMON_INFO_BY_NAME = gql`
    query getPokemonInfoByName($name: String!) {
        pokemon(name: $name) {
            types{
                type{
                    name
                }
            }
        }
    }
`