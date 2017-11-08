const express = require('express');
const app = express();


app.get('/', (req, res) => {
  res.send('hello world');
});

app.get('/error', (req, res, next) => {
  let err = new Error('403 Error occured');
  res.status(403).send({ error: err });
})

app.listen(7000, () => {
  console.log('Server listening on port 7000');
});
