var router = koa_router()

/* GET home page. */
router.get('/', (ctx, next) => {
  return ctx.render('demo/jobAdd', {
    title: 'jobAdd'
  });
});

module.exports = router;
