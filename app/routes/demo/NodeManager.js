var router = koa_router()
/* GET home page. */
router.get('/', (ctx, next) => {
  return ctx.render('demo/nodeManager', {
    title: 'nodeManager'
  });
});

module.exports = router;
