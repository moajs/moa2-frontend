var router = koa_router()

/* GET home page. */
router.get('/', (ctx, next) => {
  return ctx.render('demo/tasktrackerMonitor', {
    title: 'tasktrackerMonitor'
  });
});

module.exports = router;
