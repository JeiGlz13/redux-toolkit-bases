import { ThemeProvider } from '@mui/material';
import { CssBaseline } from '@mui/material';
import theme from './theme';

interface Props {
	children: JSX.Element;
}

export const MUITheme = ({ children }: Props): JSX.Element => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	);
};
