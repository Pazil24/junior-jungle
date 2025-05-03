import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const lessonData = [
  {
    title: 'Basic Movement',
    description: 'Learn how to move objects using simple commands',
    content: `
      // Moving right
      moveRight();
      
      // Moving left
      moveLeft();
      
      // Moving up
      moveUp();
      
      // Moving down
      moveDown();
    `
  },
  {
    title: 'Loops',
    description: 'Make repeated actions easier with loops',
    content: `
      // Repeat an action 3 times
      repeat(3) {
        moveForward();
      }
      
      // Keep moving until reaching home
      while(notAtHome) {
        moveForward();
      }
    `
  },
  {
    title: 'Conditions',
    description: 'Make decisions based on the environment',
    content: `
      // Check if path is clear
      if(pathIsClear) {
        moveForward();
      } else {
        turnRight();
      }
    `
  }
];

function Learn() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" gutterBottom align="center">
          Learning Center
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          Master coding concepts through fun exercises!
        </Typography>

        <Grid container spacing={4} sx={{ mt: 2 }}>
          {lessonData.map((lesson, index) => (
            <Grid item xs={12} key={index}>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Box>
                    <Typography variant="h6">{lesson.title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {lesson.description}
                    </Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Card variant="outlined">
                    <CardContent>
                      <Typography variant="body2" component="pre" sx={{ 
                        backgroundColor: '#f5f5f5',
                        padding: 2,
                        borderRadius: 1,
                        fontFamily: 'monospace'
                      }}>
                        {lesson.content}
                      </Typography>
                    </CardContent>
                  </Card>
                </AccordionDetails>
              </Accordion>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default Learn; 