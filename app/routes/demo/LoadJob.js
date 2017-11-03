const router = require('koa-router')()
/* GET home page. */
router.get('/', (ctx, next) => {
  return ctx.render('demo/LoadJob', {
    title: 'loadJob'
  });
});

module.exports = router;
