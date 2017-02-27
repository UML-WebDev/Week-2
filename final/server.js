/** Require the dependencies (modules/packages/whatever) we need for this application **/
const express = require('express');
const bodyParser = require('body-parser');

/** Create an express instance to use and name it "app", it can be named anything. **/
const app = express();

/** The port the server will be running on i.e. "localhost:3000" **/
const PORT = 3000;

/** Express Middleware **/
//  Tell express to 'use' the public directory
app.use(express.static('public'));
//  Tell express to part the POST data and store it in req.body.
app.use(bodyParser.urlencoded({ extended: false }));

/** HTTP "Routes" **/
// When a "GET" request is sent to "/" execute the callback function.
app.get('/', (req, res) => {
  //  Return a "response".
  //  Send the index.html file as the response.
  return res.sendFile('index.html');
});

app.post('/register', (req, res) => {
  //  object destruction on the req.body object.
  const { username, password } = req.body;
  //  Return a "response".
  //  Send a JS object as json as the response.
  return res.json({
    user: { username, password }
  });
});

// Tell the express app to "listen" on PORT (3000).
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
