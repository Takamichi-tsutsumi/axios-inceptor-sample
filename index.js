const axios = require('axios');

axios.get('http://localhost:7000')
  .then(res => {
    console.log(res.data);
  })
  .catch(err => {
    console.error(err);
  });
