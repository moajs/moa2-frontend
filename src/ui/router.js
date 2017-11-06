  const router = require('koa-router')()
const request = require('request')
const model = require('./model')


// Api
router.get('/api', function (ctx, next) {
  // ctx.session.config = {}
  var config = ctx.session.config ? ctx.session.config:{items:[]}
  
  ctx.body = {
    "total": config.items.length,
    "rows": config.items
  }
})

router.post('/api', function (ctx, next) {
  var body = ctx.request.body

  console.log(body)

  var config = ctx.session.config ? ctx.session.config : {}

  if (body.api_name) config.api_name = body.api_name
  if (body.api_name_zh) config.api_name_zh = body.api_name_zh

  var item = {
    zh_name: body.item_zh_name,
    en_name: body.item_en_name,
    type: body.item_type
  }

  config.items ? config.items.push(item) : config.items = [item]
  console.log(config)
  ctx.body = {
    data: config,
    status: {
      code: 0,
      msg: 'sucess'
    }
  }
})

router.delete('/api/:en_name', function (ctx, next) {
  var en_name = ctx.params.en_name
  var config = ctx.session.config ? ctx.session.config : {}
  var newItems = []

   config.items.map(function (item) {
    console.log(en_name)
    console.log(item.en_name)
    if (item.en_name === en_name) {
      
    } else {
      newItems.push(item)
    }
  });

  console.log(en_name)
  console.log(newItems)
  config.items = newItems
  ctx.body = config
})

router.delete('/api/:id', function (ctx, next) {
  let id = ctx.params.id
  return new Promise(function (resolve, reject) {
    request.delete({ url: 'http://127.0.0.1:3000/api/courses/' + id, form: {} }, function (error, response, body) {
      console.log('error:', error) // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode) // Print the response status code if a response was received

      var courses = JSON.parse(body)

      console.log(body)
      console.dir(courses)
      resolve(courses)
    })
  }).then(function (courses) {
    ctx.body = courses
  })
})

// router.prefix('/courses')

router.get('/', function (ctx, next) {
  ctx.render('src/ui/index', {
    title: "2323"
  })
})

router.get('/new', function (ctx, next) {
  ctx.render('src/ui/new', {
    title: "2323"
  })
})

router.get('/:id/edit', function (ctx, next) {
  ctx.render('src/ui/edit', {
    title: "2323"
  })
})

router.get('/:id', function (ctx, next) {
  let id = ctx.params.id
  return new Promise(function (resolve, reject) {
    request('http://127.0.0.1:3000/api/courses/' + id, function (error, response, body) {
      console.log('error:', error) // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode) // Print the response status code if a response was received

      var obj = JSON.parse(body)
      var course = obj.data.course
      console.log('body:', course) // Print the HTML for the Google homepage.
      resolve(course)
    })
  }).then(function (course) {
    ctx.render('src/ui/show', {
      title: "2323",
      course: course
    })
  })
})

module.exports = router
