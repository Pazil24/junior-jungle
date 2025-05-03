export const levels = [
  {
    id: 1,
    title: "The Lost Elephant",
    description: "Help the young elephant find its way back to the herd!",
    initialCode: "// Use moveRight() to move the elephant\n\n",
    startPosition: { x: 100, y: 300 },
    homePosition: { x: 700, y: 300 },
    obstacles: [],
    hints: ["Try using moveRight() multiple times!"],
    solution: `
      moveRight();
      moveRight();
      moveRight();
    `,
    animal: 'elephant',
    story: "The young elephant got separated from its herd during a dust storm. Help it find its way back home!"
  },
  {
    id: 2,
    title: "Lion's Hunt",
    description: "Guide the lion to its prey while avoiding the trees!",
    initialCode: "// Use moveRight(), moveUp(), and moveDown()\n\n",
    startPosition: { x: 100, y: 300 },
    homePosition: { x: 700, y: 400 },
    obstacles: [
      { x: 300, y: 300, type: 'tree' },
      { x: 500, y: 300, type: 'tree' }
    ],
    hints: ["You'll need to go around the trees!", "Try moving up or down before going right."],
    solution: `
      moveUp();
      moveRight();
      moveRight();
      moveDown();
      moveRight();
    `,
    animal: 'lion',
    story: "The lion needs to catch its prey but must navigate carefully through the trees."
  },
  {
    id: 3,
    title: "Giraffe's Tall Challenge",
    description: "Use the giraffe's height to spot and avoid obstacles!",
    initialCode: "// Use repeat() to avoid writing the same code\n\n",
    startPosition: { x: 100, y: 300 },
    homePosition: { x: 700, y: 300 },
    obstacles: [
      { x: 200, y: 300, type: 'log' },
      { x: 400, y: 300, type: 'log' },
      { x: 600, y: 300, type: 'log' }
    ],
    hints: ["You can use repeat() to do the same actions multiple times!"],
    solution: `
      repeat(3, () => {
        moveUp();
        moveRight();
        moveDown();
      });
    `,
    animal: 'giraffe',
    story: "The giraffe needs to reach the tall trees for food, but there are obstacles in the way."
  },
  {
    id: 4,
    title: "Zebra's Escape",
    description: "Help the zebra escape from predators by finding the safest path!",
    initialCode: "// Use combinations of movements to find the safe path\n\n",
    startPosition: { x: 100, y: 300 },
    homePosition: { x: 700, y: 300 },
    obstacles: [
      { x: 200, y: 200, type: 'tree' },
      { x: 400, y: 400, type: 'tree' },
      { x: 600, y: 200, type: 'tree' }
    ],
    hints: ["Look for patterns in the obstacles!", "Try moving diagonally."],
    solution: `
      moveUp();
      moveRight();
      moveRight();
      moveDown();
      moveRight();
      moveUp();
      moveRight();
    `,
    animal: 'zebra',
    story: "The zebra needs to escape from predators by finding the safest path through the savannah."
  },
  {
    id: 5,
    title: "Elephant's Water Quest",
    description: "Guide the elephant to the watering hole while avoiding dangerous areas!",
    initialCode: "// Use loops and conditions to find the water\n\n",
    startPosition: { x: 100, y: 300 },
    homePosition: { x: 700, y: 300 },
    obstacles: [
      { x: 300, y: 300, type: 'log' },
      { x: 500, y: 300, type: 'log' },
      { x: 400, y: 200, type: 'tree' },
      { x: 400, y: 400, type: 'tree' }
    ],
    hints: ["Plan your path carefully!", "Use loops to make your code shorter."],
    solution: `
      moveUp();
      repeat(2, () => {
        moveRight();
      });
      moveDown();
      repeat(2, () => {
        moveRight();
      });
    `,
    animal: 'elephant',
    story: "The elephant needs to reach the watering hole but must avoid dangerous areas."
  }
];

export const obstacleTypes = {
  tree: {
    color: [34, 139, 34], // Forest green
    size: 40,
    solid: true,
    description: "A tall tree blocking the path"
  },
  log: {
    color: [139, 69, 19], // Saddle brown
    size: 30,
    solid: true,
    description: "A fallen log that needs to be jumped over"
  }
};

export const animalProperties = {
  elephant: {
    speed: 1,
    size: 40,
    color: [150, 150, 150],
    specialAbility: "Can push small obstacles"
  },
  lion: {
    speed: 1.5,
    size: 35,
    color: [255, 165, 0],
    specialAbility: "Moves faster than other animals"
  },
  giraffe: {
    speed: 1.2,
    size: 45,
    color: [255, 215, 0],
    specialAbility: "Can see obstacles from further away"
  },
  zebra: {
    speed: 1.3,
    size: 35,
    color: [255, 255, 255],
    specialAbility: "Can move diagonally"
  }
}; 