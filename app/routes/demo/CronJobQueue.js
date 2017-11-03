const router = require('koa-router')()

/* GET home page. */
router.get('/', (ctx, next) => {
  return ctx.render('demo/cronJobQueue', {
    title: 'cronJobQueue'
  });
});

module.exports = router;
