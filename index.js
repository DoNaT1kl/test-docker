const express = require('express')
const app = module.exports = express()

app.get('/', function(req, res){
  res.send('Hello World');
});

app.listen(3000, '0.0.0.0', () => {
  console.log('Server running at http://0.0.0.0:3000/');
});