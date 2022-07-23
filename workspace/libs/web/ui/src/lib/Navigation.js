import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import {
  Tooltip,
  Paper,
  BottomNavigation,
  BottomNavigationAction,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useRouter } from 'next/router';
import toggleTheme from './toggle-theme';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const MobileNav = ({ navInfo, showThemeToggle, route, theme }) => {
  return (
    <Paper
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: '100' }}
      elevation={3}
    >
      <BottomNavigation
        value={route.asPath}
        onChange={(_, newValue) => {
          const nav = navInfo?.find((e) => e.route == newValue);
          return nav?.onClick();
        }}
      >
        {navInfo?.map((nav, i) => (
          <BottomNavigationAction
            key={i}
            value={nav?.route}
            label={nav?.label}
            icon={nav?.icon}
          />
        ))}
        {showThemeToggle && (
          <BottomNavigationAction
            label={'Theme'}
            icon={
              theme.palette.mode == 'dark' ? (
                <LightModeIcon />
              ) : (
                <DarkModeIcon />
              )
            }
            onClick={() =>
              toggleTheme({
                to: theme.palette.mode == 'dark' ? 'light' : 'dark',
              })
            }
          />
        )}
      </BottomNavigation>
    </Paper>
  );
};

const DesktopNav = ({ navInfo, showThemeToggle, route, theme }) => {
  return (
    <MuiDrawer
      variant="permanent"
      sx={{
        width: '60px',
        whiteSpace: 'nowrap',
        '& .MuiDrawer-paper': {
          border: 'none',
          zIndex: '1',
        },
      }}
    >
      <List sx={{ paddingTop: '90px' }}>
        {navInfo?.map((nav, index) => (
          <Tooltip key={index} title={nav?.label} placement="right">
            <ListItem disablePadding onClick={nav?.onClick}>
              <ListItemButton
                sx={{ minHeight: 60, justifyContent: 'center', px: 2.5 }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: 'auto',
                    justifyContent: 'center',
                    color:
                      route.asPath == nav?.route
                        ? 'primary'
                        : 'secondary.light',
                  }}
                >
                  {nav?.icon}
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          </Tooltip>
        ))}
        {showThemeToggle && (
          <Tooltip title={'Switch Theme'} placement="right">
            <ListItem
              disablePadding
              onClick={() =>
                toggleTheme({
                  to: theme.palette.mode == 'dark' ? 'light' : 'dark',
                })
              }
            >
              <ListItemButton
                sx={{ minHeight: 60, justifyContent: 'center', px: 2.5 }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: 'auto',
                    justifyContent: 'center',
                    color: 'inherit',
                  }}
                >
                  {theme.palette.mode == 'dark' ? (
                    <LightModeIcon />
                  ) : (
                    <DarkModeIcon />
                  )}
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          </Tooltip>
        )}
      </List>
    </MuiDrawer>
  );
};

export function Navigation({
  navInfo, //Array of Objects of type {route:String, onClick:Function, label:String, icon:JSXElement(an MUI icon)}
  showThemeToggle = false, // Boolean. dafault is false
}) {
  const sm = useMediaQuery((theme) => theme.breakpoints.up('sm'));
  const route = useRouter();
  const theme = useTheme();
  if (sm) {
    return (
      <DesktopNav
        navInfo={navInfo}
        showThemeToggle={showThemeToggle}
        route={route}
        theme={theme}
      />
    );
  } else {
    return (
      <MobileNav
        navInfo={navInfo}
        showThemeToggle={showThemeToggle}
        route={route}
        theme={theme}
      />
    );
  }
}

export default Navigation;
