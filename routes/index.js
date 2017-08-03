var express = require('express');
var router = express.Router();
var cassandra = require('cassandra-driver');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/testCasendra', function (req, res, next) {
  var client = new cassandra.Client({ contactPoints: ['127.0.0.1:9042'] })

  client.execute('select * from test.users', function (err, result) {
    if (err) throw err
    var user = result.rows[0];
    res.render('index', { title: 'My name is '+user.first + ' '+user.last });
  });
});

router.get('/watcher', function (req, res, next) {
  console.log('cool'); 
  res.render('index', { title: 'Express-Cassendra with server watch' });
});

module.exports = router;
