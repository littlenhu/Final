var router = require('express').Router();
// setup boilerplate route jsut to satisfy a request
// for building

//route() will allow you to use same path for different HTTP operation.
//So if you have same URL but with different HTTP OP such as POST,GET etc
//Then use route() to remove redundant code.
router.route('/')
  .get(function(req, res){
    console.log('Hey from user!!');
    res.send({ok: true});
  });
// error message
  router.route('/err')
  .get(function(req, res){
    console.log('Error:500');
    throw "Error";
  });
module.exports = router;
