import React, { useEffect, useRef, useState } from 'react';
import p5 from 'p5';
import { Box, Container, Typography, Grid, Paper, Dialog } from '@mui/material';
import CodeEditor from '../components/CodeEditor';
import CharacterSelection from '../components/CharacterSelection';
import { levels, obstacleTypes, animalProperties } from '../game/levels';

function Game() {
  const gameRef = useRef(null);
  const [currentLevel, setCurrentLevel] = useState(0);
  const [score, setScore] = useState(0);
  const [gameInstance, setGameInstance] = useState(null);
  const [sounds, setSounds] = useState({});
  const [character, setCharacter] = useState(null);
  const [showCharacterSelect, setShowCharacterSelect] = useState(true);

  useEffect(() => {
    if (!character) return;

    // Create new p5 instance
    const sketch = (p) => {
      let animal;
      let level = levels[currentLevel];
      let moveQueue = [];
      let isMoving = false;
      let successSound, failSound, moveSound;
      let animalProps = animalProperties[character.animal];

      p.preload = () => {
        // Load sounds
        successSound = p.loadSound('/sounds/success.mp3');
        failSound = p.loadSound('/sounds/fail.mp3');
        moveSound = p.loadSound('/sounds/move.mp3');
        setSounds({ successSound, failSound, moveSound });
      };

      p.setup = () => {
        const canvas = p.createCanvas(800, 600);
        canvas.parent(gameRef.current);
        
        // Initialize animal position from level config
        animal = {
          x: level.startPosition.x,
          y: level.startPosition.y,
          size: animalProps.size,
          targetX: level.startPosition.x,
          targetY: level.startPosition.y,
          color: animalProps.color
        };
      };

      const moveAnimal = (direction) => {
        if (isMoving) return;
        
        const step = 50 * animalProps.speed;
        let newX = animal.x;
        let newY = animal.y;
        
        switch (direction) {
          case 'moveRight':
            newX += step;
            break;
          case 'moveLeft':
            newX -= step;
            break;
          case 'moveUp':
            newY -= step;
            break;
          case 'moveDown':
            newY += step;
            break;
          default:
            break;
        }

        // Check for collisions
        const collision = level.obstacles.some(obstacle => {
          const obstacleType = obstacleTypes[obstacle.type];
          return (
            p.dist(newX, newY, obstacle.x, obstacle.y) < (animal.size + obstacleType.size) / 2 &&
            obstacleType.solid
          );
        });

        if (!collision) {
          animal.targetX = newX;
          animal.targetY = newY;
          isMoving = true;
          moveSound.play();
        } else {
          failSound.play();
        }
      };

      p.draw = () => {
        p.background(200, 230, 200);

        // Draw obstacles
        level.obstacles.forEach(obstacle => {
          const obstacleType = obstacleTypes[obstacle.type];
          p.fill(...obstacleType.color);
          if (obstacle.type === 'tree') {
            p.ellipse(obstacle.x, obstacle.y, obstacleType.size, obstacleType.size);
          } else {
            p.rect(obstacle.x - obstacleType.size/2, obstacle.y - obstacleType.size/4, 
                  obstacleType.size, obstacleType.size/2);
          }
        });

        // Draw home
        p.fill(150, 100, 50);
        p.rect(level.homePosition.x, level.homePosition.y, 60, 60);

        // Animate animal movement
        if (isMoving) {
          const dx = animal.targetX - animal.x;
          const dy = animal.targetY - animal.y;
          const speed = 5 * animalProps.speed;

          if (Math.abs(dx) > speed || Math.abs(dy) > speed) {
            animal.x += Math.sign(dx) * speed;
            animal.y += Math.sign(dy) * speed;
          } else {
            animal.x = animal.targetX;
            animal.y = animal.targetY;
            isMoving = false;

            // Process next movement in queue
            if (moveQueue.length > 0) {
              const nextMove = moveQueue.shift();
              moveAnimal(nextMove);
            }

            // Check if reached home
            if (p.dist(animal.x, animal.y, level.homePosition.x, level.homePosition.y) < 50) {
              successSound.play();
              setScore(prev => prev + 100);
              if (currentLevel < levels.length - 1) {
                setCurrentLevel(prev => prev + 1);
              }
            }
          }
        }

        // Draw animal
        p.fill(...animal.color);
        p.ellipse(animal.x, animal.y, animal.size, animal.size);

        // Display level and score
        p.fill(0);
        p.textSize(24);
        p.text(`Level: ${currentLevel + 1}`, 20, 40);
        p.text(`Score: ${score}`, 20, 70);
      };

      // Expose movement function to component
      setGameInstance({
        moveAnimal: (direction) => {
          if (isMoving) {
            moveQueue.push(direction);
          } else {
            moveAnimal(direction);
          }
        }
      });
    };

    new p5(sketch);

    return () => {
      gameRef.current.innerHTML = '';
    };
  }, [currentLevel, character]);

  const handleCodeExecution = (command) => {
    if (gameInstance) {
      gameInstance.moveAnimal(command);
    }
  };

  const handleCharacterSelect = (selectedCharacter) => {
    setCharacter(selectedCharacter);
    setShowCharacterSelect(false);
  };

  const currentLevelData = levels[currentLevel];

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" gutterBottom align="center">
          Level {currentLevel + 1}: {currentLevelData.title}
        </Typography>
        <Typography variant="body1" gutterBottom align="center">
          {currentLevelData.description}
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center" paragraph>
          {currentLevelData.story}
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Box ref={gameRef} sx={{ mt: 4, border: '1px solid #ccc', borderRadius: 1 }} />
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 2, mb: 2 }}>
              <Typography variant="h6" gutterBottom>
                Hints:
              </Typography>
              {currentLevelData.hints.map((hint, index) => (
                <Typography key={index} variant="body2" color="text.secondary" gutterBottom>
                  • {hint}
                </Typography>
              ))}
            </Paper>
            <CodeEditor
              onExecute={handleCodeExecution}
              initialCode={currentLevelData.initialCode}
              instructions="Write code to guide your animal home!"
            />
          </Grid>
        </Grid>
      </Box>

      <Dialog open={showCharacterSelect} maxWidth="md" fullWidth>
        <CharacterSelection onSelect={handleCharacterSelect} />
      </Dialog>
    </Container>
  );
}

export default Game; 