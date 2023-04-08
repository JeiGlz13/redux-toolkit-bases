import { Theme, createTheme } from '@mui/material/styles';
import { red, indigo, green } from '@mui/material/colors';

const theme: Theme = createTheme({
	palette: {
		primary: {
			main: indigo[400],
			dark: indigo[600],
			light: indigo[200],
		},
		secondary: {
			main: green[400],
			dark: green[600],
			light: green[200],
		},
		error: {
			main: red.A400,
		},
	},
});

export default theme;
