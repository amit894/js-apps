// index.js

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON in request body
app.use(bodyParser.json());

// Sample data (can be replaced with a database)
let users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' },
];

// GET endpoint to retrieve all users
app.get('/users', (req, res) => {
  res.json(users);
});


app.get('/', (req, res) => {
    res.json("Welcome to API");
  });


// GET endpoint to retrieve a specific user by ID
app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// POST endpoint to create a new user
app.post('/users', (req, res) => {
  const newUser = req.body;

  if (newUser.name) {
    // Generate a unique ID (replace with a more robust solution in production)
    newUser.id = users.length + 1;
    users.push(newUser);

    res.status(201).json(newUser);
  } else {
    res.status(400).json({ message: 'Invalid user data' });
  }
});

// PUT endpoint to update a user by ID
app.put('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const updatedUser = req.body;

  const index = users.findIndex(u => u.id === userId);

  if (index !== -1 && updatedUser.name) {
    users[index] = { id: userId, name: updatedUser.name };
    res.json(users[index]);
  } else {
    res.status(404).json({ message: 'User not found or invalid data' });
  }
});

// DELETE endpoint to delete a user by ID
app.delete('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const index = users.findIndex(u => u.id === userId);

  if (index !== -1) {
    const deletedUser = users.splice(index, 1)[0];
    res.json(deletedUser);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
