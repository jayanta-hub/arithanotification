import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import { NavLink } from 'react-router-dom';
// import { AppBar, Button, IconButton, Typography } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
import { ReactComponent as DashboardIcon } from '../../../infrastructure/assets/images/dashboardIcon.svg';
import { ReactComponent as DashboardIconBlue } from '../../../infrastructure/assets/images/dashboardIconBlue.svg';
import { ReactComponent as SmsIconBlue } from '../../../infrastructure/assets/images/smsBlue.svg';
import { ReactComponent as SmsIcon } from '../../../infrastructure/assets/images/sms.svg';
import { ReactComponent as EmailBlue } from '../../../infrastructure/assets/images/emailBlue.svg';
import { ReactComponent as Email } from '../../../infrastructure/assets/images/email.svg';
import { ReactComponent as NotificationBlue } from '../../../infrastructure/assets/images/notificationBlue.svg';
import { ReactComponent as Notification } from '../../../infrastructure/assets/images/notification.svg';
import { ReactComponent as UsersBlue } from '../../../infrastructure/assets/images/usersBlue.svg';
import { ReactComponent as Users } from '../../../infrastructure/assets/images/users.svg';
import { ReactComponent as SettingsBlue } from '../../../infrastructure/assets/images/settingsBlue.svg';
import { ReactComponent as Settings } from '../../../infrastructure/assets/images/settings.svg';
import { ReactComponent as BellBlue } from '../../../infrastructure/assets/images/bellBlue.svg';
import { ReactComponent as Bell } from '../../../infrastructure/assets/images/bell.svg';
const drawerWidth = 240;

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [list, setList] = React.useState([
    {
      title: 'Dashboard',
      linkTo: 'dashboard',
      isActive: false,
      iconName: 'dashboard',
    },
    {
      title: 'SMS',
      linkTo: 'sms',
      isActive: false,
      iconName: 'sms',
    },
    {
      title: 'Email',
      linkTo: 'email',
      isActive: false,
      iconName: 'email',
    },
    {
      title: 'Push Notification',
      linkTo: 'pushnotification',
      isActive: false,
      iconName: 'pushnotification',
    },
    {
      title: 'Users',
      linkTo: 'users',
      isActive: false,
      iconName: 'users',
    },
    {
      title: 'Account info',
      linkTo: 'accountinfo',
      isActive: false,
      iconName: 'accountinfo',
    },
    {
      title: 'Alerts',
      linkTo: 'alerts',
      isActive: false,
      iconName: 'alerts',
    },
  ]);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const isActiveHandler = (text) => {
    const data = list.map((item) => {
      if (item.title === text) {
        return { ...item, isActive: true };
      } else {
        return { ...item, isActive: false };
      }
    });
    setList(data);
  };
  const getIcons = (isActive, iconName = 'dashboard') => {
    console.log('🚀 ~ file: Navbar.jsx:80 ~ getIcons ~ isActive:', isActive);
    if (iconName === 'dashboard') {
      if (isActive) {
        return <DashboardIcon />;
      }
      return <DashboardIconBlue />;
    }
    if (iconName === 'sms') {
      if (isActive) {
        return <SmsIcon />;
      }
      return <SmsIconBlue />;
    }
    if (iconName === 'email') {
      if (isActive) {
        return <Email />;
      }
      return <EmailBlue />;
    }
    if (iconName === 'pushnotification') {
      if (isActive) {
        return <Notification />;
      }
      return <NotificationBlue />;
    }
    if (iconName === 'users') {
      if (isActive) {
        return <Users />;
      }
      return <UsersBlue />;
    }
    if (iconName === 'accountinfo') {
      if (isActive) {
        return <Settings />;
      }
      return <SettingsBlue />;
    }
    if (iconName === 'alerts') {
      if (isActive) {
        return <Bell />;
      }
      return <BellBlue />;
    }
  };
  const drawer = (
    <div>
      <Toolbar />
      <List>
        {list.map((text, index) => (
          <NavLink
            to={`/${text.linkTo}`}
            key={index}
            className="link"
            activeclassName="active"
            style={{
              paddingLeft: '10px',
              paddingRight: '10px',
              marginTop: '20px',
            }}
          >
            <ListItem
              key={text}
              disablePadding
              onClick={() => {
                isActiveHandler(text.title);
              }}
              style={{
                backgroundColor: text.isActive ? '#00BBD6' : '#FFFFFF',
                borderRadius: '5px',
              }}
            >
              <ListItemButton
                style={{
                  padding: '5px',
                }}
              >
                <ListItemIcon
                  style={{ color: text.isActive ? '#FFFFFF' : '#447FC1' }}
                >
                  {/* {text.isActive ? <DashboardIcon /> : <DashboardIconBlue />} */}
                  {getIcons(text.isActive, text.iconName)}
                </ListItemIcon>
                <ListItemText
                  primary={text.title}
                  style={{ color: text.isActive ? '#FFFFFF' : 'black' }}
                />
              </ListItemButton>
            </ListItem>
          </NavLink>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* <CssBaseline /> */}
      {/* <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          // backgroundColor: '#FFFFFF',
        }}
        // style={{ backgroundColor: 'white' }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, backgroundColor: 'black' }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" color={'black'}>
            Responsive drawer
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar> */}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' }, //fix the side bar
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;
