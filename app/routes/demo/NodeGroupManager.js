var router = koa_router()

/* GET home page. */
router.get('/', (ctx, next) => {
  return ctx.render('demo/nodeGroupManager', {
    title: 'nodeGroupManager'
  });
});

module.exports = router;
