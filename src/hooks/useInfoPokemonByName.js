import { useQuery } from '@apollo/client';
import { useState, useEffect } from 'react';
import { GET_POKEMON_COLOR_BY_NAME } from '../graphql/queries';

export const useInfoPokemonByName = (pokemonName) => {
    const [pokemonInfo, setPokemonInfo] = useState({})
    const {data, loading ,error } = useQuery(GET_POKEMON_COLOR_BY_NAME,{
        variables:{
            name: pokemonName
        },
        skip: !pokemonName,
    })

    useEffect(() => {
      if(data){
          setPokemonInfo(data.pokemon)
      }
    }, [data])

    return {pokemonInfo, loading, error}
    
}