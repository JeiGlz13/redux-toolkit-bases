import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'

export interface pokemonState {
  pokemon: [],
  page: number,
  isLoading?: false,
}

const initialState = {
  pokemon: [],
  page: 0,
  isLoading: false,
}

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
   startLoadingPokemon: (state, /* action: PayloadAction<number> */ ) => {
     state.isLoading = true;
   },
   setPokemon: (state, action: PayloadAction<pokemonState> ) => {
    state.page = action.payload.page;
    state.pokemon = action.payload.pokemon;
    state.isLoading = false;
   },
  }
});
export const { startLoadingPokemon, setPokemon } = pokemonSlice.actions;