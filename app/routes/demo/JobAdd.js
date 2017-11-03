const router = require('koa-router')()

/* GET home page. */
router.get('/', (ctx, next) => {
  return ctx.render('demo/jobAdd', {
    title: 'jobAdd'
  });
});

module.exports = router;
