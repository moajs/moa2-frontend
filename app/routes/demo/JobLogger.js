const router = require('koa-router')()

/* GET home page. */
router.get('/', (ctx, next) => {
  return ctx.render('demo/jobLogger', {
    title: 'jobLogger'
  });
});

module.exports = router;
