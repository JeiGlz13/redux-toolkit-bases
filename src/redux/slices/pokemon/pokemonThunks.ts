import { getPokemonPaginated } from "../../../services/pokemonService";
import { setPokemon, startLoadingPokemon } from "./pokemonSlice"

export const getPokemon = (page: number = 0) => {
  return async (dispatch: any, getState: any) => {
    dispatch(startLoadingPokemon());

    const pokemonResponse = await getPokemonPaginated(page);
    const pokemonData = await pokemonResponse.data.results;

    dispatch(setPokemon({ page, pokemon: pokemonData }));
  }
}