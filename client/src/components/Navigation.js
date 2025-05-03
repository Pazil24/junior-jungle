import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Button, Typography, Box } from '@mui/material';

function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Junior Jungle
        </Typography>
        <Box>
          <Button 
            color="inherit" 
            onClick={() => navigate('/')}
            sx={{ 
              backgroundColor: isActive('/') ? 'rgba(255,255,255,0.1)' : 'transparent'
            }}
          >
            Home
          </Button>
          <Button 
            color="inherit" 
            onClick={() => navigate('/game')}
            sx={{ 
              backgroundColor: isActive('/game') ? 'rgba(255,255,255,0.1)' : 'transparent'
            }}
          >
            Play
          </Button>
          <Button 
            color="inherit" 
            onClick={() => navigate('/learn')}
            sx={{ 
              backgroundColor: isActive('/learn') ? 'rgba(255,255,255,0.1)' : 'transparent'
            }}
          >
            Learn
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navigation; 