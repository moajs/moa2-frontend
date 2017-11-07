const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('src/index/index', {
    title: 'Hello Koa 2!',
    menu: menu
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
