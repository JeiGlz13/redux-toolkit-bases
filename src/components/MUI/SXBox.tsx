import { Box, Theme } from '@mui/material';

const classes = {
	box: {
		backgroundColor: (theme: Theme) => theme.palette.secondary.main,
		width: {
			xs: 150,
			sm: 300,
		},
		height: {
			xs: 100,
			sm: 200,
		},
		borderRadius: '1rem',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		fontFamily: 'Roboto',
		marginTop: (theme: Theme) => theme.spacing(4),

		'&:hover': {
			backgroundColor: 'secondary.dark',
		},

		transition: (theme: Theme) =>
			theme.transitions.create(['background-color'], {
				duration: 400,
			}),
	},
};

export const SXBox = () => {
	return <Box sx={classes.box}>Hello World!</Box>;
};
