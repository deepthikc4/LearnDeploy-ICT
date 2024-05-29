import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import PostAddIcon from '@mui/icons-material/PostAdd';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TaskIcon from '@mui/icons-material/Task';
import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';
import { Link } from 'react-router-dom';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';

import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';

import { Button } from '@mui/material';

const navbarStyle = {
  background: 'linear-gradient(to right, #000000,#000080)'
}
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));
const drawerWidth = 240;

const SideBarAdmin = (props) => {  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const tokenrelease = () => {
    sessionStorage.removeItem('userToken');
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={tokenrelease}><Link to={'/'} style={{color:'black',textDecoration:'none'}}>Logout</Link></MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
     
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="inherit">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
        
      </MenuItem>
      
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

   
    const drawer = (
        
        
      <div>
        
        <Toolbar  style={{backgroundColor:'#000000'}}/>
        <Divider   />
       
        <Divider />
        <List style={{color:'black'}}>
          {['Add Project', 'Add mentor'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon style={{color:'black'}}>
                {index === 0 && <TaskIcon />}
   {index === 1 && <PersonIcon />}
                  {/* {index % 2 === 0 ? <SettingsIcon/> : <MailIcon />} */}
                </ListItemIcon>
                {/* <ListItemText primary={text} /> */}
                {index === 0 && (
            <Link to="/projectform" style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItemText primary="Add Project" />
            </Link>
          )}
          {index === 1 && (
            <Link to="/mentorform" style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItemText primary="Add Mentor" />
            </Link>
          )}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </div>
    );
  
    // Remove this const when copying and pasting into your project.
    const container = window !== undefined ? () => window().document.body : undefined;
  


  return (
    <div>
        
 <Box sx={{ display: 'flex'}}>
 
      <CssBaseline />
      <AppBar
      style={navbarStyle}
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },backgroundColor:'black'
        }}
      >
           <Toolbar>
          
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
       <Link to="/admindashboard"    style={{textDecoration:'none',color:'white'}}> Dashboard </Link> </Typography>
         
         
         
          <Search >
            <SearchIconWrapper  >
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {/* <IconButton size="large" aria-label="show 4 new mails"color="inherit" >
              <Badge badgeContent={4} color="error" >
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge  color="black">
                <SettingsIcon />
              </Badge>
            </IconButton>
             */}
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
        
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
           
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}


      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
       
     
      
        <Drawer
         
          variant="permanent"
          sx={{
        
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { height: '100%' ,backgroundColor:'white', boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      
    </Box>


    </div>
  )
}

export default SideBarAdmin