// Update AdminLayout component
import React from 'react';
import AdminDashboard from './AdminDashboard';
import {Container, Grid } from '@mui/material';
import Navbarsign from './Navbarsign';


const AdminLayout = ({ children }) => {
  return (
    <>
    <Navbarsign/>
    <Container maxWidth='md'>
      {/* <Navbarsign/> */}
      <Grid container>
        <Grid item>
          
          <AdminDashboard />
        </Grid>
        <Grid item xs>
          {children}
        </Grid>
      </Grid>
    </Container>
    </>
  );
};

export default AdminLayout;
