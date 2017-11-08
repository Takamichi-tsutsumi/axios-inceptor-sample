const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('hello world');
});

app.get('/error', (req, res) => {
  res.send('error');
})

app.listen(7000, () => {
  console.log('Server listening on port 7000');
});
