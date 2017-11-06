const router = require('koa-router')()
const request = require('request')
const model = require('./model')


// Api
router.get('/api', function (ctx, next) {
  return new Promise(function (resolve, reject) {
    request('http://127.0.0.1:3000/api/{{api_name}}', function (error, response, body) {
      console.log('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

      var obj = JSON.parse(body)
      var {{api_name}} = obj.data.{{api_name}}
      console.log('body:', {{api_name}}); // Print the HTML for the Google homepage.
      resolve({{api_name}})
    });
  }).then(function ({{api_name}}) {
    ctx.body = {
      "total": {{api_name}}.length,
      "rows": {{api_name}}
    }
  })
})

router.post('/api', function (ctx, next) {
  return new Promise(function (resolve, reject) {
    request.post({ url: 'http://127.0.0.1:3000/api/{{api_name}}', form: req.body }, function (error, response, body) {
      console.log('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

      var {{api_name}} = JSON.parse(body)

      console.log(body)
      console.dir({{api_name}})
      resolve({{api_name}})
    });
  }).then(function ({{api_name}}) {
    ctx.body = {{api_name}}
  })
})

router.delete('/api/:id', function (ctx, next) {
  let id = ctx.params.id
  return new Promise(function (resolve, reject) {
    request.delete({ url: 'http://127.0.0.1:3000/api/{{api_name}}/' + id, form: {} }, function (error, response, body) {
      console.log('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

      var {{api_name}} = JSON.parse(body)

      console.log(body)
      console.dir({{api_name}})
      resolve({{api_name}})
    });
  }).then(function ({{api_name}}) {
    ctx.body = {{api_name}}
  })
})

// router.prefix('/{{api_name}}')

router.get('/', function (ctx, next) {
  ctx.render('src/{{api_name}}/index', {
    title: "2323"
  })
})

router.get('/new', function (ctx, next) {
  ctx.render('src/{{api_name}}/new', {
    title: "2323"
  })
})

router.get('/:id/edit', function (ctx, next) {
  ctx.render('src/{{api_name}}/edit', {
    title: "2323"
  })
})

router.get('/:id', function (ctx, next) {
  let id = ctx.params.id
  return new Promise(function (resolve, reject) {
    request('http://127.0.0.1:3000/api/{{api_name}}/' + id, function (error, response, body) {
      console.log('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

      var obj = JSON.parse(body)
      var course = obj.data.course
      console.log('body:', course); // Print the HTML for the Google homepage.
      resolve(course)
    });
  }).then(function (course) {
    ctx.render('src/{{api_name}}/show', {
      title: "2323",
      course: course
    })
  })
})



module.exports = router
