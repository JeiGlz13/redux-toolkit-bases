import { Box } from '@mui/material';
import { Theme, makeStyles, styled } from '@mui/material/styles';

const StyledBox = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.secondary.main,
	width: 300,
	height: 200,
	borderRadius: '1rem',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	fontFamily: 'Roboto',
	marginTop: theme.spacing(4),

	'&:hover': {
		backgroundColor: theme.palette.secondary.dark,
	},

	transition: theme.transitions.create(['background-color'], {
		duration: 400,
	}),
	[theme.breakpoints.down('sm')]: {
		width: 150,
		height: 100,
	},
}));

export const MUIStyledBox = () => {
	return <StyledBox>MUIStyledBox</StyledBox>;
};
