var router = koa_router()
/* GET home page. */
router.get('/', (ctx, next) => {
  return ctx.render('demo/nodeOnOfflineLog', {
    title: 'nodeOnOfflineLog'
  });
});

module.exports = router;
