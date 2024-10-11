const http = require('http');

// Use PORT from environment variables or default to 3000
const port = process.env.PORT || 3000;

const requestListener = (req, res) => {
  // Set the response HTTP header with HTTP status and Content type
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send the response body "Hello World!"
  res.end('Hello World!');
};

// Create an HTTP server and listen on the specified port
const server = http.createServer(requestListener);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
