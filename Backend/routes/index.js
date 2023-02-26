var express = require('express');
const users = require('./users');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("API IS WORKING")
});

router.post('/message', function(req, res){
  users.create({
    ...req.body
  })
  .then(function(createdmessage){
    response.send(createdmessage)
  })
  .catch(err => console.log(err))
})

module.exports = router;
