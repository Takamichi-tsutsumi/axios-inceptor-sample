const axios = require('axios');

axios.interceptors.response.use((res) => {
  console.log(res)
  return res;
}, (error) => {
  console.log(error)
  return Promise.reject(error);
});

axios.get('http://localhost:7000/error')
  .then(res => {
    console.log(res.data);
  })
  .catch(err => {
    console.error(err.response.data);
  });
