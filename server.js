// server.js
const express = require('express');
const app = express();

// Use PORT from environment variables or default to 3000
const port = process.env.PORT || 3000;

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello World! this is a simple NodeJs server with express module');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
