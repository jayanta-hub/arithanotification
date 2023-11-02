import React from 'react';
import { Outlet } from 'react-router-dom';
import { Grid } from '@mui/material';
import Navbar from './navbar/Navbar';

const PageLayout = () => (
  <Grid container>
    <Grid item md={3} lg={3} sm={3}>
      <Navbar />
    </Grid>
    <Grid item md={12} lg={12} sm={12}>
      <Outlet />
    </Grid>
  </Grid>
);
export default PageLayout;
