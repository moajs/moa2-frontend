const router = require('koa-router')()

/* GET home page. */
router.get('/', (ctx, next) => {
  return ctx.render('demo/executingJobQueue', {
    title: 'executingJobQueue'
  });
});

module.exports = router;
