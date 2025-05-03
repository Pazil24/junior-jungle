import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

// Import pages
import Home from './pages/Home';
import Game from './pages/Game';
import Learn from './pages/Learn';
import Navigation from './components/Navigation';

// Create a theme instance
const theme = createTheme({
  palette: {
    primary: {
      main: '#2e7d32', // Forest green
    },
    secondary: {
      main: '#f57c00', // Orange
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/learn" element={<Learn />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
