// http://localhost:3000
// http://127.0.0.1:3000

const express = require('express');
const app = express();
const port = 3000;



// set up a route handler for HTTP GET requests
app.get('/', (req, res) => {
  console.log('Req: ', req.query);
  // send an HTML response
  res.send('<h1 style="text-align: center; padding: 20px;">Hello, My Server!</h1>');
});

// start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
