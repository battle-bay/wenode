// The web framework using express
// auther: marlinl
// created at: Fri Aug 25 2017

const express = require('express');
const config  = require('./config');

var officalLocals = require('./core/middleware/wechat-general-locals');



const app     = express();

app.use('/wechat/api/v0/', officalLocals);

app.listen(3000, function () {
  console.log('Server has listening 3000');
});


