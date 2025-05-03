import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Box, 
  Button, 
  Container, 
  Typography, 
  Grid,
  Card,
  CardContent,
  CardActionArea
} from '@mui/material';

function Home() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h1" component="h1" align="center" gutterBottom>
          Welcome to Junior Jungle
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          Learn coding through exciting African wildlife adventures!
        </Typography>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardActionArea onClick={() => navigate('/game')}>
                <CardContent>
                  <Typography variant="h4" gutterBottom>
                    Start Adventure
                  </Typography>
                  <Typography variant="body1">
                    Help guide lost animals home while learning to code! Solve puzzles and earn points.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card>
              <CardActionArea onClick={() => navigate('/learn')}>
                <CardContent>
                  <Typography variant="h4" gutterBottom>
                    Learning Center
                  </Typography>
                  <Typography variant="body1">
                    Discover coding concepts through fun tutorials and interactive lessons about African wildlife.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Home; 