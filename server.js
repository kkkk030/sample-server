var express = require('express');
var app = express();
var hello = require('./hello');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));

app.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});

app.get('/user/search', function (req, res) {

  console.log('데이터 확인', req.query.name);

  // TODO 실제로 DB 데이터를 조회하는 로직을 개발해야 함.

  var users = [{
    userId: req.query.name,
    name: 'John',
    email: 'yohany_AT_gmail.com',
    company: 'KossLAB'
  }];

  res.send({result: users});

});

app.post('/user', function (req, res) {

  console.log('데이터 확인', req.body);

  // TODO 실제로 DB 데이터를 저장하는 로직을 개발해야 함.

  res.send({state: 'OK', data: req.body});
});



app.put('/user/:userId', function (req, res) {
  res.send('PUT (Update) ');
});

app.delete('/user/:userId', function (req, res) {
  res.send('DELETE (Delete) ');
});




app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
