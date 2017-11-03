const router = require('koa-router')()

/* GET home page. */
router.get('/', (ctx, next) => {
  return ctx.render('demo/uploadify', {
    title: 'uploadify'
  });
});

module.exports = router;
