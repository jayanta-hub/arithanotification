import { Box, Typography } from '@mui/material';
import React from 'react';

const Sms = () => {
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
        Sms
      </Typography>
    </Box>
  );
};

export default Sms;
