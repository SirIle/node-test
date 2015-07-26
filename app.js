var express = require('express');
var os = require('os');
var app = express();

app.get('/', function (req, res) {
  res.send({ hostname : os.hostname(),
    time : new Date(),
    language : "javascript"});
  console.log('Hello method called')
});

var server = app.listen(80, function () {
  console.log('Example app up');
});
