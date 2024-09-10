const https = require('https');
const app = require('./routes/app');
const hostname = 'localhost';
const port = 3000;

//Server startup
https.createServer(app.handleRequest).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});