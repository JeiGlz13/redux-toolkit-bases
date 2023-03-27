import './App.css'
import { Counter } from './screens/Counter'
import { PokemonScreen } from './screens/PokemonScreen'
import { ToDoScreen } from './screens/ToDoScreen'

const App = () => {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <PokemonScreen /> */}
      <ToDoScreen />
    </div>
  )
}

export default App
