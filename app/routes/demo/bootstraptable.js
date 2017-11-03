const router = require('koa-router')()

/* GET home page. */
router.get('/', (ctx, next) => {
  return ctx.render('demo/bootstraptable', {
    title: 'bootstraptable'
  });
});

module.exports = router;
