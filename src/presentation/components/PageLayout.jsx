import React from 'react';
import { Outlet } from 'react-router-dom';
import { Grid } from '@mui/material';
import Navbar from './navbar/Navbar';

const PageLayout = () => (
  <Grid container spacing={2}>
    <Grid item md={2} lg={2} sm={2}>
      <Navbar />
    </Grid>
    <Grid item md={10} lg={10} sm={10}>
      <Outlet />
    </Grid>
  </Grid>
);
export default PageLayout;
