const router = require('koa-router')()

/* GET home page. */
router.get('/', (ctx, next) => {
  return ctx.render('demo/tasktrackerMonitor', {
    title: 'tasktrackerMonitor'
  });
});

module.exports = router;
