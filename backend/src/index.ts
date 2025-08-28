// Backend entry point for Texas Hold'em Poker Game
import express from 'express';

const app = express();
const PORT = process.env.PORT || 53006;

console.log('Texas Hold\'em Poker Game - Backend Starting...');

// Basic Express setup
app.get('/', (_req, res) => {
  res.json({ message: 'Texas Hold\'em Poker Game Server' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Future tasks will implement WebSocket server, game logic, and managers here