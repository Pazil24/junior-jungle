import React, { useState } from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Button
} from '@mui/material';

const animals = [
  {
    id: 'elephant',
    name: 'Elephant',
    image: '/images/elephant.png',
    description: 'Strong and wise, perfect for navigating through obstacles'
  },
  {
    id: 'lion',
    name: 'Lion',
    image: '/images/lion.png',
    description: 'Fast and agile, great for quick movements'
  },
  {
    id: 'giraffe',
    name: 'Giraffe',
    image: '/images/giraffe.png',
    description: 'Tall and graceful, can see obstacles from far away'
  },
  {
    id: 'zebra',
    name: 'Zebra',
    image: '/images/zebra.png',
    description: 'Quick and nimble, perfect for tricky paths'
  }
];

function CharacterSelection({ onSelect }) {
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [gender, setGender] = useState('male');

  const handleAnimalSelect = (animalId) => {
    setSelectedAnimal(animalId);
  };

  const handleSubmit = () => {
    if (selectedAnimal) {
      onSelect({ animal: selectedAnimal, gender });
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom align="center">
        Choose Your Character
      </Typography>

      <FormControl component="fieldset" sx={{ mb: 3 }}>
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup
          row
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="female" control={<Radio />} label="Female" />
        </RadioGroup>
      </FormControl>

      <Grid container spacing={3}>
        {animals.map((animal) => (
          <Grid item xs={12} sm={6} md={3} key={animal.id}>
            <Card
              sx={{
                cursor: 'pointer',
                border: selectedAnimal === animal.id ? '2px solid #2e7d32' : 'none'
              }}
              onClick={() => handleAnimalSelect(animal.id)}
            >
              <CardMedia
                component="img"
                height="140"
                image={animal.image}
                alt={animal.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {animal.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {animal.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 3, textAlign: 'center' }}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handleSubmit}
          disabled={!selectedAnimal}
        >
          Start Adventure
        </Button>
      </Box>
    </Box>
  );
}

export default CharacterSelection; 