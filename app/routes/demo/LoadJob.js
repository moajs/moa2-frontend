var router = koa_router()
/* GET home page. */
router.get('/', (ctx, next) => {
  return ctx.render('demo/LoadJob', {
    title: 'loadJob'
  });
});

module.exports = router;
