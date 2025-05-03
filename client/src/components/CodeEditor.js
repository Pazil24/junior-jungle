import React, { useState } from 'react';
import { Box, Button, Paper, Typography } from '@mui/material';

const CodeEditor = ({ onExecute, initialCode, instructions }) => {
  const [code, setCode] = useState(initialCode || '');

  const handleExecute = () => {
    // Create a safe execution environment
    const safeCommands = {
      moveRight: () => onExecute('moveRight'),
      moveLeft: () => onExecute('moveLeft'),
      moveUp: () => onExecute('moveUp'),
      moveDown: () => onExecute('moveDown'),
      repeat: (times, fn) => {
        for (let i = 0; i < times; i++) {
          fn();
        }
      }
    };

    try {
      // Create a function from the code and execute it with safe commands
      const executeCode = new Function(...Object.keys(safeCommands), code);
      executeCode(...Object.values(safeCommands));
    } catch (error) {
      console.error('Code execution error:', error);
    }
  };

  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="h6" gutterBottom>
        Write Your Code
      </Typography>
      <Typography variant="body2" color="text.secondary" gutterBottom>
        {instructions}
      </Typography>
      <Paper variant="outlined" sx={{ p: 2, mb: 2 }}>
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          style={{
            width: '100%',
            height: '200px',
            fontFamily: 'monospace',
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '4px'
          }}
        />
      </Paper>
      <Button variant="contained" color="primary" onClick={handleExecute}>
        Run Code
      </Button>
    </Box>
  );
};

export default CodeEditor; 