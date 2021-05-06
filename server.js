require('dotenv').config()
const path = require('path');
const express = require('express');
const app = express();
const cors = require('cors');

// Define
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// api routes
// app.use('/api/email', require('./routes/email.route'));

if(process.env.NODE_ENV === 'production'){
  // Serve static files from the React app
  app.use(express.static(path.join(__dirname, 'client/build')));

  // The "catchall" handler: for any request that doesn't
  // match one above, send back React's index.html file.
  app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname + '/client/build/index.html'));
  });
}

// start server
app.listen(port, () => {
  console.log('Server listening on port ' + port);
});