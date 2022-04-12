import { POKEMON_TYPE_COLORS } from "../utils"

export const useColorByPokemonType = (pokemonTypes) => {
    return POKEMON_TYPE_COLORS?.[pokemonTypes?.types?.[0]?.type?.name]
}
