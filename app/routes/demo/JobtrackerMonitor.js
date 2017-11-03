const router = require('koa-router')()
/* GET home page. */
router.get('/', (ctx, next) => {
  return ctx.render('demo/jobtrackerMonitor', {
    title: 'jobtrackerMonitor'
  });
});

module.exports = router;
