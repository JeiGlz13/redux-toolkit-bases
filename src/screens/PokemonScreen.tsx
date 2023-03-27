import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { getPokemon } from '../redux/slices/pokemon/pokemonThunks';

export const PokemonScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemon());
  }, []);
  
  return (
    <div>
      <h1>Pokemon App</h1>
      <hr />

      <ul>
        <li>Hola mundo</li>
      </ul>
    </div>
  )
}
