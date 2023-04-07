import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemon } from '../redux/slices/pokemon/pokemonThunks'
import type { RootState } from '../redux/store/store'

export const PokemonScreen = (): JSX.Element => {
  const dispatch = useDispatch()
  const { pokemon, isLoading, page } = useSelector((state: RootState) => state.pokemon)
  useEffect(() => {
    dispatch(getPokemon())
  }, [])

  return (
    <div>
      <h1>Pokemon App</h1>
      <hr />

      <ul>
        {
          pokemon.map((singlePokemon: any) => (
            <li key={singlePokemon.name}>
              {singlePokemon.name}
            </li>
          ))
        }
      </ul>

      <hr />

      <button
        disabled={isLoading}
        onClick={() => dispatch(getPokemon(page + 1))}
      >
        Next Page
      </button>
    </div>
  )
}
