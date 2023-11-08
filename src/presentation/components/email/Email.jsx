import { Box, Typography } from '@mui/material';
import React from 'react';

const Email = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        my: '5rem',
      }}
    >
      <Typography variant="h6" className="linkText">
        Email
      </Typography>
    </Box>
  );
};

export default Email;
