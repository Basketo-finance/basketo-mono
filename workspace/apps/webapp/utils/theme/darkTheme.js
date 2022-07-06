import  {createTheme} from '@mui/material/styles';
import colorPalette from './palette.js';

const buttonStyle = (variant, color)=>(
    { 
        backgroundColor: colorPalette[color][variant==='contained' ? 'main' : 'inherit'],
        color: colorPalette[color][variant==='contained'?'darker':'lighter'],
        border: `1.5px solid ${colorPalette[color][variant==='contained'?'main':variant==='outlined'?'light':'inherit']}`,
        boxShadow: 'none',
        "&:hover":{
            backgroundColor:colorPalette[color][variant==='contained'?'light':'darker'],
            border:`1.5px solid ${colorPalette[color][variant==='text'?'inherit':variant==='contained'?'light':'light']}`,
        },
    }
);

const textFieldStyle = (variant, color)=>(
    {
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            border: `1.5px solid ${colorPalette[color].light}`
        },
        '&:hover fieldset': {
            borderColor: colorPalette[color].main,
        },
        '&.Mui-focused fieldset': {
            borderColor: colorPalette[color].main,
        },
    },
    }
);

const darkTheme = createTheme({
    typography:{
        fontFamily:'Work Sans'
    },
    palette:{
        mode:'dark',
        primary:{
            light: colorPalette.primary.lighter,
            main: colorPalette.primary.main,
            dark: colorPalette.primary.darker,
        },
        secondary:{
            light: colorPalette.secondary.lighter,
            main: colorPalette.secondary.main,
            dark: colorPalette.secondary.darker
        }
    },
    components:{
        MuiButton:{
            styleOverrides:{
                root:{
                    borderRadius: '500px', textTransform: 'none',fontWeight:'600',padding:'0.6em 1.5em',
                }
            },
            variants:[
                {props:{variant:'contained',color:'primary'},style:buttonStyle('contained','primary')},
                {props:{variant:'contained',color:'secondary'},style:buttonStyle('contained','secondary')},
                {props:{variant:'outlined',color:'primary'},style:buttonStyle('outlined','primary')},
                {props:{variant:'outlined',color:'secondary'},style:buttonStyle('outlined','secondary')},
                {props:{variant:'text',color:'primary'},style:buttonStyle('text','primary')},
                {props:{variant:'text',color:'secondary'},style:buttonStyle('text','secondary')},
            ]
        },
        MuiTextField:{
            styleOverrides:{
                root:{
                    '& .MuiOutlinedInput-root':{borderRadius:'500px'},
                }
            },
            variants:[
                {props:{variant:'outlined',color:'primary'},style:textFieldStyle('outlined','primary')},
                {props:{variant:'outlined',color:'secondary'},style:textFieldStyle('outlined','secondary')},
                {props:{variant:'standard',color:'primary'},style:textFieldStyle('standard','primary')},
                {props:{variant:'standard',color:'secondary'},style:textFieldStyle('standard','secondary')}
            ]
        },
        MuiPaper:{
            variants:[
                {
                    props:{variant:'window'},
                    style:{borderRadius:'0px',boxShadow:'none',zIndex:'0',backgroundColor:'#111',
                    width: "100vw",minHeight: "100vh", overflowX:'hidden'}
                }   
            ]
        }
    }
});

export default darkTheme;