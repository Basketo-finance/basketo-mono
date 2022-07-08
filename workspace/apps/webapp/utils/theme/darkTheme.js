import { createTheme } from '@mui/material/styles';
import colorPalette from './palette.js';

const buttonStyle = (variant, color) => ({
  backgroundColor: colorPalette[color][variant == 'contained'? 'main':'inherit'],
  color: colorPalette[color][variant=='contained'?'darker':'light'],
  border: `1.5px solid ${
    colorPalette[color][
        variant === 'outlined'
        ? 'light'
        : 'inherit'
    ]
  }`,
  transition: '300ms',
  '&:hover': {
    backgroundColor:
      colorPalette[color][variant === 'contained' ? 'light' : 'darker'],
    border: `1.5px solid ${
      colorPalette[color][variant === 'text'||variant=='contained' ? 'inherit' : 'main']
    }`,
    transform: 'translate(0px,-1.5px)'
  },
});

const textFieldStyle = (variant, color) => ({
  '.MuiInputLabel-root': {
    color: `${colorPalette[color].light} !important`,
    fontWeight:'500'
  },
  '& .MuiOutlinedInput-root fieldset': {
    border:`1.5px solid ${colorPalette[color][color=='primary'?'light':'white']} !important`
  },
  '& .MuiInput-underline:before': {
    borderBottomColor: colorPalette[color][color=='primary'?'light':'white']
  },
  '& .MuiInput-underline:hover:before': {
    borderBottomColor: colorPalette[color][color=='primary'?'light':'white'],
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: colorPalette[color][color=='primary'?'main':'white'],
  },
});

const darkTheme = createTheme({
  typography: { fontFamily: 'Work Sans' },
  palette: {
    mode: 'dark',
    primary: {
      light: colorPalette.primary.light,
      main: colorPalette.primary.main,
      dark: colorPalette.primary.dark,
      contrastText: colorPalette.primary.darker
    },
    secondary: {
      main: colorPalette.secondary.white,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '500px',
          textTransform: 'none',
          fontWeight: '600',
          padding: '0.5em 1.2em',
          boxSizing: 'border-box',
          boxShadow: 'none',
          borderWidth:'1.5px',
          transition:'300ms',
          "&:hover":{
            borderWidth:'1.5px',
            transform: 'translate(0px,-1.5px)'
            }
        },
      },
      variants: [
        {
          props: { variant: 'contained', color: 'primary' },
          style: buttonStyle('contained', 'primary'),
        },
        {
          props: { variant: 'outlined', color: 'primary' },
          style: buttonStyle('outlined', 'primary'),
        },
        {
          props: { variant: 'text', color: 'primary' },
          style: buttonStyle('text', 'primary'),
        }
      ],
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': { borderRadius: '500px' },
        },
      },
      variants: [
        {
          props: { variant: 'outlined', color: 'primary' },
          style: textFieldStyle('outlined', 'primary'),
        },
        {
          props: { variant: 'outlined', color: 'secondary' },
          style: textFieldStyle('outlined', 'secondary'),
        },
        {
          props: { variant: 'standard', color: 'primary' },
          style: textFieldStyle('standard', 'primary'),
        },
        {
          props: { variant: 'standard', color: 'secondary' },
          style: textFieldStyle('standard', 'secondary'),
        },
      ],
    },
    MuiPaper: {
      variants: [
        {
          props: { variant: 'window' },
          style: {
            borderRadius: '0px',
            boxShadow: 'none',
            zIndex: '0',
            backgroundColor: '#101010',
            width: '100vw',
            minHeight: '100vh',
            overflowX: 'hidden',
          },
        },
        {
          props:{variant:'section', color:'primary'},
          style:{
            borderRadius: '0px',
            boxShadow: 'none',
            backgroundColor: colorPalette.primary.darker,
          }
        },
        {
          props:{variant:'section', color:'secondary'},
          style:{
            borderRadius: '0px',
            boxShadow: 'none',
            backgroundColor: "#1F1F1F",
          }
        }
      ],
    },
    MuiLink:{
      styleOverrides:{root:{color:colorPalette.primary.main, fontWeight:'600'}}
    },
    MuiListItemIcon:{
      styleOverrides:{root:{color:colorPalette.primary.main}}
    },
    MuiTypography:{
      variants:[
        {
          props:{variant:'subtitle2'},
          style:{letterSpacing:'0.23em'}
        }
      ]
    }
  },
});

export default darkTheme;
