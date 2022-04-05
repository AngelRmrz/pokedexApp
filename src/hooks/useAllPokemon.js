import { useQuery } from '@apollo/client'
import { useState, useEffect } from 'react'
import { GET_ALL_POKEMON } from '../graphql/queries'

export const useAllPokemon = () => {
    const [listPokemon, setListPokemon] = useState([])
    const {data, loading, error } = useQuery(GET_ALL_POKEMON)

    useEffect(() => {
        if(data){
            setListPokemon(data.pokemon_v2_pokemon)
        }
    }, [data])

    return {
        listPokemon,
        loading,
        error
    }
}
