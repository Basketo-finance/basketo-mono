import * as React from 'react';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Tooltip, Paper, BottomNavigation, BottomNavigationAction, useMediaQuery } from '@mui/material';

const MobileNav = ()=>{
  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          // value={value}
          // onChange={(event, newValue) => {
          //   setValue(newValue);
          // }}
        >
          <BottomNavigationAction label="Recents" icon={<InboxIcon />} />
          <BottomNavigationAction label="Favorites" icon={<MailIcon />} />
          <BottomNavigationAction label="Archive" icon={<InboxIcon />} />
        </BottomNavigation>
      </Paper>
  )
}

const DesktopNav = ()=>{
  return(
    <MuiDrawer variant="permanent" sx={{width:'60px', whiteSpace:'nowrap',
      "& .MuiDrawer-paper":{
        border:'none',
        zIndex:'1'
      }}} >
      <List sx={{paddingTop:'90px'}} >
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <Tooltip title={text} placement='right' >
          <ListItem key={index} disablePadding>
            <ListItemButton
              sx={{ minHeight: 60, justifyContent: 'center', px: 2.5, }}
            >
              <ListItemIcon
                sx={{ minWidth: 0, mr: 'auto', justifyContent: 'center',color:'inherit' }}
              >
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          </Tooltip>
        ))}
      </List>
    </MuiDrawer>
  )
}

export function Navigation() {

  const sm = useMediaQuery((theme)=>(theme.breakpoints.up("sm")));

  if(sm){
    return DesktopNav()
  }else{
    return MobileNav()
  }
}

export default Navigation;