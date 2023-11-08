import { Box, Typography } from '@mui/material';
import React from 'react';

const PushNotification = () => {
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
        PushNotification
      </Typography>
    </Box>
  );
};

export default PushNotification;
