var router = koa_router()
/* GET home page. */
router.get('/', (ctx, next) => {
  return ctx.render('demo/jobLogger', {
    title: 'jobLogger'
  });
});

module.exports = router;
