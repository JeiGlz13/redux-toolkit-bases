import { configureStore } from '@reduxjs/toolkit';
import { toDoApi } from '../services/todo/toDoApi';
import { counterSlice } from '../slices/counter/counterSlice';
import { pokemonSlice } from '../slices/pokemon/pokemonSlice';

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemon: pokemonSlice.reducer,

    [toDoApi.reducerPath]: toDoApi.reducer, 
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(toDoApi.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch