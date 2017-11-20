const router = require('koa-router')()

// router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.render('src/users/index', {
    title: "2323"
  })
})


router.get('/login', function (ctx, next) {
  ctx.render('src/users/login', {
    title: "login"
  })
})


router.get('/register', function (ctx, next) {
  ctx.render('src/users/register', {
    title: "register"
  })
})


router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router
