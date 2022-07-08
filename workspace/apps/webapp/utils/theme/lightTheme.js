import { createTheme } from '@mui/material/styles';
import colorPalette from './palette.js';

const buttonStyle = (variant, color) => ({
  backgroundColor: colorPalette[color][variant == 'contained'? 'main':'inherit'],
  color: colorPalette[color][variant=='text'?'dark':'darker'],
  border: `1.5px solid ${
    colorPalette[color][
        variant === 'outlined'
        ? 'darker'
        : 'inherit'
    ]
  }`,
  '&:hover': {
    backgroundColor:
      colorPalette[color][variant === 'contained' ? 'main' : 'lighter'],
    border: `1.5px solid ${
      colorPalette[color][variant === 'text' ? 'inherit' : 'darker']
    }`,
    boxShadow:'none'
  },
});

const textFieldStyle = (variant, color) => ({
  '.MuiInputLabel-root': {
    color: `${colorPalette[color].dark} !important`,
    fontWeight:'500'
  },
  '& .MuiOutlinedInput-root fieldset': {
    border:`1.5px solid ${colorPalette[color][color=='primary'?'darker':'black']} !important`
  },
  '& .MuiInput-underline:before': {
    borderBottomColor: colorPalette[color][color=='primary'?'darker':'black']
  },
  '& .MuiInput-underline:hover:before': {
    borderBottomColor: colorPalette[color][color=='primary'?'darker':'black'],
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: colorPalette[color][color=='primary'?'dark':'black'],
  },
});

const lightTheme = createTheme({
  typography: { fontFamily: 'Work Sans' },
  palette: {
    mode: 'light',
    primary: {
      light: colorPalette.primary.lighter,
      main: colorPalette.primary.main,
      dark: colorPalette.primary.dark,
      contrastText: colorPalette.primary.darker
    },
    secondary: {
      main: colorPalette.secondary.black,
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
            backgroundColor: '#fff',
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
            backgroundColor: colorPalette.primary.lighter,
          }
        },
        {
          props:{variant:'section', color:'secondary'},
          style:{
            borderRadius: '0px',
            boxShadow: 'none',
            backgroundColor: "#f2f2f2",
          }
        }
      ],
    },
    MuiLink:{
      styleOverrides:{root:{color:colorPalette.primary.dark, fontWeight:'600'}}
    },
    MuiListItemIcon:{
      styleOverrides:{root:{color:colorPalette.primary.dark}}
    }
  },
});

export default lightTheme;
