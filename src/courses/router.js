const router = require('koa-router')()
const request = require('request')
const model = require('./model')


// Api
router.get('/api', function (ctx, next) {
  return new Promise(function (resolve, reject) {
    request('http://127.0.0.1:3000/api/courses', function (error, response, body) {
      console.log('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

      var obj = JSON.parse(body)
      var courses = obj.data.courses
      console.log('body:', courses); // Print the HTML for the Google homepage.
      resolve(courses)
    });
  }).then(function (courses) {
    ctx.body = {
      "total": courses.length,
      "rows": courses
    }
  })
})

router.post('/api', function (ctx, next) {
  return new Promise(function (resolve, reject) {
    request.post({ url: 'http://127.0.0.1:3000/api/courses', form: req.body }, function (error, response, body) {
      console.log('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

      var courses = JSON.parse(body)

      console.log(body)
      console.dir(courses)
      resolve(courses)
    });
  }).then(function (courses) {
    ctx.body = courses
  })
})

router.delete('/api/:id', function (ctx, next) {
  let id = ctx.params.id
  return new Promise(function (resolve, reject) {
    request.delete({ url: 'http://127.0.0.1:3000/api/courses/' + id, form: {} }, function (error, response, body) {
      console.log('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

      var courses = JSON.parse(body)

      console.log(body)
      console.dir(courses)
      resolve(courses)
    });
  }).then(function (courses) {
    ctx.body = courses
  })
})

// router.prefix('/courses')

router.get('/', function (ctx, next) {
  ctx.render('src/courses/index', {
    title: "2323",
    menu: menu
  })
})

router.get('/new', function (ctx, next) {
  ctx.render('src/courses/new', {
    title: "2323"
  })
})

router.get('/:id/edit', function (ctx, next) {
  ctx.render('src/courses/edit', {
    title: "2323"
  })
})

router.get('/:id', function (ctx, next) {
  let id = ctx.params.id
  return new Promise(function (resolve, reject) {
    request('http://127.0.0.1:3000/api/courses/' + id, function (error, response, body) {
      console.log('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

      var obj = JSON.parse(body)
      var course = obj.data.course
      console.log('body:', course); // Print the HTML for the Google homepage.
      resolve(course)
    });
  }).then(function (course) {
    ctx.render('src/courses/show', {
      title: "2323",
      course: course
    })
  })
})



module.exports = router
