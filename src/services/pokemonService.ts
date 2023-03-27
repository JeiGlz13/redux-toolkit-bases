import axios from 'axios';

const baseURL = 'https://pokeapi.co/api/v2/';

export const getPokemonPaginated = (page: number) => {
  return axios.get(baseURL + `pokemon?limit=10&offset=${page * 10}`);
}