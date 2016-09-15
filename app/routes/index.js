// var $middlewares  = require('mount-middlewares')(__dirname);
var router = koa_router()

router.get('/', $middlewares.request_logger2, (ctx, next) => {
  console.log("../")
  return ctx.render('index', { 
    title: '欢迎使用，Moa 2 = Moajs with koa 2.x' 
  });
})

module.exports = router;
