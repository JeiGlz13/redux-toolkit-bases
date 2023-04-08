import { MUITheme } from './theme/MUITheme';
import { ToDoScreen } from './screens/ToDoScreen';

import './App.css';

const App = (): JSX.Element => {
	return (
		<div className="root">
			<MUITheme>
				<div className="App">
					{/* <Counter /> */}
					{/* <PokemonScreen /> */}
					<ToDoScreen />
				</div>
			</MUITheme>
		</div>
	);
};

export default App;
