// TutorDashboard.js
// TutorDashboard.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  styled,
} from '@mui/material';
import { Dashboard, AddCircleOutline, LibraryBooks, Visibility, Edit } from '@mui/icons-material';
import Navbarsign from './Navbarsign';

const DrawerStyled = styled(Drawer)({
  width: '240px',
  flexShrink: 0,
});

const DrawerPaperStyled = styled('div')({
  width: '240px',
});

const ContentStyled = styled('div')({
 
  padding: (theme) => theme.spacing(3),
  textAlign: 'center', // Center align the content
});
const IconButtonStyled = styled(IconButton)({
  marginLeft: '10px', // Adjust the margin as needed
});

const TutorDashboard = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  return (
    <><Navbarsign/>
    <div>
    {/* Sidebar toggle button */}
    <IconButtonStyled onClick={openDrawer ? handleDrawerClose : handleDrawerOpen} edge="start">
        {openDrawer ? <Visibility /> :  <Dashboard />}
      </IconButtonStyled>


      {/* Sidebar */}
      <DrawerStyled
        variant="temporary"
        anchor="left"
        open={openDrawer}
        onClose={handleDrawerClose}
        classes={{
          paper: DrawerPaperStyled,
        }}
      >
        <List>
          <ListItem button component={Link} to="/CreateQuizPage">
            <ListItemIcon><AddCircleOutline /></ListItemIcon>
            <ListItemText primary="Create Quiz" />
          </ListItem>
          <ListItem button component={Link} to="/CreateCourse">
            <ListItemIcon><LibraryBooks /></ListItemIcon>
            <ListItemText primary="Create Course" />
          </ListItem>
          <ListItem button component={Link} to="/ViewDetails">
            <ListItemIcon><Visibility /></ListItemIcon>
            <ListItemText primary="View Details" />
          </ListItem>
          <ListItem button component={Link} to="/EditCourse">
            <ListItemIcon><Edit /></ListItemIcon>
            <ListItemText primary="Edit Course" />
          </ListItem>
        </List>
      </DrawerStyled>

      {/* Main content */}
      <ContentStyled>
        <h2>Tutor Dashboard</h2>
        {/* Your content goes here */}
      </ContentStyled>
    </div>
    </>
  );
};

export default TutorDashboard;
