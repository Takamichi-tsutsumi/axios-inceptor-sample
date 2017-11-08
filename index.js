const axios = require('axios');


axios.get('http://localhost:7000/error')
  .then(res => {
    console.log(res.data);
  })
  .catch(err => {
    console.error(err.response);
  });
