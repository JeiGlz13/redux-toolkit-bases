import axios from 'axios';

const pokemonInstance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});

export const getPokemonPaginated = (page: number) => {
  return pokemonInstance.get(`pokemon?limit=10&offset=${page * 10}`);
}