const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello from my GitHub web page API!');
});

app.listen(3000, () => {
  console.log('API listening on port 3000');
});
