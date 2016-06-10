var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pets/pets', {
    title: 'Pets Route - index'
  });
});

router.get('/lost', function(req, res, next) {
  res.render('pets/lost', {
    title: 'Pets Route - /pets/lost'
  });
});

router.get('/found', function(req, res, next) {
  res.render('found', {
    title: 'Pets Route - /pets/found'
  });
});

router.get('/all', function(req, res, next) {
  res.render('all');
});

router.get('/add/lost', function(req, res, next) {
  res.render('reportlost');
})

router.get('/add/found', function(req, res, next) {
  res.render('reportfound');
});



module.exports = router;
