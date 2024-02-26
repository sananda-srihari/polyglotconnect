// Import necessary dependencies and components
import React, { useState } from 'react';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import AdminAnalytics from './AdminAnalytics';
import ExitToAppIcon from '@mui/icons-material/ExitToApp'; // Import the ExitToApp icon
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  CssBaseline,
  Container,
  Button,
  TextField,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Home, People, Assignment, PersonAdd, Class } from '@mui/icons-material';
import Navbarsign from './Navbarsign';

// Define the drawer width
const drawerWidth = 240;

// Styles using Material-UI styled function
const Root = styled('div')({
  display: 'flex',
});

const AppBarStyled = styled(AppBar)({
  zIndex: (theme) => theme.zIndex.drawer + 1,
});

const DrawerStyled = styled(Drawer)({
  width: drawerWidth,
  flexShrink: 0,
});

const DrawerPaperStyled = styled('div')({
  width: drawerWidth,
  transition: 'width 0.3s', // Add transition for smooth animation
});

const Content = styled('div')({
  flexGrow: 1,
  padding: (theme) => theme.spacing(3),
  transition: 'margin-left 0.3s', // Add transition for smooth animation
});

const CenteredIconButton = styled(IconButton)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: '8px',
});
// Main functional component for AdminDashboard
const AdminDashboard = () => {
  const [selectedNavItem, setSelectedNavItem] = useState('Home');
  const [tutorName, setTutorName] = useState('');
  const [sidebarExpanded, setSidebarExpanded] = useState(true);
  const handleLogout = () => {
    // Implement logout logic
    console.log('Logging out...');
  };
  // Handle navigation item selection
  const handleNavItemSelect = (item) => {
    setSelectedNavItem(item);
  };

  const handleAddTutor = () => {
    // Implement logic to add a tutor
    console.log(`Adding tutor: ${tutorName}`);
    // Reset the input field
    setTutorName('');
  };

  const handleToggleSidebar = () => {
    setSidebarExpanded(!sidebarExpanded);
  };
  
  // Define navigation items with text, icon, and path
  const navItems = [
    { text: 'Home', icon: <Home />, path: '/' },
    { text: 'Users', icon: <People />, path: '/UserDetails' },
    { text: 'Report and Analytics', icon: <Assignment />, path: '/AdminAnalytics' },
    { text: 'Manage Courses', icon: <Class />, path: '/CourseManagement' },
    { text: 'Manage Tutors', icon: <PersonAdd />, path: '/ManageTutors' },
  ];

  return (
    <>
    
    <Root>
      <CssBaseline />
      <AppBarStyled position="fixed">
      <Navbarsign/>
        <Toolbar>
          <h1 style={{ color: 'white', fontSize: '24px', textAlign: 'center' , marginLeft:'375px' }}>Welcome back ! Admin</h1>
        </Toolbar>
      </AppBarStyled>
      <DrawerStyled variant="permanent" anchor="left">
        <Toolbar />
        <DrawerPaperStyled style={{ width: sidebarExpanded ? drawerWidth : 0 }}>
          {/* Expand/Collapse Button */}
          <CenteredIconButton edge="start" color="inherit" aria-label="menu" onClick={handleToggleSidebar}>
            <MenuIcon />
          </CenteredIconButton>
          {/* Display the list of navigation items */}
          <List>
            {navItems.map((item, index) => (
              <ListItem
                button
                key={item.text}
                selected={selectedNavItem === item.text}
                onClick={() => handleNavItemSelect(item.text)}
                component={Link}
                to={item.path}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </DrawerPaperStyled>
      </DrawerStyled>

      <Content style={{ marginLeft: sidebarExpanded ? drawerWidth : 0 }}>
        <Toolbar />
        <Container  maxWidth="sm">
         
          {/* Main Content */}
          {/* Display the appropriate content based on the selected navigation item */}
          {selectedNavItem === 'Users' && <Typography variant="h4">User Management</Typography>}
          {selectedNavItem === 'Report and Analytics' && <AdminAnalytics />} 
          {selectedNavItem === 'ManageCourses' && <Typography variant="h4">Course Management</Typography>}
          {selectedNavItem === 'Manage Tutors' && (
            <div>
              <Typography variant="h4">Manage Tutors</Typography>
              <TextField
                label="Tutor Name"
                variant="outlined"
                value={tutorName}
                onChange={(e) => setTutorName(e.target.value)}
              />
              <Button variant="contained" onClick={handleAddTutor}>
                Add Tutor
              </Button>
              <IconButton color="inherit" onClick={handleLogout}>
            <ExitToAppIcon />
          </IconButton>
            </div>
          )}
        </Container>
      </Content>
    </Root>
    </>
  );
};

export default AdminDashboard;
