const router = require('koa-router')()
/* GET home page. */
router.get('/', (ctx, next) => {
  return ctx.render('demo/nodeJvmInfo', {
    title: 'nodeJvmInfo'
  });
});

module.exports = router;
