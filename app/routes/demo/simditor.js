
var simditor_qn_config = require('../../../config/simditor_qn')

var router = koa_router()

/* GET home page. */
router.get('/', (ctx, next) => {
  var qn = require('qn');

  var client = qn.create(simditor_qn_config.qn);
  
  var token = client.uploadToken();
  console.log(token)
  
  return ctx.render('demo/simditor', {
    title: 'index',
    token : token
  });
});

module.exports = router;

