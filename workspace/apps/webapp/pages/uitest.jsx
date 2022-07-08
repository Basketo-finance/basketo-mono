import { Button, Paper, TextField, InputAdornment } from '@mui/material';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useTheme } from '@mui/material';

const Uitest = () => {
  const currentTheme = useTheme();

  const handleThemeToggle = ()=>{
    if(typeof window !== 'undefined'){
      window.document.dispatchEvent(
        new CustomEvent("modeChange",{
          detail:{to:currentTheme.palette.mode==='dark' ? 'light' : 'dark'}
        }));
    }
  }

  return (
    <Paper variant='window' sx={{padding:'90px'}} >
        
        <Button variant='outlined' onClick={handleThemeToggle}
        startIcon={currentTheme.palette.mode==='dark'? <LightModeIcon/> : <DarkModeIcon/>} >
        {currentTheme.palette.mode==='dark'? "Light Mode" : "Dark Mode"}
        </Button>
        
        <br/><br/>
        <Button variant='contained'  >Primary contained</Button>&nbsp;
        <Button variant='outlined'  >Primary outlined</Button>&nbsp;
        <Button variant='text'  >Primary text</Button>&nbsp;
        <Button variant='contained' color='secondary' >Secondary contained</Button>&nbsp;
        <Button variant='text' color='secondary' >Secondary text</Button>&nbsp;
        <br/><br/>
        <TextField variant='outlined' color='primary' label='textfield' placeholder='outlined primary icon'
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <MarkEmailUnreadIcon/>
            </InputAdornment>
          ),
        }} 
        />
        <br/><br/>
        <TextField variant='standard' color='primary' label='textfield' placeholder='standard primary' /><br/><br/>
        <TextField variant='outlined' color='primary' label='textfield' placeholder='outlined primary !icon' /><br/><br/>
        <Paper variant='section' color="primary" sx={{width:'100%', height:'200px'}} >Paper | section primary</Paper>
        <Paper variant='section' color="secondary" sx={{width:'100%', height:'200px'}} >Paper | section secondary</Paper>

    </Paper>
)
}

export default Uitest