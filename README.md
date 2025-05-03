# Junior Jungle 🐘

An interactive educational game designed to teach children aged 4-12 coding and problem-solving skills through an engaging African safari adventure.

## 🎮 About The Game

Junior Jungle is an educational game where children learn coding concepts by guiding various animals through the African savannah. Players use basic programming concepts to help animals navigate challenges, find resources, and return home safely.

## 📊 Data Storytelling

The game incorporates data storytelling in several engaging ways:

- **Animal Behavior Patterns**: Players learn about animal migration patterns and behaviors through interactive visualizations
- **Environmental Data**: Real-world data about African ecosystems is presented through engaging stories and challenges
- **Progress Analytics**: Children can see their learning progress through visual charts and graphs
- **Interactive Maps**: Players explore African geography through interactive maps showing animal habitats
- **Data-Driven Decisions**: Each level teaches how to make decisions based on environmental data and animal needs
- **Visual Feedback**: Immediate visual feedback helps children understand the impact of their coding decisions

## ✨ Features

- **Multiple Animal Characters**: Choose from elephants, lions, giraffes, and zebras
- **Progressive Learning Levels**: Start with basic movements and advance to complex problem-solving
- **Character Customization**: Personalize your animal character
- **Educational Content**: Learn about:
  - Basic coding concepts
  - Problem-solving skills
  - African wildlife
  - Logical thinking
- **Interactive Coding Interface**: Kid-friendly code editor with visual feedback
- **Sound Effects**: Engaging audio feedback for actions
- **Achievement System**: Track progress and earn rewards

## 🛠️ Tech Stack

- **Frontend**:
  - React.js
  - p5.js for game graphics
  - Material-UI for interface components
  
- **Backend**:
  - Node.js
  - Express.js
  - MongoDB with Mongoose
  
## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Pazil24/junior-jungle.git
   cd junior-jungle
   ```

2. Install frontend dependencies:
   ```bash
   cd client
   npm install
   ```

3. Install backend dependencies:
   ```bash
   cd ../server
   npm install
   ```

4. Create a .env file in the server directory:
   ```
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   NODE_ENV=development
   ```

5. Start the development servers:
   
   Backend:
   ```bash
   cd server
   npm run dev
   ```
   
   Frontend:
   ```bash
   cd client
   npm start
   ```

## 🎯 Game Levels

1. **The Lost Elephant**: Basic movement commands
2. **Lion's Hunt**: Conditional statements
3. **Giraffe's Tall Challenge**: Loops and sequences
4. **Zebra's Escape**: Functions and planning
5. **Elephant's Water Quest**: Complex problem-solving

## 🔜 Upcoming Features

- Multiplayer mode
- More animal characters
- Additional African environments
- Parent/Teacher dashboard
- Progress tracking
- Difficulty settings

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 👤 Author

- **Pazil24** - *Initial work* - [GitHub Profile](https://github.com/Pazil24)

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- All contributors who have helped and will help in future with code, ideas, and testing
- The African wildlife that inspired this educational journey
- Educational experts who provided guidance on content
