var express = require('express');
var router = express.Router();
var app = module.exports = express();
app.set('views', __dirname + '/views');
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Desde controlador principal' });
});

module.exports = router;
